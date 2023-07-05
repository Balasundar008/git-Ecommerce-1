import React, { useState } from 'react';
import { Card, Button , Row , Col, Container} from 'react-bootstrap';
import { Link, Routes,Route } from 'react-router-dom';
import data from '../data'; 
// Assuming data.js is in the same directory

const Cart = ({ cartItems, setCartItems }) => {
  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="card-container">
        <Container>
        <Row>
       
          {cartItems.map((item) => (
            <Col sm={6} md={4} lg={3}>
            <Card key={item.id}>
              <Card.Img variant="top" src={item.image} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Price:₹{item.price}</Card.Text>
                <Button variant="danger" onClick={() => removeFromCart(item)}>
                  Remove
                </Button>
              </Card.Body>
            </Card>
            </Col>
          ))}
         
          </Row>
          </Container>
          <Link to="/checkout" className="checkout-link">
            <button className='m-3 btn btn-outline-dark'>Proceed to Checkout</button>
          </Link>
        </div>
      )}

      <h2 className='m-3'>Available Products</h2>
      <div className="card-container">
      <Container>
      <Row>
        {data.map((item) => (
            <Col sm={6} md={4} lg={3} className='mb-4'>
          <Card key={item.id}>
            <Card.Img variant="top" src={item.image} alt={item.name} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>Price:₹{item.price}</Card.Text>
              <Button variant="success" onClick={() => addToCart(item)}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
          </Col>
        ))}
      
      </Row>
      </Container>
      </div>
    </div>
  );
};


export default Cart;
