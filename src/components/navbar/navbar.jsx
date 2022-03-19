import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/home">S K A U F E L</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/work">Work</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Navbar;
