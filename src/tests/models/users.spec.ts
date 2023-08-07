import { UserCreation } from '../../controller/userController';
import { Users, UsersStore } from '../../models/users';

const store = new UsersStore();

describe('Users Model', () => {
  it('index method should have size', () => {
    const result = store.index();
    expect(result).toHaveSize;
  });

  it('should have a show method', () => {
    expect(store.show('1')).toBeDefined();
  });

  it('should have a create method', () => {
    const Nawaf: UserCreation = {
      username: 'Nawaf',
      password: '123',
      role: 'MERCHANT',
      balance: 0,
      revenue: 0,
    };
    const user = store.create(Nawaf);
    expect(user).toEqual(jasmine.any(Object));
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
