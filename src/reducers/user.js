export default function (state = '', action = {}) {
  switch (action.type) {
     case 'LOGGED_USER':
       return action.payload
     case "USERS_FETCHED":
       return action.users;  
    default:
      return state
  }
}