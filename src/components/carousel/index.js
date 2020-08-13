import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import { useSelector, useDispatch } from "react-redux";
import { getFilmList } from "../../actions/filmAction";

export default function Carousel(props) {
  let [isOpen, setIsOpen] = useState(false);
  let [imgArr, setImg] = useState([
    "https://vtv1.mediacdn.vn/thumb_w/650/2017/18767610-10155460524695625-7264096587825384151-n-1496327778191-crop-1496328697660.jpg",
    "https://cdn.moveek.com/media/cache/large/wf8ZvpeIRH.jpg",
    "https://i0.wp.com/www.uselessdaily.com/wp-content/uploads/2016/01/background-twitter.jpg?fit=640%2C360&ssl=1",
    "https://cdn.moveek.com/media/cache/large/Og1lWZbvC0.jpg",
    "https://www.kentmemoriallibrary.org/wp-content/uploads/2013/03/home-movie-poster-2.jpg",
  ]);
  
  let { listFilmShowing, loading } = useSelector((state) => state.filmReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    //call API lấy danh sách phim
    dispatch(getFilmList());
    
  }, []);
  const openModal = (maPhim) => {
    console.log('maPhim ne', maPhim);
    return listFilmShowing.slice(0, 5).map((item)=>{
      if(item.maPhim === maPhim){
        console.log(item.maPhim);
        setIsOpen(true);
      }
    })
  };
  
  const renderCarousel = () => {
    let listFilmCarousel = [];
    let isActive = true;
    listFilmCarousel = listFilmShowing.slice(0, 5);
    let i = 0;
    return listFilmCarousel.map((item, index) => {
      let src = imgArr[i];
      i+=1;
      return (
        <div
          style={{
            width: "100%",
            height: "600px",
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'none',
            backgroundPosition: 'center center'
          }}
          key={index}
          className={`carousel-item ${isActive ? "active" : ""}`}
        >
          {isActive = false}
          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            videoId={item.trailer}
            youtube={{ autoplay: 1 }}
            onClose={() => setIsOpen(false)}
          />
          <a
            className="carousel-control-play-btn"
            onClick={()=>{
              openModal(item.maPhim)
            }}
          >
            <i className="fa fa-play text-white" />
          </a>
        </div>
      );
    });
  };

  if (loading) {
    return <p>loading...</p>;
  }
  

  return (
    <section className="carousel-film">
      <div
        id="carouselId"
        className="carousel__content carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li data-target="#carouselId" data-slide-to={0} className="active" />
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
  );
}
