import React, { useState, useEffect } from "react";
import "../App.css";
// import { connect } from "react-redux";
// import { addToCart } from "../actions/addAction";
import axios from "axios";
import ProductCard from "./ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Products = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log("********** my fetch url ********* ");
    console.log(props.FETCH_URL);
  }, []);
  let getProducts = () => {
    axios(`${props.FETCH_URL}`, props.fetchParams)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("This is the error ********* ", error);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Row>
        {products.map((product) => (
          <Row key={product.id}>
            <ProductCard product={product} />
          </Row>
        ))}
      </Row>
    </div>
  );
};

export default Products;
// export default connect(null, { addToCart })(Products);
