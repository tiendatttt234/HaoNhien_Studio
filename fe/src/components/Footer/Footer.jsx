import React from 'react';
import './Footer.css';

const Footer = () => {
  React.useEffect(() => {
    // Initialize the code
    return () => {};
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-img" />
        </div>

        {/* Contact Sections */}
        <div className="contact-sections">
          {/* Northern Region */}
          <div className="region">
            <h3 className="region-title">KHU VỰC MIỀN BẮC</h3>
            <div className="region-content">
              <div className="city">
                <h4 className="city-title">Hà Nội</h4>
                <p className="city-info">
                  <svg className="icon location-icon" />
                  Lancaster Building - 20 Núi Trúc - Giảng Võ - Ba Đình - Hà Nội
                </p>
                <p className="city-info">
                  <svg className="icon phone-icon" />
                  024 6671 8333
                </p>
              </div>
              <div className="city">
                <h4 className="city-title">Hải Phòng</h4>
                <p className="city-info">
                  <svg className="icon location-icon" />
                  Tầng 6 - Bạch Đằng Tower - 268 Trần Nguyên Hãn - Lê Chân
                </p>
                <p className="city-info">
                  <svg className="icon phone-icon" />
                  0225 3787 383
                </p>
              </div>
            </div>
          </div>

          {/* Central Region */}
          <div className="region">
            <h3 className="region-title">KHU VỰC MIỀN TRUNG</h3>
            <div className="region-content">
              <div className="city">
                <h4 className="city-title">Đà Nẵng</h4>
                <p className="city-info">
                  <svg className="icon location-icon" />
                  Số 236-238 - Đường 30/4 - Q.Hải Châu
                </p>
                <p className="city-info">
                  <svg className="icon phone-icon" />
                  0236 656 3939
                </p>
              </div>
              <div className="city">
                <h4 className="city-title">Huế</h4>
                <p className="city-info">
                  <svg className="icon location-icon" />
                  Shophouse A21 - The Manor Crown - 62 Tố Hữu
                </p>
                <p className="city-info">
                  <svg className="icon phone-icon" />
                  0234 6265 999
                </p>
              </div>
            </div>
          </div>

          {/* Southern Region */}
          <div className="region">
            <h3 className="region-title">KHU VỰC MIỀN NAM</h3>
            <div className="region-content">
              <div className="city">
                <h4 className="city-title">TP Hồ Chí Minh CS1</h4>
                <p className="city-info">
                  <svg className="icon location-icon" />
                  Tầng 1 - Tòa nhà Orient - 331 Bến Vân Đồn - Quận 4
                </p>
                <p className="city-info">
                  <svg className="icon phone-icon" />
                  0899 199 786
                </p>
              </div>
              <div className="city">
                <h4 className="city-title">TP Hồ Chí Minh CS2</h4>
                <p className="city-info">
                  <svg className="icon location-icon" />
                  Tầng 21 - AP Tower - 518B Điện Biên Phủ
                </p>
                <p className="city-info">
                  <svg className="icon phone-icon" />
                  024 6671 8334
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="company-info">
          <div className="company-logo" />
          <div className="company-details">
            <p className="copyright">©Copyright 2014-2025</p>
            <p className="company-name">CÔNG TY CỔ PHẦN XHOME VIỆT NAM</p>
            <p className="company-address">
              Lancaster Building, 20 Núi Trúc - Giảng Võ - Ba Đình - Hà Nội
            </p>
            <p className="company-license">
              Giấy phép số 0106514703 do Sở kế hoạch và đầu tư thành phố Hà Nội cấp ngày 26/06/2020
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;