import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './NewDetail.css';

const NewDetail = () => {
    useEffect(() => {
        // Initialize the code
        return () => { };
    }, []);

    return (
        <div className="news-detail-container">
            <div className="news-detail-main">
                {/* Add the Back button here */}
                <Link to="/newbycate" className="news-detail-back-button">
                    Trở lại
                </Link>
                <div className="news-detail-content-wrapper">
                    <div className="news-detail-article">
                        <h1>
                            LẬT TẨY NHỮNG CHIÊU TRÒ GIẢ MẠO TRÊN THỊ TRƯỜNG NỘI THẤT PHỔ THÔNG TẠI VIỆT NAM
                        </h1>
                        <p>
                            Ở Việt Nam, "Chiêu trò" giả mạo các thương hiệu lớn tưởng đã cũ nhưng vẫn đủ sức giúp nhiều đơn vị và cá nhân yếu kém, lợi dụng kiếm lời từ khách hàng.
                        </p>
                        <div className="news-detail-section">
                            <h2>"XHOME đội lốt XHOME"</h2>
                            <div className="news-detail-image-placeholder"></div>
                            <p>
                                Qua điều tra, đơn vị giả mạo này đã ngang nhiên đăng ký kinh doanh dưới mác XHOME từ tháng 3/2019 tại địa chỉ 51, ngách 63, ngõ 1194 đường Láng, quận Đống Đa, Hà Nội.
                            </p>
                            <div className="news-detail-info-box">
                                <h3>Thông tin doanh nghiệp giả mạo:</h3>
                                <ul>
                                    <li>
                                        <span>Tên doanh nghiệp: CÔNG TY CỔ PHẦN NỘI THẤT THÔNG MINH XHOME HÀ NỘI</span>
                                        <svg className="news-detail-bullet-icon"></svg>
                                    </li>
                                    <li>
                                        <span>Mã số doanh nghiệp: 0108644521</span>
                                        <svg className="news-detail-bullet-icon"></svg>
                                    </li>
                                    <li>
                                        <span>Địa chỉ: Số nhà 51, ngách 63, ngõ 1194 đường Láng, Phường Láng Thượng</span>
                                        <svg className="news-detail-bullet-icon"></svg>
                                    </li>
                                </ul>
                            </div>
                            <h2>Hậu quả của việc giả mạo</h2>
                            <div className="news-detail-image-placeholder"></div>
                            <p>
                                Việc giả mạo thương hiệu không chỉ gây thiệt hại về mặt uy tín cho XHOME mà còn ảnh hưởng trực tiếp đến quyền lợi của người tiêu dùng. Nhiều khách hàng đã bị lừa đảo, nhận được sản phẩm kém chất lượng và dịch vụ không đảm bảo.
                            </p>
                            <h2>Cách nhận biết XHOME chính hãng</h2>
                            <div className="news-detail-image-placeholder"></div>
                            <ul>
                                <li>
                                    <span>Kiểm tra địa chỉ showroom chính thức</span>
                                    <svg className="news-detail-bullet-icon"></svg>
                                </li>
                                <li>
                                    <span>Xác minh thông tin qua website và hotline chính thức</span>
                                    <svg className="news-detail-bullet-icon"></svg>
                                </li>
                                <li>
                                    <span>Đảm bảo có đầy đủ giấy tờ bảo hành và xuất xứ sản phẩm</span>
                                    <svg className="news-detail-bullet-icon"></svg>
                                </li>
                                <li>
                                    <span>Nhận diện logo và thương hiệu chuẩn của XHOME</span>
                                    <svg className="news-detail-bullet-icon"></svg>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="news-detail-sidebar">
                        <div className="news-detail-updates">
                            <h2>TIN TỨC CẬP NHẬT</h2>
                            <div className="news-detail-update-item">
                                <div className="news-detail-thumbnail"></div>
                                <div className="news-detail-update-content">
                                    <h3>SINH NHẬT 9 NĂM XHOME VIỆT NAM</h3>
                                    <button className="news-detail-view-more">Xem thêm</button>
                                </div>
                            </div>
                            <div className="news-detail-update-item">
                                <div className="news-detail-thumbnail"></div>
                                <div className="news-detail-update-content">
                                    <h3>XHOME FACTORY</h3>
                                    <button className="news-detail-view-more">Xem thêm</button>
                                </div>
                            </div>
                        </div>
                        <div className="news-detail-related-news">
                            <h2>TIN TỨC LIÊN QUAN</h2>
                            <div className="news-detail-related-item">
                                <div className="news-detail-related-image"></div>
                                <h3>XHOME - 8 năm một chặng đường</h3>
                            </div>
                            <div className="news-detail-related-item">
                                <div className="news-detail-related-image"></div>
                                <h3>From XHOME Sai Gon with ❤️</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewDetail;