export default function user(state = {}, action) {
  let login;
  switch (action.type) {
    case 'USER_LOGIN':
      login = {
        user_id: action.payload.user.user_id,
        user_name: action.payload.user.user_name,
        user_email: action.payload.user.user_email,
      };
      return login;
    default:
      return state;
  }
}
