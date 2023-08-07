import { STATUS_CODES } from 'http';
import {
  Order_Products,
  Order_Products_Store,
} from '../../models/order_products';

const store = new Order_Products_Store();

describe('Order_ProductsModel Model', () => {
  it('get customer orders method should return list length greater than or equal 0', () => {
    expect(store.getOrderByCustomer.length).toBeGreaterThanOrEqual(0);
  });
  it('should have a create order defined', () => {
    expect(store.createOrder).toBeDefined();
  });

  it('should have a check out order method should be truthy', () => {
    expect(store.checkoutOrder).toBeTruthy();
  });
});
