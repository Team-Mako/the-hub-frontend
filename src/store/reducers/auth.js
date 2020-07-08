export default function auth(state = { session: false }, action) {
  let login;
  switch (action.type) {
    case 'USER_LOGIN':
      login = {
        token: action.payload.token,
        session: true,
      };
      return login;
    default:
      return state;
  }
}
