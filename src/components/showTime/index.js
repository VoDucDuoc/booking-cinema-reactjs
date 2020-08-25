import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import { Tab, Row, Nav, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
export default function ShowTime() {
  const { listCinema } = useSelector((state) => state.cinemaReducer);
  const { listCinemaDetail } = useSelector(
    (state) => state.cinemaDetailReducer
  );
  const [key, setKey] = useState("BHDStar");
  const renderLogo = (logo) => {
    return (
      <img alt={logo} style={{ width: "50px", height: "50px" }} src={logo} />
    );
  };
  const renderCinemaShowTime = (maHeThongRap) => {
    return listCinemaDetail.map((cinema) => {
      let renderShowtime = [];
      if (cinema.maHeThongRap === maHeThongRap) {
        let render = "";
        cinema.lstCumRap.map((cinemaDetail, index) => {
          render = (
            <Tab.Pane key={index} eventKey={`${cinema.maHeThongRap}-${index}`}>
              <p>{cinemaDetail.tenCumRap}</p>
            </Tab.Pane>
          );
          renderShowtime.push(render);
        });
      }
      return renderShowtime;
    });
  };
  const renderCinemaDetail = (maHeThongRap, logo) => {
    return listCinemaDetail.map((cinema) => {
      let renderAddress = [];
      if (cinema.maHeThongRap === maHeThongRap) {
        let render = "";
        console.log(maHeThongRap);
        cinema.lstCumRap.map((cinemaDetail, index) => {
          render = (
            <Nav.Item key={index}>
              <Nav.Link eventKey={`${cinema.maHeThongRap}-${index}`}>
                <div className="card">
                  <img
                    className="card-img-top"
                    style={{ width: "50px", height: "50px" }}
                    src={logo}
                    alt={logo}
                  />
                  <div className="card-body">
                    <h4 
                    className="card-title">{cinemaDetail.tenCumRap}</h4>
                    <p className="card-text">{cinemaDetail.diaChi}</p>
                  </div>
                </div>
              </Nav.Link>
            </Nav.Item>
          );

          renderAddress.push(render);
        });
      }
      return renderAddress;
    });
  };
  const renderCinema = () => {
    return listCinema.map((item, index) => {
      return (
        <Tab
          key={index}
          eventKey={item.maHeThongRap}
          title={renderLogo(item.logo)}
        >
          <Tab.Container defaultActiveKey={`${item.maHeThongRap}-0`}>
            <Row>
              <Col sm={5}>
                <Nav variant="pills" className="flex-column">
                  {renderCinemaDetail(item.maHeThongRap, item.logo)}
                </Nav>
              </Col>
              <Col sm={7}>
                <Tab.Content>
                  {renderCinemaShowTime(item.maHeThongRap)}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
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
