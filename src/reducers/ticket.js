export default (state = null, action) => {
  switch (action.type) {
    case "POST_FETCHED":
      return action.post;
    case "POST_UPDATE_SUCCESS":
      return action.post;
    default:
      return state;
  }
};
