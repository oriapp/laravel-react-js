import ReactDOM from 'react-dom'
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class ResponsiveNav extends React.Component {
    // constructor(){
    //     state = { 
    //         session: '0'
    //      }
    // }


    render() { 
        return ( 
            <>
  <Navbar bg="dark" variant="dark" sticky="bottom">
    
        <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        
    <Navbar.Brand href="#home">

      {/* <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /> */}

    </Navbar.Brand>

        <Nav className="mr-auto white" style={{color: 'red !important'}}>
            <Nav.Link href="#home">Home</Nav.Link>
        </Nav>


        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>

  </Navbar>
  </>

         );
    }
}
 
export default ResponsiveNav;


if (document.getElementById('ResponsiveNav')) {
    ReactDOM.render(<ResponsiveNav />, document.getElementById('ResponsiveNav'));
}
