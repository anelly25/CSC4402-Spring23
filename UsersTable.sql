CREATE DATABASE IF NOT EXISTS TRUCKER;
USE TRUCKER;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
    `UserName` VARCHAR(255) NOT NULL,
    `HashedPassword` VARCHAR(255) NOT NULL,
    `UniqueUserId` INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    UNIQUE (UserName)
);

-- Sample Data:
INSERT INTO users VALUES ('JohnDoe255', 'super_secret_hashed_password', NULL);