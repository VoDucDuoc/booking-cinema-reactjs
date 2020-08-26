import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import MyVerticallyCenteredModal from "../modalTrailer";
import { showModal, hideModal } from "../../actions/modalTrailerAction";
export default function CarouselHome() {
  const {show, url, interval} = useSelector(state => state.modalTrailerReducer);
  const dispatch = useDispatch();
  let imgArr = [
    "https://vtv1.mediacdn.vn/thumb_w/650/2017/18767610-10155460524695625-7264096587825384151-n-1496327778191-crop-1496328697660.jpg",
    "https://cdn.moveek.com/media/cache/large/wf8ZvpeIRH.jpg",
    "https://i0.wp.com/www.uselessdaily.com/wp-content/uploads/2016/01/background-twitter.jpg?fit=640%2C360&ssl=1",
    "https://cdn.moveek.com/media/cache/large/Og1lWZbvC0.jpg",
    "https://www.kentmemoriallibrary.org/wp-content/uploads/2013/03/home-movie-poster-2.jpg",
  ];

  let { listFilmShowing } = useSelector((state) => state.filmReducer);
  
  
  const renderCarousel = () => {
    let listFilmCarousel = [];
    listFilmCarousel = listFilmShowing.slice(0, 5);
    let i = 0;
    return listFilmCarousel.map((item, index) => {
      let src = imgArr[i];
      i += 1;

      return (
        <Carousel.Item key={index}>
          <img
            style={{ height: "600px" }}
            className="d-block w-100"
            src={src}
          />
          <a
            onClick={() => dispatch(showModal(item.trailer))}
            style={{ color: "white" }}
            className="carousel-control-play-btn"
          >
            <i className="fa fa-play"></i>
          </a>
          
        </Carousel.Item>
      );
    });
  };
  return (
    <div>
      <section className="carousel-film">
        <Carousel interval={interval}>{renderCarousel()}</Carousel>
      </section>
      <MyVerticallyCenteredModal
            trailer={url}
            show={show}
            onHide={() => dispatch(hideModal())}
          />
    </div>
  );
}
