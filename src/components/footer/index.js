import React from "react";

export default function Footer() {
  return (
    <section className="footer" style={{width: '100%'}}>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h4>Chizz Cinema</h4>
            <div className="row">
              <div className="col-6">
                <p>FAQ</p>
                <p>Brand Guidelines</p>
              </div>
              <div className="col-6">
                <p>Thoả thuận sử dụng</p>
                <p>Chính sách bảo mật</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6 text-center">
                <h4>MOBILE APP</h4>
                <i className="fab fa-apple"></i>
                <i className="fab fa-android"></i>
              </div>
              <div className="col-6 text-center">
                <h4>SOCIAL</h4>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-youtube"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
