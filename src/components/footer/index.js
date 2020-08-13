import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <p>TIX</p>
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
          <div className="col-4">
              <p>Đối tác</p>
          </div>
          <div className="col-4">
              <div className="row">
              <div className="col-6">MOBILE APP</div>
              <div className="col-6">SOCIAL</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
