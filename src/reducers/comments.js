export default (state = [], action) => {

  switch (action.type) {
      case 'COMMENTS_FETCHED':
          return action.comments;
      case 'COMMENT_CREATE_SUCCESS':
          return state
          ? [ action.comment, ...state] 
          : [action.comment];    
      default:
          return state;
  }
};