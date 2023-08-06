/* Replace with your SQL commands */
CREATE TABLE products (
    id SERIAL PRIMARY  KEY,
    name VARCHAR(150 ) NOT NULL,
    price float(53) NOT NULL,
    merchant_id  bigint REFERENCES users(id) ON DELETE CASCADE

);
