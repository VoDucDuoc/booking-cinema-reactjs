import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearFilmDetail, getFilmDetail } from "../../actions/filmAction";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Rate } from "antd";
import { Tabs, Row, Col, Nav, Tab } from "react-bootstrap";
import { getCinemaList, getCinemaDetailList } from "../../actions/cinemaAction";
import { showModal, hideModal } from "../../actions/modalTrailerAction";
import MyVerticallyCenteredModal from "../../components/modalTrailer";
import useLoader from "../../hook/useLoader";
export default function FilmDetail(props) {
  const { match } = props;

  const [loader] = useLoader();
  const { show, url } = useSelector((state) => state.modalTrailerReducer);

  const dispatch = useDispatch();
  const { detailFilm } = useSelector((state) => state.filmReducer);

  const filmId = match.params.filmId;
  useEffect(() => {
    dispatch(getFilmDetail(filmId));
    dispatch(getCinemaList());
    dispatch(getCinemaDetailList());
    return () => {
      dispatch(clearFilmDetail());
    };
  }, []);

  const { listCinema } = useSelector((state) => state.cinemaReducer);
  const { listCinemaDetail } = useSelector((state) => state.cinemaReducer);

  const [key, setKey] = useState("show");
  const [keyDate, setKeyDate] = useState(0);

  const firstKey = detailFilm?.heThongRapChieu?.[0].maHeThongRap;

  const scrollTo = (element) => {
    document.getElementById(element).scrollIntoView({ behavior: "smooth" });
  };

  const renderCinema = () => {
    return listCinema.map((cinema, index) => {
      return (
        <Nav.Item key={index}>
          <Nav.Link
            onClick={() => {
              setKeyDate(0);
            }}
            eventKey={cinema.maHeThongRap}
          >
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

  const renderSchedule = () => {
    return listCinemaDetail.map((cinema, index) => {
      return (
        <Tab.Pane key={index} eventKey={cinema.maHeThongRap}>
          <Tabs activeKey={keyDate} onSelect={(k) => setKeyDate(k)}>
            {renderDate(cinema)}
          </Tabs>
        </Tab.Pane>
      );
    });
  };

  const getDate = () => {
    const arrDate = [];
    let date = "";
    const eachDate = detailFilm.heThongRapChieu?.[0].cumRapChieu?.[0].lichChieuPhim.forEach(
      (schedule) => {
        let dateNext = schedule.ngayChieuGioChieu.substring(0, 10);

        if (dateNext !== date) {
          arrDate.push(dateNext);
          date = dateNext;
        }
      }
    );
    return arrDate;
  };

  const renderDate = (cinema) => {
    const arrDate = getDate();
    let index = detailFilm.heThongRapChieu.findIndex(
      (cinemaShowing) => cinemaShowing.maHeThongRap === cinema.maHeThongRap
    );
    let cinemaShowing = detailFilm.heThongRapChieu[index];
    if (index === -1) {
      return arrDate.map((date, index) => {
        let modDate = `${date.substring(8, 10)}-${date.substring(5, 7)}`;

        return (
          <Tab
            key={index}
            eventKey={index}
            title={modDate}
            tabClassName="disabled-date"
          >
            <div className="tab-content-modify">
              <p>Không có suất chiếu</p>
            </div>
          </Tab>
        );
      });
    } else {
      return arrDate.map((date, index) => {
        let modDate = `${date.substring(8, 10)}-${date.substring(5, 7)}`;
        return (
          <Tab key={index} eventKey={index} title={modDate}>
            {renderCinemaDetail(cinemaShowing, cinema, date)}
          </Tab>
        );
      });
    }
  };

  const renderCinemaDetail = (cinemaShowing, cinema, date) => {
    return cinemaShowing.cumRapChieu.map((cinemaShowingDetail, index) => {
      let indexCheck = cinema.lstCumRap.findIndex(
        (cinema) => cinema.maCumRap === cinemaShowingDetail.maCumRap
      );
      if (indexCheck !== -1) {
        return (
          <div className="tab-content-modify" key={index}>
            <div className="d-flex align-items-center">
              <img
                src={cinema.logo}
                alt={cinema.logo}
                style={{ width: "60px", height: "60px" }}
              />
              <div className="ml-2">
                <p>{cinemaShowingDetail.tenCumRap}</p>
                <p style={{ fontSize: "14px", opacity: 0.8 }}>
                  {cinema.lstCumRap[indexCheck].diaChi}
                </p>
              </div>
            </div>
            {renderTime(cinemaShowingDetail, date)}
          </div>
        );
      }
    });
  };
  const {user} = useSelector(state => state.userReducer);

  const isLogin = (scheduleId) =>{
    if(user === null){
      props.history.push("/login")
    }else{
      window.open(`/checkout/${scheduleId}`, "_blank");
    }
  }
  const renderTime = (cinemaShowingDetail, date) => {
    return cinemaShowingDetail.lichChieuPhim.map((schedule, index) => {
      if (date === schedule.ngayChieuGioChieu.substring(0, 10)) {
        
        return (
          <button onClick={()=>{isLogin(schedule.maLichChieu)}} key={index} className="btn btn-time ml-0 mr-2">
            {schedule.ngayChieuGioChieu.substring(11, 16)}
          </button>
        );
      }
    });
  };

  const renderInfo = () => {
    return (
      <div className="row filmDetail__info">
        <div className="col-6">
          <div className="row">
            <div className="col-6 mb-2">
              <p className="info__title">Ngày công chiếu</p>
            </div>
            <div className="col-6 mb-2">
              <p>{detailFilm?.ngayKhoiChieu?.substring(0, 10)}</p>
            </div>
            <div className="col-6 mb-2">
              <p className="info__title">Đạo diễn</p>
            </div>
            <div className="col-6 mb-2">
              <p>Trần Thanh Huy</p>
            </div>
            <div className="col-6 mb-2">
              <p className="info__title">Diễn viên</p>
            </div>
            <div className="col-6 mb-2">
              <p>Cát Phượng, Trấn Thành</p>
            </div>
            <div className="col-6 mb-2">
              <p className="info__title">Thể loại</p>
            </div>
            <div className="col-6 mb-2">
              <p>Tội phạm, drama</p>
            </div>
            <div className="col-6 mb-2">
              <p className="info__title">Định dạng</p>
            </div>
            <div className="col-6 mb-2">
              <p>2D/Digital</p>
            </div>
            <div className="col-6 mb-2">
              <p className="info__title">Quốc gia SX</p>
            </div>
            <div className="col-6 mb-2">
              <p>Việt Nam</p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <p className="info__title mb-2">Nội dung</p>
          <p>{detailFilm.moTa}</p>
        </div>
      </div>
    );
  };

  const renderRate = () => {
    return (
      <div
        className="filmDetail__rate"
        style={{ maxWidth: "580px", margin: "20px auto" }}
      >
        <div className="d-flex align-items-center justify-content-between rate__item">
          <div>
            <img
              style={{ width: "50px", height: "50px" }}
              src="/img/loading.png"
              alt="/img/loading.png"
            />
            <span style={{ opacity: "0.8" }}>Bạn nghĩ gì về phim này?</span>
          </div>
          <div style={{ color: "#fb4226", opacity: "0.5" }}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
        </div>
        <div className="rate__item">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex ">
              <img
                style={{ width: "50px", height: "50px" }}
                src="/img/loading.png"
                alt="/img/loading.png"
              />
              <div>
                <p style={{ fontWeight: "bold" }}>User 1</p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    opacity: "0.8",
                  }}
                >
                  2 giờ trước
                </p>
              </div>
            </div>
            <div style={{ color: "#fb4226", fontSize: "14px" }}>
              <p
                style={{
                  color: "#91d25a",
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                10
              </p>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
          <div style={{ padding: "10px 0" }} className="rate__cmt">
            <p style={{ paddingBottom: "10px" }}>
              Ko biết mọi người như thế nào chứ mình xem Ròm mình cảm nhận dc
              góc sống rất thật của Sài Gòn .Hi vọng Ròm sẽ dc nhiều ng ủng hộ
              hơn
            </p>
          </div>
          <div className="d-flex align-items-center">
            <i className="fa fa-thumbs-up" style={{ color: "#737576" }}></i>
            <span style={{ margin: "0 10px", fontWeight: "bold" }}>0</span>
            <p style={{ color: "#737576" }}>Thích</p>
          </div>
        </div>
        <div className="rate__item">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex ">
              <img
                style={{ width: "50px", height: "50px" }}
                src="/img/loading.png"
                alt="/img/loading.png"
              />
              <div>
                <p style={{ fontWeight: "bold" }}>User 1</p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    opacity: "0.8",
                  }}
                >
                  2 giờ trước
                </p>
              </div>
            </div>
            <div style={{ color: "#fb4226", fontSize: "14px" }}>
              <p
                style={{
                  color: "#91d25a",
                  textAlign: "center",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                10
              </p>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
          <div style={{ padding: "10px 0" }} className="rate__cmt">
            <p style={{ paddingBottom: "10px" }}>
              Ko biết mọi người như thế nào chứ mình xem Ròm mình cảm nhận dc
              góc sống rất thật của Sài Gòn .Hi vọng Ròm sẽ dc nhiều ng ủng hộ
              hơn
            </p>
          </div>
          <div className="d-flex align-items-center">
            <i className="fa fa-thumbs-up" style={{ color: "#737576" }}></i>
            <span style={{ margin: "0 10px", fontWeight: "bold" }}>0</span>
            <p style={{ color: "#737576" }}>Thích</p>
          </div>
        </div>
        <div style={{ margin: "20px 0", textAlign: "center" }}>
          <button className="btn filmDetail__btn">Xem thêm</button>
        </div>
      </div>
    );
  };
  return (
    <div
      className="filmDetail"
      style={{ marginTop: "70px", position: "relative" }}
    >
      {loader}
      <div style={{ position: "relative", height: "400px", width: "100%" }}>
        <div
          className="filmDetail__backGround"
          style={{
            backgroundImage: `url('${detailFilm.hinhAnh}'), url("")`,
          }}
        ></div>

        <div className="filmDetail__layout">
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
              <div style={{ position: "relative" }}>
                <img
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "";
                  }}
                  style={{ width: "250px", height: "300px" }}
                  src={detailFilm.hinhAnh}
                  alt={detailFilm.hinhAnh}
                />
                <div className="layout-film-item">
                  <a onClick={() => dispatch(showModal(detailFilm.trailer))}>
                    <i className="fa fa-play"></i>
                  </a>
                </div>
              </div>
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
                  <button
                    onClick={() => {
                      scrollTo('detailFilmShowsTime')
                    }}
                    className="btn filmDetail__btn"
                  >
                    MUA VÉ
                  </button>
                </div>
              </div>
            </div>
            <div className="filmDetail__rating">
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
        <div className="filmDetail__layout-mobile">
          <div className="layout-film-item">
            <a onClick={() => dispatch(showModal(detailFilm.trailer))}>
              <i className="fa fa-play"></i>
            </a>
          </div>
        </div>
      </div>

      <div
        className="showstime"
        id="detailFilmShowsTime"
        style={{ paddingTop: "40px", maxWidth: "840px" }}
      >
        <Tabs
          id="tabs-FilmDetail"
          className="tab-title"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="show" title="Lịch chiếu">
            {firstKey ? (
              <Tab.Container id="tab-cinema" defaultActiveKey={firstKey}>
                <Row>
                  <Col className="tab-modify" sm={3}>
                    <Nav variant="pills" className="flex-column">
                      {renderCinema()}
                    </Nav>
                  </Col>
                  <Col className="tab-modify" sm={9}>
                    <Tab.Content>{renderSchedule()}</Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            ) : null}
          </Tab>
          <Tab eventKey="info" title="Thông Tin">
            {renderInfo()}
          </Tab>
          <Tab eventKey="rate" title="Đánh Giá">
            {renderRate()}
          </Tab>
        </Tabs>
      </div>
      <MyVerticallyCenteredModal
        trailer={url}
        show={show}
        onHide={() => dispatch(hideModal())}
      />
    </div>
  );
}
