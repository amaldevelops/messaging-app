import { PrismaClient } from "../prisma/generated/prisma/index.js";

import bcrypt from "bcryptjs";

const prismaQuery = new PrismaClient();

async function userMessages(userID) {
  try {
    const userMessages = await prismaQuery.contact.findUnique({
      where: { id: userID },
      include: {
        messagesSent: true,
        messagesReceived: true,
      },
    });
    console.log(userID);
    console.log(userMessages);
    return userMessages;
  } catch (error) {
    console.error(error);
  }
}

export { userMessages };
