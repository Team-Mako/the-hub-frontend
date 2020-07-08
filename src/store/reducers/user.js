export default function user(state = [], action) {
  switch (action.type) {
    case 'USER_LOGIN':
      return [action];
    default:
      return state;
  }
}
