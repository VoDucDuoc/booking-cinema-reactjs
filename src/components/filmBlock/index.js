import React from "react";
import { useDispatch, useSelector } from "react-redux";

import ItemFilm from "./ItemFilm";
import Slider from "react-slick";
export default function FilmBlock() {
  let { listFilmShowing, listFilmComing } = useSelector(
    (state) => state.filmReducer
  );
  const settings = {
    className: "center",

    dots: true,
    arrows: true,
    infinite: true,

    speed: 500,
    rows: 2,
    slidesPerRow: 4,
  };
  const renderFilmBlock = (list) => {
    let isActive = true;
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
    <section className="home-film">
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
            <Slider {...settings}>{renderFilmBlock(listFilmShowing)}</Slider>
          </div>

          <div
            className="tab-pane fade"
            id="comingSoon"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
