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
    status varchar(1) DEFAULT 'P'::character varying NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- DROP TABLE public.contact;
CREATE TABLE public.contact (
	id BIGSERIAL NOT NULL,
	full_name varchar NOT NULL,
	email varchar NOT NULL,
	subject varchar NOT NULL,
	mobilenumber varchar NULL,
	message varchar NULL,
	status varchar DEFAULT 'P'::character varying NULL,
	created_at varchar DEFAULT now() NULL,
	CONSTRAINT contact_pk PRIMARY KEY (id)
);