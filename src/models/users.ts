import bcrypt from 'bcrypt';
import client from '../database';

const pepper: string = process.env.BCRYPT_PW as string;
const saltRounds: number = parseInt(process.env.SALT_ROUNDS as string);

export type Users = {
  id?: number;
  username: string;
  password: string;
  role: string;
};

export class UsersStore {
  async show(id: string): Promise<Users> {
    try {
      const conn = await client.connect();
      const sql = 'SELECT * FROM users WHERE id = $1';

      const result = await conn.query(sql, [id]);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not get users. Error: ${err}`);
    }
  }
  async index(): Promise<Users[]> {
    try {
      const conn = await client.connect();
      const sql = 'SELECT * FROM users;';

      const result = await conn.query(sql);

      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async create(u: Users): Promise<Users> {
    try {
      console.log('gg2');
      const hash = bcrypt.hashSync(u.password + pepper, saltRounds);
      const con = await client.connect();
      console.log('gg3');
      const sql =
        'INSERT INTO users (username, password,role) VALUES($1, $2,$3) RETURNING *';
      const result = await con.query(sql, [u.username, hash, u.role]);
      const user = result.rows[0];
      if (u.role == 'CUSTOMER') {
        const sql =
          'INSERT INTO customer (customer_id ,balance) VALUES($1, $2) RETURNING *';
        console.log('ddd');
        const result = await con.query(sql, [user.id, 0]);
        const customer = result.rows[0];
        con.release();
        return customer;
      } else {
        const sql =
          'INSERT INTO merchant (merchant_id ,revenue) VALUES($1, $2) RETURNING *';
        const result = await con.query(sql, [user.id, 0]);
        const merchant = result.rows[0];
        con.release();
        return merchant;
      }
    } catch (err) {
      throw new Error(err.message);
    }
  }
  async delete(id: string): Promise<void> {
    const conn = await client.connect();
    let sql = 'SELECT * FROM users WHERE id=($1)';
    let result = await conn.query(sql, [id]);
    const user = result.rows[0];
    if (user.role == 'CUSTOMER') {
      sql = 'DELETE FROM customer WHERE customer_id=($1)';
      result = await conn.query(sql, [id]);
    } else {
      sql = 'DELETE FROM merchant WHERE merchant_id=($1)';
      result = await conn.query(sql, [id]);
    }

    sql = 'DELETE FROM users WHERE id=($1)';
    result = await conn.query(sql, [id]);
  }
  async upadte(id: string): Promise<void> {
    const conn = await client.connect();
    const sql = 'UPDATE FROM users WHERE id=($1)';
    const result = await conn.query(sql, [id]);
  }

  async authenticate(loginUser: Users): Promise<Users | null> {
    try {
      const conn = await client.connect();
      const sql = `SELECT * FROM users WHERE username = $1`;

      const result = await conn.query(sql, [loginUser.username]);
      if (result.rows.length > 0) {
        const user = result.rows[0];

        if (bcrypt.compareSync(loginUser.password + pepper, user.password)) {
          return user;
        }
      }
      return null;
    } catch (err) {
      throw new Error(`Could not get users. Error: ${err}`);
    }
  }

  async addBalance(customerId: Number, balance: Number): Promise<void | null> {
    try {
      const conn = await client.connect();
      const sql = `SELECT * FROM customer WHERE customer_id = $1`;

      const result = await conn.query(sql, [customerId]);
      console.log('hey');
      if (result.rows.length > 0) {
        const customer = result.rows[0];
        const newBalance = customer.balance + balance;
        const sql = 'UPDATE customer SET balance =$1 WHERE customer_id = $2';
        const result1 = await conn.query(sql, [newBalance, customerId]);
        conn.release();
        return newBalance;
      }
      conn.release();
      return null;
    } catch (err) {
      throw new Error(`Could not get users. Error: ${err}`);
    }
  }
}
