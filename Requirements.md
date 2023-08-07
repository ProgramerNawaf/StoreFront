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

#### Orders

- getOrderByCustomer (args: customer id)[token required] GET(/orders/getCustomerOrders/:customer_id)
- createOrder (args: customer id )[token required] POST(/orders/createOrder/:customer_id)


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

![image](https://github.com/ProgramerNawaf/StoreFront/assets/105772524/05a516cf-9cfa-4aaf-8956-59a9fc7e9440)

