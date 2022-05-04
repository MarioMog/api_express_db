/*
  Warnings:

  - You are about to drop the column `mission` on the `Explorer2` table. All the data in the column will be lost.
  - Added the required column `hasCertification` to the `Explorer2` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Explorer2" DROP COLUMN "mission",
ADD COLUMN     "hasCertification" BOOLEAN NOT NULL;
