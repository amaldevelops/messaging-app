import { useState, useEffect } from "react";
import JWTStatus from "./JwtStatus";
import { loggedContactMessages, decodeJWTPayload } from "../ApiQueries.js";
import { Link, useNavigate } from "react-router-dom";


import ContactList from "./ContactList";
import ConversationView from "./ConversationView";

function UserMessages() {
  const [userID, setUserID] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDataAndAllMessages = async () => {
      setLoading(true);
      setError(null);

      const decodedID = decodeJWTPayload();
      if (!decodedID || !decodedID.id) {
        setError("Could not decode user ID from JWT.");
        setLoading(false);
        return;
      }
      setUserID(decodedID.id);

      try {
        console.log("Fetching all messages for User ID:", decodedID.id);
        const apiResponse = await loggedContactMessages(decodedID.id); // This is loadedMessagesInfo from your log

        let messagesToSet = [];
        let newStatusMessage = "Messages loaded."; // Default status

        // --- Handle the problematic double-nested 'response' ---
        if (
          apiResponse &&
          apiResponse.response &&
          apiResponse.response.response &&
          Array.isArray(apiResponse.response.response)
        ) {
          messagesToSet = apiResponse.response.response; // Access the innermost array
          newStatusMessage =
            apiResponse.response.status ||
            "Messages fetched successfully (double nested)";
          console.warn(
            "Detected double-nested API response. Consider fixing backend for cleaner structure."
          );
        }
        // --- End of double-nested handling ---
        else if (
          apiResponse &&
          apiResponse.response &&
          Array.isArray(apiResponse.response)
        ) {
          // This is the intended structure: { response: [...messages], status: "..." }
          messagesToSet = apiResponse.response;
          newStatusMessage =
            apiResponse.status || "Messages fetched successfully.";
        } else if (Array.isArray(apiResponse)) {
          // Fallback for direct array if API returns just [...messages]
          messagesToSet = apiResponse;
          newStatusMessage = "Messages loaded directly as array.";
        } else {
          console.error(
            "API response is not in any expected format:",
            apiResponse
          );
          setError("Failed to load messages: Unexpected data format from API.");
          setAllMessages([]);
          setLoading(false);
          return;
        }

        setAllMessages(messagesToSet);
        setStatusMessage(newStatusMessage);
      } catch (err) {
        console.error("Failed to load messages:", err);
        setError(`Failed to load messages: ${err.message}`);
        setAllMessages([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDataAndAllMessages();
  }, []);

  useEffect(() => {
    console.log("All Messages in State (Frontend):", allMessages);
  }, [allMessages]);

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
    setStatusMessage(`Viewing conversation with ${contact.name}`);
  };

  const handleBackToContacts = () => {
    setSelectedContact(null);
    setStatusMessage("Select a contact to view messages.");
  };

  if (loading) {
    return <div>Loading conversations...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="main-chat-container">
      <JWTStatus />
      {selectedContact ? <></> : <h1>{statusMessage || "My Messages"}</h1>}

      {selectedContact ? (
        <ConversationView
          userID={userID}
          selectedContact={selectedContact}
          allMessages={allMessages}
          onBack={handleBackToContacts}
        />
      ) : (
        <ContactList
          userID={userID}
          allMessages={allMessages}
          onSelectContact={handleSelectContact}
        />
      )}

    </div>
  );
}

export default UserMessages;
