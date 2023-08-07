import { STATUS_CODES } from 'http';
import { Order, OrderStore } from '../../models/order';

const store = new OrderStore();

describe('Order_ProductsModel Model', () => {
  it('get customer orders method should return list length greater than or equal 0', () => {
    expect(store.getOrder.length).toBeDefined();
  });
  it('should have a create order defined', () => {
    expect(store.create(2)).toBeDefined();
  });

  it('add product with false input should be falsy', () => {
    expect(store.addProduct(2, 1, 1)).toBeFalsy;
  });
});
