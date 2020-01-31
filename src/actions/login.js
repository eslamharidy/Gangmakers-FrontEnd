
import request from 'superagent'
import { baseUrl } from '../constance'
export const LOGGED_USER = 'LOGGED_USER'



export function loggedIn(user) {
  return {
    type: 'LOGGED_USER',
    payload: user
  };
}

export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(response => {
      const action = loggedIn(response.body);

      dispatch(action);
    })
    .catch(console.error);
};

//signup 

export const signup = (profile) => dispatch => {
  request
    .post(`${baseUrl}/user`)
    .send(profile)
    .then(response => {
      const action = login(profile.email, profile.password);

      dispatch(action);
    })
    .catch(console.error);
};
