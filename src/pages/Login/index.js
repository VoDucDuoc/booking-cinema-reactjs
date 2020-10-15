import React, { useEffect, useState } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login, signupAction } from "../../actions/userAction";
import { useHistory } from "react-router-dom";
import { Modal } from "react-bootstrap";
import * as yup from "yup";
export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, error, errorSignin, userSignin } = useSelector(
    (state) => state.userReducer
  );
  const checkAccount = () => {
    if (user && error === false) {
      history.goBack();
    }
  };

  const loginSchema = yup.object().shape({
    taiKhoan: yup
      .string()
      .required("Tài khoản không được bỏ trống"),
    matKhau: yup
      .string()
      .required("Mật khẩu không được bỏ trống")
      .min(6, "Mật khẩu cần dài hơn 6 kí tự"),
  });
  const signupValidation = yup.object().shape({
    hoTen: yup
      .string()
      .matches(
        /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
        "Tên không bao gồm số"
      )
      .min(2, "Quá ngắn!")
      .max(70, "Quá Dài!")
      .required("Họ tên không được bỏ trống!"),
    soDt: yup
      .number()
      .required("Số điện thoại không được bỏ trống!")
      .typeError("Số điện thoại chỉ được chứa số!"),
    email: yup
      .string()
      .required("Email không được bỏ trống!")
      .email("Email không hợp lệ!"),
    matKhau: yup
      .string()
      .required("Mật khẩu không được bỏ trống!")
      .min(6, "Mật khẩu quá ngắn!"),
    nhapLaiMatKhau: yup
      .string()
      .required("Mật khẩu không được bỏ trống!")
      .min(6, "Mật khẩu quá ngắn!"),
    maLoaiNguoiDung: yup
      .string()
      .matches(
        /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
        "Loại người dùng không bao gồm số"
      )
      .min(1, "Quá ngắn!")
      .max(70, "Quá Dài!")
      .required("Mã loại người dùng không được bỏ trống!"),
    taiKhoan: yup
      .string()
      .min(1, "Quá ngắn!")
      .max(70, "Quá Dài!")
      .required("Tài khoản không được bỏ trống!"),
    maNhom: yup
      .string()
      .min(1, "Quá ngắn!")
      .max(70, "Quá Dài!")
      .required("Mã nhóm không được bỏ trống!"),
  });
  useEffect(() => {
    checkAccount();
  }, [error, user]);
  const [signupShow, setSignupShow] = useState(false);
  const [checkPassword, setCheckPassword] = useState(true);
  const [signinDone, setSigninDone] = useState(true);

  const renderErrorOrNot = () => {

    if (signinDone === true) {
      if (errorSignin === false && userSignin !== null) {
        return (
          <>
            <div
              className="text-success text-center"
              style={{ height: "10px", margin: " 5px 0" }}
            >
              <p>Đăng ký thành công</p>
            </div>
          </>
        );
      } else {
        return (
          <div
            className="text-danger text-center"
            style={{ height: "10px", margin: " 5px 0" }}
          ></div>
        );
      }
    } else if (errorSignin === true) {
      return (
        <>
          <div
            className="text-danger text-center"
            style={{ height: "10px", margin: " 5px 0" }}
          >
            <p>Đã xảy ra lỗi</p>
          </div>
        </>
      );
    }
  };
  const handleClose = () => {
    setSignupShow(false);
    setSigninDone(false);
  };
  return (
    <div className="login">
      <div className="login__layout"></div>

      <div className="login__form">
        <div className="wrap_form">
          <a
            onClick={() => {
              history.push("/");
            }}
            className="close-login"
          >
            <i className="fa fa-times"></i>
          </a>

          <img
            src="/img/Layer1.png"
            alt="/img/Layer1.png"
            style={{ maxWidth: "70px", maxHeight: "70px" }}
          />
          <p style={{ marginBottom: "70px" }}>
            Thế giới phim trên đầu ngón tay
          </p>
          <p style={{ marginBottom: "10px" }}>
            Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
          </p>
          <Formik
            initialValues={{
              taiKhoan: "",
              matKhau: "",
            }}
            onSubmit={(values) => {
              dispatch(login(values));
            }}
            validationSchema={loginSchema}
            render={(formikProps) => (
              <Form>
                <div className="form-group m-0">
                  <Field
                    type="text"
                    name="taiKhoan"
                    className="form-control"
                    placeholder="Tài khoản"
                    onChange={formikProps.handleChange}
                  />
                  <div
                    className="text-danger"
                    style={{ height: "20px", margin: " 5px 0" }}
                  >
                    <ErrorMessage name="taiKhoan" />
                  </div>
                </div>
                <div className="form-group" style={{ marginBottom: "10px" }}>
                  <Field
                    type="password"
                    name="matKhau"
                    className="form-control"
                    placeholder="Mật khẩu"
                    onChange={formikProps.handleChange}
                  />
                  <div
                    className="text-danger"
                    style={{ height: "20px", margin: " 5px 0" }}
                  >
                    <ErrorMessage name="matKhau" />
                    {error ? (
                      <p style={{ height: "20px", color: "red" }}>
                        Tài khoản hoặc mật khẩu không đúng. Vui lòng thử lại!
                      </p>
                    ) : (
                      <p style={{ height: "20px" }}></p>
                    )}
                  </div>
                </div>

                <button type="submit" className="btn btn-login mt-4">
                  Đăng nhập
                </button>
              </Form>
            )}
          />
          <div style={{ marginTop: "10px", fontSize: "16px" }}>
            <a
              onClick={() => {
                setSignupShow(true);
              }}
            >
              Đăng ký
            </a>
          </div>
          <Modal
            show={signupShow}
            id="modal-changePassword"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={handleClose}
          >
            <Modal.Body>
              <Formik
                initialValues={{
                  taiKhoan: "",
                  matKhau: "",
                  email: "",
                  soDt: "",
                  maNhom: "GP02",
                  maLoaiNguoiDung: "KhachHang",
                  hoTen: "",
                  nhapLaiMatKhau: "",
                }}
                onSubmit={(values) => {
                  if (values.nhapLaiMatKhau === values.matKhau) {
                    dispatch(
                      signupAction({
                        taiKhoan: values.taiKhoan,
                        matKhau: values.matKhau,
                        email: values.email,
                        soDt: values.soDt,
                        maNhom: "GP02",
                        maLoaiNguoiDung: "KhachHang",
                        hoTen: values.hoTen,
                      })
                    );
                    setTimeout(() => {
                      if (errorSignin !== false) {
                        setSigninDone(true);
                      } else {
                        setSigninDone(false);
                      }
                    }, 1000);
                  } else {
                    setCheckPassword(false);
                  }
                }}
                validationSchema={signupValidation}
                render={(formikProps) => (
                  <Form>
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="form-group m-0">
                          <Field
                            type="text"
                            name="taiKhoan"
                            className="form-control"
                            placeholder="Tài khoản"
                            onChange={formikProps.handleChange}
                            
                          />

                          <div
                            className="text-danger text-center"
                            style={{ height: "20px", margin: " 5px 0" }}
                          >
                            <ErrorMessage name="taiKhoan" />
                          </div>
                        </div>
                        <div className="form-group m-0">
                          <Field
                            type="password"
                            name="matKhau"
                            className="form-control"
                            placeholder="Mật khẩu"
                            onChange={formikProps.handleChange}
                            
                          />

                          <div
                            className="text-danger text-center"
                            style={{ height: "20px", margin: " 5px 0" }}
                          >
                            <ErrorMessage name="matKhau" />
                          </div>
                        </div>
                        <div className="form-group m-0">
                          <Field
                            type="password"
                            name="nhapLaiMatKhau"
                            className="form-control"
                            placeholder="Nhập lại mật khẩu"
                            onChange={formikProps.handleChange}
                            
                          />
                          {checkPassword ? (
                            <div
                              className="text-danger text-center"
                              style={{ height: "20px", margin: " 5px 0" }}
                            >
                              <ErrorMessage name="nhapLaiMatKhau" />
                            </div>
                          ) : (
                            <div
                              className="text-danger text-center"
                              style={{ height: "20px", margin: " 5px 0" }}
                            >
                              <p>Mật khẩu nhập lại không đúng</p>
                            </div>
                          )}
                        </div>
                        <div className="form-group m-0">
                          <Field
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={formikProps.handleChange}
                            
                          />

                          <div
                            className="text-danger text-center"
                            style={{ height: "20px", margin: " 5px 0" }}
                          >
                            <ErrorMessage name="email" />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group m-0">
                          <Field
                            type="text"
                            name="hoTen"
                            className="form-control"
                            placeholder="Họ tên"
                            onChange={formikProps.handleChange}
                            
                          />

                          <div
                            className="text-danger text-center"
                            style={{ height: "20px", margin: " 5px 0" }}
                          >
                            <ErrorMessage name="hoTen" />
                          </div>
                        </div>
                        <div className="form-group m-0">
                          <Field
                            type="text"
                            name="soDt"
                            className="form-control"
                            placeholder="Số điện thoại"
                            onChange={formikProps.handleChange}
                            
                          />

                          <div
                            className="text-danger text-center"
                            style={{ height: "20px", margin: " 5px 0" }}
                          >
                            <ErrorMessage name="soDt" />
                          </div>
                        </div>
                        {renderErrorOrNot()}
                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-secondary mt-2"
                          >
                            Đăng ký
                          </button>
                        </div>
                      </div>
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
        </div>
      </div>
    </div>
  );
}
