import React from 'react';
import './Header.css';
import logo from '../../assets/logo.jpg'; // Adjust path based on your structure
import { Link } from 'react-router-dom';

const Header = () => {
  React.useEffect(() => {
    // Initialize the code
    return () => {};
  }, []);

  return (
    <div className="header">
      <div className="header-1">
        <div className="nav">
          <div className="div">
            <div className="a">
              <img src={logo} alt="Logo" className="img" />
            </div>
            <div className="div-1">
              <div className="button">
                <div className="text-ng-k-t-vn">ĐĂNG KÝ TƯ VẤN</div>
              </div>

              <Link to="/" className="a-1">
                <div className="trang-ch">TRANG CHỦ</div>
                <div className="rectangle-after"></div>
              </Link>

              <div className="a-2">
                <div className="rectangle-after-1"></div>
              </div>

              <div className="div-2">
                <div className="button-1">
                  <svg id="95:1171" className="i"></svg>
                  <div className="tin-tc">TIN TỨC</div>
                  <div className="rectangle-after-2"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="div-3">
            <Link to="/product" className="button-2">
              <svg id="95:1158" className="i-1"></svg>
              <div className="sn-phm">SẢN PHẨM</div>
              <div className="rectangle-after-3"></div>
            </Link>
          </div>

          <div className="a-3">
            <svg id="95:1018" className="i-2"></svg>
            <div className="dch-v">DỊCH VỤ</div>
            <div className="rectangle-after-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;