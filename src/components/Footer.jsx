import React from 'react'
import {Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='container-fluid p-5 bg-dark mt-5'>

      <Row>
        <Col>
        <h3>MediaPlayer 2024</h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam assumenda accusantium dolor laudantium expedita amet minus error deserunt molestiae, architecto repellat maxime enim ut eaque sed reprehenderit doloribus necessitatibus molestias?</p>
        
        
        </Col>
      



        <Col style={{marginLeft:'50px'}}>
        <h3>Links</h3>
        <div className='d-flex flex-column'>
          <Link to={'/'}>Landing</Link>
          <Link to={'/dash'}> Dashboard</Link>
          <Link to={'his'}>Watch History</Link>

        </div>
        
        </Col>


        <Col>
        <h4>Contact Us</h4>
        <p className='my-4'>mediaplayer2024@gmail.com</p>
        <textarea name="" className='form-control' id=""></textarea>
        <button className='btn btn-info mt-3'>Send</button>
        
        
        </Col>












      </Row>
      <h4 className='text-center'>Mediaplayer2024 &copy; all rights reserved</h4>






    </div>
    
    
    
    
    </>
    
  )
}

export default Footer