import api from '../../services/api';

export default function auth(state = {}, action) {
  let login;
  switch (action.type) {
    case 'USER_LOGIN':
      login = {
        token: action.payload.token,
        session: true,
      };
      api.defaults.headers.Authorization = `Bearer ${action.payload.token}`;
      return login;
    case 'ADMIN_LOGIN':
      login = {
        token: action.payload.token,
        adminSession: true,
      };
      api.defaults.headers.Authorization = `Bearer ${action.payload.token}`;
      return login;
    default:
      return state;
  }
}
