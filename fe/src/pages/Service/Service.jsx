import React from "react";
import "./Service.css"
import { FaComments, FaPencilRuler, FaRulerCombined, FaTools, FaCheckCircle } from "react-icons/fa"
import { Link } from "react-router-dom";
import bannerImage from "../../assets/banner.png";

const Service = () => {
    return (
        <div className="service-container">
            {/* Hero Section */}
            <div className="service-hero-section" style={{ backgroundImage: `url(${bannerImage})` }}>
                <div className="service-hero-content">
                    <h1>Thiết kế nội thất đẳng cấp cho không gian sống của bạn</h1>
                    <p>
                        Chúng tôi hành ý tưởng của bạn thành hiện thực mang lại cho bạn một thiết kế tinh tế, chất lượng vượt trội
                        và dịch vụ chuyên nghiệp.
                    </p>
                    <button className="service-cta-button">Khám phá ngay</button>
                </div>
            </div>

            {/* Work Process Section */}
            <div className="service-process-section">
                <h2 className="service-section-title">Quy trình làm việc</h2>
                <p className="service-section-subtitle">
                    Chúng tôi tuân theo quy trình chuyên nghiệp để đảm bảo dự án của bạn được thực hiện hiệu quả và đúng tiến độ
                </p>

                <div className="service-timeline">
                    <div className="service-timeline-item">
                        <div className="service-timeline-icon blue">
                            <FaComments />
                        </div>
                        <div className="service-timeline-content">
                            <h3>Tư vấn & Khảo sát</h3>
                            <p>Gặp gỡ khách hàng, lắng nghe nhu cầu, khảo sát hiện trạng và tư vấn giải pháp phù hợp</p>
                        </div>
                    </div>

                    <div className="service-timeline-item">
                        <div className="service-timeline-icon purple">
                            <FaPencilRuler />
                        </div>
                        <div className="service-timeline-content">
                            <h3>Thiết kế ý tưởng</h3>
                            <p>Phát triển ý tưởng thiết kế, tạo phương án 2D, bố cục không gian và đề xuất giải pháp tối ưu</p>
                        </div>
                    </div>

                    <div className="service-timeline-item">
                        <div className="service-timeline-icon red">
                            <FaRulerCombined />
                        </div>
                        <div className="service-timeline-content">
                            <h3>Thiết kế chi tiết</h3>
                            <p>Hoàn thiện bản vẽ kỹ thuật, chi tiết đồ nội thất, vật liệu và quy cách thi công</p>
                        </div>
                    </div>

                    <div className="service-timeline-item">
                        <div className="service-timeline-icon green">
                            <FaTools />
                        </div>
                        <div className="service-timeline-content">
                            <h3>Thi công & Giám sát</h3>
                            <p>Triển khai thi công theo đúng thiết kế, giám sát chất lượng, đảm bảo tiến độ và an toàn công trình</p>
                        </div>
                    </div>

                    <div className="service-timeline-item">
                        <div className="service-timeline-icon blue">
                            <FaCheckCircle />
                        </div>
                        <div className="service-timeline-content">
                            <h3>Nghiệm thu & Bàn giao</h3>
                            <p>Kiểm tra chất lượng, hoàn thiện chi tiết và bàn giao công trình đúng cam kết</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Services Section */}
            <div className="service-our-services-section">
                <h2 className="service-section-title">Dịch vụ của chúng tôi</h2>
                <p className="service-section-subtitle">
                    Chúng tôi cung cấp đa dạng các dịch vụ thiết kế nội thất với chất lượng cao nhất, đáp ứng mọi nhu cầu khách
                    hàng
                </p>

                <div className="service-services-grid">
                    <div className="service-service-card">
                        <div className="service-service-image">
                            <img src="https://readdy.ai/api/search-image?query=modern%20apartment%20interior%20design%20with%20clean%20lines%2C%20contemporary%20furniture%2C%20neutral%20colors%2C%20large%20windows%2C%20natural%20light%2C%20minimalist%20decor%2C%20professional%20photography&width=400&height=300&seq=service1&orientation=landscape" alt="Thiết kế nội thất căn hộ" />
                        </div>
                        <div className="service-service-icon">
                            <i className="service-home-icon"></i>
                        </div>
                        <h3>Thiết kế nội thất căn hộ</h3>
                        <p>Giải pháp thiết kế tối ưu cho không gian sống hiện đại, tinh tế và đầy đủ tiện nghi</p>
                        <Link to="/servicedetail" className="service-service-button">Tìm hiểu thêm</Link>
                    </div>

                    <div className="service-service-card">
                        <div className="service-service-image">
                            <img src="https://readdy.ai/api/search-image?query=modern%20office%20interior%20with%20collaborative%20spaces%2C%20glass%20partitions%2C%20ergonomic%20furniture%2C%20bright%20lighting%2C%20professional%20environment%2C%20clean%20design&width=400&height=300&seq=service2&orientation=landscape" alt="Thiết kế văn phòng" />
                        </div>
                        <div className="service-service-icon">
                            <i className="service-office-icon"></i>
                        </div>
                        <h3>Thiết kế văn phòng</h3>
                        <p>Không gian làm việc chuyên nghiệp, sáng tạo và phù hợp với đặc thù doanh nghiệp</p>
                        <Link to="/servicedetail" className="service-service-button">Tìm hiểu thêm</Link>
                    </div>

                    <div className="service-service-card">
                        <div className="service-service-image">
                            <img src="https://readdy.ai/api/search-image?query=luxury%20restaurant%20interior%20with%20elegant%20seating%2C%20ambient%20lighting%2C%20sophisticated%20decor%2C%20high%20end%20finishes%2C%20warm%20atmosphere&width=400&height=300&seq=service3&orientation=landscape" alt="Thiết kế nhà hàng, khách sạn" />
                        </div>
                        <div className="service-service-icon">
                            <i className="service-restaurant-icon"></i>
                        </div>
                        <h3>Thiết kế nhà hàng, khách sạn</h3>
                        <p>Thiết kế đặc sắc, ấn tượng cho không gian thương mại cao cấp</p>
                        <Link to="/servicedetail" className="service-service-button">Tìm hiểu thêm</Link>
                    </div>
                </div>
            </div>

            {/* Featured Projects Section */}
            <div className="service-projects-section">
                <h2 className="service-section-title">Dự án tiêu biểu</h2>
                <p className="service-section-subtitle">
                    Những công trình đã thực hiện của chúng tôi là minh chứng cho chất lượng và uy tín
                </p>

                <div className="service-projects-grid">
                    <div className="service-project-card">
                        <img src="https://readdy.ai/api/search-image?query=luxury%20penthouse%20interior%20with%20panoramic%20views%2C%20high%20end%20furniture%2C%20marble%20floors%2C%20modern%20art%2C%20sophisticated%20design%20elements&width=400&height=500&seq=project1&orientation=portrait" alt="Dự án căn hộ cao cấp" />
                        <div className="service-project-overlay">
                            <div className="service-project-title">Dự án căn hộ cao cấp</div>
                        </div>
                    </div>
                    <div className="service-project-card">
                        <img src="https://readdy.ai/api/search-image?query=modern%20tech%20office%20space%20with%20open%20floor%20plan%2C%20glass%20walls%2C%20collaborative%20areas%2C%20sleek%20furniture%2C%20innovative%20design&width=400&height=500&seq=project2&orientation=portrait" alt="Dự án văn phòng hiện đại" />
                        <div className="service-project-overlay">
                            <div className="service-project-title">Dự án văn phòng hiện đại</div>
                        </div>
                    </div>
                    <div className="service-project-card">
                        <img src="https://readdy.ai/api/search-image?query=upscale%20restaurant%20interior%20with%20luxurious%20seating%2C%20crystal%20chandeliers%2C%20fine%20dining%20atmosphere%2C%20elegant%20decor&width=400&height=500&seq=project3&orientation=portrait" alt="Dự án nhà hàng sang trọng" />
                        <div className="service-project-overlay">
                            <div className="service-project-title">Dự án nhà hàng sang trọng</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Expert Team Section */}
            <Link to="/new" className="service-team-section">
                <h2 className="service-section-title">Đội ngũ chuyên gia</h2>
                <p className="service-section-subtitle">Đội ngũ kiến trúc sư và chuyên gia thiết kế giàu kinh nghiệm của chúng tôi</p>

                <div className="service-team-grid">
                    <div className="service-team-member">
                        <div className="service-member-image">
                            <img src="https://readdy.ai/api/search-image?query=professional%20asian%20male%20architect%20in%20formal%20attire%2C%20confident%20pose%2C%20modern%20office%20background%2C%20studio%20lighting&width=300&height=400&seq=expert1&orientation=portrait" alt="Nguyễn Văn Anh" />
                        </div>
                        <h3>Nguyễn Văn Anh</h3>
                        <p>Kiến trúc sư trưởng</p>
                        <div className="service-social-icons">
                            <i className="service-linkedin-icon"></i>
                            <i className="service-twitter-icon"></i>
                            <i className="service-facebook-icon"></i>
                        </div>
                    </div>

                    <div className="service-team-member">
                        <div className="service-member-image">
                            <img src="https://readdy.ai/api/search-image?query=professional%20asian%20female%20interior%20designer%2C%20business%20casual%20attire%2C%20creative%20workspace%20background&width=300&height=400&seq=expert2&orientation=portrait" alt="Trần Thu Hà" />
                        </div>
                        <h3>Trần Thu Hà</h3>
                        <p>Trưởng phòng thiết kế</p>
                        <div className="service-social-icons">
                            <i className="service-linkedin-icon"></i>
                            <i className="service-twitter-icon"></i>
                            <i className="service-facebook-icon"></i>
                        </div>
                    </div>

                    <div className="service-team-member">
                        <div className="service-member-image">
                            <img src="https://readdy.ai/api/search-image?query=young%20asian%20male%20architect%20with%20glasses%2C%20smart%20casual%20outfit%2C%20architectural%20office%20setting&width=300&height=400&seq=expert3&orientation=portrait" alt="Lê Minh Đức" />
                        </div>
                        <h3>Lê Minh Đức</h3>
                        <p>Kiến trúc sư chính</p>
                        <div className="service-social-icons">
                            <i className="service-linkedin-icon"></i>
                            <i className="service-twitter-icon"></i>
                            <i className="service-facebook-icon"></i>
                        </div>
                    </div>

                    <div className="service-team-member">
                        <div className="service-member-image">
                            <img src="https://readdy.ai/api/search-image?query=creative%20asian%20female%20color%20specialist%2C%20stylish%20professional%20attire%2C%20design%20studio%20environment&width=300&height=400&seq=expert4&orientation=portrait" alt="Phạm Thị Mai" />
                        </div>
                        <h3>Phạm Thị Mai</h3>
                        <p>Chuyên gia màu sắc</p>
                        <div className="service-social-icons">
                            <i className="service-linkedin-icon"></i>
                            <i className="service-twitter-icon"></i>
                            <i className="service-facebook-icon"></i>
                        </div>
                    </div>
                </div>
            </Link>
            {/* Contact Section */}
            <div className="service-contact-section">
                <div className="service-contact-container">
                    <div className="service-contact-left">
                        <h2 className="service-contact-title">Liên hệ ngay với chúng tôi</h2>
                        <p className="service-contact-description">
                            Hãy để chúng tôi giúp bạn hiện thực hóa không gian sống trong mơ
                        </p>
                        <div className="service-contact-features">
                            <div className="service-contact-feature">
                                <div className="service-contact-feature-icon">✓</div>
                                <div className="service-contact-feature-text">Tư vấn miễn phí 24/7</div>
                            </div>
                            <div className="service-contact-feature">
                                <div className="service-contact-feature-icon">✓</div>
                                <div className="service-contact-feature-text">Đội ngũ chuyên nghiệp</div>
                            </div>
                            <div className="service-contact-feature">
                                <div className="service-contact-feature-icon">✓</div>
                                <div className="service-contact-feature-text">Báo giá nhanh chóng</div>
                            </div>
                        </div>
                    </div>
                    <div className="service-contact-right">
                        <div className="service-contact-info">
                            <div className="service-contact-info-item">
                                <div className="service-contact-info-icon">📞</div>
                                <div className="service-contact-info-text">
                                    <h3>Điện thoại</h3>
                                    <p>HAONHIEN Studio</p>
                                </div>
                            </div>
                            <div className="service-contact-info-item">
                                <div className="service-contact-info-icon">✉️</div>
                                <div className="service-contact-info-text">
                                    <h3>Email</h3>
                                    <p>haonhien.studio@gmail.com</p>
                                </div>
                            </div>
                            <Link to="/support" className="service-contact-link">
                                Liên hệ ngay
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
