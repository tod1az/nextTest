/*
  Warnings:

  - Added the required column `emailId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "emailId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_emailId_fkey" FOREIGN KEY ("emailId") REFERENCES "email"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
