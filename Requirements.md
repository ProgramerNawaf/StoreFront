## API Endpoints
#### Products
- Index 
- Show 
- Create [token required]
- delete [token required]
- update [token required]

#### Users
- Index [token required]
- Show [token required]
- Create
- addBalance [token required]

#### customer
- Index [token required]
- Show [token required]

#### merchant
- Show [token required]
  
#### Orders_products
- createOrder (args: customer id , product id)[token required]
- checkoutOrder (args: customer id , order id)[token required]

## Data Shapes
#### Product
-  id
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
