import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleModal } from "../../actions/modalAction";
export default function Carousel(props) {
  let {isOpen} = useSelector((state)=>state.modalReducer);
  let imgArr = [
    "https://vtv1.mediacdn.vn/thumb_w/650/2017/18767610-10155460524695625-7264096587825384151-n-1496327778191-crop-1496328697660.jpg",
    "https://cdn.moveek.com/media/cache/large/wf8ZvpeIRH.jpg",
    "https://i0.wp.com/www.uselessdaily.com/wp-content/uploads/2016/01/background-twitter.jpg?fit=640%2C360&ssl=1",
    "https://cdn.moveek.com/media/cache/large/Og1lWZbvC0.jpg",
    "https://www.kentmemoriallibrary.org/wp-content/uploads/2013/03/home-movie-poster-2.jpg",
  ];
  
  let { listFilmShowing } = useSelector((state) => state.filmReducer);
  const dispatch = useDispatch();
  const renderCarousel = () => {
    let listFilmCarousel = [];
    let isActive = true;
    listFilmCarousel = listFilmShowing.slice(0, 5);
    let i = 0;
    return listFilmCarousel.map((item, index) => {
      let src = imgArr[i];
      i += 1;
      return (
        <div
          key={index}
          className={`carousel-item ${isActive ? "active" : ""}`}
        >
          <img style={{ height: "650px" }} src={src} />

          {(isActive = false)}

          {/* Button trigger modal */}
          <a
            className="carousel-control-play-btn"
            data-toggle="modal"
            data-target={`#modal${index}`}
            onClick={()=>{
              dispatch(handleModal());

            }}
          >
            <i className="fa fa-play text-white" />
          </a>
          {/* Modal */}
          <div
            className="modal fade"
            id={`modal${index}`}
            
            data-keyboard="false"
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={()=>{
                      dispatch(handleModal());
                    }}
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  {isOpen &&
                  <iframe
                    width="850px"
                    height="450px"
                    src={item.trailer}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <section className="carousel-film">
        <div
          id="carouselId"
          className="carousel__content carousel slide"
          data-ride="carousel"
          data-interval='2000'
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselId"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselId" data-slide-to={1} />
            <li data-target="#carouselId" data-slide-to={2} />
            <li data-target="#carouselId" data-slide-to={3} />
            <li data-target="#carouselId" data-slide-to={4} />
          </ol>
          <div className="carousel-inner" role="listbox">
        
            {renderCarousel()}
        
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselId"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselId"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    </div>
  );
}
