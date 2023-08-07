## API Endpoints

#### Products

- Index GET(/products/get)
- Show GET(/products/get/:id)
- Create [token required] POST(/products/post/:merchant_id)
- delete [token required] DELETE(/products/delete/:merchant_id)
- update [token required] PUT(/products/update/:merchant_id)

#### Users

- Index [token required] [token required] GET(/users/get)
- Show [token required] [token required] GET(/users/get/:id)
- Create POST(/users/post)
- addBalance [token required] POST(/users/addBalance/:id)

#### customer

- Index [token required] GET(/users/getCustomers)
- Show [token required] GET(/users/getCustomers/:id)

#### merchant

- Index [token required] GET(/users/getMerchants)
- Show [token required] GET(/users/getMerchant/:id)

#### Orders_products

- getOrderByCustomer (args: customer id)[token required] GET(/orders/get/:customer_id)
- createOrder (args: customer id , product id)[token required] POST(/orders/createOrder/:customer_id/:product_id)
- checkoutOrder (args: customer id , order id)[token required] POST(/orders/checkoutOrder/:customer_id/:order_id)

## Data Shapes

#### Product

- id
- name
- price
- merchant_id

#### User

- id
- username
- password
- customer_id
- merchant_id

#### customer

- customer_id
- balance

#### mercahnt

- merchant_id
- balance

#### Orders

- id
- product_id
- quantity
- customer_id
- status of order (DONE or INPROGRESS)

![StoreFront drawio](https://github.com/ProgramerNawaf/StoreFront/assets/105772524/f4ab6fe0-2036-46cb-82ed-401ed6cabafe)
