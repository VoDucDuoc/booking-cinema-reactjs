import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemFilm from "./ItemFilm";
import ModalVideo from "react-modal-video";
export default function FilmBlock() {
  const settings = {
    // className: "aaa",
    // centerMode: true,
    infinite: true,

    // centerPadding: "0px",
    dots: true,
    rows: 2,
    slidesPerRow: 4,
    slideToShow: 1,
    slideToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  let { listFilmShowing, listFilmComing } = useSelector(
    (state) => state.filmReducer
  );

  const renderShowingFilmBlock = () => {
    return listFilmShowing.map((item, index) => {
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
  // const renderComingFilmBlock = () => {
  //   return listFilmComing.map((item, index) => {
  //     return (
  //       <div key={index}>
  //         <ItemFilm
  //           trailer={item.trailer}
  //           hinhAnh={item.hinhAnh}
  //           maNhom={item.maNhom}
  //           tenPhim={item.tenPhim}
  //         />
  //       </div>
  //     );
  //   });
  // };
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
              aria-controls="home"
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
              aria-controls="profile"
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
            <div>
              <Slider {...settings}>{renderShowingFilmBlock()}</Slider>
            </div>
          </div>

          <div
            className="tab-pane fade"
            id="comingSoon"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div>
              <Slider {...settings}></Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  function SampleNextArrow(props) {
    const { className, style, onClick, src } = props;
    return (
      <img
        src={"/img/next.png"}
        className={className}
        style={{
          ...style,
          width: "40px",
          height: "60px",
          top: "47%",
          right: "-40px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        src={"/img/prev.png"}
        className={className}
        style={{
          ...style,
          width: "40px",
          height: "60px",
          top: "47%",
          left: "-40px",
        }}
        onClick={onClick}
      />
    );
  }
}
