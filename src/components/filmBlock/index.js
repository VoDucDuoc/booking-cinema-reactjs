import React from "react";
import {  useSelector } from "react-redux";
import ItemFilm from "./ItemFilm";
import Slider from "react-slick";

export default function FilmBlock() {
  let { listFilmShowing, listFilmComing } = useSelector(
    (state) => state.filmReducer
  );

  const settings = {

    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const renderFilmBlock = (list) => {
    return list.map((item, index) => {
      return (
        <div key={index}>
          <ItemFilm
            trailer={item.trailer}
            hinhAnh={item.hinhAnh}
            maNhom={item.maNhom}
            tenPhim={item.tenPhim}
          />
        </div>
      );
    });
  };

  return (
    <section className="home-film" id="filmBlock">
      <div className="home-film__content">
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-toggle="tab"
              href="#nowShowing"
              role="tab"
              aria-controls="nowShowing"
              aria-selected="true"
            >
              Đang chiếu
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="tab"
              href="#comingSoon"
              role="tab"
              aria-controls="comingSoon"
              aria-selected="false"
            >
              Sắp chiếu
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="nowShowing"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            {listFilmShowing.length ? (
              <Slider {...settings}>{renderFilmBlock(listFilmShowing)}</Slider>
            ) : null}
          </div>

          <div
            className="tab-pane fade"
            id="comingSoon"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            {listFilmComing.length ? (
              <Slider {...settings}>{renderFilmBlock(listFilmComing)}</Slider>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function SampleNextArrow(props) {
  const { currentSlide, className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src="./img/next.png" style={{ width: "50px", height: "50px" }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { currentSlide, className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src="./img/prev.png" style={{ width: "50px", height: "50px" }} />
    </div>
  );
}
