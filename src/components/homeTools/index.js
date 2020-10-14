import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom";
export default function HomeTools() {
  const [film, setFilm] = useState({
    filmName: "Phim",
    filmId: 0,
  });
  const history = useHistory();
  const [cinema, setCinema] = useState({
    cinemaName: "Rạp",
    cinemaId: "",
  });
  const [date, setDate] = useState("Ngày xem");
  const [time, setTime] = useState("Suất chiếu");

  const { listFilmShowing } = useSelector((state) => state.filmReducer);
  const { listCinemaDetail } = useSelector((state) => state.cinemaReducer);

  const resetState = (value) => {
    switch (value) {
      case "film":
        {
          setCinema({ cinemaId: "", cinemaName: "Rạp" });
          setDate("Ngày xem");
          setTime("Suất chiếu");
        }
        break;
      case "cinema":
        {
          setDate("Ngày xem");
          setTime("Suất chiếu");
        }
        break;
      case "date":
        {
          setTime("Suất chiếu");
        }
        break;

      default:
        break;
    }
  };

  const colorBtnBooking = () => {
    if (
      film.filmName !== "Phim" &&
      cinema.cinemaName !== "Rạp" &&
      date !== "Ngày xem" &&
      time !== "Suất chiếu"
    ) {
      return true;
    }
  };

  const checkCinema = () => {
    if (film.filmName === "Phim") {
      return <Dropdown.Item>Hãy chọn phim</Dropdown.Item>;
    } else {
      return renderCinema();
    }
  };

  const checkDate = () => {
    if (film.filmName === "Phim" || cinema.cinemaName === "Rạp") {
      return <Dropdown.Item>Hãy chọn phim và rạp</Dropdown.Item>;
    } else {
      return renderDate();
    }
  };

  const checkTime = () => {
    if (
      film.filmName === "Phim" ||
      cinema.cinemaName === "Rạp" ||
      date.dateShow === "Ngày xem"
    ) {
      return <Dropdown.Item>Hãy chọn phim, rạp và ngày chiếu</Dropdown.Item>;
    } else {
      return renderTime();
    }
  };
  const [scheduleId, setScheduleId] = useState();
  const renderTime = () => {
    return listCinemaDetail.map((cinemaGroup) => {
      return cinemaGroup.lstCumRap.map((cinemaDetail) => {
        return cinemaDetail.danhSachPhim.map((propsFilm) => {
          if (
            propsFilm.maPhim === film.filmId &&
            cinemaDetail.maCumRap === cinema.cinemaId
          ) {
            return propsFilm.lstLichChieuTheoPhim.map((schedule, index) => {
              if (schedule.ngayChieuGioChieu.substring(0, 10) === date) {
                let timeSub = schedule.ngayChieuGioChieu.substring(11, 16);
                return (
                  <Dropdown.Item
                    onSelect={() => {
                      setTime(timeSub);
                      setScheduleId(schedule.maLichChieu);
                    }}
                    key={index}
                  >
                    {timeSub}
                  </Dropdown.Item>
                );
              }
            });
          }
        });
      });
    });
  };

  const renderDate = () => {
    return listCinemaDetail.map((cinemaGroup) => {
      return cinemaGroup.lstCumRap.map((cinemaDetail) => {
        return cinemaDetail.danhSachPhim.map((propsFilm) => {
          if (
            propsFilm.maPhim === film.filmId &&
            cinemaDetail.maCumRap === cinema.cinemaId
          ) {
            let dateSubTemp = "";
            return propsFilm.lstLichChieuTheoPhim.map((schedule, index) => {
              let dateSub = schedule.ngayChieuGioChieu.substring(0, 10);
              if (dateSub === dateSubTemp) {
                return;
              }
              dateSubTemp = dateSub;
              return (
                <Dropdown.Item
                  onSelect={() => {
                    setDate(dateSub);
                    resetState("date");
                  }}
                  key={index}
                >
                  {dateSub}
                </Dropdown.Item>
              );
            });
          }
        });
      });
    });
  };

  const renderFilm = () => {
    return listFilmShowing.map((film, index) => {
      return (
        <Dropdown.Item
          onSelect={() => {
            setFilm({ filmName: film.tenPhim, filmId: film.maPhim });
            resetState("film");
          }}
          key={index}
        >
          {film.tenPhim}
        </Dropdown.Item>
      );
    });
  };

  const renderCinema = () => {
    return listCinemaDetail.map((cinemaGroup) => {
      return cinemaGroup.lstCumRap.map((cinemaDetail) => {
        return cinemaDetail.danhSachPhim.map((propsFilm, index) => {
          if (propsFilm.maPhim === film.filmId) {
            return (
              <Dropdown.Item
                onSelect={() => {
                  setCinema({
                    cinemaName: cinemaDetail.tenCumRap,
                    cinemaId: cinemaDetail.maCumRap,
                  });
                  resetState("cinema");
                }}
                key={index}
              >
                {cinemaDetail.tenCumRap}
              </Dropdown.Item>
            );
          }
        });
      });
    });
  };

  return (
    <section className="home-tool">
      <div className="row home-tool__content">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-film">{film.filmName}</Dropdown.Toggle>
          <Dropdown.Menu flip={false}>{renderFilm()}</Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-cinema">
            {cinema.cinemaName}
          </Dropdown.Toggle>
          <Dropdown.Menu flip={false}>{checkCinema()}</Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-date">{date}</Dropdown.Toggle>
          <Dropdown.Menu flip={false}>{checkDate()}</Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-date">{time}</Dropdown.Toggle>
          <Dropdown.Menu flip={false}>{checkTime()}</Dropdown.Menu>
        </Dropdown>
        <button
          onClick={() => {
            window.open(`/checkout/${scheduleId}`,"_blank")
            
          }}
          className={`btn ${colorBtnBooking() ? "btn-booking" : "btn-modify"}`}
        >
          MUA VÉ NGAY
        </button>
      </div>
    </section>
  );
}
