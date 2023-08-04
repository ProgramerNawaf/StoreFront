import { Order_Products, Order_Products_Store } from '../models/order_products';
import { Request, Response } from 'express';
const store = new Order_Products_Store();

const createOrder = async (
  _req: Request,
  res: Response,
): Promise<Response | void> => {
  const customer_id: Number = parseInt(_req.params.customer_id);
  const product_id: Number = parseInt(_req.params.product_id);
  try {
    const order = await store.createOrder(
      customer_id,
      product_id,
      _req.body.quantity,
    );

    return res.status(200).send('Order Created!');
  } catch (err) {
    res.status(404);
  }
};

const checkoutOrder = async (
  _req: Request,
  res: Response,
): Promise<Response | void> => {
  const customer_id: Number = parseInt(_req.params.customer_id);
  const order_id: Number = parseInt(_req.params.order_id);
  try {
    console.log('11');
    const order = await store.checkoutOrder(customer_id, order_id);

    return res.status(200).send('Order Checked out!' + order);
  } catch (err) {
    res.status(404).send(err.message);
  }
};

export { createOrder, checkoutOrder };
