DROP DATABASE IF EXISTS burger4;

-- Create the database moviePlanner_db and specified it for use.
CREATE DATABASE burger4;

USE burger4;

-- Create the table movies.
CREATE TABLE burger (
  id int NOT NULL ,
   VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert a set of records.
