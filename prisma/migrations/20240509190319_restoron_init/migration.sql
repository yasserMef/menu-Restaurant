/*
  Warnings:

  - Added the required column `adressResto` to the `repas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nameCat` to the `repas` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `restoran_nameRestoran_key` ON `restoran`;

-- AlterTable
ALTER TABLE `repas` ADD COLUMN `adressResto` VARCHAR(191) NOT NULL,
    ADD COLUMN `nameCat` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `repas` ADD CONSTRAINT `repas_adressResto_fkey` FOREIGN KEY (`adressResto`) REFERENCES `restoran`(`adress`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `repas` ADD CONSTRAINT `repas_nameCat_fkey` FOREIGN KEY (`nameCat`) REFERENCES `categories`(`nameCategorie`) ON DELETE RESTRICT ON UPDATE CASCADE;
