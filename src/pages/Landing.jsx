import React from 'react'
import { Link } from 'react-router-dom'
import {Row,Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Landing() {
  return (
   <>
   <div className='container-fluid p-5 mt-2'>
    <Row>
      <Col className='d-flex flex-column justify-content-center '>
      <h1 style={{color:'black'}}>MediaPlayer</h1>
      <p className='mt-1' style={{textAlign:'justify',fontSize:'20px',color:'black'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis voluptate beatae deleniti enim! Mollitia obcaecati accusamus eum minus saepe earum,
         consequatur inventore praesentium cum quod dolores nobis tenetur asperiores? Vel.</p>
      <div className='d-grid mt-2'>
      <Link to={'/dash'} className='btn btn-dark'>Let's Go</Link>
      </div>
      
      
      </Col>

      <Col style={{marginLeft:'110px'}} >
<img src="https://img.freepik.com/free-photo/3d-rendering-woman-with-vr-glasses_23-2150898699.jpg?t=st=1726828665~exp=1726832265~hmac=e85da365368daebac1fbb72a874e2524264b8a10cc8daa7059a520d8d6557591&w=740" style={{height:'560px'}}  alt="landing" className='img-fluid' />      
      </Col>
    </Row>
   </div>

   <div className='container-fluid p-5 mt-2'>
    <h1 className='text-center mb-4'>Features</h1>

    <div className='row justify-content-around'> 

    <Card style={{ width: '18rem' }} className='p-0'>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/285803/screenshots/1068612/dribbble_shot.gif" />
      <Card.Body>
        <Card.Title className='text-center'>Simple Upload</Card.Title>
        <Card.Text style={{textAlign:'justify', color:'black'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='p-0'>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/759392/screenshots/9201914/media/6432c05968a1592b64b8feaccc2a7280.gif" />
      <Card.Body>
        <Card.Title className='text-center'>Watch Videos</Card.Title>
        <Card.Text style={{textAlign:'justify', color:'black'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='p-0'>
      <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/aa141758746817.5a0827889c4b9.gif" />
      <Card.Body>
        <Card.Title className='text-center'>Watch History</Card.Title>
        <Card.Text style={{textAlign:'justify', color:'black'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    </div>

   </div>

   <div className='container-fluid p-5'>

    <Row>
      <Col md={8}>
      <h3 style={{fontSize:'30px', color:'black'}}>Simple And Faster</h3>
      <p style={{fontSize:'20px',textAlign:'justify', color:'black'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, placeat incidunt. Perferendis ullam fugit modi, eveniet ipsum sequi, maiores qui ea accusamus, aut pariatur hic quo est voluptas eum adipisci.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dicta alias quos ratione aspernatur aliquid quia rerum dolore velit. Deserunt, molestiae saepe. Molestiae corrupti velit laborum laboriosam debitis eligendi facere?
      </p>
      
      </Col>

      

      <Col md={4}>
      <iframe width="100%" height="315" style={{borderWidth:'19px'}} src="https://www.youtube.com/embed/RVFAyFWO4go?si=xITNMnpDrhIKM-Xe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </Col>






    </Row>

   </div>
   
   
   
   
   </>
  )
}

export default Landing