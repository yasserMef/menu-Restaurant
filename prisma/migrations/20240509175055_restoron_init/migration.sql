-- CreateTable
CREATE TABLE `restoran` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nameRestoran` VARCHAR(191) NOT NULL,
    `adress` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `restoran_nameRestoran_key`(`nameRestoran`),
    UNIQUE INDEX `restoran_adress_key`(`adress`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nameCategorie` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `categories_nameCategorie_key`(`nameCategorie`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `repas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `prix` DOUBLE NOT NULL,
    `image` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `repas_titre_key`(`titre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
