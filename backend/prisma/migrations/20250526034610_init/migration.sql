/*
  Warnings:

  - You are about to drop the column `contactId` on the `Message` table. All the data in the column will be lost.
  - Added the required column `contactIdReceiver` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactIdSender` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_contactId_fkey";

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "contactId",
ADD COLUMN     "contactIdReceiver" INTEGER NOT NULL,
ADD COLUMN     "contactIdSender" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_contactIdSender_fkey" FOREIGN KEY ("contactIdSender") REFERENCES "Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_contactIdReceiver_fkey" FOREIGN KEY ("contactIdReceiver") REFERENCES "Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
