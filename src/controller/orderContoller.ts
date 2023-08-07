import { Order, OrderStore } from '../models/order';
import express, { Request, Response, NextFunction } from 'express';

const orders = new OrderStore();
const index = async (_req: Request, res: Response) => {
  try {
    const allOrders = await orders.index();
    if (allOrders.length === 0) {
      res.json({ message: 'No orders found!' });
    } else {
      res.json(allOrders);
    }
  } catch (error) {
    res.status(400);
    res.json({ message: error.message });
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.id;
    const showOrder = await orders.show(orderId);
    // console.log(`Order by id : ${orderId} : ${showOrder}`);
    if (showOrder) {
      res.json(showOrder);
    } else {
      res.json({
        message: 'No order found for id = ' + orderId,
      });
    }
  } catch (error) {
    res.status(400);
    res.json({ message: error.message });
  }
};

const create = async (req: Request, res: Response) => {
  const customer: number = parseInt(req.params.customer_id);
  try {
    const orderCreated = await orders.create(customer);

    res.json(orderCreated);
  } catch (error) {
    res.status(400);
    res.json({ message: error.message });
  }
};

const addProduct = async (req: Request, res: Response) => {
  const orderId: number = parseInt(req.params.order_id);
  const prodId: number = parseInt(req.body.productId);
  const quantity: number = parseInt(req.body.quantity);
  try {
    const addProdToOrder = await orders.addProduct(quantity, orderId, prodId);
    // console.log(`Product create ${addProdToOrder} on order >> ${orderId}`);
    res.json(addProdToOrder);
  } catch (error) {
    console.log(error);
    res.status(400);
    res.json({ message: error.message });
  }
};

const getOrder = async (req: Request, res: Response) => {
  try {
    console.log('hey');
    const userId = parseInt(req.params.customer_id);
    console.log(userId);
    const ordersByUser = await orders.getOrder(userId);
    if (ordersByUser.length !== 0) {
      res.json(ordersByUser);
    } else {
      res.json({
        message: `No orders found for user with id  = ${userId}`,
      });
    }
  } catch (error) {
    res.status(400);
    res.json({ message: error.message });
  }
};
export { getOrder, create, show, index, addProduct };
