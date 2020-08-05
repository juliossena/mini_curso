import { ConectarApiPost } from '../../../shared/functions/conectarAPI';

export async function login(body) {
  const returnService = await ConectarApiPost('https://amamenteavida.herokuapp.com/login', body);
  return returnService.headers.authorization;
}

export default login;
