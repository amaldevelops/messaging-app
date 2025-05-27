import {
  contactMessages,
  sendNewMessage,
  authenticateContact,
  registerNewContact,
  userProfileRead,
  userProfileUpdate,
} from "../prisma/PrismaQueries.js";

async function apiStatus(req, res, next) {
  try {
    res.json({
      status: "Backend Systems running ok",
      endpoints: [
        "/messaging-api/v1/status : GET End Point to show the running status of backend systems",
        "/messaging-api/v1/contacts : GET Authenticated End Point to GET all the contacts and messages related current logged in user",
        "/messaging-api/v1/contacts/:loggedInUserID/messages : GET Authenticated End Point to GET messages sent and received by the logged in user",
        "/messaging-api/v1/messagetocontact : POST Authenticated End Point to send message to selected contact",
        "/messaging-api/v1/profile : GET Authenticated End Point to get logged in users profile",
        "/messaging-api/v1/profile : PUT Authenticated End Point to update logged in users profile",
      ],
    });
  } catch (error) {
    console.error(error);
  }
}

async function getAllContacts(req, res, next) {
  try {
    res.json({ status: "Get all contacts" });
  } catch (error) {
    console.error(error);
  }
}

async function getContactMessages(req, res, next) {
  try {
    const getUserMessages = await contactMessages(1);
    console.log(getUserMessages);
    res.json({ status: "Get logged in users messages", getUserMessages });
  } catch (error) {
    console.error(error);
  }
}

async function sendMessageToContact(req, res, next) {
  try {
    res.json({ status: "Send messages to other user" });
  } catch (error) {
    console.error(error);
  }
}

async function loadLoggedUserProfile(req, res, next) {
  try {
    res.json({ status: "Load logged in users profile" });
  } catch (error) {
    console.error(error);
  }
}

async function updateLoggedUserProfile(req, res, next) {
  try {
    res.json({ status: "Load logged in users profile" });
  } catch (error) {
    console.error(error);
  }
}

export {
  apiStatus,
  getAllContacts,
  getContactMessages,
  sendMessageToContact,
  loadLoggedUserProfile,
  updateLoggedUserProfile,
};
