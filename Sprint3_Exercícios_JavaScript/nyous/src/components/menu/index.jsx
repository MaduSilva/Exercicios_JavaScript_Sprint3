import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../../assets/img/Logo_Branco_Simples.svg';

const Menu = () => {
  return(
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"><img src={logo} alt="Nyous"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/cadastrar">Cadastrar</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default Menu;