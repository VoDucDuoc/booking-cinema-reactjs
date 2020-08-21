import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { useSelector } from "react-redux";
export default function ShowTime() {
  const { listCinema } = useSelector((state) => state.cinemaReducer);
  const { listCinemaDetail } = useSelector(
    (state) => state.cinemaDetailReducer
  );
  console.log(listCinema);
  console.log(listCinemaDetail);
  const [key, setKey] = useState("BHDStar");
  const renderLogo = (logo) => {
    return (
      <img alt={logo} style={{ width: "50px", height: "50px" }} src={logo} />
    );
  };
  
  const renderCinemaDetail= (maHeThongRap, logo)=>{
    return listCinemaDetail.map((item)=>{
      let renderAddress = [];
      if(item.maHeThongRap === maHeThongRap){
        let render = '';
        item.lstCumRap.map((itemm, index)=>{
          console.log(itemm);
          render = <div key={index} className="card">
          <img className="card-img-top" style={{width: '50px', height: '50px'}} src={logo} alt={logo} />
          <div className="card-body">
            <h4 className="card-title">{itemm.tenCumRap}</h4>
            <p className="card-text">{itemm.diaChi}</p>
          </div>
        </div>
        
          renderAddress.push(render)
        })
      }
      return renderAddress;

    })
  }
  const renderCinema = () => {
    return listCinema.map((item, index) => {
      return (
        <Tab key={index} eventKey={item.maHeThongRap} title={renderLogo(item.logo)}>
          {renderCinemaDetail(item.maHeThongRap, item.logo)}
        </Tab>
      );
    });
  };
  return (
    <div className="mt-5 showstime">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        {renderCinema()}
        
      </Tabs>
    </div>
  );
}
