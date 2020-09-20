import React from "react";

export default function News() {
  return (
    <div className="news mb-5" id="news">
      <ul className="nav nav-tabs tab-title" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            data-toggle="tab"
            href="#hotNews"
            role="tab"
          >
            Điện Ảnh 24h
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" href="#review" role="tab">
            Review
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="tab"
            href="#promotion"
            role="tab"
          >
            Khuyến Mãi
          </a>
        </li>
      </ul>
      <div className="tab-content news__modify">
        <div className="tab-pane fade show active" id="hotNews" role="tabpanel">
          <div className="row mb-3">
            <div className="col-6">
              <img
                src="https://static.molo.vn/2020/09/antebellum-home-bg-aug21-1024x576.jpg"
                alt="https://static.molo.vn/2020/09/antebellum-home-bg-aug21-1024x576.jpg"
              />
              <h3 className="news__title">
                [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị
                Antebellum: Bẫy Thực Tại Kinh Hoàng
              </h3>
              <p className="news__text">
                Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những
                mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham
                gia của nhà sản xuất đã làm nên thành công của loạt tác phẩm ấn
                tượng “Get Out”, “Us” hay{" "}
              </p>
              <div className="news__icon">
                <div style={{ marginRight: "10px" }}>
                  <i className="fa fa-thumbs-up"></i>
                  <span>0</span>
                </div>
                <div>
                  <i className="fa fa-comment-alt"></i>
                  <span>0</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <img
                src="https://ss-images.catscdn.vn/pc/1594717139468/jsjs1.jpg"
                alt="https://ss-images.catscdn.vn/pc/1594717139468/jsjs1.jpg"
              />
              <h3 className="news__title">
                Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu
                doanh thu tại Hàn Quốc mùa dịch
              </h3>
              <p className="news__text">
                Vượt mặt Peninsula, Ác Quỷ Đối Đầu trở thành phim ăn khách nhất
                mùa hè 2020 tại Hàn Quốc. Chỉ sau 12 ngày, Ác Quỷ Đối Đầu chạm
                điểm hoà vốn với 3.5 triệu lượt xem. Ác Quỷ Đối Đầu giữ vững vị
                trí top 1 doanh thu 2 tuần liên tiếp
              </p>
              <div className="news__icon">
                <div style={{ marginRight: "10px" }}>
                  <i className="fa fa-thumbs-up"></i>
                  <span>0</span>
                </div>
                <div>
                  <i className="fa fa-comment-alt"></i>
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img
                src="https://s3img.vcdn.vn/123phim/2020/08/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503918450.png"
                alt="https://s3img.vcdn.vn/123phim/2020/08/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503918450.png"
              />
              <h3 className="news__title">
                Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher
                Nolan
              </h3>
              <p className="news__text">
                Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái
                tên Christopher Nolan, được biết tới như một trong những đạo
                diễn thiên tài với khả
              </p>
              <div className="news__icon">
                <div style={{ marginRight: "10px" }}>
                  <i className="fa fa-thumbs-up"></i>
                  <span>0</span>
                </div>
                <div>
                  <i className="fa fa-comment-alt"></i>
                  <span>0</span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <img
                src="https://s3img.vcdn.vn/123phim/2020/08/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122361852.png"
                alt="https://s3img.vcdn.vn/123phim/2020/08/truy-cung-giet-tan-cuoc-tai-ngo-cua-hai-ong-hoang-phong-ve-xu-han-15966122361852.png"
              />
              <h3 className="news__title">
                Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé'
                xứ Hàn
              </h3>
              <p className="news__text">
                Sau 7 năm kể từ New World – bộ phim đạt thành tích hơn 4.68
                triệu vé, hai tên tuổi lão làng trong làng điện ảnh Hàn Quốc mới
                tiếp tục tái hợp trong
              </p>
              <div className="news__icon">
                <div style={{ marginRight: "10px" }}>
                  <i className="fa fa-thumbs-up"></i>
                  <span>0</span>
                </div>
                <div>
                  <i className="fa fa-comment-alt"></i>
                  <span>0</span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-12 news__small">
                  <img
                    src="https://s3img.vcdn.vn/123phim/2020/08/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503918450.png"
                    alt="https://s3img.vcdn.vn/123phim/2020/08/da-n-my-nhan-trong-the-gio-i-die-n-a-nh-cu-a-qua-i-kie-t-christopher-nolan-15970503918450.png"
                  />
                  <h3 className="news__title ml-2">
                    6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình
                    đám nhất Hollywood
                  </h3>
                </div>
                <div className="col-12 news__small">
                  <img
                    src="https://s3img.vcdn.vn/123phim/2020/08/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-15965999321682.png"
                    alt="https://s3img.vcdn.vn/123phim/2020/08/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-15965999321682.png"
                  />
                  <h3 className="news__title ml-2">
                    Gái Già Lắm Chiêu V – Những cuộc đời vương giả
                  </h3>
                </div>
                <div className="col-12 news__small">
                  <img
                    src="https://s3img.vcdn.vn/123phim/2020/07/kaity-nguyen-tro-thanh-my-nhan-moi-cua-vu-tru-gai-gia-lam-chieu-15959988694730.png"
                    alt="https://s3img.vcdn.vn/123phim/2020/07/kaity-nguyen-tro-thanh-my-nhan-moi-cua-vu-tru-gai-gia-lam-chieu-15959988694730.png"
                  />
                  <h3 className="news__title ml-2">
                    Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già Lắm
                    Chiêu
                  </h3>
                </div>
                <div className="col-12 news__small">
                  <img
                    src="https://s3img.vcdn.vn/123phim/2020/07/5-ly-do-khien-ban-khong-the-bo-qua-bo-phim-cau-be-nguoi-go-pinocchio-15959331601790.png"
                    alt="https://s3img.vcdn.vn/123phim/2020/07/5-ly-do-khien-ban-khong-the-bo-qua-bo-phim-cau-be-nguoi-go-pinocchio-15959331601790.png"
                  />
                  <h3 className="news__title ml-2">
                    5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ
                    Pinocchio
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tab-pane fade" id="review" role="tabpanel">
          <div className="row mb-3">
            <div className="col-6">
              <img
                src="https://s3img.vcdn.vn/123phim/2020/08/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png"
                alt="https://s3img.vcdn.vn/123phim/2020/08/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png"
              />
              <h3 className="news__title">
                Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết
              </h3>
              <p className="news__text">
                Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám
              </p>
              <div className="news__icon">
                <div style={{ marginRight: "10px" }}>
                  <i className="fa fa-thumbs-up"></i>
                  <span>0</span>
                </div>
                <div>
                  <i className="fa fa-comment-alt"></i>
                  <span>0</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <img
                src="https://s3img.vcdn.vn/123phim/2020/08/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png"
                alt="https://s3img.vcdn.vn/123phim/2020/08/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png"
              />
              <h3 className="news__title">
              Review: Dinh Thự Oan Khuất (Ghost Of War)
              </h3>
              <p className="news__text">
              Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!
              </p>
              <div className="news__icon">
                <div style={{ marginRight: "10px" }}>
                  <i className="fa fa-thumbs-up"></i>
                  <span>0</span>
                </div>
                <div>
                  <i className="fa fa-comment-alt"></i>
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img
                src="https://s3img.vcdn.vn/123phim/2020/06/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png"
                alt="https://s3img.vcdn.vn/123phim/2020/06/blackkklansman-coc-nuoc-lanh-de-nguoi-my-thuc-tinh-15910862294165.png"
              />
              <h3 className="news__title">
              ‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh
              </h3>
              <p className="news__text">
              Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng tộc - nỗi đau gây nhức 
              </p>
              <div className="news__icon">
                <div style={{ marginRight: "10px" }}>
                  <i className="fa fa-thumbs-up"></i>
                  <span>0</span>
                </div>
                <div>
                  <i className="fa fa-comment-alt"></i>
                  <span>0</span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <img
                src="https://s3img.vcdn.vn/123phim/2020/05/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png"
                alt="https://s3img.vcdn.vn/123phim/2020/05/american-sniper-chinh-nghia-hay-phi-nghia-15905660338111.png"
              />
              <h3 className="news__title">
              American Sniper - Chính nghĩa hay phi nghĩa?
              </h3>
              <p className="news__text">
              American Sniper khắc họa một tay súng bắn tỉa “huyền thoại” của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu chuyện phim chậm rãi đưa người 
              </p>
              <div className="news__icon">
                <div style={{ marginRight: "10px" }}>
                  <i className="fa fa-thumbs-up"></i>
                  <span>0</span>
                </div>
                <div>
                  <i className="fa fa-comment-alt"></i>
                  <span>0</span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-12 news__small">
                  <img
                    src="https://s3img.vcdn.vn/123phim/2020/05/review-spider-man-into-the-spider-vesre-15886520889426.png"
                    alt="https://s3img.vcdn.vn/123phim/2020/05/review-spider-man-into-the-spider-vesre-15886520889426.png"
                  />
                  <h3 className="news__title ml-2">
                  Review: Spider-Man: Into The Spider-Vesre 
                  </h3>
                </div>
                <div className="col-12 news__small">
                  <img
                    src="https://s3img.vcdn.vn/123phim/2020/03/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843496198482.jpg"
                    alt="https://s3img.vcdn.vn/123phim/2020/03/covid-19-la-ban-chinh-thuc-cua-mev-1-phim-contagion-2011-15843496198482.jpg"
                  />
                  <h3 className="news__title ml-2">
                  COVID-19 là bản chính thức của MEV-1 phim contagion (2011)
                  </h3>
                </div>
                <div className="col-12 news__small">
                  <img
                    src="https://s3img.vcdn.vn/123phim/2020/03/review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the-15840925506832.jpg"
                    alt="https://s3img.vcdn.vn/123phim/2020/03/review-sieu-ve-si-so-vo-giai-cuu-tong-thong-chua-bao-gio-lay-loi-va-hai-huoc-den-the-15840925506832.jpg"
                  />
                  <h3 className="news__title ml-2">
                  [Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống chưa bao giờ lầy lội và hài hước đến thế
                  </h3>
                </div>
                <div className="col-12 news__small">
                  <img
                    src="https://s3img.vcdn.vn/123phim/2020/03/review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant-15840731141389.jpg"
                    alt="https://s3img.vcdn.vn/123phim/2020/03/review-bloodshot-mo-man-an-tuong-cho-vu-tru-sieu-anh-hung-valiant-15840731141389.jpg"
                  />
                  <h3 className="news__title ml-2">
                  [Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ Siêu anh hùng Valiant
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="promotion" role="tabpanel">
          <div className="row mb-3">
            <div className="col-6">
              <img
                src="https://s3img.vcdn.vn/123phim/2020/07/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg"
                alt="https://s3img.vcdn.vn/123phim/2020/07/bhd-star-ve-chi-59-000d-ca-tuan-15937622264546.jpg"
              />
              <h3 className="news__title">
              BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!
              </h3>
              <p className="news__text">
              Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay.
              </p>
              <div className="news__icon">
                <div style={{ marginRight: "10px" }}>
                  <i className="fa fa-thumbs-up"></i>
                  <span>0</span>
                </div>
                <div>
                  <i className="fa fa-comment-alt"></i>
                  <span>0</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <img
                src="https://s3img.vcdn.vn/123phim/2020/05/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889409277632.png"
                alt="https://s3img.vcdn.vn/123phim/2020/05/beta-cineplex-tro-lai-voi-hang-loat-uu-dai-lon-15889409277632.png"
              />
              <h3 className="news__title">
              Beta Cineplex trở lại với hàng loạt ưu đãi lớn
              </h3>
              <p className="news__text">
              Từ thứ 7 tuần này (9/5), toàn bộ các rạp Beta Cinemas trên toàn quốc sẽ mở cửa trở lại. Mừng ngày trở lại, hàng loạt khuyến mại KHỦNG đổ bộ cùng lúc dàng cho các tín đồ của TIX đây.
              </p>
              <div className="news__icon">
                <div style={{ marginRight: "10px" }}>
                  <i className="fa fa-thumbs-up"></i>
                  <span>0</span>
                </div>
                <div>
                  <i className="fa fa-comment-alt"></i>
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <img
                src="https://s3img.vcdn.vn/123phim/2019/11/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746782357665.jpg"
                alt="https://s3img.vcdn.vn/123phim/2019/11/123phim-thu-6-khong-den-toi-uu-dai-huy-diet-11k-ve-anh-trai-yeu-quai-15746782357665.jpg"
              />
              <h3 className="news__title">
              [123Phim] Thứ 6 Không Đen Tối -  Ưu đãi huỷ diệt 11k/vé Anh Trai Yêu Quái
              </h3>
              <p className="news__text">
              Từ giờ đến 05.12.2019, chỉ cần lần đầu mua vé trên 123Phim, chọn thanh toán bằng ZaloPay hoặc mục Vé Phim trên ZaloPay, bạn có thể đặt ngay vé phim 
              </p>
              <div className="news__icon">
                <div style={{ marginRight: "10px" }}>
                  <i className="fa fa-thumbs-up"></i>
                  <span>0</span>
                </div>
                <div>
                  <i className="fa fa-comment-alt"></i>
                  <span>0</span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <img
                src="https://s3img.vcdn.vn/123phim/2019/11/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439150313.jpg"
                alt="https://s3img.vcdn.vn/123phim/2019/11/123phim-nhap-ma-psm30k-giam-ngay-30k-khi-dat-ve-phap-su-mu-ai-chet-gio-tay-15729439150313.jpg"
              />
              <h3 className="news__title">
              [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt vé Pháp Sư Mù: Ai Chết Giơ Tay
              </h3>
              <p className="news__text">
              123Phim đồng hành cùng phim Việt - Giảm ngay 30k mỗi giao dịch khi đặt vé Pháp Sư Mù: Ai Chết Giơ Tay trên ứng dụng 123Phim.
              </p>
              <div className="news__icon">
                <div style={{ marginRight: "10px" }}>
                  <i className="fa fa-thumbs-up"></i>
                  <span>0</span>
                </div>
                <div>
                  <i className="fa fa-comment-alt"></i>
                  <span>0</span>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <div className="col-12 news__small">
                  <img
                    src="https://s3img.vcdn.vn/123phim/2019/10/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106082164.jpg"
                    alt="https://s3img.vcdn.vn/123phim/2019/10/mega-gs-mot-doa-hoa-thay-ngan-loi-yeu-15713106082164.jpg"
                  />
                  <h3 className="news__title ml-2">
                  [Mega GS] Một đoá hoa thay ngàn lời yêu
                  </h3>
                </div>
                <div className="col-12 news__small">
                  <img
                    src="https://s3img.vcdn.vn/123phim/2019/10/123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang-15712976629297.jpg"
                    alt="https://s3img.vcdn.vn/123phim/2019/10/123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang-15712976629297.jpg"
                  />
                  <h3 className="news__title ml-2">
                  [123Phim] NHẬP MÃ 'BKT' - Giảm ngay 20k khi đặt vé Bắc Kim Thang
                  </h3>
                </div>
                <div className="col-12 news__small">
                  <img
                    src="https://s3img.vcdn.vn/123phim/2019/08/sinh-nhat-mega-gs-15663931822487.jpg"
                    alt="https://s3img.vcdn.vn/123phim/2019/08/sinh-nhat-mega-gs-15663931822487.jpg"
                  />
                  <h3 className="news__title ml-2">
                  Sinh Nhật Mega GS
                  </h3>
                </div>
                <div className="col-12 news__small">
                  <img
                    src="https://s3img.vcdn.vn/123phim/2019/05/123phim-tixshop-tro-lai-qua-xin-hon-xua-15583510978777.jpg"
                    alt="https://s3img.vcdn.vn/123phim/2019/05/123phim-tixshop-tro-lai-qua-xin-hon-xua-15583510978777.jpg"
                  />
                  <h3 className="news__title ml-2">
                  [123Phim] TixShop trở lại, quà ‘xịn’ hơn xưa
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
