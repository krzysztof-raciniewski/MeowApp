import { User } from '../app/utils/models/user';

export const environment = {
  production: true,
  apiUrl: 'https://meowfacts.herokuapp.com/',
  user: { email: 'meow@cat.com', password: 'meowmeow' } as User,
};
