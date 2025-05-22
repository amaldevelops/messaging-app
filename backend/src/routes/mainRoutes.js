import { Router } from "express";

import { homePage } from "../controllers/mainController.js";

const mainRouter = Router();

mainRouter.get("/", homePage); // End Point to show the running status of backend systems

mainRouter.get("/getallcontacts"); // Authenticated End Point to GET all the contacts and messages related current logged in user

mainRouter.get("/getcontactmessages"); // Authenticated End Point to GET messages sent and received by the logged in user

mainRouter.put("/putmessagetocontact"); // Authenticated End Point to send message to selected contact

mainRouter.get("/getprofile"); // Authenticated End Point to get logged in users profile

mainRouter.put("/getprofile"); // Authenticated End Point to update logged in users profile

export default mainRouter;
