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
        "/messaging-api/v1/contacts/:loggedInUserID/message/:contactID : POST Authenticated End Point to send message to selected contact",
        "/messaging-api/v1/contacts/:contactID/profile: GET Authenticated End Point to get logged in users profile",
        "/messaging-api/v1/contacts/:contactID/profile : PUT Authenticated End Point to update logged in users profile",
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
// Function to send messages to a contact
// POST Method
// Require loggedInUserID, contactID, message
// Message is sent as body=>raw=>JSON, key=message, value="Message content"
// {"loggedInUserID":"1","contactID":"2", "message":"JSON Works"}
async function sendMessageToContact(req, res, next) {
  try {
    // const senderID = parseInt(req.params.loggedInUserID);
    // const receiverID = parseInt(req.params.contactID);

    const { message, loggedInUserID, contactID } = req.body;

    const response = await sendNewMessage(
      parseInt(loggedInUserID),
      parseInt(contactID),
      message
    );
    res.json({
      response: response,
    });
  } catch (error) {
    console.error(error);
    res.json({ error: "Error Sending messages" });
  }
}

async function loadUserProfile(req, res, next) {
  try {
    const userProfileID = parseInt(req.params.contactID);
    const getUserProfile = await userProfileRead(userProfileID);

    res.json({
      status: "Load logged in users profile",
      response: getUserProfile,
    });
  } catch (error) {
    console.error(error);
    res.json({ error: "Error Sending message" });
  }
}

async function updateLoggedUserProfile(req, res, next) {
  try {
    res.json({ status: "Load users profile based on contact ID" });
  } catch (error) {
    console.error(error);
  }
}

export {
  apiStatus,
  getAllContacts,
  getContactMessages,
  sendMessageToContact,
  loadUserProfile,
  updateLoggedUserProfile,
};
