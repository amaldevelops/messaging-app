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
    res.json({ status: "Backend Systems running ok" });
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
