import React from "react";
import Modal from "react-bootstrap/Modal";
export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <a
        onClick={props.onHide}
      >
        <i className="fa fa-times"></i>
      </a>
      <Modal.Body style={{padding: 0}}>
      <iframe width="800" height="450" src={props.trailer} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </Modal.Body>
    </Modal>
  );
}