import { loadProfile } from "../ApiQueries.js";

function Profile() {
  loadProfile(3);

  return (
    <div>
      <h1>User Profile</h1>
    </div>
  );
}

export default Profile;
