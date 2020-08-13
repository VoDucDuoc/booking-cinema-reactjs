import React from "react";
import Carousel from "../../components/carousel";
import HomeTools from "../../components/homeTools";
import FilmBlock from "../../components/filmBlock";
import ShowTime from "../../components/showTime";


export default function Home() {
  return (
    <div>
    
      <Carousel/>
      <HomeTools/>
      <FilmBlock/>
      <ShowTime/>

    </div>
  );
}
