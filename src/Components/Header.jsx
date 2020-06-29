import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";

function Header() {
    return (
        <div>

           { /* <Navbar className="testHeader" bg="light" expand="lg" ></Navbar>*/}
            <Navbar className="testHeader" expand="lg" >
                <Navbar.Brand className="testHeader" href="#home"></Navbar.Brand>
                <Navbar.Toggle className="testHeader" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="testHeader" id="basic-navbar-nav">
                    <Nav className="mr-auto testHeader"
                        activeKey="/home"
                        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    >
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Projects</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Skills</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">CV</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Contact</Nav.Link>
                        </Nav.Item>
                        

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>);


}


export default Header