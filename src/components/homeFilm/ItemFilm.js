import React from "react";
import { useDispatch } from "react-redux";
import { showModal } from "../../actions/modalTrailerAction";
import { useHistory } from "react-router-dom";
export default function ItemFilm(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div
      className="card text-left home-film__items"
      onClick={() => {
        history.push(`/film/${props.maPhim}`);
      }}
      style={{ border: "none" }}
    >
      <div style={{ position: "relative" }}>
        <img
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/img/loading.png";
          }}
          className="card-img-top"
          src={props.hinhAnh}
          alt="123"
        />
        <div className="layout-film-item">
          <a
            onClick={(e) => {
              dispatch(showModal(props.trailer));
              e.stopPropagation();
            }}
          >
            <i className="fa fa-play"></i>
          </a>
        </div>
      </div>
      <div className="card-body p-1">
        <div className="card-title mb-0" style={{ height: "40px" }}>
          <button style={{ padding: "1px 3px" }} className="btn btn-success">
            C16
          </button>

          <span className="ml-1">{props.tenPhim}</span>
          <button
            
            className="btn btn-book"
          >
            MUA VÉ
          </button>
        </div>

        <p className="card-text mt-2">105 phút</p>
      </div>
    </div>
  );
}
