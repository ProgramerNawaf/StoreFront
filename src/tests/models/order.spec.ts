import {
  Order_Products,
  Order_Products_Store,
} from '../../models/order_products';

const store = new Order_Products_Store();

describe('Order_ProductsModel Model', () => {
  it('should have a get customer orders  method', () => {
    expect(store.getOrderByCustomer).toBeDefined();
  });
  it('should have a create order  method', () => {
    expect(store.createOrder).toBeDefined();
  });

  it('should have a check out order method', () => {
    expect(store.checkoutOrder).toBeDefined();
  });
});
