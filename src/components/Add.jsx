import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideoApi } from '../services/allApi';
import { toast } from 'react-toastify';
function Add({setresult}) {
  const [show, setShow] = useState(false);
  const [video, setVideo] = useState({
    Title: "", ImageURL: "", VideoURL: ""
  })

  const handleAdd = async () => {
    console.log(video);
    const { Title, ImageURL, VideoURL } = video
    console.log(video)
    if (!Title || !ImageURL || !VideoURL) {
      toast.warning("Please fill all the fields")
    }
     else {
      const watchurl=video.VideoURL
      const urls=watchurl.split("v=")[1]
      const embedurl=`https://www.youtube.com/embed/${urls}?si=bCYi_mfQ6F8YdT51&autoplay=1`
      video.VideoURL=embedurl


    const result = await addVideoApi(video)
    if (result.status == 201) {
      toast.success("Video uploaded successfully!!")
      setVideo({ Title: "", ImageURL: "", VideoURL: "" })
      handleClose()
      setresult(result)
    }
    else {
      toast.error("Failed to upload video!!")
      console.log(result)
    }
  }
}

  const handleClose = () =>{
    setVideo({ Title: "", ImageURL: "", VideoURL: "" })
    setShow(false)};
  const handleShow = () => setShow(true);
  return (
    <>
      <button className='btn' onClick={handleShow}>
        <i className="fa-solid fa-square-plus fa-2xl" style={{ color: "#d60505;" }}></i>
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <FloatingLabel controlId="floatingtitle" label="Video Title" className="mb-3"
            >
              <Form.Control type="text" onChange={(e) => { setVideo({ ...video, Title: e.target.value }) }} placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingimg" label="Video Thumbnail URL" className='mb-3'>
              <Form.Control type="text" onChange={(e) => { setVideo({ ...video, ImageURL: e.target.value }) }} placeholder="Password" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingvideo" label="Youtube Video URL" className="mb-3"
            >
              <Form.Control type="text" onChange={(e) => { setVideo({ ...video, VideoURL: e.target.value }) }} placeholder="name@example.com" />
            </FloatingLabel>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add