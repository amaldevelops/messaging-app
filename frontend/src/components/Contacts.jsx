import JWTStatus from "./JwtStatus";
import {allContacts} from "../ApiQueries.js";

import { useState, useEffect } from "react";
import { loadProfile, decodeJWTPayload } from "../ApiQueries.js";

function Contacts() {
  const [allContactsState, setAllContacts] = useState({ id: "", name: "",email:"",bio:"" });
  const [loading, setLoading] = useState(true); // Add a loading state
  const [error, setError] = useState(null); // Add an error state

  useEffect(() => {
    const fetchContacts = async () => {
      // Define an async function inside useEffect
      try {
        const decodedID = decodeJWTPayload(); // Assuming decodeJWTPayload is synchronous or handles its own async internally
        if (!decodedID || !decodedID.id) {
          setError("Could not decode user ID from JWT.");
          setLoading(false);
          return;
        }

        const loadedContactInfo = await allContacts(); // Await the promise
        console.log("apiwryresult:",loadedContactInfo)
        setAllContacts(loadedContactInfo); // Set the entire object
      } catch (err) {
        console.error("Failed to load Contacts:", err);
        setError("Failed to load Contacts data."); // Set an error message
      } finally {
        setLoading(false); // Always set loading to false after the operation
      }
    };

    fetchContacts(); // Call the async function
  }, []); // Empty dependency array means this runs once on mount
  console.log("Loaded Contacts frin STATE", allContactsState);

  if (loading) {
    return <div>Loading Contacts...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <JWTStatus />
      <h1>Contacts</h1>
      <p>E-Mail: {allContactsState.email}</p>
      <p>Bio: {allContactsState.bio}</p>
    </div>
  );
}

export default Contacts;
