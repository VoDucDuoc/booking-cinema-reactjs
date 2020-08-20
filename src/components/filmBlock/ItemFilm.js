import React, {useState} from "react";
import MyVerticallyCenteredModal from "../modalTrailer";
import { useDispatch, useSelector } from "react-redux";
import { showModal, hideModal } from "../../actions/modalTrailerAction";


export default function ItemFilm(props) {
  let {show, url} = useSelector((state) => state.modalTrailerReducer);
  console.log(show, url)
  const dispatch = useDispatch();
  return (
    <div className="card text-left home-film__items" style={{ border: "none" }}>
    
      <div style={{ position: "relative" }}>
        <img
          className="card-img-top"
          style={{ width: "100%", height: "270px" }}
          src={props.hinhAnh}
          alt="123"
        />
        <div className="layout-film-item">
            
          <a
            onClick={() => dispatch(showModal(props.trailer))}
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
      <MyVerticallyCenteredModal
          trailer={url}
            show={show}
            onHide={() => dispatch(hideModal())}
          />
    </div>
  );
}
