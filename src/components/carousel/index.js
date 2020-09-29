import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import MyVerticallyCenteredModal from "../modalTrailer";
import { showModal, hideModal } from "../../actions/modalTrailerAction";
import { useHistory } from "react-router-dom";
export default function CarouselHome() {
  let history = useHistory();
  const { show, url, interval } = useSelector(
    (state) => state.modalTrailerReducer
  );
  const dispatch = useDispatch();
  let imgArr = [
    "https://cdn.moveek.com/media/cache/large/wf8ZvpeIRH.jpg",
    "https://i0.wp.com/www.uselessdaily.com/wp-content/uploads/2016/01/background-twitter.jpg?fit=640%2C360&ssl=1",
    "https://cdn.moveek.com/media/cache/large/Og1lWZbvC0.jpg",
    "https://www.kentmemoriallibrary.org/wp-content/uploads/2013/03/home-movie-poster-2.jpg",
    "https://cdn.vox-cdn.com/thumbor/avol5sHcVPDid18BrRzi8kYTp4g=/0x5:1000x672/1400x1400/filters:focal(0x5:1000x672):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/46166388/bvs.0.jpg",
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
            onClick={() => {
              history.push(`/film/${item.maPhim}`);
            }}
            
            className="d-block w-100"
            src={src}
            alt={src}
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
      <section className="carousel-film" id="carousel">
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
