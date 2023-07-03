import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card ,Navbar , Nav, Form , Button} from 'react-bootstrap';
import products from '../data';
import "../App.css"
import hero from "../images/hero.jpeg"

const Home = () => {
  return (
    <div>
    {/* navbar */}
  
    <Navbar bg="dark" variant="dark" expand="lg" className='custom-navbar p-3'>
      <Navbar.Brand href="#home" >E-commerce Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#products">Products</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
 
  
       {/* hero section */}
       <div className="jumbotron mb-5 mt-3">
        <Container>
          <Row>
            <Col sm={6}>
              <img src={hero} alt="Hero" className="img-fluid" />
            </Col>
            <Col sm={6}>
              <div className="text-center text-sm-left">
                <h1>Welcome to our E-commerce Store!</h1>
                <p>
                  Discover a wide range of products at great prices. Shop now and enjoy a seamless shopping experience.
                </p>
                <h1 className=''>"Discover Endless Delights, Shop Your Heart Out!"</h1>
                
              </div>
            </Col>
          </Row>
        </Container>
        <Link to="/cart"><button className='btn btn-danger m-3'>ADD Products</button> </Link> 
        
      </div>
     {/* products */}
     
    <Container className='home-section mb-5'>
      <Row>
        {products.map((product) => (
          <Col sm={6} md={4} lg={3} key={product.id}>
            <Card className='mb-4'>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>

    {/*offer section */}
    <div className="offer-section">
        <Container>
          <Row>
            <Col>
              <h3>Special Offer!</h3>
              <p className="catch-text">
                Get up to 50% off on selected items. Limited time offer. Don't miss out!
              </p>
              <p>
                Explore our collection and find the perfect products for yourself or your loved ones. From fashion to electronics, we have it all!
              </p>
              <p>
                Enjoy free shipping on orders over $50. Shop now and take advantage of this incredible offer.
              </p>
              <button className="btn btn-primary">Shop Now</button>
            </Col>
          </Row>
        </Container>
      </div>
      {/* contact */}
      <div className="contact-section mt-5">
        <Container>
          <Row>
            <Col md={6}>
              <h3>Contact Us</h3>
              <p>Have any questions or need assistance? Feel free to reach out to us.</p>
              <Form>
                <Form.Group controlId="name">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
                </Form.Group>

                <Button variant="success" type="submit" className='suc-btn mt-3'>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
    </div>
   
    </div>
  );
};

export default Home;
