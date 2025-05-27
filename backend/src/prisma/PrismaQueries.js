import { PrismaClient } from "../prisma/generated/prisma/index.js";

import bcrypt from "bcryptjs";

const prismaQuery = new PrismaClient();

async function allContacts() {
  try {
    const getAllContacts = await prismaQuery.contact.findMany({
      include: { password: false },
    });
    console.log(getAllContacts);
    return getAllContacts;
  } catch (error) {
    console.error(error);
    return "Error Fetching Contacts";
  }
}

async function contactMessages(contactID) {
  try {
    const userMessages = await prismaQuery.contact.findUnique({
      where: { id: contactID },
      include: {
        messagesSent: true,
        messagesReceived: true,
        password: false,
      },
    });
    console.log(contactID);
    console.log(userMessages);
    return userMessages;
  } catch (error) {
    console.error(error);
    return "error, Contact ID not valid";
  }
}

async function sendNewMessage() {
  try {
  } catch (error) {
    console.error(error);
  }
}

async function authenticateContact() {
  try {
  } catch (error) {
    console.error(error);
  }
}

async function userProfileRead(contactID) {
  try {
    const userProfile = await prismaQuery.contact.findUnique({
      where: { id: contactID },
      select: {
        email: true,
        password: false,
        bio: true,
        messagesSent: false,
        messagesReceived: false,
        password: false,
      },
    });
    console.log(userProfile);
    return userProfile;
  } catch (error) {
    console.error(error);
    return "Error Fetching Profile";
  }
}

async function userProfileUpdate() {
  try {
  } catch (error) {
    console.error(error);
  }
}

async function registerNewContact() {
  try {
  } catch (error) {
    console.error(error);
  }
}

export {
  allContacts,
  contactMessages,
  sendNewMessage,
  authenticateContact,
  registerNewContact,
  userProfileRead,
  userProfileUpdate,
};
