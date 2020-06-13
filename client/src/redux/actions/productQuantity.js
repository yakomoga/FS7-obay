import { INCREASE_QUANTITY, DECREASE_QUANTITY } from "./actionTypes";

export const productQuantity = (action, name) => {
  return (dispatch) => {
    console.log("inside product Quantity");

    dispatch({
      type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
      payLoad: name,
    });
  };
};
