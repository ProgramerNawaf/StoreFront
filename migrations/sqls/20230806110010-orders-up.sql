/* Replace with your SQL commands */


CREATE TABLE orders(
    id serial PRIMARY KEY,
     customer_id bigint REFERENCES users(id) ON DELETE CASCADE,
    status VARCHAR(15)
);

CREATE TABLE order_products(
    id serial PRIMARY KEY,
    quantity INTEGER NOT NULL CHECK(quantity > 0),
    order_id INTEGER REFERENCES orders(id),
    product_id INTEGER REFERENCES products(id)
);