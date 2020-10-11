import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
export default function Timer() {
  const [modalShow, setModalShow] = useState(false);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const history = useHistory();
  useEffect(() => {
    let interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          setModalShow(true);
          clearInterval(interval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [seconds, minutes]);

  return (
    <div>
      {minutes === 0 && seconds === 0 ? (
        <>
          <Modal
          size="sm"
            id="modal-timeup"
            show={modalShow}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            
            <Modal.Body>
              <p className="text-danger">
                Vui lòng đặt vé trong năm phút
              </p>
              <button onClick={()=>{history.push('/')}} className="btn btn-secondary mt-3">Quay lại trang chủ</button>
            </Modal.Body>
            
          </Modal>
        </>
      ) : (
        <p className="text-danger" style={{ fontSize: "22px" }}>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
      )}
    </div>
  );
}
