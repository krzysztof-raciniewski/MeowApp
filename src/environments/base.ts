import { User } from '../app/utils/models/user';

export const baseEnvironment = {
  apiUrl: 'https://meowfacts.herokuapp.com/',
  user: { email: 'meow@cat.com', password: 'meowmeow' } as User,
};
