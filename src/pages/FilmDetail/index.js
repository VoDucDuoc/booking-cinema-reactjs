import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilmDetail } from "../../actions/filmAction";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Rate } from "antd";
import { Tabs, Row, Col, Nav, Tab } from "react-bootstrap";
import { getCinemaList, getCinemaDetailList } from "../../actions/cinemaAction";
export default function FilmDetail(props) {
  const { location, match } = props;
  console.log(location, match);

  const dispatch = useDispatch();
  const { detailFilm } = useSelector((state) => state.filmReducer);

  const filmId = match.params.filmId;
  useEffect(() => {
    dispatch(getFilmDetail(filmId));
    dispatch(getCinemaList());
    dispatch(getCinemaDetailList());
  }, []);

  const { listCinema } = useSelector((state) => state.cinemaReducer);
  const { listCinemaDetail } = useSelector((state) => state.cinemaReducer);

  const [key, setKey] = useState("show");
  const [keyDate, setKeyDate] = useState("");

  const firstKey = detailFilm?.heThongRapChieu?.[0].maHeThongRap;
  const renderCinema = () => {
    return listCinema.map((cinema, index) => {
      return (
        <Nav.Item key={index}>
          <Nav.Link eventKey={cinema.maHeThongRap}>
            <img
              src={cinema.logo}
              alt={cinema.logo}
              style={{
                width: "50px",
                height: "50px",
                marginRight: "10px",
              }}
            />
            <p style={{ margin: 0 }}>{cinema.tenHeThongRap}</p>
          </Nav.Link>
        </Nav.Item>
      );
    });
  };

  const renderTime = () => {
    return listCinemaDetail.map((cinema, indexCinema) => {
      console.log(cinema);
      const tabPane = [];
      let count = 0;
      cinema.lstCumRap.map((cinemaDetail) => {
        cinemaDetail.danhSachPhim.forEach((film, index) => {
          if (parseInt(filmId) === film.maPhim) {
            count += 1;
            tabPane.push(
              <Tab.Pane key={index} eventKey={cinema.maHeThongRap}>
                <div className="d-flex align-items-center">
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                      marginRight: "10px",
                      marginLeft: "10px",
                    }}
                    src={cinema.logo}
                    alt={cinema.logo}
                  />
                  <div>
                    <p style={{ fontSize: "1.2rem" }}>
                      {cinemaDetail.tenCumRap}
                    </p>
                    <p style={{ color: "#949494", fontSize: "1rem" }}>
                      {cinemaDetail.diaChi}
                    </p>
                  </div>
                </div>
              </Tab.Pane>
            );
          }
        });
      });
      if (count === 0) {
        return (
          <Tab.Pane key={indexCinema} eventKey={cinema.maHeThongRap}>
            <p className="text-center">Không có suất chiếu</p>
          </Tab.Pane>
        );
      }
      return tabPane;
    });
  };

  const renderSchedule = () => {

  };

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
              <div style={{ color: "#e9e9e9", marginLeft: "10px" }}>
                <p style={{ fontSize: "14px", marginBottom: "5px" }}>
                  {detailFilm.ngayKhoiChieu?.substring(0, 10)}
                </p>
                <p style={{ fontSize: "24px", fontWeight: 550 }}>
                  {detailFilm.tenPhim}
                </p>
                <p
                  style={{
                    fontSize: "1rem",
                    opacity: "0.9",
                    marginBottom: "15px",
                  }}
                >
                  100 phút - 0 IMDb - 2D/Digital
                </p>
                <div style={{ width: "90px" }} className="d-flex flex-column">
                  <button className="btn film-detail__btn">MUA VÉ</button>
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

      <div
        className="showstime"
        style={{ paddingTop: "40px", maxWidth: "840px" }}
      >
        <Tabs
          className="tab-title"
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="show" title="Lịch chiếu">
            {firstKey ? (
              <Tab.Container defaultActiveKey={firstKey}>
                <Row>
                  <Col className="tab-modify" sm={3}>
                    <Nav variant="pills" className="flex-column">
                      {renderCinema()}
                    </Nav>
                  </Col>
                  <Col className="tab-modify" sm={9}>
                    <Tab.Content>{renderTime()}</Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            ) : null}
          </Tab>
          <Tab eventKey="info" title="Thông Tin">
            info
          </Tab>
          <Tab eventKey="rate" title="Đánh Giá">
            rate
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
