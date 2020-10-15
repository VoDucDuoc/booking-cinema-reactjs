import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown, DropdownButton, Table, Modal } from "react-bootstrap";
import { getFilmList } from "../../actions/filmAction";
import {
  addFilmAction,
  addScheduleAction,
  addUserAction,
  deleteFilmAction,
  deleteUserAction,
  editFilmAction,
  editFilmUploadAction,
  editUserAction,
  getUserList,
  logoutAction,
  reloadErrorAction,
  searchUserAction,
} from "../../actions/adminAction";
import {
  getCinemaDetailList,
  getCinemaSystemInfo,
} from "../../actions/cinemaAction";
import { getUserFromLocal, getUserInfo } from "../../actions/userAction";

export default function Admin(props) {
  const dispatch = useDispatch();
  const getAdmin = () => {
    const adminLocal = localStorage.getItem("user");
    if (adminLocal) {
      dispatch(getUserFromLocal(JSON.parse(adminLocal)));
    }
  };

  useEffect(() => {
    dispatch(getCinemaDetailList());
    getAdmin();
  }, []);

  const {
    error,
    statusEdit,
    statusDelete,
    statusAddFilm,
    userList,
    statusEditUser,
    statusDeleteUser,
    statusAddUser,
    statusAddSchedule,
  } = useSelector((state) => state.adminReducer);

  useEffect(() => {
    dispatch(getFilmList());
  }, [statusEdit, statusDelete, statusAddFilm]);

  useEffect(() => {
    dispatch(getUserList());
  }, [statusEditUser, statusDeleteUser, statusAddUser]);

  const { listFilmShowing } = useSelector((state) => state.filmReducer);

  const { listCinemaDetail, listCinemaSystemInfo } = useSelector(
    (state) => state.cinemaReducer
  );

  const { userInfo, user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getUserInfo({ taiKhoan: user?.taiKhoan }));
  }, [user]);

  const addScheduleRef = useRef(null);

  const [showDescribeFilm, setShowDescribeFilm] = useState(false);
  const [showEditFilm, setShowEditFilm] = useState(false);
  const [describeFilm, setDescribeFilm] = useState("");
  const [editFilm, setEditFilm] = useState();
  const [valuesEditFilm, setValuesEditFilm] = useState();
  const [showDeleteFilm, setShowDeleteFilm] = useState(false);
  const [passwordDeleteFilm, setPasswordDeleteFilm] = useState("");
  const [textAlert, setTextAlert] = useState(false);
  const [uploadImg, setUploadImg] = useState({});
  const [idDelete, setIdDelete] = useState();
  const [addScheduleItem, setAddScheduleItem] = useState();
  const [formatDate, setFormatDate] = useState("");
  const [cinemaSystem, setCinemaSystem] = useState(null);
  const [cinema, setCinema] = useState(null);
  const [cinemaRoom, setCinemaRoom] = useState(null);
  const [addScheduleInput, setAddScheduleInput] = useState({
    ngayChieuGioChieu: "",
    giaVe: "",
  });
  const [filmActive, setFilmActive] = useState(true);
  const [userActive, setUserActive] = useState(false);
  const [showAddFilm, setShowAddFilm] = useState(false);
  const [activeAddSchedule, setActiveAddSchedule] = useState(false);
  const [showEditUser, setShowEditUser] = useState(false);
  const [valuesAddFilm, setValuesAddFilm] = useState({
    maPhim: "",
    tenPhim: "",
    biDanh: "",
    trailer: "",
    hinhAnh: {},
    moTa: "",
    maNhom: "GP02",
    ngayKhoiChieu: "",
    danhGia: "",
  });
  const [editUser, setEditUser] = useState({});
  const [showDeleteUser, setShowDeleteUser] = useState(false);
  const [showAddUser, setShowAddUser] = useState(false);
  const [addUser, setAddUser] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP02",
    maLoaiNguoiDung: "",
    hoTen: "",
  });

  const [searchUser, setSearchUser] = useState("");
  const handleChangeSearchUser = (evt) => {
    const { value } = evt.target;

    setSearchUser(value);
    dispatch(searchUserAction(searchUser));
    if (value === "") {
      dispatch(getUserList());
    }
  };
  const logout = () => {
    dispatch(logoutAction());
    localStorage.removeItem("user");
    props.history.replace("/admin/login");
  };

  const handleClose = () => {
    setShowDescribeFilm(false);
    setShowEditFilm(false);
    setShowDeleteFilm(false);
    setTextAlert();
    setUploadImg({});
    setShowAddFilm(false);
    setPasswordDeleteFilm("");
    dispatch(reloadErrorAction());
    setShowEditUser(false);
    setShowDeleteUser(false);
    setShowAddUser(false);
    setValuesAddFilm({
      maPhim: "",
      tenPhim: "",
      biDanh: "",
      trailer: "",
      hinhAnh: {},
      moTa: "",
      maNhom: "GP02",
      ngayKhoiChieu: "",
      danhGia: "",
    });
    setAddUser({
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP02",
      maLoaiNguoiDung: "",
      hoTen: "",
    });
  };

  const changeFormatDate = (date) => {
    setFormatDate(
      `${date?.substring(8, 10)}-${date?.substring(5, 7)}-${date?.substring(
        0,
        4
      )}`
    );
  };

  const handleChangeDate = (evt) => {
    const { value } = evt.target;
    setFormatDate(value);
  };

  const handleChangeInput = (evt) => {
    const { name, value } = evt.target;

    if (name === "hinhAnh") {
      setUploadImg(evt.target.files[0]);
    } else if (showEditFilm) {
      setValuesEditFilm((values) => {
        return {
          ...values,
          [name]: value,
        };
      });
      setEditFilm((values) => {
        return {
          ...values,
          [name]: value,
        };
      });
    }
    if (name === "ngayChieuGioChieu" || name === "giaVe") {
      setAddScheduleInput({
        ...addScheduleInput,
        [name]: value,
      });
    }
    if (showAddFilm) {
      setValuesAddFilm({
        ...valuesAddFilm,
        [name]: value,
      });
    }
    if (showEditUser) {
      setEditUser({
        ...editUser,
        [name]: value,
      });
    }
    if (showAddUser) {
      setAddUser({
        ...addUser,
        [name]: value,
      });
    }
  };

  const handleSubmitAddFilm = () => {
    if (uploadImg?.name) {
      let form_data = new FormData();
      const obj = {
        ...valuesAddFilm,
        hinhAnh: uploadImg,
        danhGia: parseInt(valuesAddFilm.danhGia),
        maPhim: parseInt(valuesAddFilm.maPhim),
      };

      for (let key in obj) {
        form_data.append(key, obj[key]);
      }

      dispatch(addFilmAction(form_data));

      if (error) {
        setTextAlert(true);
      } else {
        setTextAlert(false);
      }
    }
  };

  const handleSubmit = () => {
    if (uploadImg.name) {
      let form_data = new FormData();
      const obj = {
        ...valuesEditFilm,
        ngayKhoiChieu: formatDate,
        hinhAnh: uploadImg,
      };
      for (let key in obj) {
        form_data.append(key, obj[key]);
      }
      dispatch(editFilmUploadAction(form_data));
    } else {
      dispatch(
        editFilmAction({
          ...editFilm,
          ngayKhoiChieu: formatDate,
        })
      );
    }
  };

  const handleChangePassword = (evt) => {
    let { value } = evt.target;
    setPasswordDeleteFilm(value);
  };

  const renderEditFilm = () => {
    return (
      <tr>
        <td style={{ width: "100px" }}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="maPhim"
              aria-describedby="helpId"
              value={valuesEditFilm?.maPhim}
              disabled
            />
          </div>
        </td>
        <td style={{ width: "150px" }}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="tenPhim"
              aria-describedby="helpId"
              value={valuesEditFilm?.tenPhim}
              onChange={handleChangeInput}
            />
          </div>
        </td>
        <td style={{ width: "150px" }}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="biDanh"
              aria-describedby="helpId"
              value={valuesEditFilm?.biDanh}
              onChange={handleChangeInput}
            />
          </div>
        </td>
        <td style={{ width: "100px" }}>
          <form
            style={{
              width: "100px",
              overflow: "hidden",
              whiteSpace: "pre-wrap",
            }}
          >
            <input onChange={handleChangeInput} type="file" name="hinhAnh" />
          </form>
        </td>
        <td style={{ width: "150px" }}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="trailer"
              aria-describedby="helpId"
              value={valuesEditFilm?.trailer}
              onChange={handleChangeInput}
            />
          </div>
        </td>
        <td style={{ width: "200px" }}>
          <textarea
            value={valuesEditFilm?.moTa}
            name="moTa"
            rows="7"
            cols="20"
            onChange={handleChangeInput}
          ></textarea>
        </td>
        <td style={{ width: "100px" }}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="maNhom"
              aria-describedby="helpId"
              value={valuesEditFilm?.maNhom}
              onChange={handleChangeInput}
            />
          </div>
        </td>
        <td style={{ width: "100px" }}>
          <div
            style={{ width: "100px", margin: "0 auto" }}
            className="form-group"
          >
            <input
              type="text"
              className="form-control"
              name="ngayKhoiChieu"
              aria-describedby="helpId"
              value={formatDate}
              onChange={handleChangeDate}
            />
          </div>
        </td>
      </tr>
    );
  };

  const renderListFilm = () => {
    return listFilmShowing.map((film, index) => {
      return (
        <tr key={index}>
          <td>
            <p>{film.maPhim}</p>
          </td>
          <td>
            <div style={{ width: "120px", margin: "0 auto" }}>
              <p>{film.tenPhim}</p>
            </div>
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
              <button
                onClick={() => {
                  setActiveAddSchedule(true);
                  setAddScheduleItem(film);
                  setTimeout(() => {
                    addScheduleRef.current.scrollIntoView({
                      behavior: "smooth",
                    });
                  }, 500);
                }}
                className="btn btn-secondary"
              >
                Thêm lịch chiếu
              </button>
              <button
                onClick={() => {
                  setShowEditFilm(true);
                  setEditFilm(film);
                  setValuesEditFilm({ ...film, hinhAnh: {} });

                  changeFormatDate(film?.ngayKhoiChieu);
                }}
                className="btn btn-primary"
              >
                Sửa
              </button>
              <button
                onClick={() => {
                  setShowDeleteFilm(true);
                  setIdDelete(film.maPhim);
                }}
                className="btn btn-danger"
              >
                Xoá
              </button>
            </div>
          </td>
        </tr>
      );
    });
  };

  const renderDropdownCinemaSystem = () => {
    return listCinemaDetail.map((item, index) => {
      return (
        <Dropdown.Item
          onClick={() => {
            setCinemaSystem(item.maHeThongRap);
            dispatch(getCinemaSystemInfo(item.maHeThongRap));
          }}
          key={index}
        >
          {item.maHeThongRap}
        </Dropdown.Item>
      );
    });
  };

  const renderDropdownCinemaItems = () => {
    if (cinemaSystem !== null) {
      return listCinemaSystemInfo?.map((cinemaSystemMap, index) => {
        return (
          <Dropdown.Item
            onClick={() => setCinema(cinemaSystemMap?.tenCumRap)}
            key={index}
          >
            {cinemaSystemMap.tenCumRap}
          </Dropdown.Item>
        );
      });
    } else {
      return <Dropdown.Item>Vui lòng chọn hệ thống rạp</Dropdown.Item>;
    }
  };

  const renderDropdownCinemaRoom = () => {
    if (cinemaSystem !== null && cinema !== null) {
      return listCinemaSystemInfo.map((cinemaSystemMap) => {
        if (cinemaSystemMap.tenCumRap === cinema) {
          return cinemaSystemMap.danhSachRap.map((room, index) => {
            return (
              <Dropdown.Item
                onClick={() => {
                  setCinemaRoom(room);
                }}
                key={index}
              >
                {room.tenRap}
              </Dropdown.Item>
            );
          });
        }
      });
    }
    if (cinemaSystem === null || cinema === null) {
      return (
        <Dropdown.Item>Vui lòng chọn hệ thống rạp, và cụm rạp</Dropdown.Item>
      );
    }
  };

  const addScheduleSubmit = () => {
    const submitValues = {
      maPhim: addScheduleItem?.maPhim,
      ngayChieuGioChieu: addScheduleInput?.ngayChieuGioChieu,
      maRap: cinemaRoom?.maRap,
      giaVe: parseInt(addScheduleInput?.giaVe),
    };
    dispatch(addScheduleAction(submitValues));
  };

  const renderListUser = () => {
    return userList.map((user, index) => {
      return (
        <tr key={index}>
          <td>
            <p>{++index}</p>
          </td>
          <td>
            <div
              style={{
                width: "120px",
                margin: "0 auto",
                overflowWrap: "break-word",
              }}
            >
              <p>{user.taiKhoan}</p>
            </div>
          </td>
          <td>
            <div
              style={{
                width: "120px",
                margin: "0 auto",
                overflowWrap: "break-word",
              }}
            >
              <p>{user.matKhau}</p>
            </div>
          </td>
          <td>
            <div
              style={{
                width: "120px",
                margin: "0 auto",
                overflowWrap: "break-word",
              }}
            >
              <p>{user.hoTen}</p>
            </div>
          </td>
          <td>
            <div
              style={{
                width: "120px",
                margin: "0 auto",
                overflowWrap: "break-word",
              }}
            >
              <p>{user.email}</p>
            </div>
          </td>
          <td>
            <div
              style={{
                width: "120px",
                margin: "0 auto",
                overflowWrap: "break-word",
              }}
            >
              <p>{user.soDt}</p>
            </div>
          </td>
          <td>
            <div className="d-flex justify-content-around">
              <button
                onClick={() => {
                  setShowEditUser(true);
                  setEditUser({ ...user, maNhom: "GP02" });
                }}
                className="btn btn-primary"
              >
                Sửa
              </button>
              <button
                onClick={() => {
                  setIdDelete(user.taiKhoan);
                  setShowDeleteUser(true);
                }}
                className="btn btn-danger"
              >
                Xoá
              </button>
            </div>
          </td>
        </tr>
      );
    });
  };

  const renderEditUser = (user) => {
    return (
      <tr>
        <td style={{ width: "100px" }}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="taiKhoan"
              aria-describedby="helpId"
              value={user?.taiKhoan}
              disabled
            />
          </div>
        </td>
        <td style={{ width: "120px" }}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="matKhau"
              aria-describedby="helpId"
              value={user?.matKhau}
              onChange={handleChangeInput}
            />
          </div>
        </td>
        <td style={{ width: "150px" }}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="hoTen"
              aria-describedby="helpId"
              value={user?.hoTen}
              onChange={handleChangeInput}
            />
          </div>
        </td>
        <td style={{ width: "150px" }}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="email"
              aria-describedby="helpId"
              value={user?.email}
              onChange={handleChangeInput}
            />
          </div>
        </td>
        <td style={{ width: "100px" }}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="soDt"
              aria-describedby="helpId"
              value={user?.soDt}
              onChange={handleChangeInput}
            />
          </div>
        </td>
        <td style={{ width: "100px" }}>
          <div className="form-group">
            <select
              onChange={handleChangeInput}
              value={editUser.maLoaiNguoiDung}
              name="maLoaiNguoiDung"
              className="custom-select"
            >
              {user.maLoaiNguoiDung === "KhachHang" ? (
                <>
                  <option defaultValue value="KhachHang">
                    Khách hàng
                  </option>
                  <option value="QuanTri">Quản Trị</option>
                </>
              ) : (
                <>
                  <option defaultValue value="KhachHang">
                    Khách hàng
                  </option>
                  <option defaultValue value="QuanTri">
                    Quản Trị
                  </option>
                </>
              )}
            </select>
          </div>
        </td>
        <td style={{ width: "80px" }}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="maNhom"
              aria-describedby="helpId"
              value={user?.maNhom}
              onChange={handleChangeInput}
            />
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="admin-home">
      <div className="header d-flex align-items-center justify-content-end">
        <div>
          <DropdownButton bsPrefix="btn-logout" title={`Chào ${user?.hoTen}!`}>
            <Dropdown.Item
              onClick={() => {
                logout();
              }}
            >
              Đăng xuất
            </Dropdown.Item>
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
            onClick={() => {
              setFilmActive(true);
              setUserActive(false);
            }}
            style={{
              textDecoration: "underline",
              margin: "10px 0",
              cursor: "pointer",
            }}
          >
            Quản lý phim
          </p>
          <p
            onClick={() => {
              setFilmActive(false);
              setUserActive(true);
            }}
            style={{
              textDecoration: "underline",
              margin: "10px 0",
              cursor: "pointer",
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
        <div
          id="admin-content-film"
          className={`admin-content-film ${filmActive ? "active" : ""}`}
        >
          <button
            onClick={() => {
              setShowAddFilm(true);
            }}
            className="btn btn-secondary"
          >
            Thêm phim
          </button>
          <div className="admin-table">
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

          <div
            ref={addScheduleRef}
            id="admin-addSchedule"
            className={`admin-addSchedule text-center ${
              activeAddSchedule ? "active" : ""
            }`}
          >
            <h2 className="addSchedule__title">
              Tạo lịch chiếu cho phim {addScheduleItem?.tenPhim}
            </h2>
            <div className="row">
              <div className="col-6">
                <Dropdown
                  onClick={() => {
                    setCinema(null);
                    setCinemaRoom(null);
                  }}
                >
                  <Dropdown.Toggle variant="secondary">
                    {cinemaSystem === null ? "Chọn hệ thống rạp" : cinemaSystem}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>{renderDropdownCinemaSystem()}</Dropdown.Menu>
                </Dropdown>
                <Dropdown onClick={() => setCinemaRoom(null)}>
                  <Dropdown.Toggle variant="secondary">
                    {cinema === null ? "Chọn cụm rạp" : cinema}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>{renderDropdownCinemaItems()}</Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary">
                    {cinemaRoom === null ? "Chọn rạp" : cinemaRoom.tenRap}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>{renderDropdownCinemaRoom()}</Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="col-6">
                <div style={{ width: "250px", margin: "10px auto 10px 0" }}>
                  <div className="form-group" style={{ marginBottom: "10px" }}>
                    <input
                      type="=text"
                      name="ngayChieuGioChieu"
                      className="form-control"
                      placeholder="dd/MM/yyyy hh:mm:ss"
                      aria-describedby="helpId"
                      value={addScheduleInput.ngayChieuGioChieu}
                      onChange={handleChangeInput}
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: "10px" }}>
                    <input
                      type="text"
                      name="giaVe"
                      className="form-control"
                      placeholder="Giá vé"
                      aria-describedby="helpId"
                      value={addScheduleInput.giaVe}
                      onChange={handleChangeInput}
                    />
                  </div>
                </div>
                <div style={{ height: "30px", width: "250px" }}>
                  {statusAddSchedule && !error && !textAlert ? (
                    <p className="text-success">Tạo lịch chiếu thành công</p>
                  ) : null}
                  {error && !statusAddSchedule ? (
                    <p className="text-danger">Đã xảy ra lỗi</p>
                  ) : null}
                  {textAlert ? (
                    <p className="text-danger">Đã xảy ra lỗi</p>
                  ) : null}
                </div>
                <div style={{ width: "250px", margin: "10px auto 10px 0" }}>
                  <button
                    onClick={() => {
                      if (
                        addScheduleItem.maPhim &&
                        addScheduleInput.ngayChieuGioChieu &&
                        cinemaRoom.maRap &&
                        addScheduleInput.giaVe
                      ) {
                        addScheduleSubmit();
                        setTextAlert(false);
                      } else {
                        setTextAlert(true);
                      }
                    }}
                    style={{ width: "50%", margin: "0 auto 0 0" }}
                    className="btn btn-secondary"
                  >
                    Tạo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="admin-content-user"
          className={`admin-content-user ${userActive ? "active" : ""}`}
        >
          <button
            onClick={() => {
              setShowAddUser(true);
            }}
            className="btn btn-secondary"
          >
            Thêm người dùng
          </button>
          <div className="form-group mt-3 mr-4" style={{ width: "140px" }}>
            <input
              type="text"
              name="tuKhoa"
              className="form-control"
              placeholder="Tìm kiếm người dùng"
              aria-describedby="helpId"
              value={searchUser}
              onChange={handleChangeSearchUser}
            />
          </div>

          <div className="admin-table">
            <Table className="table-film" striped bordered hover>
              <thead>
                <tr>
                  <th>Stt</th>
                  <th>Tài khoản</th>
                  <th>Mật khẩu</th>
                  <th>Họ tên</th>
                  <th>Email</th>
                  <th>Số điện thoại</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{renderListUser()}</tbody>
            </Table>
          </div>
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
        size="lg"
      >
        <Modal.Body>
          <Table className="table-film" striped bordered hover>
            <thead>
              <tr>
                <th>Mã phim</th>
                <th>Tên phim</th>
                <th>Bí danh</th>
                <th>Hình ảnh</th>
                <th>Trailer</th>
                <th>Mô tả</th>
                <th>Mã nhóm</th>
                <th>Ngày khởi chiếu</th>
              </tr>
            </thead>
            <tbody>{renderEditFilm(editFilm)}</tbody>
          </Table>
          <a
            onClick={() => {
              handleClose();
            }}
          >
            <i className="fa fa-times"></i>
          </a>
          <div style={{ height: "20px", textAlign: "center" }}>
            {error === false && statusEdit === true && textAlert === true ? (
              <p className="text-success">Cập nhật thành công</p>
            ) : null}
            {error === true && textAlert === true ? (
              <p className="text-danger">Đã xảy ra lỗi!</p>
            ) : null}
          </div>

          <div style={{ width: "50%", margin: "0 auto", textAlign: "center" }}>
            <button
              onClick={() => {
                setTextAlert(true);
                handleSubmit();
              }}
              className="btn btn-success"
            >
              Cập nhật
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={showDeleteFilm}
        id="modal-describeFilm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
      >
        <Modal.Body>
          <p>Vui lòng nhập mật khẩu để thực hiện xoá phim</p>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="matKhauDelete"
              value={passwordDeleteFilm}
              aria-describedby="helpId"
              placeholder="Mật khẩu"
              onChange={handleChangePassword}
            />
          </div>

          <a
            onClick={() => {
              handleClose();
            }}
          >
            <i className="fa fa-times"></i>
          </a>
          <div style={{ height: "20px", textAlign: "center" }}>
            {textAlert ? (
              <p className="text-danger">Mật khẩu không đúng</p>
            ) : statusDelete && !error ? (
              <p className="text-success">Xoá thành công</p>
            ) : null}
            {error ? <p className="text-danger">Đã xảy ra lỗi</p> : null}
          </div>
          <div style={{ width: "50%", margin: "0 auto", textAlign: "center" }}>
            <button
              onClick={() => {
                if (passwordDeleteFilm === userInfo?.matKhau) {
                  dispatch(deleteFilmAction(idDelete));
                  setTextAlert(false);
                } else {
                  setTextAlert(true);
                }
              }}
              className="btn btn-success"
            >
              Xác nhận
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={showAddFilm}
        id="modal-addFilm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
        size="lg"
      >
        <Modal.Body>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="maPhim"
                  aria-describedby="helpId"
                  value={valuesAddFilm.maPhim}
                  placeholder="Mã phim"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="biDanh"
                  aria-describedby="helpId"
                  value={valuesAddFilm.biDanh}
                  placeholder="Bí danh"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="tenPhim"
                  aria-describedby="helpId"
                  placeholder="Tên phim"
                  value={valuesAddFilm.tenPhim}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="trailer"
                  aria-describedby="helpId"
                  placeholder="Trailer"
                  value={valuesAddFilm.trailer}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="ngayKhoiChieu"
                  aria-describedby="helpId"
                  placeholder="Ngày khởi chiếu (dd/mm/yyyy)"
                  value={valuesAddFilm.ngayKhoiChieu}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="danhGia"
                  aria-describedby="helpId"
                  placeholder="Đánh giá"
                  value={valuesAddFilm.danhGia}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <form
                  style={{
                    width: "100%",
                    overflow: "hidden",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  <input
                    onChange={handleChangeInput}
                    type="file"
                    name={valuesAddFilm.hinhAnh}
                    name="hinhAnh"
                  />
                </form>
              </div>
            </div>
          </div>
          <textarea
            onChange={handleChangeInput}
            name="moTa"
            rows="5"
            cols="80"
            value={valuesAddFilm.moTa}
          ></textarea>
          <div style={{ height: "20px", textAlign: "center" }}>
            {error === false && statusAddFilm === true && textAlert === true ? (
              <p className="text-success">Thêm thành công</p>
            ) : null}
            {error === true ? (
              <p className="text-danger">Đã xảy ra lỗi!</p>
            ) : null}
          </div>
          <div className="text-center mt-3">
            <button
              onClick={() => {
                handleSubmitAddFilm();
                setTextAlert(true);
              }}
              className="btn btn-secondary"
            >
              Thêm Phim
            </button>
          </div>
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
        show={showEditUser}
        id="modal-editUser"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
        size="lg"
      >
        <Modal.Body>
          <Table className="table-film" striped bordered hover>
            <thead>
              <tr>
                <th>Tài khoản</th>
                <th>Mật khẩu</th>
                <th>Họ tên</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Mã loại người dùng</th>
                <th>Mã nhóm</th>
              </tr>
            </thead>
            <tbody>{renderEditUser(editUser)}</tbody>
          </Table>
          <a
            onClick={() => {
              handleClose();
            }}
          >
            <i className="fa fa-times"></i>
          </a>
          <div style={{ height: "20px", textAlign: "center" }}>
            {error === false &&
            statusEditUser === true &&
            textAlert === true ? (
              <p className="text-success">Cập nhật thành công</p>
            ) : null}
            {error === true ? (
              <p className="text-danger">Đã xảy ra lỗi!</p>
            ) : null}
          </div>

          <div style={{ width: "50%", margin: "0 auto", textAlign: "center" }}>
            <button
              onClick={() => {
                setTextAlert(true);
                dispatch(editUserAction(editUser));
              }}
              className="btn btn-success"
            >
              Cập nhật
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={showDeleteUser}
        id="modal-deleteUser"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
      >
        <Modal.Body>
          <p>Vui lòng nhập mật khẩu để thực hiện xoá người dùng</p>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="matKhauDelete"
              value={passwordDeleteFilm}
              aria-describedby="helpId"
              placeholder="Mật khẩu"
              onChange={handleChangePassword}
            />
          </div>

          <a
            onClick={() => {
              handleClose();
            }}
          >
            <i className="fa fa-times"></i>
          </a>
          <div style={{ height: "20px", textAlign: "center" }}>
            {error === false &&
            statusDeleteUser === true &&
            textAlert === false ? (
              <p className="text-success">Cập nhật thành công</p>
            ) : null}
            {error === true ? (
              <p className="text-danger">Đã xảy ra lỗi!</p>
            ) : null}
            {error === false && textAlert === true ? (
              <p className="text-danger">Mật khẩu không đúng</p>
            ) : null}
          </div>
          <div style={{ width: "50%", margin: "0 auto", textAlign: "center" }}>
            <button
              onClick={() => {
                if (passwordDeleteFilm === userInfo.matKhau) {
                  dispatch(deleteUserAction(idDelete));

                  setTextAlert(false);
                } else {
                  setTextAlert(true);
                }
              }}
              className="btn btn-success"
            >
              Xác nhận
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={showAddUser}
        id="modal-addFilm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
        size="lg"
      >
        <Modal.Body>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  aria-describedby="helpId"
                  value={addUser.taiKhoan}
                  placeholder="Tài khoản"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="matKhau"
                  aria-describedby="helpId"
                  value={addUser.matKhau}
                  placeholder="Mật khẩu"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  aria-describedby="helpId"
                  placeholder="Email"
                  value={addUser.email}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="soDt"
                  aria-describedby="helpId"
                  placeholder="Số điện thoại"
                  value={addUser.soDt}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="maNhom"
                  aria-describedby="helpId"
                  placeholder="Mã nhóm"
                  value={addUser.maNhom}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <select
                  onChange={handleChangeInput}
                  value={addUser.maLoaiNguoiDung}
                  name="maLoaiNguoiDung"
                  className="custom-select"
                >
                  <option defaultValue>Mã loại khách hàng</option>
                  <option value="KhachHang">Khách hàng</option>
                  <option value="QuanTri">Quản Trị</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="hoTen"
                  aria-describedby="helpId"
                  placeholder="Họ tên"
                  value={addUser.hoTen}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
          </div>

          <div style={{ height: "20px", textAlign: "center" }}>
            {error === false && statusAddUser === true && textAlert === true ? (
              <p className="text-success">Thêm thành công</p>
            ) : null}
            {error === true ? (
              <p className="text-danger">Đã xảy ra lỗi!</p>
            ) : null}
          </div>
          <div className="text-center mt-3">
            <button
              onClick={() => {
                setTextAlert(true);
                dispatch(addUserAction(addUser));
              }}
              className="btn btn-secondary"
            >
              Thêm người dùng
            </button>
          </div>
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
