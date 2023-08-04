import client from '../database';

export type Order_Products = {
  id?: Number;
  quantity: Number;
  status: String;
  product_Id: Number;
  customer_id: Number;
};
export class Order_Products_Store {
  async createOrder(
    customer_id: Number,
    productsId: Number,
    quantity: Number,
  ): Promise<void> {
    try {
      console.log('1');
      const conn = await client.connect();
      const sql = `SELECT * FROM users WHERE id = $1`;
      console.log('2');
      const result = await conn.query(sql, [customer_id]);
      console.log(result.rows);
      if (result.rows.length > 0) {
        const user = result.rows[0];
        console.log(user + ' ' + customer_id);
        const sql =
          'INSERT INTO order_products (customer_id ,product_id, status , quantity) VALUES($1, $2 , $3 ,$4) RETURNING *';

        const result1 = await conn.query(sql, [
          customer_id,
          productsId,
          'INPROGRESS',
          quantity,
        ]);
        console.log('5');

        const order = result1.rows[0];
        console.log(order);

        conn.release();
      }
      return;
    } catch (err) {
      throw new Error(`Could not get users. Error: ${err}`);
    }
  }
  async checkoutOrder(customer_id: Number, order_id: Number): Promise<void> {
    console.log('22');
    const conn = await client.connect();
    console.log('33');
    const sql = 'SELECT * FROM order_products WHERE id = $1';
    const result = await conn.query(sql, [order_id]);
    const order = result.rows[0];
    console.log('44');
    if (order.customer_id != customer_id)
      throw new Error(`the order dosent belong to this customer!`);

    const sql1 = 'SELECT * FROM customer WHERE customer_id = $1';
    const result1 = await conn.query(sql1, [customer_id]);
    const customer = result1.rows[0];

    //1customer id == order customer id

    console.log('55' + customer);
    const sql2 = 'SELECT * FROM products WHERE id = $1';
    const result2 = await conn.query(sql2, [order.product_id]);
    const product = result2.rows[0];
    console.log('66' + product.price);

    const newBalance = customer.balance - product.price * order.quantity;
    if (newBalance < 0) throw new Error(`customer dosent have enough balance!`);
    //new balance negative dont update
    const sql3 = 'UPDATE customer SET balance =$1 WHERE customer_id = $2';
    const result3 = await conn.query(sql3, [newBalance, customer_id]);
    console.log('77' + product.merchant_id);
    const sql4 = 'SELECT * FROM merchant WHERE merchant_id = $1';
    const result4 = await conn.query(sql4, [product.merchant_id]);
    const merchant = result4.rows[0];
    console.log('88' + merchant.revenue);
    const newRevenue = merchant.revenue + product.price * order.quantity;

    const sql5 = 'UPDATE merchant SET revenue =$1 WHERE merchant_id = $2';
    const result5 = await conn.query(sql5, [newRevenue, merchant.merchant_id]);
    console.log('99' + merchant.merchant_id);

    const sql6 = 'UPDATE order_products SET status =$1 WHERE id = $2';
    const result6 = await conn.query(sql6, ['DONE', order.id]);
    conn.release();
  }
}
