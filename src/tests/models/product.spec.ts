import { Product, ProductStore } from '../../models/product';

const store = new ProductStore();

describe('Product Model', () => {
  it('should have an index method', () => {
    expect(store.index.length).toBeGreaterThanOrEqual(0);
  });

  it('should have a show method that returns an object', () => {
    expect(store.show('1')).toEqual(jasmine.any(Object));
  });

  it('should have a create method', () => {
    expect(store.create).toBeDefined();
  });

  it('should have a update method', () => {
    expect(store.upadte).toBeDefined();
  });

  it('should have a delete method', () => {
    expect(store.delete).toBeDefined();
  });
});
