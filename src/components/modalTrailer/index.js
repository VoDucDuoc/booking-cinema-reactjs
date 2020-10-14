import React from "react";
import Modal from "react-bootstrap/Modal";
export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
      id="modal-trailer"
    >
      <a
        onClick={props.onHide}
      >
        <i className="fa fa-times"></i>
      </a>
      <Modal.Body style={{padding: 0}}>
      <iframe style={{width: "100%", height:"100%"}} src={props.trailer} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Modal.Body>
    </Modal>
  );
}
