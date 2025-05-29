import { loggedContactMessages } from "../ApiQueries.js";
import { useState } from "react";

import JWTStatus from "./JwtStatus";

function UserMessages() {
  const response = loggedContactMessages(1);
  console.log(response);
  return (
    <div>
      <JWTStatus />
      <h1>Messages</h1>
    </div>
  );
}

export default UserMessages;
