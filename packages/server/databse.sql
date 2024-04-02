CREATE TABLE users(id SERIAL PRIMARY KEY,
                                     username VARCHAR(28) NOT NULL UNIQUE,
                                                                   passhash VARCHAR NOT NULL)
ALTER TABLE users ADD COLUMN last_name VARCHAR(50) NOT NULL,
                                                   ADD COLUMN first_name VARCHAR(50) NOT NULL,
                                                                                     ADD COLUMN age INT, ADD COLUMN phone_number VARCHAR(20), ADD COLUMN country VARCHAR(50);