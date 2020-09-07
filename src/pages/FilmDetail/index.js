import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilmDetail } from "../../actions/filmAction";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function FilmDetail(props) {
  const { location, match } = props;
  console.log(location, match);
  const dispatch = useDispatch();
  const { detailFilm } = useSelector((state) => state.filmReducer);
  useEffect(() => {
    const FilmId = match.params.id;
    dispatch(getFilmDetail(FilmId));
  }, []);
  console.log(detailFilm);
  return (
    <div
      className="film-detail"
      style={{ marginTop: "70px", position: "relative" }}
    >
      <div
        style={{
          backgroundImage: `url('${detailFilm.hinhAnh}'), url("")`,
          height: "400px",
          backgroundSize: "cover",
          backgroundRepeat: "none",
          backgroundPosition: "center center",
          filter: "blur(10px)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "840px",
          width: "100%",
          height: '250px'
        }}
      >
        <div
          className="d-flex align-items-center"
          style={{ position: "relative", width: "100%", height: '100%' }}
        >
          <div
            className="d-flex align-items-center"
            style={{ position: "absolute", left: "0", height: '100%', width: '60%' }}
          >
            <img
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "";
              }}
              style={{ width: "250px", height: "200px" }}
              src={detailFilm.hinhAnh}
              alt={detailFilm.hinhAnh}
            />
            <div style={{ color: "#e9e9e9", marginLeft: "10px" }}>
              <p style={{ fontSize: "14px", marginBottom: "5px" }}>
                {detailFilm.ngayKhoiChieu?.substring(0, 10)}
              </p>
              <p style={{ fontSize: "24px", fontWeight: 550 }}>
                {detailFilm.tenPhim}
              </p>
              <button className="btn film-detail__btn">MUA VÉ</button>
            </div>
          </div>
          <CircularProgressbar
            value={detailFilm.danhGia}
            text={`${detailFilm.danhGia}`}
            maxValue={10}
            strokeWidth={8}
            styles={buildStyles({
              // Colors
              pathColor: `rgba(0, 230, 64, 1), ${detailFilm.danhGia})`,
              textColor: "white",
              trailColor: "rgba(0, 0, 0, 0.9)",
              backgroundColor: "#3e98c7",
            })}
          />
        </div>
      </div>
    </div>
  );
}
