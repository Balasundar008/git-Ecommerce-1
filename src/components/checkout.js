import React, { useState } from 'react';
import { Card, Button, Form , Container , Row , Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OrderConfirmation from './orderConfirm';

const Checkout = ({ cartItems }) => {
  const totalPrice = cartItems.length > 0 ? cartItems.reduce((total, item) => total + item.price, 0) : 0;
  const [isOrderPlaced , setIsorderPlaced] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.currentTarget;

    if (form.checkValidity()) {
      // Place order logic here

      setIsorderPlaced(true);
    }

    setValidated(true);
  };


  if (isOrderPlaced) {
    return <OrderConfirmation />;
  }


  return (
    <div>
      <h1 className='m-3'>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
            <div className="card-container m-3">
            <Container>
            <Row>
            {cartItems.map((item) => (
                <Col sm={6} md={4} lg={3}>
              <Card key={item.id}>
                <Card.Img variant="top" src={item.image} alt={item.name} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>Price:₹{item.price}</Card.Text>
                </Card.Body>
              </Card>
              </Col>
            ))}
            </Row>
          </Container>
           </div>

          <h2 className='m-3'>Total Price: {totalPrice}</h2>

          <Form className='p-3 customer-submit' noValidate validated>
            <Form.Group controlId="formName">
              <Form.Label  className='m-2'>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label className='m-2'>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter your address" required />
            </Form.Group>

            <Form.Group controlId="formCardNumber">
              <Form.Label className='m-2'>Card Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your card number" required/>
            </Form.Group>

            <Button variant="primary" type="submit" className='m-3' onClick={handleSubmit}>
              Place Order
            </Button>
          </Form>
        </div>
      )}

      <Link to="/cart"><button className='btn btn-warning m-3' >Go back to Cart</button></Link>
    </div>
  );
};

export default Checkout;
