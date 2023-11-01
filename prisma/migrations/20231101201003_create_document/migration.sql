-- CreateTable
CREATE TABLE `Document` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `subject` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `sender` VARCHAR(255) NOT NULL,
    `receiver` VARCHAR(255) NOT NULL,
    `urgency` ENUM('NORMAL', 'SOON', 'IMMEDIATE') NOT NULL DEFAULT 'NORMAL',
    `method` ENUM('EMAIL', 'POST', 'FAX') NOT NULL DEFAULT 'EMAIL',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
