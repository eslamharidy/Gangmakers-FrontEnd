export default (state = [], action) => {

  switch (action.type) {
      case 'TICKETS_FETCHED':
          return action.tickets;
      case 'TICKET_CREATE_SUCCESS':
          return state
          ? [ action.ticket, ...state] 
          : [action.ticket];    
      default:
          return state;
  }
};