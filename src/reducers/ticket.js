export default (state = null, action) => {

    switch (action.type) {
        case 'TICKET_FETCHED' :
                return action.ticket;
        case 'TICKET_UPDATE_SUCCESS':
            return action.ticket;    
            default:
                    return state;
            }
        };