/*
  Warnings:

  - Added the required column `restoron_id` to the `categories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restoron_id` to the `emailSubscribe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `restoron_id` to the `repas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `categories` ADD COLUMN `restoron_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `emailsubscribe` ADD COLUMN `restoron_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `repas` ADD COLUMN `restoron_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `restoron` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `adress` VARCHAR(191) NOT NULL,
    `tele` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `url_twiter` VARCHAR(191) NOT NULL,
    `url_facebook` VARCHAR(191) NOT NULL,
    `url_youtube` VARCHAR(191) NOT NULL,
    `url_linkedin` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `restoron_adress_key`(`adress`),
    UNIQUE INDEX `restoron_tele_key`(`tele`),
    UNIQUE INDEX `restoron_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `chefs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nameChef` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `designation` VARCHAR(191) NOT NULL,
    `restoron_id` INTEGER NOT NULL,

    UNIQUE INDEX `chefs_nameChef_key`(`nameChef`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `categories` ADD CONSTRAINT `categories_restoron_id_fkey` FOREIGN KEY (`restoron_id`) REFERENCES `restoron`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `chefs` ADD CONSTRAINT `chefs_restoron_id_fkey` FOREIGN KEY (`restoron_id`) REFERENCES `restoron`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `repas` ADD CONSTRAINT `repas_restoron_id_fkey` FOREIGN KEY (`restoron_id`) REFERENCES `restoron`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `emailSubscribe` ADD CONSTRAINT `emailSubscribe_restoron_id_fkey` FOREIGN KEY (`restoron_id`) REFERENCES `restoron`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
