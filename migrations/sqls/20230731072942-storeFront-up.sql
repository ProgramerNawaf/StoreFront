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

CREATE TABLE products (
    id SERIAL PRIMARY  KEY,
    name VARCHAR(150 ) NOT NULL,
    price float(53) NOT NULL,
    merchant_id  bigint REFERENCES users(id) ON DELETE CASCADE

);

  


CREATE TABLE order_products (
     id SERIAL PRIMARY KEY,
     quantity integer,
      status VARCHAR(15),
     product_id bigint REFERENCES products(id)ON DELETE CASCADE,
     customer_id bigint REFERENCES users(id) ON DELETE CASCADE
  );
