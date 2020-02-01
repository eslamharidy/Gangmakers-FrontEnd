import { combineReducers } from "redux";
import events from "./events";
import post from "./ticket";
import user from "./user";
import posts from "./tickets";
import comments from "./comments";

export default combineReducers({
  events,
  posts,
  user,
  post,
  comments
});
