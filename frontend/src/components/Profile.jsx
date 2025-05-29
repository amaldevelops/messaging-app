import { loadProfile, decodeJWTPayload } from "../ApiQueries.js";

import JWTStatus from "./JwtStatus";

function Profile() {
  loadProfile(3);
  console.log(decodeJWTPayload());

  return (
    <div>
      <JWTStatus />
      <h1>User Profile</h1>
    </div>
  );
}

export default Profile;
