import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    
    <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand className='text-info' href="#home" style={{fontSize:'26px', fontWeight:'bold'}}>
          <i className="fa-brands fa-square-youtube fa-beat fa-2xl"  style={{color: "#c8ced",}} />

          {' '}
            MediaPlayer
          </Navbar.Brand>
        </Container>
      </Navbar>
    
    </>
  )
}

export default Header