import React, {useState} from "react";
import ModalVideo from "react-modal-video";


export default function ItemFilm(props) {
  // let {trailer, hinhAnh, maNhom, tenPhim} = props;
  let [isOpen, setIsOpen] = useState(false);
  let openModal = () => {
    setIsOpen(true);
  };
  let trailerNew = props.trailer.substring(30);

  return (
    <div className="card text-left home-film__items" style={{ border: "none" }}>
    <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            videoId={trailerNew}
            youtube={{ autoplay: 1 }}
            onClose={() => setIsOpen(false)}
          />
      <div style={{ position: "relative" }}>
        <img
          className="card-img-top"
          style={{ width: "100%", height: "270px" }}
          src={props.hinhAnh}
          alt="123"
        />
        <div className="layout-film-item">
            
          <a
            onClick={openModal}
          ><i className="fa fa-play"></i></a>
        </div>
      </div>
      <div className="card-body p-1">
        <div className="card-title mb-0" style={{ height: "40px" }}>
          <button style={{ padding: "1px 3px" }} className="btn btn-success">
            {props.maNhom}
          </button>

          <span className="ml-1">{props.tenPhim}</span>
          <button className="btn btn-book">MUA VÉ</button>
        </div>
        
        <p className="card-text mt-2">105 phút</p>
      </div>
    </div>
  );
}
