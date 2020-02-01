import request from "superagent";
import { baseUrl } from "../constance";
export const USERS_FETCHED = "USERS_FETCHED";

//load all users
const usersFetched = users => ({
  type: USERS_FETCHED,
  users
});

export const loadusers = () => (dispatch, getState) => {
  // when the state already contains users, we don't fetch them again
  if (getState().users) return;
  // a GET /users request
  request(`${baseUrl}/user`)
    .then(response => {
      // dispatch an USERS_FETCHED action that contains the events
      dispatch(usersFetched(response.body));
    })
    .catch(console.error);
};
