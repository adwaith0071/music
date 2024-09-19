import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addHistory, getDeleteApi } from '../services/allApi';
import { toast } from 'react-toastify';
import { json } from 'react-router-dom';

function Videocards({video,res,cond}) {
  const handledelete=async()=>{
    const result=await getDeleteApi(video.id)
    if(result.status==200){
      toast.success("Video Removed!!")
      res(result)
    }

  }
  const handleDrag=(e)=>{
    console.log("dragging")
    console.log(video)
    e.dataTransfer.setData('video',JSON.stringify(video))

  }



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async() =>{
    
       setShow(true);
    
       const data={
        vid:video.id,title:video.Title,url:video.VideoURL,date:new Date()
       }
       const result=await addHistory(data)
       console.log(result)
      }
  return (
    <>
       <Card className='p-1' draggable onDragStart={(e)=>{handleDrag(e)}} style={ cond?{width:'100%'} :{ width: '18rem' }}>
      <Card.Img variant="top" onClick={handleShow} style={{cursor:'pointer'}} src={video.ImageURL} />
      <Card.Body>
        <Card.Title>{video.Title}</Card.Title>
        {
          !cond &&
          <button className='btn' onClick={handledelete}>
          <i className="fa-solid fa-trash fa-2xl" style={{color: "#cf0707",}} />
          </button>

        }
      
       
        
      </Card.Body>
    </Card>


    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src= {video.VideoURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Videocards