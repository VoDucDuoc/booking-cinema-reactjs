import React, {useEffect} from "react";
import HomeTools from "../../components/homeTools";
import HomeFilm from "../../components/homeFilm";
import ShowTime from "../../components/showTime";
import { useDispatch } from "react-redux";
import { getFilmList } from "../../actions/filmAction";
import { getCinemaList, getCinemaDetailList } from "../../actions/cinemaAction";
import CarouselHome from "../../components/carousel";
import News  from "../../components/news";
export default function Home(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    //call API lấy danh sách phim
    dispatch(getFilmList());
    dispatch(getCinemaList());
    dispatch(getCinemaDetailList());
  }, []);
  
  return (
    <div style={{width: '100%'}}>
    
      <CarouselHome />
   
      <HomeTools/>
      
      <HomeFilm/>
      
      <ShowTime/>

      <News />

    </div>
  );
}
