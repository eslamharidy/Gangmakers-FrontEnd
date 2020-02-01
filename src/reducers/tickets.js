export default (state = [], action) => {
  console.log("posts", action);

  switch (action.type) {
    case "POSTS_FETCHED":
      return action.posts;
    case "POST_CREATE_SUCCESS":
      return state ? [action.posts, ...state] : [action.posts];
    default:
      return state;
  }
};
