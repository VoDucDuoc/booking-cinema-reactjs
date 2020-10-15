import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { loginAction } from "../../actions/adminAction";
import { login } from "../../actions/userAction";
export default function AdminLogin(props) {
  const { history } = props;
  const dispatch = useDispatch();
  const loginSchema = yup.object().shape({
    taiKhoan: yup.string().required("Tài khoản không được bỏ trống"),

    matKhau: yup.string().required("Mật khẩu không được bỏ trống"),
  });
  const { admin, error } = useSelector((state) => state.adminReducer);

  useEffect(() => {
    if (admin !== null) {
      history.push("/admin/home");
    }
  }, [admin]);
  return (
    <div className="login" id="adminLogin">
      <div className="login__layout">
        <div className="login__form">
          <div className="wrap_form">
            <a
              onClick={() => {
               
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
            <p style={{ marginBottom: "70px" }}>ADMIN</p>

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
          </div>
        </div>
      </div>
    </div>
  );
}
