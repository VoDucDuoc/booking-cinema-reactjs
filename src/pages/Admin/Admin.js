import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown, DropdownButton, Table, Modal } from "react-bootstrap";
import { getFilmList } from "../../actions/filmAction";
export default function Admin() {
  const { admin } = useSelector((state) => state.adminReducer);
  const { listFilmShowing } = useSelector((state) => state.filmReducer);
  console.log(listFilmShowing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFilmList());
  }, []);
  const [showDescribeFilm, setShowDescribeFilm] = useState(false);
  const [showEditFilm, setShowEditFilm] = useState(false);
  const [describeFilm, setDescribeFilm] = useState("");
  const [editFilm, setEditFilm] = useState();
  const handleClose = () => {
    setShowDescribeFilm(false);
    setShowEditFilm(false);
  };
  const renderEditFilm = (film) => {
    return (
        <tr>
          <td>
            <p>{film?.maPhim}</p>
          </td>
          <td>
            <p>{film?.tenPhim}</p>
          </td>
          <td>
            <img
              style={{ width: "50px", height: "50px" }}
              src={film?.hinhAnh}
              alt="hinhAnh"
            />
          </td>
          <td>
            <p
            >
              {film?.moTa}
            </p>
          </td>
          <td>
            <p>{film?.maNhom}</p>
          </td>
          <td>
            <p>{film?.ngayKhoiChieu.substring(0, 10)}</p>
          </td>
          
        </tr>
    )
  }
  const renderListFilm = () => {
    return listFilmShowing.map((film, index) => {
      return (
        <tr key={index}>
          <td>
            <p>{film.maPhim}</p>
          </td>
          <td>
            <p>{film.tenPhim}</p>
          </td>
          <td>
            <img
              style={{ width: "50px", height: "50px" }}
              src={film.hinhAnh}
              alt="hinhAnh"
            />
          </td>
          <td>
            <p
              onClick={() => {
                setDescribeFilm(film.moTa);
                setShowDescribeFilm(true);
              }}
              style={{ cursor: "pointer" }}
            >
              Xem thêm
            </p>
          </td>
          <td>
            <p>{film.maNhom}</p>
          </td>
          <td>
            <p>{film.ngayKhoiChieu.substring(0, 10)}</p>
          </td>
          <td>
            <div className="d-flex justify-content-between">
              <button className="btn btn-secondary">Tạo lịch chiếu</button>
              <button onClick={()=>{setShowEditFilm(true); setEditFilm(film)}} className="btn btn-primary">Sửa</button>
              <button className="btn btn-danger">Xoá</button>
            </div>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="admin-home">
      <div className="header d-flex align-items-center justify-content-end">
        <div>
          <DropdownButton bsPrefix="btn-logout" title={`Chào Admin !`}>
            <Dropdown.Item onClick={() => {}}>Đăng xuất</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div className="dashboard" style={{ padding: "10px 20px" }}>
        <div className="d-flex align-items-center justify-content-center">
          <img
            style={{ width: "50px", height: "50px" }}
            src="/img/layer1.png"
            alt="/img/layer1.png"
          />
          <p style={{ margin: "0 10px", fontWeight: "bold" }}>Dashboard</p>
        </div>
        <div style={{ marginTop: "50px" }}>
          <p
            style={{
              textDecoration: "underline",
              margin: "10px 0",
            }}
          >
            Quản lý phim
          </p>
          <p
            style={{
              textDecoration: "underline",
              margin: "10px 0",
            }}
          >
            Quản lý người dùng
          </p>
        </div>
      </div>
      <div
        style={{ marginTop: "90px", marginLeft: "250px" }}
        className="admin-content"
      >
        <div className="admin-content-film">
          <button className="btn btn-secondary">Thêm phim</button>
          <Table className="table-film" striped bordered hover>
            <thead>
              <tr>
                <th>Mã phim</th>
                <th>Tên phim</th>
                <th>Hình ảnh</th>
                <th>Mô tả</th>
                <th>Mã nhóm</th>
                <th>Ngày khởi chiếu</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{renderListFilm()}</tbody>
          </Table>
        </div>
      </div>
      <Modal
        show={showDescribeFilm}
        id="modal-describeFilm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
      >
        <Modal.Body>
          <p>{describeFilm}</p>
          <a
            onClick={() => {
              handleClose();
            }}
          >
            <i className="fa fa-times"></i>
          </a>
        </Modal.Body>
      </Modal>
      <Modal
        show={showEditFilm}
        id="modal-editFilm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
      >
        <Modal.Body>
        <Table className="table-film" striped bordered hover>
            <thead>
              <tr>
                <th>Mã phim</th>
                <th>Tên phim</th>
                <th>Hình ảnh</th>
                <th>Mô tả</th>
                <th>Mã nhóm</th>
                <th>Ngày khởi chiếu</th>
               
              </tr>
            </thead>
            <tbody>
                {renderEditFilm(editFilm)}
            </tbody>
          </Table>
          <a
            onClick={() => {
              handleClose();
            }}
          >
            <i className="fa fa-times"></i>
          </a>
        </Modal.Body>
      </Modal>
    </div>
  );
}
