import { Product, ProductStore } from '../../models/product';
const store = new ProductStore();

describe('Product Store Model', () => {
  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });

  it('index method should return a list of products', async () => {
    const result = await store.index();
    expect(result).toHaveSize;
  });

  // it('create proudct : 5999.99 computer', async () => {
  //     const product: Product= {
  //         name:'Computer',
  //         price: 5999.99,
  //         category: 2
  //     }
  //     const createQuery = await store.create(product);
  //     expect(createQuery.name).toEqual("Computer");
  //     expect(createQuery.price).toEqual(5999.99);
});
