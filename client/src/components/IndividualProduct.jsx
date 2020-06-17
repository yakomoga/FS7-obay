import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Maps from "./Maps";
import ProductCard from "./ProductCard";
import Row from "react-bootstrap/Row";

export default function Product() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  let getProductById = () => {
    try {
      axios(`/products/${id}`, {
        method: "GET",
      }).then((response) => {
        setProduct(response.data);
        console.log(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(id);
    getProductById();
  }, []);

  return (
    <div>
      {console.log(product)}
      <div>This is one product with id {id}</div>
      <div>{/* <Map /> */}</div>
      <div>
        <Map />
      </div>
      <div>
        {/* <Row>
          {products.map((product) => (
            <Row key={product.id}>
              <ProductCard product={product} />
            </Row>
        ))
        </Row>  */}
      </div>
    </div>
  );
}
