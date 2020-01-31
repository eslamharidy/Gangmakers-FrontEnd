import request from 'superagent'
import {baseUrl} from '../constance';
export const POSTS_FETCHED = 'POSTS_FETCHED'
export const POST_CREATE_SUCCESS = 'POST_CREATE_SUCCESS'



//load all POSTS OF USER
const postsFetched = posts => ({
  type: POSTS_FETCHED,
  posts
})
export const loadposts = (id) => (dispatch, getState) => {
  // a GET /posts request
  request(`${baseUrl}/user/${id}/posts`)
    .then(response => {
      
      // dispatch an POSTS_FETCHED action that belongs to the user
      dispatch(postsFetched(response.body))
    })
    .catch(console.error)
}



//create a new post 
const postCreateSuccess = post => ({
  type: POST_CREATE_SUCCESS,
  post
})
export const createpost = (data,id) => dispatch => {
  request
    .post(`${baseUrl}/user/${id}/posts`)
    .send(data)
    .then(response => {
      dispatch(postCreateSuccess(response.body))
    })
    .catch(console.error)
}
