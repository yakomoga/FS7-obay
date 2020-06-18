// import React, { fragment } from "react";
import { connect } from "react-redux";
import React, { useState, Fragment } from "react";
import { removeFromCart } from "../actions/addAction";
import { increaseQuantity } from "../actions/addAction";
import { decreaseQuantity } from "../actions/addAction";
import "../assets/Cart.css";
import utils from "./utils";
import Table from 'react-bootstrap/Table'
import Card from "react-bootstrap/Card";

function Cart({
  cartProps,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  let productsInCart = cartProps.products;

  return (
    <div className="shopping-cart">
      <h4>SHOPPING CART</h4>
      <div className="alert alert-info">
        {productsInCart.length === 0 ? (
          "Cart is empty"
        ) : (
          <div>
            You have {productsInCart.length} products in the Cart. <hr />
          </div>
        )}
        {productsInCart.length > 0 && <div className="item"></div>}
        <div className="container-products">
          <Table responsive="sm">
            <thead>
              <tr>
                <th className="" colspan="3">
                  PRODUCT
                </th>
                <th className="">PRICE</th>
                <th className="">QUANTITY</th>
                <th className="">TOTAL</th>
              </tr>
            </thead>
            <tbody className="">
              {productsInCart.map((product, index) => (
                <tr key={index}>
                  <td className="">
                    <ion-icon
                      name="close-circle-outline"
                      onClick={() => removeFromCart(product)}
                    ></ion-icon>
                  </td>
                  <td >
                    <img
                        style={{maxWidth:"55px", maxHeight:"55px", "objectFit": "cover"}}  variant="top"
                        src={`/img/${product.img}`}
                    />
                  </td>
                  <td className="">
                    <span className="sm-hide"> {product.title}</span>
                  </td>
                  <td className="">{utils.formatCurrency(product.price)}</td>
                  <td className="product-buttons">
                    <ion-icon
                      onClick={() => increaseQuantity(product)}
                      className="increase"
                      name="add-circle"
                    ></ion-icon>
                    <span>{product.qty}</span>
                    <ion-icon
                      onClick={() => decreaseQuantity(product)}
                      className="decrease"
                      name="remove-circle"
                    ></ion-icon>
                  </td>
                  <td className="">
                    <strong>
                      {utils.formatCurrency(product.price * product.qty)}
                    </strong>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="">
              <tr>
                <td className="" colspan="3">
                  <strong>Cart Total</strong>
                </td>
                <td className="">
                  <strong>
                    {utils.formatCurrency(
                      productsInCart.reduce((a, c) => a + c.price * c.qty, 0)
                    )}
                  </strong>
                </td>
              </tr>
            </tfoot>
          </Table>
          <div>
            <button
              onClick={() => alert("Todo: Implement checkout page.")}
              className="btn btn-primary"
            >
              checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});
export default connect(mapStateToProps, {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
})(Cart);
