import client from '../database';

export type Customer = {
  id?: Number;
  balance: Number;
};

export class CustomerStore {
  show(arg0: string) {
    throw new Error('Method not implemented.');
  }
  async index(): Promise<Customer[]> {
    try {
      const conn = await client.connect();
      const sql = 'SELECT * FROM customer;';

      const result = await conn.query(sql);

      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(err.message);
    }
  }
  async getbyId(id: string): Promise<Customer> {
    try {
      const conn = await client.connect();
      const sql = 'SELECT * FROM customer WHERE id = $1';

      const result = await conn.query(sql, [id]);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not get customer. Error: ${err}`);
    }
  }
}
