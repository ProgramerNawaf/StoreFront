import client from '../database';

export type Product = {
  name: string;
  price: string;
  id?: Number;
};

export class ProductStore {
  show(arg0: string) {
    throw new Error('Method not implemented.');
  }
  async index(): Promise<Product[]> {
    try {
      const conn = await client.connect();
      const sql = 'SELECT * FROM products;';

      const result = await conn.query(sql);

      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(err.message);
    }
  }
  async create(p: Product, merchant_id: string): Promise<void> {
    const merchantId: Number = parseInt(merchant_id);
    try {
      console.log('gg2');
      const con = await client.connect();
      console.log('gg3');
      const sql =
        'INSERT INTO products (name, price , merchant_id) VALUES($1, $2,$3) RETURNING *';
      const result = await con.query(sql, [p.name, p.price, merchantId]);
      const product = result.rows[0];
      con.release();
      return product;
    } catch (err) {
      throw new Error(err.message);
    }
  }
  async delete(id: string): Promise<void> {
    const conn = await client.connect();
    const sql = 'DELETE FROM products WHERE id=($1)';
    const result = await conn.query(sql, [id]);
  }
  async upadte(id: string): Promise<void> {
    const conn = await client.connect();
    const sql = 'UPDATE FROM product WHERE id=($1)';
    const result = await conn.query(sql, [id]);
  }
}
