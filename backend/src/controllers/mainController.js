import {
  allContacts,
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
      response: [
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
    const allContactsReceived = await allContacts();
    console.log(allContactsReceived);
    res.json({ status: "Get all contacts", response: allContactsReceived });
  } catch (error) {
    console.error(error);
  }
}

async function getContactMessages(req, res, next) {
  try {
    const contactID = parseInt(req.params.loggedInUserID);
    console.log(contactID);
    const getUserMessages = await contactMessages(contactID);
    console.log(getUserMessages);
    res.json({
      status: "Get logged in users messages",
      response: getUserMessages,
    });
  } catch (error) {
    console.error(error);
    res.json({ error: "Error Fetching messages" });
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
