import React from "react";

export default function Header() {
  return (
    <section className="header">
      <nav className="navbar navbar-expand-md navbar-light bg-light justify-content-between">
        <a className="navbar-brand ml-4 mr-0 p-0" href="#">
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
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse flex-grow-0 center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#filmBlock">
                Lịch chiếu <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#showTime">
                Cụm rạp
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
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
            <a className="mobile-item" href="#">
              Lịch chiếu
            </a>
            <a className="mobile-item" href="#">
              Cụm rạp
            </a>
            <a className="mobile-item" href="#">
              Tin tức
            </a>
            <a className="mobile-item" href="#">
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
