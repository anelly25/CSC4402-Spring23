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


INSERT IGNORE INTO users (username, HashedPassword) 
SELECT SUBSTRING_INDEX(email, '@', 1) as username,
'examplePassword' as HashedPassword
FROM trucks_delivering;
