import { PrismaClient } from "../prisma/generated/prisma/index.js";

import bcrypt from "bcryptjs";

const prismaQuery = new PrismaClient();

async function contactMessages(userID) {
  try {
    const userMessages = await prismaQuery.contact.findUnique({
      where: { id: userID },
      include: {
        messagesSent: true,
        messagesReceived: true,
        password: false,
      },
    });
    console.log(userID);
    console.log(userMessages);
    return userMessages;
  } catch (error) {
    console.error(error);
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

async function userProfileRead() {
  try {
  } catch (error) {
    console.error(error);
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
  contactMessages,
  sendNewMessage,
  authenticateContact,
  registerNewContact,
  userProfileRead,
  userProfileUpdate,
};
