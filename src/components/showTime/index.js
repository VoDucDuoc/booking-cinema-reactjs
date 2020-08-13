import React from 'react'

export default function ShowTime() {
    return (
        <section className="showstime">
        <div className="showstime__content">
          <div className="row">
            <div className="col-2 col--1">
              <div
                className="nav flex-column my-brand nav-pills"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  className="nav-link active"
                  id="cgv"
                  data-toggle="pill"
                  href="#cgv-tab"
                  role="tab"
                >
                  <img
                    src="https://s3img.vcdn.vn/123phim/2018/09/ee621ee05dcd4565caead4f29421b41e.png"
                    alt="cgv-logo"
                  />
                </a>
                <a
                  className="nav-link"
                  id="bhd"
                  data-toggle="pill"
                  href="#bhd-tab"
                  role="tab"
                >
                  <img
                    src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
                    alt="bhd-logo"
                  />
                </a>
                <a
                  className="nav-link"
                  id="bhd"
                  data-toggle="pill"
                  href="#bhd-tab"
                  role="tab"
                >
                  <img
                    src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
                    alt="bhd-logo"
                  />
                </a>
                <a
                  className="nav-link"
                  id="bhd"
                  data-toggle="pill"
                  href="#bhd-tab"
                  role="tab"
                >
                  <img
                    src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
                    alt="bhd-logo"
                  />
                </a>
                <a
                  className="nav-link"
                  id="bhd"
                  data-toggle="pill"
                  href="#bhd-tab"
                  role="tab"
                >
                  <img
                    src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
                    alt="bhd-logo"
                  />
                </a>
                <a
                  className="nav-link"
                  id="bhd"
                  data-toggle="pill"
                  href="#bhd-tab"
                  role="tab"
                >
                  <img
                    src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
                    alt="bhd-logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-4 col--2">
              <div className="my-tab">
                <div
                  className="tab-pane fade show active"
                  id="cgv-tab"
                  role="tabpanel"
                >
                  <div
                    className="nav flex-column nav-pills"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      className="nav-link active"
                      id="cgv-binhtan-tab"
                      data-toggle="pill"
                      href="#cgv-binhtan"
                      role="tab"
                    >
                      <img
                        src="https://s3img.vcdn.vn/123phim/2018/09/cgv-su-van-hanh-15380173580593.jpg"
                        alt="aaa  "
                      />
                      <div className="tab-text">
                        <p>
                          <span style={{ color: "red" }}> CGV </span>- AEON BINH
                          TAN
                        </p>
                        <p>Tầng 6, Vạn Hạnh Mall, 11 Sư Vạn Hạnh, quận 10</p>
                      </div>
                    </a>
                    <a
                      className="nav-link"
                      id="cgv-hungvuong-tab"
                      data-toggle="pill"
                      href="#cgv-hungvuong"
                      role="tab"
                    >
                      <img
                        src="https://s3img.vcdn.vn/123phim/2018/09/cgv-su-van-hanh-15380173580593.jpg"
                        alt="123"
                      />
                      <div className="tab-text">
                        <p>
                          <span style={{ color: "red" }}> CGV </span>- HUNG
                          VUONG
                        </p>
                        <p>Tầng 6, Vạn Hạnh Mall, 11 Sư Vạn Hạnh, quận 10</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="tab-pane fade" id="bhd-tab" role="tabpanel">
                  <div
                    className="nav flex-column nav-pills"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <a
                      className="nav-link active"
                      data-toggle="pill"
                      href="#bhd-bitexco"
                      role="tab"
                    >
                      <img
                        src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-bitexco-15379552241200.jpg"
                        alt="asdjh"
                      />
                      <div className="tab-text">
                        <p>
                          <span style={{ color: "green" }}> BHD </span>- BITEXCO
                        </p>
                        <p>Tầng 6, Vạn Hạnh Mall, 11 Sư Vạn Hạnh, quận 10</p>
                      </div>
                    </a>
                    <a
                      className="nav-link"
                      data-toggle="pill"
                      href="#bhd-thaodien"
                      role="tab"
                    >
                      <img
                        src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-bitexco-15379552241200.jpg"
                        alt="asd"
                      />
                      <div className="tab-text">
                        <p>
                          <span style={{ color: "green" }}> BHD </span>- THAO
                          DIEN
                        </p>
                        <p>Tầng 6, Vạn Hạnh Mall, 11 Sư Vạn Hạnh, quận 10</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 col--3">
              <div className="my-showtime">
                <div className="tab-content" id="cgv-showtime">
                  <div
                    className="tab-pane fade show active "
                    id="cgv-binhtan"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div className="showtime-item">
                      <img
                        src="https://s3img.vcdn.vn/mobile/123phim/2020/06/ngoi-den-ki-quai-pee-nak-2-c16-15928195432141_60x60.png"
                        alt="123"
                      />
                      <div className="showtime-text">
                        <p>
                          <span>C16</span> Ngôi đền kì quái - Pee Nak 2
                        </p>
                        <p>115 phút - TIX 6.2 - IMDb 0</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="cgv-hungvuong"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    CGV - HUNG VUONG
                  </div>
                </div>
                <div className="tab-content" id="bhd-showtime">
                  <div
                    className="tab-pane fade show active"
                    id="bhd-bitexco"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    BHD - BITEXCO
                  </div>
                  <div
                    className="tab-pane fade"
                    id="bhd-thaodien"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    BHD - THAO DIEN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
