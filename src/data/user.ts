export const createUser = () => {
  return {
    firstName: 'Pedro',
    lastName: 'Gonzalez',
    email: `pedro${Date.now()}@gmail.com`,
    password: 'pedro123',
    confirmPassword: 'pedro123'
  };
};