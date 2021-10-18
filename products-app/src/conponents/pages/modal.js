import React, { Children, useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';

function ModalWindow({title, children, onHandleSubmit}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const onSubmit = () => {
      onHandleSubmit();
      setShow(false);
    };
  // onDateChainge
  // onProductDataChainge
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
           {title}
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {children}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary"
            onClick={onSubmit} 
            >
              Save 
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
//   render(<ModalWindow />);
  export default ModalWindow;

