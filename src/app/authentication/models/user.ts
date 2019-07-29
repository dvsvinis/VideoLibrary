import {Role} from './role';
export class User {
  id: number;
  username = '';
  password = '';
  name = '';
  email = '';
  role: Role;
  token = '';
}
