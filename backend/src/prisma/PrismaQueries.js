import { PrismaClient } from "../prisma/generated/prisma/index.js";

import bcrypt from "bcryptjs";

const prismaQuery = new PrismaClient();

// Function to get all contacts stored on database

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
// Function to get all logged in contacts sent and received messages saved on database
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

// Function to send message to another contact based on sender contact ID and receiver contact ID

async function sendNewMessage() {
  try {
  } catch (error) {
    console.error(error);
  }
}

// Function to authenticate contact based on supplied email, password and stored password on database
async function authenticateContact() {
  try {
  } catch (error) {
    console.error(error);
  }
}

// Function to read profile based on contactID supplied
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

// Function to Update user Profile based on contactID
async function userProfileUpdate() {
  try {
  } catch (error) {
    console.error(error);
  }
}

// Function to register a new user into the database
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
