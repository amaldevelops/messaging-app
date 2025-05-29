import {
  loggedContactMessages,
  decodeJWTPayload,
  loadProfile,
} from "../ApiQueries.js";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import JWTStatus from "./JwtStatus";

function UserMessages() {
  const response = loggedContactMessages(1);
  console.log(response);

  const [userProfile, setUserProfile] = useState({ email: "", bio: "" });
  const [loading, setLoading] = useState(true); // Add a loading state
  const [error, setError] = useState(null); // Add an error state

  useEffect(() => {
    const fetchProfile = async () => {
      // Define an async function inside useEffect
      try {
        const decodedID = decodeJWTPayload(); // Assuming decodeJWTPayload is synchronous or handles its own async internally
        if (!decodedID || !decodedID.id) {
          setError("Could not decode user ID from JWT.");
          setLoading(false);
          return;
        }

        const loadedProfileInfo = await loadProfile(decodedID.id); // Await the promise
        setUserProfile(loadedProfileInfo.response); // Set the entire object
      } catch (err) {
        console.error("Failed to load profile:", err);
        setError("Failed to load profile data."); // Set an error message
      } finally {
        setLoading(false); // Always set loading to false after the operation
      }
    };

    fetchProfile(); // Call the async function
  }, []); // Empty dependency array means this runs once on mount
  console.log("Loaded Profile", userProfile.email);

  if (loading) {
    return <div>Loading Contacts...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <JWTStatus />
      <h1>Messages</h1>
      <p>E-Mail: {userProfile.email}</p>
      <p>Bio: {userProfile.bio}</p>
      <Link to="/messaging-app/contacts">All Contacts</Link>
    </div>
  );
}

export default UserMessages;
