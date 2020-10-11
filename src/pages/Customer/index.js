import React, { useEffect, useState } from "react";
import { Tabs, Tab, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";

import Loading from "../../components/loading";
import { getUserInfo, updateAction } from "../../actions/userAction";
export default function Customer() {
  const { user, userInfo } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfo({ taiKhoan: user?.taiKhoan }));
  }, [user]);

  const [isPassword, setIsPassword] = useState(true);
  const [isPasswordChange, setIsPasswordChange] = useState(true);
  const [checkNewPassword, setCheckNewPassword] = useState(true);
  const [changePasswordDone, setChangePasswordDone] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [changePassword, setChangePassword] = useState(null);

  const handleClose = () => {
    setModalShow(false);
    setChangePassword(false);
    setChangePasswordDone(false);
  };

  const validation = Yup.object().shape({
    hoTen: Yup.string()
      .matches(
        /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
        "Tên không bao gồm số"
      )
      .min(2, "Quá ngắn!")
      .max(70, "Quá Dài!")
      .required("Họ tên không được bỏ trống!"),
    soDT: Yup.number()
      .required("Số điện thoại không được bỏ trống!")
      .typeError("Số điện thoại chỉ được chứa số!"),
    email: Yup.string()
      .required("Email không được bỏ trống!")
      .email("Email không hợp lệ!"),
    matKhau: Yup.string()
      .required("Mật khẩu không được bỏ trống!")
      .min(6, "Mật khẩu quá ngắn!"),
  });

  const renderInfo = () => {
    return (
      <Formik
        initialValues={{
          hoTen: `${userInfo?.hoTen === null ? "" : userInfo?.hoTen}`,
          soDT: `${userInfo?.soDT === null ? "" : userInfo?.soDT}`,
          email: `${userInfo?.email === null ? "" : userInfo?.email}`,
          taiKhoan: `${userInfo?.taiKhoan === null ? "" : userInfo?.taiKhoan}`,
          matKhau: "",
        }}
        onSubmit={(values) => {
          if (values.matKhau !== userInfo.matKhau) {
            setIsPassword(false);
          } else {
            dispatch(
              updateAction({
                ...values,
                maNhom: user.maNhom,
                maLoaiNguoiDung: user.maLoaiNguoiDung,
              })
            );
            setModalShow(true);
          }
        }}
        validationSchema={validation}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className="row">
              <div className="col-12 col-md-6">
                <div>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Họ tên</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.hoTen}
                      name="hoTen"
                    />
                  </div>
                  <div
                    className="text-danger"
                    style={{
                      height: "20px",
                      fontSize: "14px",
                      textAlign: "center",
                    }}
                  >
                    <ErrorMessage name="hoTen" />
                  </div>
                </div>
                <div>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Số điện thoại</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.soDT}
                      name="soDT"
                    />
                  </div>
                  <div
                    className="text-danger"
                    style={{
                      height: "20px",
                      fontSize: "14px",
                      textAlign: "center",
                    }}
                  >
                    <ErrorMessage name="soDT" />
                  </div>
                </div>
                <div>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Email</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.email}
                      name="email"
                    />
                  </div>
                  <div
                    className="text-danger"
                    style={{
                      height: "20px",
                      fontSize: "14px",
                      textAlign: "center",
                    }}
                  >
                    <ErrorMessage name="email" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Tài khoản</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.taiKhoan}
                      name="taiKhoan"
                      disabled
                    />
                  </div>
                  <div
                    className="text-danger"
                    style={{ height: "20px", fontSize: "14px" }}
                  >
                    <ErrorMessage name="taiKhoan" />
                  </div>
                </div>
                <div>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">Mật khẩu</span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.matKhau}
                      name="matKhau"
                      onClick={() => setIsPassword(true)}
                    />
                  </div>
                  {isPassword ? (
                    <div
                      className="text-danger"
                      style={{
                        height: "20px",
                        fontSize: "14px",
                        textAlign: "center",
                      }}
                    >
                      <ErrorMessage name="matKhau" />
                    </div>
                  ) : (
                    <div
                      className="text-danger"
                      style={{
                        height: "20px",
                        fontSize: "14px",
                        textAlign: "center",
                      }}
                    >
                      <p>Mật khẩu không đúng!</p>
                    </div>
                  )}
                </div>
                <div style={{ textAlign: "right", marginTop: "20px" }}>
                  <button
                    type="button"
                    style={{ marginRight: "5px" }}
                    className="btn btn-secondary"
                    onClick={() => {
                      setChangePassword(true);
                    }}
                  >
                    Đổi mật khẩu
                  </button>
                  <button type="submit" className="btn btn-secondary">
                    Cập nhật
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    );
  };

  const changePasswordValidate = Yup.object().shape({
    currentPassword: Yup.string()
      .required("Mật khẩu không được bỏ trống")
      .min(6, "Mật khẩu cần dài hơn 6 kí tự"),
    newPassword: Yup.string()
      .required("Mật khẩu không được bỏ trống")
      .min(6, "Mật khẩu cần dài hơn 6 kí tự"),
    newPasswordAgain: Yup.string()
      .required("Mật khẩu không được bỏ trống")
      .min(6, "Mật khẩu cần dài hơn 6 kí tự"),
  });
  
  const renderHistoryBooking = () => {
    console.log(userInfo);
  }
  
  return (
    <>
      {userInfo === null ? (
        <Loading />
      ) : (
        <div className="customer">
          <div className="customer__content">
            <Tabs defaultActiveKey="historybooking">
              <Tab eventKey="info" title="Thông tin cá nhân">
                {renderInfo()}
              </Tab>
              <Tab eventKey="historybooking" title="Lịch sử đặt vé">
                {renderHistoryBooking()}
              </Tab>
            </Tabs>
          </div>
        </div>
      )}
      <Modal
        size="sm"
        id="modal-timeup"
        show={modalShow}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
      >
        <Modal.Body>
          <p className="text-danger">Cập nhật thành công</p>
          <button
            onClick={() => {
              handleClose();
            }}
            className="btn btn-secondary mt-3"
          >
            Đóng
          </button>
        </Modal.Body>
      </Modal>
      <Modal
        show={changePassword}
        id="modal-changePassword"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleClose}
      >
        <Modal.Body>
          <Formik
            initialValues={{
              currentPassword: "",
              newPassword: "",
              newPasswordAgain: "",
            }}
            onSubmit={(values) => {
              if (values.currentPassword !== userInfo.matKhau) {
                setIsPasswordChange(false);
              }
              if (values.currentPassword === userInfo.matKhau) {
                if (values.newPasswordAgain !== values.newPassword) {
                  setCheckNewPassword(false);
                } else {
                  setCheckNewPassword(true);

                  const userDispatch = {
                    taiKhoan: user?.taiKhoan,
                    matKhau: values.newPassword,
                    email: user?.email,
                    soDt: user?.soDT,
                    maNhom: user?.maNhom,
                    maLoaiNguoiDung: user?.maLoaiNguoiDung,
                    hoTen: user?.hoTen,
                  };
                  dispatch(updateAction(userDispatch));
                  setChangePasswordDone(true);
                }
              }
            }}
            validationSchema={changePasswordValidate}
            render={(formikProps) => (
              <Form>
                <div className="form-group m-0">
                  <Field
                    type="password"
                    name="currentPassword"
                    className="form-control"
                    placeholder="Mật khẩu hiện tại"
                    onChange={formikProps.handleChange}
                    onClick={() => setIsPasswordChange(true)}
                  />
                  {isPasswordChange ? (
                    <div
                      className="text-danger text-center"
                      style={{ height: "20px", margin: " 5px 0" }}
                    >
                      <ErrorMessage name="currentPassword" />
                    </div>
                  ) : (
                    <div
                      className="text-danger text-center"
                      style={{ height: "20px", margin: " 5px 0" }}
                    >
                      <p>Mật khẩu hiện tại không đúng</p>
                    </div>
                  )}
                </div>
                <div className="form-group" style={{ marginBottom: "10px" }}>
                  <Field
                    type="password"
                    name="newPassword"
                    className="form-control"
                    placeholder="Mật khẩu mới"
                    onChange={formikProps.handleChange}
                  />
                  <div
                    className="text-danger text-center"
                    style={{ height: "20px", margin: " 5px 0" }}
                  >
                    <ErrorMessage name="newPassword" />
                  </div>
                </div>
                <div className="form-group m-0">
                  <Field
                    type="password"
                    name="newPasswordAgain"
                    className="form-control"
                    placeholder="Nhập lại mật khẩu mới"
                    onChange={formikProps.handleChange}
                    onClick={() => setCheckNewPassword(true)}
                  />
                  {checkNewPassword ? (
                    <div
                      className="text-danger text-center"
                      style={{ height: "20px", margin: " 5px 0" }}
                    >
                      <ErrorMessage name="newPasswordAgain" />
                    </div>
                  ) : (
                    <div
                      className="text-danger text-center"
                      style={{ height: "20px", margin: " 5px 0" }}
                    >
                      <p>Mật khẩu mới và mật khẩu nhập lại không trùng khớp</p>
                    </div>
                  )}
                </div>
                {changePasswordDone ? <div
                  className="text-success text-center"
                  style={{ height: "20px"}}
                >
                  <p>Đổi mật khẩu thành công</p>
                </div> : <div
                  className="text-success text-center"
                  style={{ height: "20px"}}
                >
                 
                </div>}
                <div className="text-center">
                  <button type="submit" className="btn btn-secondary mt-4">
                    Đổi mật khẩu
                  </button>
                </div>
              </Form>
            )}
          />
          <a
            onClick={() => {
              handleClose();
            }}
          >
            <i className="fa fa-times"></i>
          </a>
        </Modal.Body>
      </Modal>
    </>
  );
}
