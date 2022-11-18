import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import { Li, Nav } from '../Styles/Nav.styled';

const Navbar = () => {
  return (
    <>
    <Nav>
      <Li><Link to="/"><img src={Logo} alt="" /></Link></Li>
      <Li><Link to="/">Home</Link></Li>
      <Li><Link to="/about">About Us</Link></Li>
      <Li><Link to="/Contact">Contact Us</Link></Li>
    </Nav>
    </>
  )
}

export default Navbar