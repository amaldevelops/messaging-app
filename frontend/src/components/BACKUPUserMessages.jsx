import JWTStatus from "./JwtStatus";
import { loggedContactMessages, decodeJWTPayload } from "../ApiQueries.js";
import { useState, useEffect } from "react";

// Helper constant for grouping time threshold
const MESSAGE_GROUP_TIME_THRESHOLD_MINUTES = 5; // e.g., 5 minutes

function UserMessages() {
  const [userID, setUserID] = useState("");
  const [userMessagesState, setUserMessagesState] = useState([]);
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDataAndMessages = async () => {
      setLoading(true);

      const decodedID = decodeJWTPayload();
      if (!decodedID || !decodedID.id) {
        setError("Could not decode user ID from JWT.");
        setLoading(false);
        return;
      }
      setUserID(decodedID.id);

      try {
        console.log("Fetching messages for User ID:", decodedID.id);
        const loadedMessagesInfo = await loggedContactMessages(decodedID.id);

        let messagesToSet = [];

        // Determine the structure of the API response
        if (Array.isArray(loadedMessagesInfo)) {
          // Case 1: API directly returns an array of messages
          messagesToSet = loadedMessagesInfo;
          setStatusMessage("Messages loaded");
        } else if (
          loadedMessagesInfo &&
          loadedMessagesInfo.response &&
          Array.isArray(loadedMessagesInfo.response)
        ) {
          // Case 2: API returns { response: [...] }
          messagesToSet = loadedMessagesInfo.response;
          if (loadedMessagesInfo.status) {
            setStatusMessage(loadedMessagesInfo.status);
          }
        } else if (
          loadedMessagesInfo &&
          loadedMessagesInfo.response &&
          Array.isArray(loadedMessagesInfo.response.messagesReceived) &&
          Array.isArray(loadedMessagesInfo.response.messagesSent)
        ) {
          // Case 3: API returns { response: { messagesReceived: [...], messagesSent: [...] } }
          messagesToSet = [
            ...loadedMessagesInfo.response.messagesReceived,
            ...loadedMessagesInfo.response.messagesSent,
          ];
          setStatusMessage("Messages loaded");
        } else if (
          loadedMessagesInfo &&
          loadedMessagesInfo.response &&
          Array.isArray(loadedMessagesInfo.response.messagesReceived)
        ) {
          // Case 4: API returns { response: { messagesReceived: [...] } }
          messagesToSet = loadedMessagesInfo.response.messagesReceived;
          setStatusMessage("Messages loaded");
        } else {
          console.error(
            "API response is not in the expected format:",
            loadedMessagesInfo
          );
          setError("Failed to load Messages: Unexpected data format.");
          setLoading(false);
          return;
        }

        // --- IMPORTANT: Add sender details to messages for display ---
        // This is a placeholder. In a real app, you'd get actual contact names
        // from your API or by looking up contacts separately.
        const messagesWithSenderDetails = messagesToSet.map((msg) => ({
          ...msg,
          senderName:
            msg.contactIdSender === decodedID.id
              ? "You"
              : `Contact ${msg.contactIdSender}`,
          receiverName:
            msg.contactIdReceiver === decodedID.id
              ? "You"
              : `Contact ${msg.contactIdReceiver}`,
          // Add actual email/bio if available and needed
          senderEmail: `sender${msg.contactIdSender}@example.com`,
          senderBio: `Bio of sender ${msg.contactIdSender}`,
        }));

        // Sort messages by time ascending (oldest to newest)
        messagesWithSenderDetails.sort(
          (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
        );

        setUserMessagesState(messagesWithSenderDetails);
      } catch (err) {
        console.error("Failed to load Messages:", err);
        setError(`Failed to load Messages data: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDataAndMessages();
  }, []); // Empty dependency array: runs only once on component mount

  // This useEffect will still correctly log updates to userMessagesState
  useEffect(() => {
    console.log(
      "Loaded Messages from STATE (after processing):",
      userMessagesState
    );
  }, [userMessagesState]);

  // Function to determine if a message should start a new group/show sender info
  const shouldShowSenderInfo = (
    currentMessage,
    previousMessage,
    currentUserID
  ) => {
    if (!previousMessage) {
      return true; // Always show info for the first message
    }

    // New group if sender changes
    if (currentMessage.contactIdSender !== previousMessage.contactIdSender) {
      return true;
    }

    // New group if significant time gap
    const currentTime = new Date(currentMessage.time);
    const prevTime = new Date(previousMessage.time);
    const timeDifferenceMs = currentTime.getTime() - prevTime.getTime();
    const timeDifferenceMinutes = timeDifferenceMs / (1000 * 60);

    if (timeDifferenceMinutes > MESSAGE_GROUP_TIME_THRESHOLD_MINUTES) {
      return true;
    }

    return false;
  };

  // Function to determine if a message should show a date separator
  const shouldShowDateSeparator = (currentMessage, previousMessage) => {
    if (!previousMessage) {
      return true; // Always show date for the very first message
    }

    const currentDate = new Date(currentMessage.time);
    const prevDate = new Date(previousMessage.time);

    // Set both dates to the start of their respective days for comparison
    currentDate.setHours(0, 0, 0, 0);
    prevDate.setHours(0, 0, 0, 0);

    return currentDate.getTime() !== prevDate.getTime();
  };

  if (loading) {
    return <div>Loading Messages...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="user-messages-container">
      <JWTStatus />
      {statusMessage && <h1>{statusMessage}</h1>}
      {!statusMessage && <h1>Messages</h1>}

      <div className="message-list">
        {userMessagesState.length > 0 ? (
          <ul>
            {userMessagesState.map((message, index) => {
              const previousMessage = userMessagesState[index - 1];
              const showDate = shouldShowDateSeparator(
                message,
                previousMessage
              );
              const isMyMessage = message.contactIdSender === userID;
              const showSender = shouldShowSenderInfo(
                message,
                previousMessage,
                userID
              );

              // Format date and time using native Date.toLocale*String()
              const messageDate = new Date(message.time);
              const formattedDate = messageDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }); // e.g., "May 30, 2025"
              const formattedTime = messageDate.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              }); // e.g., "10:49 AM"

              return (
                <li
                  key={message.id}
                  className={`message-item ${
                    isMyMessage ? "my-message" : "other-message"
                  }`}
                >
                  {showDate && (
                    <div className="date-separator">
                      <span>{formattedDate}</span>
                    </div>
                  )}

                  {/* Show sender info only for 'other' messages or when the sender changes */}
                  {!isMyMessage && showSender && (
                    <div className="sender-info">
                      <strong>{message.senderName}</strong>
                    </div>
                  )}

                  <div className="message-bubble">
                    <p className="message-text">{message.message}</p>
                    <span className="message-time">{formattedTime}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No Messages found.</p>
        )}
      </div>
    </div>
  );
}

export default UserMessages;
