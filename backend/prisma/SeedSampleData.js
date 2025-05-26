// import { PrismaClient } from "@prisma/client";

import { PrismaClient } from "../generated/prisma/index.js";

import bcrypt from "bcryptjs";

import * as dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const pass1 = await bcrypt.hash("Anko1234", 10);
  const pass2 = await bcrypt.hash("Anko15", 10);
  const pass3 = await bcrypt.hash("Anko16", 10);

  const contact1 = await prisma.Contact.upsert({
    where: { email: "frontenddeveloper@gmail.com" },
    update: {},
    create: {
      email: "frontenddeveloper@gmail.com",
      name: "frontEndDeveloper",
      password: pass1,
      bio: "I am a Frontend Developer",
    },
  });

  const contact2 = await prisma.Contact.upsert({
    where: { email: "backenddeveloper@gmail.com" },
    update: {},
    create: {
      email: "backenddeveloper@gmail.com",
      name: "backEndDeveloper",
      password: pass2,
      bio: "I am a backend Developer",
    },
  });

  const contact3 = await prisma.Contact.upsert({
    where: { email: "fullstackdeveloper@gmail.com" },
    update: {},
    create: {
      email: "fullstackdeveloper@gmail.com",
      name: "fullstackDeveloper",
      password: pass3,
      bio: "I am a Full Stack Developer",
    },
  });

  const message1=await prisma.message.upsert({
    where:
  })


  console.log("Seeding Sample Data Complete...");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
