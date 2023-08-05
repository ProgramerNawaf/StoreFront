import client from '../database';

export type Merchant = {
  id?: Number;
  revenue: Number;
};

export class MerchantStore {
  show(arg0: string) {
    throw new Error('Method not implemented.');
  }
  async index(): Promise<Merchant[]> {
    try {
      const conn = await client.connect();
      const sql = 'SELECT * FROM merchant;';

      const result = await conn.query(sql);

      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(err.message);
    }
  }
  async getbyId(id: string): Promise<Merchant> {
    try {
      const conn = await client.connect();
      const sql = 'SELECT * FROM merchant WHERE id = $1';

      const result = await conn.query(sql, [id]);
      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not get merchant. Error: ${err}`);
    }
  }
}
