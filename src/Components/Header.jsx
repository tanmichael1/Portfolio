import React from "react";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

function Header() {
  return (
    <div>
      {/* <Navbar className="testHeader" bg="light" expand="lg" ></Navbar>*/}
      <Navbar className="testHeader" expand="lg">
        <Navbar.Brand className="testHeader" href="#home"></Navbar.Brand>
        <Navbar.Toggle
          className="testHeader"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse className="testHeader" id="basic-navbar-nav">
          <Nav className="mr-auto testHeader" activeKey="/home">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#cv">CV</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
