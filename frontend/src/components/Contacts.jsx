import JWTStatus from "./JwtStatus";
import { allContacts } from "../ApiQueries.js"; // Combined imports
import { useState, useEffect } from "react";

// Removed loadProfile as it wasn't used in this specific component's logic for fetching allContacts
// If loadProfile is needed for other purposes, you can keep it.

function Contacts() {
  // 1. Initialize allContactsState as an EMPTY ARRAY
  const [allContactsState, setAllContactsState] = useState([]); // Changed name to avoid confusion
  const [statusMessage, setStatusMessage] = useState(""); // Optional: to store the "status" from API
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContactsData = async () => {
      // Renamed function for clarity
      try {
        setLoading(true); // Ensure loading is true at the start of fetch
        // const decodedID = decodeJWTPayload(); // Assuming this is needed for the API call or auth
        // if (!decodedID || !decodedID.id) {
        //   setError("Could not decode user ID from JWT.");
        //   setLoading(false);
        //   return;
        // }

        const loadedContactInfo = await allContacts(); // This should return the full API response object

        // 2. Check if the response and the nested 'response' array exist
        if (
          loadedContactInfo &&
          loadedContactInfo.response &&
          Array.isArray(loadedContactInfo.response)
        ) {
          setAllContactsState(loadedContactInfo.response); // Set the array of contacts
          if (loadedContactInfo.status) {
            setStatusMessage(loadedContactInfo.status); // Optionally set the status message
          }
        } else if (Array.isArray(loadedContactInfo)) {
          // Fallback if allContacts() directly returns the array (less likely based on your initial JSON)
          setAllContactsState(loadedContactInfo);
          setStatusMessage("Contacts loaded"); // Generic status
        } else {
          console.error(
            "API response is not in the expected format:",
            loadedContactInfo
          );
          setError("Failed to load contacts: Unexpected data format.");
        }
      } catch (err) {
        console.error("Failed to load Contacts:", err);
        setError(`Failed to load Contacts data: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchContactsData();
  }, []); // Empty dependency array means this runs once on mount

  // This log will now show the array of contacts or an empty array
  console.log("Loaded Contacts from STATE:", allContactsState);

  if (loading) {
    return <div>Loading Contacts...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <JWTStatus />
      {/* Optionally display the status message from API */}
      {statusMessage && <h1>{statusMessage}</h1>}
      {!statusMessage && <h1>Contacts</h1>}

      <div>
        {/* 3. Now allContactsState is an array, so .length and .map will work */}
        {allContactsState.length > 0 ? (
          <ul>
            {allContactsState.map((contact) => (
              <li key={contact.id}>
                <h2>{contact.name}</h2>
                <p>
                  <strong>ID:</strong> {contact.id}
                </p>
                <p>
                  <strong>Email:</strong> {contact.email}
                </p>
                <p>
                  <strong>Bio:</strong> {contact.bio}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          // This will show if the array is empty after loading (e.g., API returned no contacts)
          <p>No contacts found.</p>
        )}
      </div>
    </div>
  );
}

export default Contacts;
