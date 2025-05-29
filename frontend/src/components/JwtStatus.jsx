import { decodeJWTPayload } from "../ApiQueries.js";

import { useState } from "react";


function JWTStatus() {
    // const [JWT, setJWT]=useState();
  const JWT = decodeJWTPayload();
  console.log("JWT loaded is:", JWT);
  return (
    <div className="JWTDiv">
      <h4>JWT Status</h4>
      <p>Authentication Status : {JWT.status}</p>
      <p>Contact ID : {JWT.id}</p>
      <p>Contact Name : {JWT.contactName}</p>
      <p>E-Mail : {JWT.email}</p>
      <p>Bio : {JWT.bio}</p>
    </div>
  );
}

export default JWTStatus;
