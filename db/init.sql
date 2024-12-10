-- Users table for authentication
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Enquiry master table
CREATE TABLE enquiry_master (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR,
    company_name VARCHAR,
    email VARCHAR,
    mobilenumber VARCHAR,
    address VARCHAR,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);