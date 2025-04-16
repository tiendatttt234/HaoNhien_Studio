import React from 'react';
import "./NewByCate.css";

const NewsbyCategories = () => {
    React.useEffect(() => {
        // Initialize the code
        return () => { }
    }, [])

    return (
        <div className="news-by-categories">
            <div className="news-container">
                {/* Header Banner Section */}
                <div className="header-banner">
                    <div className="banner-image-container">
                        <div className="banner-image"></div>
                    </div>
                    <div className="banner-content">
                        <h1 className="banner-title">TIN TỨC XHOME</h1>
                        <p className="banner-description">
                            Cập nhật những thông tin mới nhất về hoạt động và sự kiện của XHOME
                        </p>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="main-content">
                    {/* Latest News Section */}
                    <div className="latest-news-section">
                        <h2 className="section-title">Tin Tức Mới Nhất</h2>
                        <div className="latest-news-content">
                            {/* Featured News */}
                            <div className="featured-news">
                                <div className="featured-image"></div>
                                <div className="featured-content">
                                    <h3 className="news-title">XHOME giới thiệu bộ sưu tập nội thất cao cấp 2024</h3>
                                    <p className="news-summary">
                                        Bộ sưu tập mới nhất của XHOME mang đến những thiết kế đột phá, kết hợp giữa công năng và thẩm mỹ...
                                    </p>
                                    <button className="read-more-btn">Xem thêm</button>
                                </div>
                            </div>

                            {/* Secondary News Row */}
                            <div className="news-grid">
                                <div className="news-card">
                                    <div className="news-card-image news-image-1"></div>
                                    <div className="news-card-content">
                                        <h3 className="news-title">XHOME khai trương showroom mới tại Hà Nội</h3>
                                        <p className="news-summary">
                                            Không gian trưng bày rộng lớn với các mẫu nội thất hiện đại được bố trí khoa học...
                                        </p>
                                        <button className="read-more-btn">Xem thêm</button>
                                    </div>
                                </div>

                                <div className="news-card">
                                    <div className="news-card-image news-image-2"></div>
                                    <div className="news-card-content">
                                        <h3 className="news-title">Hội nghị khách hàng thường niên 2024</h3>
                                        <p className="news-summary">
                                            XHOME tổ chức thành công hội nghị khách hàng thường niên với sự tham gia của hơn 200 đối tác...
                                        </p>
                                        <button className="read-more-btn">Xem thêm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Highlighted News Sidebar */}
                    <div className="highlighted-news-sidebar">
                        <div className="highlighted-news-container">
                            <h2 className="sidebar-title">Tin Tức Nổi Bật</h2>
                            <div className="highlighted-news-list">
                                <div className="highlighted-news-item">
                                    <div className="highlight-thumbnail thumbnail-1"></div>
                                    <div className="highlight-content">
                                        <h3 className="highlight-title">XHOME đạt giải thưởng thiết kế nội thất</h3>
                                        <p className="highlight-date">15/01/2024</p>
                                    </div>
                                </div>

                                <div className="highlighted-news-item">
                                    <div className="highlight-thumbnail thumbnail-2"></div>
                                    <div className="highlight-content">
                                        <h3 className="highlight-title">Nhà máy sản xuất mới đi vào hoạt động</h3>
                                        <p className="highlight-date">10/01/2024</p>
                                    </div>
                                </div>

                                <div className="highlighted-news-item">
                                    <div className="highlight-thumbnail thumbnail-3"></div>
                                    <div className="highlight-content">
                                        <h3 className="highlight-title">Triển lãm nội thất XHOME 2024</h3>
                                        <p className="highlight-date">05/01/2024</p>
                                    </div>
                                </div>

                                <div className="highlighted-news-item">
                                    <div className="highlight-thumbnail thumbnail-4"></div>
                                    <div className="highlight-content">
                                        <h3 className="highlight-title">XHOME mở rộng đội ngũ thiết kế</h3>
                                        <p className="highlight-date">01/01/2024</p>
                                    </div>
                                </div>

                                <div className="highlighted-news-item">
                                    <div className="highlight-thumbnail thumbnail-5"></div>
                                    <div className="highlight-content">
                                        <h3 className="highlight-title">Sáng kiến sản xuất xanh XHOME</h3>
                                        <p className="highlight-date">28/12/2023</p>
                                    </div>
                                </div>

                                <div className="highlighted-news-item">
                                    <div className="highlight-thumbnail thumbnail-6"></div>
                                    <div className="highlight-content">
                                        <h3 className="highlight-title">XHOME nhận giải Dịch vụ xuất sắc</h3>
                                        <p className="highlight-date">25/12/2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsbyCategories;