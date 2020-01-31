import { combineReducers } from 'redux'
import events from './events'
import ticket from './ticket'
import user from './user'
import tickets from './tickets'
import comments from './comments'

export default combineReducers({
  events,
  ticket,
  user,
  tickets,
  comments
})