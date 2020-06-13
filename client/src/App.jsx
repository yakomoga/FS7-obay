import React, { Component } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/Store.js";

import Register from "./components/Register";
import Login from "./components/Login";
import Products from "./components/Products";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Protected from "./components/Protected";
import AddProduct from "./components/AddProduct";

import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {
  return (
    <Provider store={store}> // todo move provider wrap to index.js
      <Router>
        <div className="App">
          <NavBar></NavBar>
          <div>
            <div>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/login" component={Login} />
                <Route path="/protected" component={Protected} />
                <Route path="/products" component={Products} />
                <Route path="/register" component={Register} />
                <Route path="/addproduct" component={AddProduct} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
