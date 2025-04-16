import React from 'react';
import "./New.css";

const News = () => {
    return (
        <div className="news-container">
            {/* Changed from header to div with banner class to avoid conflicts with potential header from App.js */}
            <div className="banner">
                <div className="banner-image"></div>
                <div className="banner-overlay">
                    <h1 className="banner-title">HAONHIEN - Chuyên Gia Nội Thất Hàng Đầu</h1>
                </div>
            </div>

            <main className="main-content">
                <h2 className="section-title">KINH NGHIỆM NỘI THẤT</h2>

                <div className="article-grid">
                    <article className="article-card">
                        <div className="article-image article-image-1"></div>
                        <div className="article-content">
                            <h3 className="article-title">Gia đình ba duy nam thường trải nghiệm căn hộ mẫu XHOME ECO</h3>
                            <p className="article-excerpt">
                                Khám phá trải nghiệm thực tế của gia đình trong không gian sống hiện đại, tiện
                                nghi và thân thiện với môi trường...
                            </p>
                            <button className="read-more-btn">Xem thêm</button>
                        </div>
                    </article>

                    <article className="article-card">
                        <div className="article-image article-image-2"></div>
                        <div className="article-content">
                            <h3 className="article-title">Bí kíp lựa chọn đơn vị thiết kế nội thất đáng tin cậy</h3>
                            <p className="article-excerpt">
                                Những tiêu chí quan trọng giúp bạn chọn được đơn vị thiết kế nội thất uy tín,
                                chất lượng cho không gian sống...
                            </p>
                            <button className="read-more-btn">Xem thêm</button>
                        </div>
                    </article>

                    <article className="article-card">
                        <div className="article-image article-image-3"></div>
                        <div className="article-content">
                            <h3 className="article-title">Xu hướng thiết kế nội thất chung cư 2024</h3>
                            <p className="article-excerpt">
                                Cập nhật những xu hướng thiết kế nội thất mới nhất, phù hợp với không gian
                                sống hiện đại của người Việt...
                            </p>
                            <button className="read-more-btn">Xem thêm</button>
                        </div>
                    </article>

                    <article className="article-card">
                        <div className="article-image article-image-4"></div>
                        <div className="article-content">
                            <h3 className="article-title">XHOME - Tư vấn thiết kế nội thất trọn gói</h3>
                            <p className="article-excerpt">
                                Giải pháp thiết kế nội thất toàn diện từ tư vấn, thiết kế đến thi công cho mọi
                                không gian sống...
                            </p>
                            <button className="read-more-btn">Xem thêm</button>
                        </div>
                    </article>
                </div>

                <div className="pagination">
                    <span className="page-number active">1</span>
                    <a href="#" className="page-number">2</a>
                    <a href="#" className="page-number">3</a>
                    <a href="#" className="page-number">4</a>
                    <a href="#" className="page-next" aria-label="Next page">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </a>
                </div>
            </main>
        </div>
    );
};

export default News;