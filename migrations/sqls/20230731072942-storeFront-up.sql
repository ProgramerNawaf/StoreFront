/* Replace with your SQL commands */
CREATE TABLE users (
    id SERIAL PRIMARY  KEY,
    username VARCHAR(150) NOT NULL,
    password VARCHAR(150) NOT NULL,
    role VARCHAR(25)  not null check (role='CUSTOMER' or role='MERCHANT')
);

CREATE TABLE customer (
    balance float(53) NOT NULL,
    customer_id bigint REFERENCES users(id) ON DELETE CASCADE,
     PRIMARY KEY (customer_id ) 
);

CREATE TABLE merchant (
    revenue float(53) NOT NULL,
    merchant_id  bigint REFERENCES users(id) ON DELETE CASCADE,
    PRIMARY KEY (merchant_id)
);


  


