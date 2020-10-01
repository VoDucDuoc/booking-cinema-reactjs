import React from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
export default function Header() {
  const history = useHistory();
  const params = useParams();
  const location = useLocation();
  console.log("location neeee", location.pathname);
  const scrollToMobile = (element) => {
    document.getElementById(element).scrollIntoView({ behavior: "smooth" });
    document.querySelector("#toggleNavBar").click();
  };

  const scrollTo = (element) => {
    document.getElementById(element).scrollIntoView({ behavior: "smooth" });
  };

  const handleClickLogo = () => {
    const count = Object.keys(params).length;
    if (count === 0) {
      scrollTo("carousel");
    } else {
      history.push("/");
    }
  };

  const checkHomePage = () => {
    if (location.pathname === "/") {
      return true;
    } else {
      return false;
    }
  };

  const backHomeThenScrollTo = (element) => {
    document.querySelector("#toggleNavBar").click();
    history.push("/");
    setTimeout(() => {
      document.getElementById(element).scrollIntoView({ behavior: "smooth" });
    }, 1000);
  };
  return (
    <section className="header">
      <nav className="navbar navbar-expand-md navbar-light bg-light justify-content-between">
        {location.pathname !== "/" ? (
          <a
            onClick={() => {
              history.goBack();
            }}
            className="header__backMobile"
          >
            <img
              style={{ width: "30px", height: "30px" }}
              src="/img/prev.png"
              alt="/img/prev.png"
            />
          </a>
        ) : null}

        <a
          style={{ cursor: "pointer" }}
          onClick={() => {
            handleClickLogo();
          }}
          className="navbar-brand ml-4 mr-0 p-0"
        >
          <img
            src="/img/layer1.png"
            style={{ width: 50, height: 50 }}
            alt="123"
          />
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="toggleNavBar"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse flex-grow-0 center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => {
                  scrollTo("filmBlock");
                }}
              >
                Lịch chiếu
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => {
                  scrollTo("showTime");
                }}
              >
                Cụm rạp
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => {
                  scrollTo("news");
                }}
              >
                Tin tức
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link m-0" href="#">
                Ứng dụng
              </a>
            </li>
          </ul>
        </div>
        <div className="right navbar-collapse flex-grow-0 collapse">
          <div className="d-flex align-items-center">
            <i className="fa fa-user-circle mr-2" /> <span>Đăng Nhập</span>
          </div>
          <div className="ml-3 dropdown d-flex align-items-center">
            <i className="fa fa-map-marker" />
            <a
              className="nav-link dropdown-toggle pl-2"
              href="#"
              id="dropdownId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Hồ Chí Minh
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <a className="dropdown-item" href="#">
                Action 1
              </a>
              <a className="dropdown-item" href="#">
                Action 2
              </a>
            </div>
          </div>
        </div>
        <div id="collapsibleNavId" className=" my-collapse flex-grow-0">
          <div className="header__mobile">
            <div className="mobile-login">
              <i className="fa fa-user-circle mr-2" />
              <span>Đăng Nhập</span>
            </div>
            <a
              onClick={() => {
                if (checkHomePage()) {
                  scrollToMobile("filmBlock");
                } else {
                  backHomeThenScrollTo("filmBlock");
                }
              }}
              className="mobile-item"
            >
              Lịch chiếu
            </a>
            <a
              className="mobile-item"
              onClick={() => {
                if (checkHomePage()) {
                  scrollToMobile("showTime");
                } else {
                  backHomeThenScrollTo("showTime");
                }
              }}
            >
              Cụm rạp
            </a>
            <a
              className="mobile-item"
              onClick={() => {
                if (checkHomePage()) {
                  scrollToMobile("news");
                } else {
                  backHomeThenScrollTo("news");
                }
              }}
            >
              Tin tức
            </a>
            <a
              className="mobile-item"
              onClick={() => {
                if (checkHomePage()) {
                  scrollToMobile("news");
                } else {
                  backHomeThenScrollTo("news");
                }
              }}
            >
              Ứng dụng
            </a>
            <a className="mobile-item" href="#">
              Hồ Chí Minh
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
}
