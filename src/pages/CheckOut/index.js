import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailCheckout, booking } from "../../actions/checkoutAction";
import Timer from "../../components/timer";
import useLoader from "../../hook/useLoader";
import useCount from "../../hook/useCount";
import ChairItem from "./chairItem";
import * as yup from "yup";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { Modal, Button } from "react-bootstrap";
export default function Checkout(props) {
  const [loader] = useLoader();
  const { match, history } = props;
  const scheduleId = match.params.scheduleId;
  const dispatch = useDispatch();
  const myRef = useRef();
  
  useEffect(() => {
    dispatch(getDetailCheckout(scheduleId));
  }, []);

  const [modalShow, setModalShow] = useState(false);
  const { detailCheckout, error, message } = useSelector(
    (state) => state.checkoutReducer
  );
  const { listChairChoosing } = useSelector((state) => state.checkoutReducer);
    console.log(listChairChoosing);
  const emptyListChairChoosing = () => {
    if (listChairChoosing.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  let ticketPrice = listChairChoosing.reduce(
    (total, curr) => total + curr.giaVe,
    0
  );
  const {
    count: count1,
    increase: increase1,
    decrease: decrease1,
  } = useCount();
  const {
    count: count2,
    increase: increase2,
    decrease: decrease2,
  } = useCount();

  let comboPrice = count1 * 70000 + count2 * 110000;
  let totalPrice = comboPrice + ticketPrice;
  const renderChairs = () => {
    return detailCheckout?.danhSachGhe?.map((chair, index) => {
      return <ChairItem key={index} chair={chair} />;
    });
  };
  const checkoutSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email không được bỏ trống")
      .email("Email không hợp lệ"),
    phone: yup
      .number()
      .required("Số điện thoại không được bỏ trống")
      .typeError("Số điện thoại chỉ được chứa số"),
  });
  const { user } = useSelector((state) => state.userReducer);
  const [isActive, setIsActive] = useState(false);
  let valuesCheckOutToDisPatch = {};
  if (user !== null) {
    valuesCheckOutToDisPatch = {
      maLichChieu: parseInt(scheduleId),
      danhSachVe: listChairChoosing,
      taiKhoanNguoiDung: user.hoTen,
    };
  }
console.log(valuesCheckOutToDisPatch);
  return (
    <div className="checkout">
      <div className="checkout-left">
        <div className={`layoutShowMenu ${isActive ? "active" : ""}`}></div>
        <div className={`menu-popCorn ${isActive ? "active" : ""}`}>
          <div
            className="d-flex flex-column justify-content-center"
            style={{ width: "100%", height: "100%" }}
          >
            <div className="d-flex align-items-center justify-content-between my-2">
              <div className="d-flex align-items-center">
                <img
                  src="/img/popcorn.png"
                  style={{ width: "50px", height: "50px" }}
                  alt="/img/popcorn.png"
                />
                <div>
                  <p className="ml-2">Combo 1</p>
                  <p className="ml-2 text-success">70.000đ</p>
                </div>
              </div>
              <div>
                <button
                  onClick={decrease1}
                  className="btn btn-danger px-2 py-1"
                >
                  -
                </button>
                <span className="mx-2">{count1}</span>
                <button
                  onClick={increase1}
                  className="btn btn-success px-2 py-1"
                >
                  +
                </button>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between my-2">
              <div className="d-flex align-items-center">
                <img
                  src="/img/popcorn.png"
                  style={{ width: "50px", height: "50px" }}
                  alt="/img/popcorn.png"
                />
                <div>
                  <p className="ml-2">Combo 2</p>
                  <p className="ml-2 text-success">110.000đ</p>
                </div>
              </div>
              <div>
                <button
                  onClick={decrease2}
                  className="btn btn-danger px-2 py-1"
                >
                  -
                </button>
                <span className="mx-2">{count2}</span>
                <button
                  onClick={increase2}
                  className="btn btn-success px-2 py-1"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout__header d-flex align-items-center justify-content-between">
          <div className="d-flex">
            <p className="mr-5">CHỌN GHẾ & THANH TOÁN</p>
          </div>
          <div className="d-flex align-items-center">
            <i
              style={{ fontSize: "32px" }}
              className="fa fa-user-circle mr-2"
            />{" "}
            <span>{user?.hoTen}</span>
          </div>
        </div>
        <div className="checkout__body">
          <div className="body__screen">
            <div>
              <p>{detailCheckout?.thongTinPhim?.tenCumRap}</p>
              <p>
                {`${detailCheckout?.thongTinPhim?.ngayChieu.substring(0, 5)} -
                  ${detailCheckout?.thongTinPhim?.gioChieu}`}
              </p>
            </div>
            <div>
              <p>Thời gian giữ ghế</p>
              {loader ? loader : <Timer />}
            </div>
          </div>
          <div className="body__chairs">
            <p className="text-center my-2">Màn hình</p>
            <div className="chairs__container">{renderChairs()}</div>
          </div>
        </div>
      </div>
      <div className="checkout-right">
        <p
          className="text-center checkout__price checkout-line text-success"
          style={{ fontSize: "30px" }}
        >
          {`${totalPrice} đ`}
        </p>
        <div className="detailFilm mt-3 checkout-line">
          <button className="btn btn-danger p-1">C18</button>{" "}
          <span>{detailCheckout?.thongTinPhim?.tenPhim}</span>
          <p>{detailCheckout?.thongTinPhim?.tenCumRap}</p>
          <p>{`${detailCheckout?.thongTinPhim?.ngayChieu.substring(0, 5)} -
                  ${detailCheckout?.thongTinPhim?.gioChieu} - ${
            detailCheckout?.thongTinPhim?.tenRap
          }`}</p>
        </div>
        <div className="checkout-line">
          <div className="d-flex justify-content-between">
            <p>Ghế</p>
            <p className="text-success">{`${ticketPrice} đ`}</p>
          </div>
        </div>
        <div className="checkout-line">
          <div className="d-flex justify-content-between align-items-center">
            <div
              onClick={() => setIsActive(!isActive)}
              style={{ cursor: "pointer" }}
              className="d-flex align-items-center"
            >
              <img
                src="/img/popcorn.png"
                style={{ width: "50px", height: "50px" }}
                alt="/img/popcorn.png"
              />
              <p className="ml-2">Chọn combo</p>
            </div>
            <p className="text-success">{`${comboPrice} đ`}</p>
          </div>
        </div>
        <Formik
          initialValues={{
            email: "",
            phone: "",
          }}
          onSubmit={() => {
            dispatch(booking(valuesCheckOutToDisPatch));
            setModalShow(true);
          }}
          validationSchema={checkoutSchema}
          render={(formikProps) => (
            <Form>
              <div className="checkout-line">
                <div className="form-group mb-0">
                  <Field
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={formikProps.handleChange}
                    placeholder="Email"
                  />
                  <div
                    className="text-danger"
                    style={{ height: "10px", margin: " 5px 0" }}
                  >
                    <ErrorMessage name="email" />
                  </div>
                </div>
              </div>
              <div className="checkout-line">
                <div className="form-group mb-0">
                  <Field
                    type="text"
                    name="phone"
                    className="form-control"
                    onChange={formikProps.handleChange}
                    placeholder="Phone"
                  />
                  <div
                    className="text-danger"
                    style={{ height: "10px", margin: " 5px 0" }}
                  >
                    <ErrorMessage name="phone" />
                  </div>
                  <button ref={myRef} type="submit" style={{display: 'none'}}></button>
                </div>
              </div>
            </Form>
          )}
        />

        <div className="checkout-line">
          <div className=" d-flex justify-content-between align-items-center">
            <div>
              <p>Mã giảm giá</p>

              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập tại đây"
                />
                <div className="input-group-append">
                  <button className="input-group-text">Áp dụng</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-line">
          <p>Hình thức thanh toán</p>
          <div>
            <div>
              <div className="form-check d-flex align-items-center">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  defaultValue="option1"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
                  <div className="d-flex align-items-center">
                    <img
                      src="/img/zalopay.png"
                      alt="zalopay-logo"
                      style={{ width: "60px", height: "40px" }}
                    />
                    <p>Thanh toán qua ZaloPay</p>
                  </div>
                </label>
              </div>
              <div className="form-check d-flex align-items-center">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  defaultValue="option2"
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  <div className="d-flex align-items-center">
                    <i
                      style={{ fontSize: "22px", margin: "0 18px" }}
                      className="fab fa-cc-visa"
                    ></i>
                    <p>Thanh toán qua Thẻ Visa</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-center text-danger">
            Vé đã mua không thể hoàn tiền!
          </p>
          <div>
            {emptyListChairChoosing() ? (
              <button
                style={{ width: "100%", cursor: "not-allowed" }}
                className="btn btn-secondary"
                disabled
              >
                ĐẶT VÉ
              </button>
            ) : (
              <button
                type="submit"
                style={{ width: "100%" }}
                className="btn btn-success"
                onClick={()=>{myRef.current.click()}}
              >
                ĐẶT VÉ
              </button>
            )}
            <>
              {error ? (
                <Modal
                  size="sm"
                  id="modal-timeup"
                  show={modalShow}
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header>
                    <Modal.Title>
                      <p>Thông báo</p>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p className="text-danger">
                      Đã xảy ra lỗi! Vui lòng thử lại
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      className="btn-secondary"
                      onClick={() => {
                        setModalShow(false);
                        history.go(0);
                      }}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              ) : (
                <Modal
                  size="sm"
                  id="modal-timeup"
                  show={modalShow}
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header>
                    <Modal.Title>
                      <p>Thông báo</p>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>{message}</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      className="btn-secondary"
                      onClick={() => {
                        setModalShow(false);
                        history.push("/");
                      }}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
}
