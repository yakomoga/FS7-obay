import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import users from "./usersReducer";

export default combineReducers({
  cartState: cartReducer, //todo rename cartReducer to cart
  users,
});
