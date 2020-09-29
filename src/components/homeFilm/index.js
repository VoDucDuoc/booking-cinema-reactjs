import React from "react";
import { useSelector } from "react-redux";
import ItemFilm from "./ItemFilm";
import Slider from "react-slick";

export default function HomeFilm() {
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
            maPhim={item.maPhim}
          />
        </div>
      );
    });
  };

  return (
    <section className="home-film" id="filmBlock">
      <div className="home-film__content">
        <ul className="nav nav-tabs tab-title" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              data-toggle="tab"
              href="#nowShowing"
              role="tab"
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
          >
            {listFilmShowing.length ? (
              <Slider {...settings}>{renderFilmBlock(listFilmShowing)}</Slider>
            ) : null}
          </div>

          <div className="tab-pane fade" id="comingSoon" role="tabpanel">
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
  const { className, style, onClick } = props;
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
  const { className, style, onClick } = props;
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
