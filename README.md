# To set up PostgreSQL and pgAdmin, you'll need to follow a few steps. Here's a step-by-step guide:

- Install PostgreSQ12L:

- Visit the official PostgreSQL website (https://www.postgresql.org/) and download the PostgreSQL 12 for your operating system.
Run the installer and follow the instructions to complete the installation process.
During the installation, you'll be prompted to set a password for the default PostgreSQL user, "postgres". Make sure to remember this password as you'll need it later.
Install pgAdmin:

- Visit the official pgAdmin website (https://www.pgadmin.org/) and download the version compatible with your operating system.
Run the installer and follow the instructions to complete the installation process.
Configure PostgreSQL:
- Open the PostgreSQL installation directory. The default location is usually "C:\Program Files\PostgreSQL<version>" on Windows or "/usr/local/pgsql" on macOS/Linux.
Locate the file named "pg_hba.conf" in the "data" directory.
Open the file using a text editor and find the line that starts with "host". Uncomment the line by removing the "#" symbol at the beginning.
Change the authentication method from "peer" to "md5" for IPv4 and IPv6 connections. The line should look like this:
host    all             all             127.0.0.1/32            md5
host    all             all             ::1/128                 md5
Save the changes and close the file.
Start PostgreSQL:

- On Windows, open the Start menu, search for "pgAdmin", and click on the pgAdmin application to open it.
On macOS/Linux, open a terminal window and run the command: pg_ctl -D /usr/local/pgsql/data start
Connect pgAdmin to PostgreSQL:

- Open pgAdmin.
- In the pgAdmin interface, you will find your server PostgreSQL 12 click properties.
- In the "Connection" tab, enter the following details:
- Host name/address: localhost
- Port: 5432 (default port for PostgreSQL)
- Maintenance database: postgres
- Username: postgres
- Password: Enter the password you set during the PostgreSQL installation.
- Click "Save" to connect pgAdmin to PostgreSQL.
# That's it! You should now have PostgreSQL and pgAdmin set up on your system. You can use pgAdmin to manage your PostgreSQL databases, create tables, run queries, and more.

Now that you can create a database and a user, you should create one database (with a user) for production and one database (with a user - you can use the same as for the dev db) for testing.

# .env file (from dotenv) accordingly:


- POSTGRES_HOST = "<127.0.0.1>"
- POSTGRES_DB = "<what ever database name you created>"
- POSTGRES_USER = "<postgres>"
- DB_PORT = "<5432>"
- POSTGRES_PASSWORD = "<your password>"
- POSTGRES_TEST_DB = "<make another db for testing>" (for tests)
- ENV = "dev" (run with dev db or test db)
- BCRYPT_PW = "<write some string to pepper your encryption>"
- SALT_ROUNDS = "<write an integer to say how many times the pw should be hashed>"
- TOKEN_SECRET = "<write a string for the JWT secret>"
  
# Install the node modules

- npm install
- Load the database schema with
- db-migrate up
- npm run build
- npm run test(jasmine testing)
- npm run start(start the server(
- The server runs on localhost:3000 on default.
- 
# Routes and Database Schemas

- for users only create route dosent require a token. rest of the routes do.
- for products index , show dont require a token. rest of the routes do.
- order_products routes all require a token

# /users
- id
- username
- password
- role
- merchant_id
- customer_id
  
- Creating the user doesn't need a token. You can get the token of this user
- The passwords gets hashed with bcrypt.

- Get user info

- (GET /users/:id) you also get the user by id, this method needs token


- Get all users info

- (GET /users) you also get all the users, this method needs token
  
# /customer
- customer_id
- balance
# /merchant
- merchant_id
- revenue
# /products

- id
- name
- price
- merchant_id
The usual CRUD routes are implemented, you need a user token for all manipulating routes except index and show.




# /orders_products
- id
- customer_id
- status
