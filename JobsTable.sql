CREATE DATABASE IF NOT EXISTS TRUCKER;
USE TRUCKER;

-- When a job has been assigned to somebody, put it in this table. If no entry for a job exists here,
-- then it's free to take.
DROP TABLE IF EXISTS `job_assignments`;
CREATE TABLE `job_assignments` (
    `JobId` INT NOT NULL PRIMARY KEY,
    `AssignedUserId` INT NOT NULL,
    FOREIGN KEY (JobId) REFERENCES trucks_delivering(UniqueJobId),
    FOREIGN KEY (AssignedUserId) REFERENCES users(UniqueUserId)
);

-- Sample Data:
INSERT INTO job_assignments VALUES (5, 1);