import { loadProfile,decodeJWTPayload } from "../ApiQueries.js";

function Profile() {
  loadProfile(3);
  console.log(decodeJWTPayload());

  return (
    <div>
      <h1>User Profile</h1>
    </div>
  );
}

export default Profile;
