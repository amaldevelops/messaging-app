import {loggedContactMessages} from "../ApiQueries.js"

function UserMessages() {

  const response=loggedContactMessages(1);
  console.log(response)
  return (
    <div>
      <h1>Messages</h1>
    </div>
  );
}

export default UserMessages;
