/*
  Warnings:

  - Added the required column `expires_at` to the `recovery` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "recovery" ADD COLUMN     "expires_at" TIMESTAMP(3) NOT NULL;
