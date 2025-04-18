import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NewByCate.css';

const NewsbyCategories = () => {
    const navigate = useNavigate();

    React.useEffect(() => {
        // Initialize the code
        return () => { };
    }, []);

    // Function to handle navigation to detail page
    const handleNewsClick = (newsTitle) => {
        navigate('/newdetail', { state: { title: newsTitle } });
    };

    return (
        <div className="category-news-wrapper">
            <div className="category-news-container">
                {/* Header Banner Section */}
                <div className="category-news-banner">
                    <div className="category-news-banner-image-container">
                        <div className="category-news-banner-image"></div>
                    </div>
                    <div className="category-news-banner-content">
                        <h1 className="category-news-banner-title">TIN TỨC XHOME</h1>
                        <p className="category-news-banner-description">
                            Cập nhật những thông tin mới nhất về hoạt động và sự kiện của XHOME
                        </p>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="category-news-main-content">
                    {/* Latest News Section */}
                    <div className="category-news-latest-section">
                        <h2 className="category-news-section-title">Tin Tức Mới Nhất</h2>
                        <div className="category-news-latest-content">
                            {/* Featured News */}
                            <div
                                className="category-news-featured"
                                onClick={() => handleNewsClick('XHOME giới thiệu bộ sưu tập nội thất cao cấp 2024')}
                            >
                                <div className="category-news-featured-image"></div>
                                <div className="category-news-featured-content">
                                    <h3 className="category-news-title">
                                        XHOME giới thiệu bộ sưu tập nội thất cao cấp 2024
                                    </h3>
                                    <p className="category-news-summary">
                                        Bộ sưu tập mới nhất của XHOME mang đến những thiết kế đột phá, kết hợp giữa công năng và thẩm mỹ...
                                    </p>
                                    <button
                                        className="category-news-read-more"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleNewsClick('XHOME giới thiệu bộ sưu tập nội thất cao cấp 2024');
                                        }}
                                    >
                                        Xem thêm
                                    </button>
                                </div>
                            </div>

                            {/* Secondary News Row */}
                            <div className="category-news-grid">
                                <div
                                    className="category-news-card"
                                    onClick={() => handleNewsClick('XHOME khai trương showroom mới tại Hà Nội')}
                                >
                                    <div className="category-news-card-image category-news-card-image-1"></div>
                                    <div className="category-news-card-content">
                                        <h3 className="category-news-title">
                                            XHOME khai trương showroom mới tại Hà Nội
                                        </h3>
                                        <p className="category-news-summary">
                                            Không gian trưng bày rộng lớn với các mẫu nội thất hiện đại được bố trí khoa học...
                                        </p>
                                        <button
                                            className="category-news-read-more"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleNewsClick('XHOME khai trương showroom mới tại Hà Nội');
                                            }}
                                        >
                                            Xem thêm
                                        </button>
                                    </div>
                                </div>

                                <div
                                    className="category-news-card"
                                    onClick={() => handleNewsClick('Hội nghị khách hàng thường niên 2024')}
                                >
                                    <div className="category-news-card-image category-news-card-image-2"></div>
                                    <div className="category-news-card-content">
                                        <h3 className="category-news-title">
                                            Hội nghị khách hàng thường niên 2024
                                        </h3>
                                        <p className="category-news-summary">
                                            XHOME tổ chức thành công hội nghị khách hàng thường niên với sự tham gia của hơn 200 đối tác...
                                        </p>
                                        <button
                                            className="category-news-read-more"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleNewsClick('Hội nghị khách hàng thường niên 2024');
                                            }}
                                        >
                                            Xem thêm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Highlighted News Sidebar */}
                    <div className="category-news-sidebar">
                        <div className="category-news-sidebar-container">
                            <h2 className="category-news-sidebar-title">Tin Tức Nổi Bật</h2>
                            <div className="category-news-sidebar-list">
                                <div
                                    className="category-news-sidebar-item"
                                    onClick={() => handleNewsClick('XHOME đạt giải thưởng thiết kế nội thất')}
                                >
                                    <div className="category-news-sidebar-thumbnail category-news-sidebar-thumbnail-1"></div>
                                    <div className="category-news-sidebar-content">
                                        <h3 className="category-news-sidebar-title">
                                            XHOME đạt giải thưởng thiết kế nội thất
                                        </h3>
                                        <p className="category-news-sidebar-date">15/01/2024</p>
                                    </div>
                                </div>

                                <div
                                    className="category-news-sidebar-item"
                                    onClick={() => handleNewsClick('Nhà máy sản xuất mới đi vào hoạt động')}
                                >
                                    <div className="category-news-sidebar-thumbnail category-news-sidebar-thumbnail-2"></div>
                                    <div className="category-news-sidebar-content">
                                        <h3 className="category-news-sidebar-title">
                                            Nhà máy sản xuất mới đi vào hoạt động
                                        </h3>
                                        <p className="category-news-sidebar-date">10/01/2024</p>
                                    </div>
                                </div>

                                <div
                                    className="category-news-sidebar-item"
                                    onClick={() => handleNewsClick('Triển lãm nội thất XHOME 2024')}
                                >
                                    <div className="category-news-sidebar-thumbnail category-news-sidebar-thumbnail-3"></div>
                                    <div className="category-news-sidebar-content">
                                        <h3 className="category-news-sidebar-title">
                                            Triển lãm nội thất XHOME 2024
                                        </h3>
                                        <p className="category-news-sidebar-date">05/01/2024</p>
                                    </div>
                                </div>

                                <div
                                    className="category-news-sidebar-item"
                                    onClick={() => handleNewsClick('XHOME mở rộng đội ngũ thiết kế')}
                                >
                                    <div className="category-news-sidebar-thumbnail category-news-sidebar-thumbnail-4"></div>
                                    <div className="category-news-sidebar-content">
                                        <h3 className="category-news-sidebar-title">
                                            XHOME mở rộng đội ngũ thiết kế
                                        </h3>
                                        <p className="category-news-sidebar-date">01/01/2024</p>
                                    </div>
                                </div>

                                <div
                                    className="category-news-sidebar-item"
                                    onClick={() => handleNewsClick('Sáng kiến sản xuất xanh XHOME')}
                                >
                                    <div className="category-news-sidebar-thumbnail category-news-sidebar-thumbnail-5"></div>
                                    <div className="category-news-sidebar-content">
                                        <h3 className="category-news-sidebar-title">
                                            Sáng kiến sản xuất xanh XHOME
                                        </h3>
                                        <p className="category-news-sidebar-date">28/12/2023</p>
                                    </div>
                                </div>

                                <div
                                    className="category-news-sidebar-item"
                                    onClick={() => handleNewsClick('XHOME nhận giải Dịch vụ xuất sắc')}
                                >
                                    <div className="category-news-sidebar-thumbnail category-news-sidebar-thumbnail-6"></div>
                                    <div className="category-news-sidebar-content">
                                        <h3 className="category-news-sidebar-title">
                                            XHOME nhận giải Dịch vụ xuất sắc
                                        </h3>
                                        <p className="category-news-sidebar-date">25/12/2023</p>
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