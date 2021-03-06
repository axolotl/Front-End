import { combineReducers } from "redux";
import credentialsReducer from "./credentialsReducer";
import friendsReducer from "./friendsReducer";
import billsReducer from "./billsReducer";
import dataReducer from "./dataReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  credentialsReducer,
  friendsReducer,
  billsReducer,
  dataReducer,
  usersReducer
});
