import { Users, UsersStore } from '../../models/users';

const store = new UsersStore();

describe('Users Model', () => {
  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(store.show).toBeDefined();
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
  it('should have a add balance method', () => {
    expect(store.addBalance).toBeDefined();
  });
});
