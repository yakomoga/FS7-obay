import { connect } from "react-redux";
import React, { useState, Fragment } from "react";
import { removeFromCart } from "../actions/addAction";
import { increaseQuantity } from "../actions/addAction";
import { decreaseQuantity } from "../actions/addAction";
import "../assets/Cart.css";
import utils from "./utils";
import Table from 'react-bootstrap/Table'

function Cart({
  cartProps,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  let productsInCart = cartProps.products;

  return (
    <div className="shopping-cart">
        {productsInCart.length > 0 && <div className="item"></div>}
        <div className="container-products">
          <div style={{backgroundColor:"white", borderColor: "darkgray", color:"#5d5e5e", fontWeight:"bold" }} className="alert alert-info">
            {productsInCart.length === 0 ? (
                "Cart is empty"
            ) : (
                <div>
                  You have {productsInCart.length} products in the Cart.
                </div>
            )}
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
                        className="img-cart"
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
                <td className="" colspan="3" style={{fontWeight:"bold"}}>
                  CART TOTAL
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
