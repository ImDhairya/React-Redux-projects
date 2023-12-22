import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/CartSlice";
import { Alert } from "react-bootstrap";
import { getProducts } from "../store/productSlice";
import StatusCode from "../utils/StatusCode";

function Product() {
  const dispatch = useDispatch();
  const {data: products, status} = useSelector(state => state.product )

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => getProducts(result));

    dispatch(getProducts())

  }, []);

  
  if (status === StatusCode.ERROR ) {
    return <Alert key = "danger" variant=" danger"> Someting went wrong!! Try again Later</Alert>
  }
  // if (status === 'error') {
  //   return <Alert key = "danger" variant=" danger"> Someting went wrong!! Try again Later</Alert>
  // }
  
  // if (status === 'loading') {
  //   return <p>Loading...</p>

  // }
  if (status === StatusCode.LOADING){
    return <p>Loading...</p>
  }

  const addToCart = (product) => {
    //dispatch add action
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px " }}>
      <Card key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px " }}
          />
        </div>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Product Dashboard </h1>
      <div className=" row">{cards}</div>
    </>
  );
}

export default Product;
