/*
  Warnings:

  - Added the required column `password` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "password" TEXT NOT NULL;
