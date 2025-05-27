import { Router } from "express";

import {
  apiStatus,
  getAllContacts,
  getContactMessages,
  sendMessageToContact,
  loadUserProfile,
  updateLoggedUserProfile,
} from "../controllers/mainController.js";

const mainRouter = Router();

mainRouter.get("/messaging-api/v1/status", apiStatus); // End Point to show the running status of backend systems

mainRouter.get("/messaging-api/v1/contacts", getAllContacts); // Authenticated End Point to GET all the contacts and messages related current logged in user

mainRouter.get(
  "/messaging-api/v1/contacts/:loggedInUserID/messages",
  getContactMessages
); // Authenticated End Point to GET messages sent and received by the logged in user

mainRouter.post("/messaging-api/v1/messagetocontact", sendMessageToContact); // Authenticated End Point to send message to selected contact

mainRouter.get(
  "/messaging-api/v1/contacts/:contactID/profile",
  loadUserProfile
); // Authenticated End Point to get logged in users profile

mainRouter.put(
  "/messaging-api/v1/contacts/:contactID/profile",
  updateLoggedUserProfile
); // Authenticated End Point to update logged in users profile

export default mainRouter;
