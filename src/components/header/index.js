import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { logoutAction } from "../../actions/userAction";
export default function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  
  
  const location = useLocation();

  const { user } = useSelector((state) => state.userReducer);
  const scrollToMobile = (element) => {
    document.getElementById(element).scrollIntoView({ behavior: "smooth" });
    document.querySelector("#toggleNavBar").click();
  };

  const scrollTo = (element) => {
    document.getElementById(element).scrollIntoView({ behavior: "smooth" });
  };

  const handleClickLogo = () => {
    
    if (location.pathname === "/") {
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

  const logout = () => {
    
    dispatch(logoutAction());
    localStorage.removeItem("user");
    if(location.pathname === "/customer"){
      history.replace("/");
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
              <a className="nav-link m-0">
                Ứng dụng
              </a>
            </li>
          </ul>
        </div>
        <div className="right navbar-collapse flex-grow-0 collapse">
          {user ? (
            <div className="header__user">
              <DropdownButton bsPrefix="btn-logout" title={user.hoTen}>
              <Dropdown.Item onClick={() => {history.push("/customer")}}>
                  Thông tin tài khoản
                </Dropdown.Item>
                <Dropdown.Item onClick={() => logout()}>
                  Đăng xuất
                </Dropdown.Item>
              </DropdownButton>
            </div>
          ) : (
            <div
              onClick={() => {
                history.push("/login");
              }}
              className="d-flex  align-items-center"
            >
              <i className="fa fa-user-circle mr-2" /> <span>Đăng Nhập</span>
            </div>
          )}

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
            {user ? (
              <div
                style={{ cursor: "pointer" }}
                className="mobile-login"
                onClick={()=>{document.querySelector("#toggleNavBar").click();history.push("/customer")}}
              >
                <i className="fa fa-user-circle mr-2" />
                <span>{user.hoTen}</span>
              </div>
            ) : (
              <div
                onClick={() => {
                  history.push("/login");
                }}
                style={{ cursor: "pointer" }}
                className="mobile-login"
              >
                <i className="fa fa-user-circle mr-2" />
                <span>Đăng Nhập</span>
              </div>
            )}
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
            <a onClick={() => logout()} className="mobile-item">
              Đăng xuất
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
}
