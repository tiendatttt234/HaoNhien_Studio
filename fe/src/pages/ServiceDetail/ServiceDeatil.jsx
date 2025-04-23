"use client"

import { useState, useEffect } from "react"
import { Star, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, MessageCircle, ArrowLeft, ArrowRight, Instagram } from "lucide-react"
import "./ServiceDetail.css"
import { Link } from "react-router-dom"

const ServiceDetail = () => {
    const [activeTab, setActiveTab] = useState("description")
    const [currentSlide, setCurrentSlide] = useState(0)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const slides = [
        {
            id: 1,
            url: 'https://readdy.ai/api/search-image?query=Modern%20luxury%20interior%20design%20living%20room%20with%20elegant%20furniture%2C%20large%20windows%2C%20wooden%20flooring%2C%20soft%20lighting%2C%20minimalist%20decor%2C%20neutral%20color%20palette%2C%20high%20ceiling%2C%20professional%20photography%20with%20soft%20shadows%20and%20clean%20background&width=800&height=500&seq=1&orientation=landscape',
            alt: 'Thiết kế phòng khách hiện đại'
        },
        {
            id: 2,
            url: 'https://readdy.ai/api/search-image?query=Contemporary%20kitchen%20interior%20design%20with%20marble%20countertops%2C%20wooden%20cabinets%2C%20pendant%20lights%2C%20professional%20photography%20showing%20sleek%20appliances%2C%20island%20counter%2C%20minimalist%20style%20with%20neutral%20tones%20and%20clean%20lines&width=800&height=500&seq=2&orientation=landscape',
            alt: 'Thiết kế nhà bếp hiện đại'
        },
        {
            id: 3,
            url: 'https://readdy.ai/api/search-image?query=Elegant%20bedroom%20interior%20design%20with%20king%20size%20bed%2C%20nightstands%2C%20soft%20lighting%2C%20large%20windows%2C%20neutral%20color%20palette%2C%20wooden%20elements%2C%20professional%20photography%20with%20soft%20shadows%20and%20clean%20minimalist%20style&width=800&height=500&seq=3&orientation=landscape',
            alt: 'Thiết kế phòng ngủ sang trọng'
        },
        {
            id: 4,
            url: 'https://readdy.ai/api/search-image?query=Modern%20bathroom%20interior%20with%20walk-in%20shower%2C%20freestanding%20bathtub%2C%20marble%20tiles%2C%20wooden%20vanity%2C%20large%20mirror%2C%20minimalist%20design%2C%20neutral%20colors%2C%20professional%20photography%20with%20clean%20lines%20and%20elegant%20fixtures&width=800&height=500&seq=4&orientation=landscape',
            alt: 'Thiết kế phòng tắm hiện đại'
        }
    ]

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Here you would typically send the data to your backend
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    }

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

    // Sample service data
    const serviceData = {
        title: "Thiết kế nội thất căn hộ cao cấp",
        rating: 5,
        reviewCount: 128,
        status: "Còn nhận",
        description:
            "Dịch vụ thiết kế nội thất căn hộ cao cấp của chúng tôi mang đến giải pháp toàn diện cho không gian sống của bạn. Với đội ngũ kiến trúc sư và nhà thiết kế có kinh nghiệm, chúng tôi cam kết tạo ra không gian sống đẳng cấp, sang trọng và phù hợp với phong cách sống hiện đại.",
        expertise:
            "Quy trình làm việc chuyên nghiệp của chúng tôi bao gồm tư vấn, khảo sát, lên ý tưởng, thiết kế 3D, và triển khai thi công. Mỗi dự án đều được chúng tôi đặc biệt chú trọng đến từng chi tiết, đảm bảo kết quả cuối cùng vượt trên mong đợi của khách hàng.",
        packages: [
            {
                name: "Gói Cơ bản",
                features: [
                    "Thiết kế tổng thể không gian",
                    "Tư vấn lựa chọn vật liệu",
                    "Bản vẽ 2D chi tiết",
                    "Bản vẽ kỹ thuật thi công",
                    "Hỗ trợ giám sát thi công (2 buổi)",
                ],
            },
            {
                name: "Gói Nâng cao",
                features: [
                    "Tất cả dịch vụ trong gói Cơ bản",
                    "Thiết kế nội thất chi tiết",
                    "Tư vấn lựa chọn đồ nội thất",
                    "Thiết kế ánh sáng",
                    "Hỗ trợ giám sát thi công (5 buổi)",
                ],
            },
            {
                name: "Gói Cao cấp",
                features: [
                    "Tất cả dịch vụ trong gói Nâng cao",
                    "Thiết kế nội thất tùy chỉnh hoàn toàn",
                    "Tư vấn và mua sắm đồ nội thất",
                    "Thiết kế cảnh quan và sân vườn (nếu có)",
                    "Giám sát thi công toàn thời gian",
                    "Bảo hành thiết kế 5 năm",
                ],
            },
        ],
        contact: {
            phone: "0987 654 321",
            email: "info@interiorviet.com",
            address: "123 Nguyễn Huệ, Quận 1, TP.HCM",
        },
        relatedServices: [
            {
                id: 1,
                title: "Thiết kế phòng khách hiện đại",
                image: 'https://readdy.ai/api/search-image?query=Modern%20living%20room%20interior%20design%20with%20comfortable%20sofa%2C%20coffee%20table%2C%20plants%2C%20artwork%2C%20neutral%20colors%2C%20professional%20photography%20with%20clean%20background%20and%20soft%20lighting%2C%20minimalist%20style&width=300&height=200&seq=5&orientation=landscape'
            },
            {
                id: 2,
                title: "Thiết kế nhà bếp sang trọng",
                image: 'https://readdy.ai/api/search-image?query=Luxury%20kitchen%20interior%20design%20with%20island%2C%20high-end%20appliances%2C%20marble%20countertops%2C%20wooden%20cabinets%2C%20pendant%20lights%2C%20professional%20photography%20with%20clean%20background%20and%20soft%20lighting&width=300&height=200&seq=6&orientation=landscape'
            },
            {
                id: 3,
                title: "Thiết kế phòng ngủ tối giản",
                image: 'https://readdy.ai/api/search-image?query=Minimalist%20bedroom%20interior%20design%20with%20platform%20bed%2C%20simple%20nightstands%2C%20clean%20lines%2C%20neutral%20colors%2C%20large%20windows%2C%20professional%20photography%20with%20soft%20lighting%20and%20clean%20background&width=300&height=200&seq=7&orientation=landscape'
            },
            {
                id: 4,
                title: "Thiết kế văn phòng làm việc",
                image: 'https://readdy.ai/api/search-image?query=Modern%20home%20office%20interior%20design%20with%20desk%2C%20ergonomic%20chair%2C%20bookshelves%2C%20plants%2C%20natural%20light%2C%20minimalist%20style%2C%20professional%20photography%20with%20clean%20background%20and%20soft%20lighting&width=300&height=200&seq=8&orientation=landscape'
            }
        ],
    }

    return (
        <div className="sd-container">
            {/* Hero Section */}
            <div className="sd-hero">
                <div className="sd-images-wrapper">
                    <div className="sd-main-image">
                        <img src={slides[currentSlide].url} alt={slides[currentSlide].alt} />
                    </div>
                    <div className="sd-thumbnail-list">
                        {slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`sd-thumbnail ${currentSlide === index ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            >
                                <img src={slide.url} alt={slide.alt} />
                            </div>
                        ))}
                    </div>
                    <button className="sd-nav-button sd-prev" onClick={prevSlide}>
                        <ArrowLeft size={24} />
                    </button>
                    <button className="sd-nav-button sd-next" onClick={nextSlide}>
                        <ArrowRight size={24} />
                    </button>
                </div>
            </div>

            {/* Service Info Section */}
            <div className="sd-content">
                <div className="sd-info">
                    <div className="sd-header">
                        <h1>{serviceData.title}</h1>
                    </div>

                    {/* Tabs */}
                    <div className="sd-tabs">
                        <button
                            className={`sd-tab-button ${activeTab === "description" ? "active" : ""}`}
                            onClick={() => setActiveTab("description")}
                        >
                            Mô tả
                        </button>
                        <button
                            className={`sd-tab-button ${activeTab === "info" ? "active" : ""}`}
                            onClick={() => setActiveTab("info")}
                        >
                            Thông số
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="sd-tab-content">
                        {activeTab === "description" && (
                            <div className="sd-description">
                                <p>{serviceData.description}</p>
                                <p>{serviceData.expertise}</p>
                            </div>
                        )}
                        {activeTab === "info" && (
                            <div className="sd-info-content">
                                <h3>Thông số kỹ thuật</h3>
                                <ul>
                                    <li>Thời gian thiết kế: 10-15 ngày làm việc</li>
                                    <li>Bảo hành: Tùy theo gói dịch vụ</li>
                                    <li>Hỗ trợ: 24/7</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Service Packages */}
                    <div className="sd-packages">
                        <h2>Các gói dịch vụ</h2>
                        {serviceData.packages.map((pkg, index) => (
                            <div key={index} className="sd-package-item">
                                <h3>{pkg.name}</h3>
                                <ul>
                                    {pkg.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="sd-sidebar">
                    <div className="sd-booking-card">
                        <h3>Đặt dịch vụ</h3>
                        <Link to="/support" className="sd-book-button">Đặt dịch vụ ngay</Link>

                        <div className="sd-contact-info">
                            <div className="sd-contact-item sd-contact-item--email">
                                <div className="sd-contact-icon">
                                    <Mail size={20} />
                                </div>
                                <div className="sd-contact-text">
                                    <h3 className="sd-contact-title">Email:</h3>
                                    <p className="sd-contact-value">haonhien.studio@gmail.com</p>
                                </div>
                            </div>

                            <div className="sd-contact-item sd-contact-item--phone">
                                <div className="sd-contact-icon">
                                    <Phone size={20} />
                                </div>
                                <div className="sd-contact-text">
                                    <h3 className="sd-contact-title">Điện thoại:</h3>
                                    <p className="sd-contact-value">HAONHIEN Studio</p>
                                </div>
                            </div>

                            <h4 className="sd-social-title">Kênh liên hệ khác</h4>
                            <div className="sd-social-icons">
                                <div className="sd-contact-item sd-contact-item--facebook">
                                    <div className="sd-contact-icon">
                                        <Facebook size={20} />
                                    </div>
                                </div>

                                <div className="sd-contact-item sd-contact-item--instagram">
                                    <div className="sd-contact-icon">
                                        <Instagram size={20} />
                                    </div>
                                </div>

                                <div className="sd-contact-item sd-contact-item--tiktok">
                                    <div className="sd-contact-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Services */}
            <div className="sd-related-services">
                <h2>Dịch vụ liên quan</h2>
                <div className="sd-related-grid">
                    {serviceData.relatedServices.map((service) => (
                        <div key={service.id} className="sd-related-item">
                            <div className="sd-related-image">
                                <img src={service.image} alt={service.title} />
                            </div>
                            <h3>{service.title}</h3>
                        </div>
                    ))}
                </div>
                <div className="sd-view-more">
                    <button className="sd-view-more-button">Xem thêm dịch vụ</button>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetail
