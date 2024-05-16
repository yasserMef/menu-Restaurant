/*
  Warnings:

  - You are about to drop the column `adressResto` on the `repas` table. All the data in the column will be lost.
  - You are about to drop the `restoran` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `repas` DROP FOREIGN KEY `repas_adressResto_fkey`;

-- AlterTable
ALTER TABLE `repas` DROP COLUMN `adressResto`;

-- DropTable
DROP TABLE `restoran`;
