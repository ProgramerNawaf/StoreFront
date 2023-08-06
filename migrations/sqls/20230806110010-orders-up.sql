/* Replace with your SQL commands */
CREATE TABLE order_products (
     id SERIAL PRIMARY KEY,
     quantity integer,
      status VARCHAR(15),
     product_id bigint REFERENCES products(id)ON DELETE CASCADE,
     customer_id bigint REFERENCES users(id) ON DELETE CASCADE
  );
