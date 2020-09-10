import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilmDetail } from "../../actions/filmAction";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "antd/dist/antd.css";
import { Rate } from "antd";
import {Popover, OverlayTrigger, Tab, Row, Col, Nav} from "react-bootstrap";
import { getCinemaList, getCinemaDetailList } from "../../actions/cinemaAction";
export default function FilmDetail(props) {
  
  const { location, match } = props;
  console.log(location, match);

  const dispatch = useDispatch();
  const { detailFilm } = useSelector((state) => state.filmReducer);

  useEffect(() => {
    const FilmId = match.params.filmId;
    dispatch(getFilmDetail(FilmId));
    dispatch(getCinemaList());
    dispatch(getCinemaDetailList());
  }, []);
  console.log(detailFilm);

  const { listCinema } = useSelector((state) => state.cinemaReducer);
  const { listCinemaDetail } = useSelector((state) => state.cinemaReducer);

const popover = (
    <Popover>
      <Popover.Title as="h3">Mô tả</Popover.Title>
      <Popover.Content>
        {detailFilm.moTa}
      </Popover.Content>
    </Popover>
  );
  
  const PopoverDetail = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <a style={{marginLeft: '15px', marginTop: '15px', textDecorationLine: 'underline'}}>Chi tiết</a>
    </OverlayTrigger>
  );

  const renderNav = () => {
    
  }
    

  return (
    <div
      className="film-detail"
      style={{ marginTop: "70px", position: "relative" }}
    >
      <div style={{ position: "relative", height: "400px", width: "100%" }}>
        <div
          style={{
            backgroundImage: `url('${detailFilm.hinhAnh}'), url("")`,
            height: "400px",
            backgroundSize: "cover",
            backgroundRepeat: "none",
            backgroundPosition: "center center",
            filter: "blur(10px)",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "840px",
            width: "100%",
            height: "300px",
          }}
        >
          <div
            className="d-flex align-items-center"
            style={{ position: "relative", width: "100%", height: "100%" }}
          >
            <div
              className="d-flex align-items-center"
              style={{
                position: "absolute",
                left: "0",
                height: "100%",
                width: "60%",
              }}
            >
              <img
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "";
                }}
                style={{ width: "250px", height: "300px" }}
                src={detailFilm.hinhAnh}
                alt={detailFilm.hinhAnh}
              />
              <div  style={{ color: "#e9e9e9", marginLeft: "10px" }}>
                <p style={{ fontSize: "14px", marginBottom: "5px" }}>
                  {detailFilm.ngayKhoiChieu?.substring(0, 10)}
                </p>
                <p style={{ fontSize: "24px", fontWeight: 550 }}>
                  {detailFilm.tenPhim}
                </p>
                <div style={{width: '85px'}} className="d-flex flex-column">
                <button className="btn film-detail__btn">MUA VÉ</button>
                <PopoverDetail/>
                </div>
              </div>
            </div>
            <div className="film-detail__rating">
              <CircularProgressbar
                value={detailFilm.danhGia}
                text={`${detailFilm.danhGia}`}
                maxValue={10}
                strokeWidth={8}
                styles={buildStyles({
                  // Colors
                  pathColor: `rgba(0, 230, 64, 1), ${detailFilm.danhGia})`,
                  textColor: "white",
                  trailColor: "rgba(0, 0, 0, 0.9)",
                  backgroundColor: "#3e98c7",
                })}
              />
              {detailFilm.danhGia ? (
                <Rate
                  allowHalf
                  disabled
                  defaultValue={detailFilm.danhGia / 2}
                />
              ) : null}
              <p>44 người đánh giá</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="showstime" style={{ paddingTop: "40px", maxWidth: '840px' }}>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Tab 2</Nav.Link>
        </Nav.Item>
        {renderNav()}
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
          11111111111111
        </Tab.Pane>
        <Tab.Pane eventKey="second">
          22222222222
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
      </div>
    </div>
  );
}
