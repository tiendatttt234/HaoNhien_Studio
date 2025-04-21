import { ChevronDown } from "lucide-react";
import "./HomePage.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header"; // Adjust the import path based on your project structure

function HomePage() {
  // State for current banner index
  const [currentBanner, setCurrentBanner] = useState(0);
  // State for current service index (each service is a "page")
  const [currentServicePage, setCurrentServicePage] = useState(0);

  // Banner data with images
  const banners = [
    {
      title: "Tạo xu hướng cao cấp",
      subtitle: "HAONHIEN là thương hiệu thiết kế, thi công nội thất hàng đầu Việt Nam",
      image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=1920&auto=format&fit=crop&q=80",
    },
    {
      title: "Kiến tạo không gian đẳng cấp",
      subtitle: "Sống chất từ chi tiết nhỏ nhất",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&auto=format&fit=crop&q=80",
    },
    {
      title: "Tâm huyết trong từng sản phẩm",
      subtitle: "Không chỉ bán sản phẩm - Phải bán cho khách hàng NIỀM TIN",
      image: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=1920&auto=format&fit=crop&q=80",
    },
  ];

  // Service data with images (8 services)
  const services = [
    {
      title: "Nội Thất Nhà Phố",
      image: "https://image-resource.creatie.ai/155865189425801/155865189425803/747e210acc836a70880259f5db341072.png",
    },
    {
      title: "Nội Thất Văn Phòng",
      image: "https://image-resource.creatie.ai/155865189425801/155865189425803/025eab4a47aea549df903634579dee7a.png",
    },
    {
      title: "Nội Thất Biệt Thự",
      image: "https://image-resource.creatie.ai/155865189425801/155865189425803/1d23f20755215237a0e9abfdfb14e297.png",
    },
    {
      title: "Nội Thất Chung Cư",
      image: "https://image-resource.creatie.ai/155865189425801/155865189425803/e959388dbf4f4dea382e6f62e9887351.png",
    },
    {
      title: "Nội Thất Khách Sạn",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24c32?w=1920&auto=format&fit=crop&q=80",
    },
    {
      title: "Nội Thất Nhà Hàng",
      image: "https://images.unsplash.com/photo-1556742049-887f6717d7f4?w=1920&auto=format&fit=crop&q=80",
    },
    {
      title: "Nội Thất Quán Cà Phê",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&auto=format&fit=crop&q=80",
    },
    {
      title: "Nội Thất Spa",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&auto=format&fit=crop&q=80",
    },
  ];

  // Number of services to display at a time
  const servicesPerView = 5;

  // Total "pages" equals number of services (one dot per service)
  const totalServicePages = services.length;

  // Calculate services to display, centered around currentServicePage
  const getCurrentServices = () => {
    const halfView = Math.floor(servicesPerView / 2);
    let startIndex = currentServicePage - halfView;
    let endIndex = currentServicePage + halfView + 1;

    // Adjust indices for looping
    const result = [];
    for (let i = startIndex; i < endIndex; i++) {
      let index = i;
      if (i < 0) {
        index = services.length + i; // Loop to end
      } else if (i >= services.length) {
        index = i - services.length; // Loop to start
      }
      result.push(services[index]);
    }
    return result;
  };

  const currentServices = getCurrentServices();

  // Auto-slide effect for banners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000); // Change banner every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [banners.length]);

  // Handle banner dot click
  const handleBannerDotClick = (index) => {
    setCurrentBanner(index);
  };

  // Handle service dot click
  const handleServiceDotClick = (index) => {
    setCurrentServicePage(index);
  };

  return (
    <main className="hn-main">
      {/* Hero Section */}
      <section className="hn-hero">
        <div className="hn-hero__carousel">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`hn-hero__slide ${index === currentBanner ? "hn-hero__slide--active" : "hn-hero__slide--hidden"
                }`}
            >
              <div className="hn-hero__bg">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className={`hn-hero__img ${index === currentBanner ? "hn-hero__img--active" : ""
                    }`}
                />
              </div>
              <div className="hn-hero__content">
                <h1
                  className={`hn-hero__title ${index === currentBanner ? "hn-hero__title--active" : ""
                    }`}
                >
                  {banner.title}
                </h1>
                <p
                  className={`hn-hero__subtitle ${index === currentBanner ? "hn-hero__subtitle--active" : ""
                    }`}
                >
                  {banner.subtitle}
                </p>
                <Link to="/product" className="hn-btn hn-btn--primary">Xem Sản Phẩm</Link>
              </div>
            </div>
          ))}
          {/* Banner Pagination Dots */}
          <div className="hn-hero__pagination">
            {banners.map((_, index) => (
              <button
                key={index}
                className={`hn-hero__dot ${index === currentBanner ? "hn-hero__dot--active" : ""
                  }`}
                onClick={() => handleBannerDotClick(index)}
                aria-label={`Go to banner ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Header Section */}
      <Header />

      {/* About Us Section */}
      <section className="hn-about">
        <div className="hn-section__bg">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&auto=format&fit=crop&q=80"
            alt="Modern interior background"
            className="hn-section__bg-img"
          />
        </div>
        <div className="hn-container hn-section__container">
          <h2 className="hn-section__title">Về Chúng Tôi</h2>
          <div className="hn-about__grid">
            {/* Card 1 */}
            <div className="hn-about__card-wrapper">
              <div className="hn-about__card">
                <div className="hn-about__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="hn-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="hn-about__text">
                  Không chỉ chiếm lĩnh thị trường trong nước, HAONHIEN không ngừng đổi mới, cải tiến để vươn ra thị trường quốc tế với các sản phẩm chất lượng cao.
                </p>
                <button className="hn-btn hn-btn--round">Tìm Hiểu</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="hn-about__card-wrapper">
              <div className="hn-about__card">
                <div className="hn-about__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="hn-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <p className="hn-about__text">
                  Với 10 năm (2014-2023) thành lập và phát triển, đến nay HAONHIEN đã mở rộng quy mô với các chi nhánh tại Tp Thanh Hóa, Tp Hà Nội và các kỳ vọng ở hướng tiêu nội thất công nghiệp.
                </p>
                <button className="hn-btn hn-btn--round">Lịch Sử</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="hn-about__card-wrapper">
              <div className="hn-about__card">
                <div className="hn-about__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="hn-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <p className="hn-about__text">
                  Kiến tạo không gian sống đẳng cấp, đem đến những sản phẩm, dịch vụ chất lượng cao nhất, mang lại sự hài lòng cho khách hàng và đóng góp tích cực cho xã hội.
                </p>
                <button className="hn-btn hn-btn--round">Sứ Mệnh</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="hn-why">
        <div className="hn-section__bg">
          <img
            src="https://image-resource.creatie.ai/155865189425801/155865189425803/2718fb0d281407e73ada973155e4223e.png"
            alt="Interior background"
            className="hn-section__bg-img"
          />
        </div>
        <div className="hn-container hn-section__container">
          <h2 className="hn-section__title">Tại Sao Chọn Chúng Tôi</h2>
          <div className="hn-why__grid">
            {/* Feature 1 */}
            <div className="hn-why__item">
              <div className="hn-why__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hn-icon--sm"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="hn-why__content">
                <h3 className="hn-why__title">Đội ngũ chuyên nghiệp</h3>
                <p className="hn-why__text">
                  Hơn 800 nhân sự được đào tạo bài bản và tâm huyết, đầy tâm huyết để tạo ra những sản phẩm chất lượng nhất.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="hn-why__item">
              <div className="hn-why__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hn-icon--sm"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <div className="hn-why__content">
                <h3 className="hn-why__title">Chất lượng sản phẩm</h3>
                <p className="hn-why__text">
                  HAONHIEN luôn trọng các sản phẩm mang tính đột phá và giải pháp tối ưu cho người sử dụng.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="hn-why__item">
              <div className="hn-why__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hn-icon--sm"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
                  />
                </svg>
              </div>
              <div className="hn-why__content">
                <h3 className="hn-why__title">Vật liệu an toàn</h3>
                <p className="hn-why__text">
                  Nguyên liệu sạch được chọn lọc kỹ lưỡng cùng cấp uy tín và đảm bảo các khâu cho khách hàng.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="hn-why__item">
              <div className="hn-why__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="hn-icon--sm"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="hn-why__content">
                <h3 className="hn-why__title">Tiến độ đúng hẹn</h3>
                <p className="hn-why__text">Cam kết hoàn thành dự án đúng thời hạn với chất lượng tốt nhất.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="hn-services">
        <div className="hn-container">
          <h2 className="hn-section__title">Sản Phẩm Thiết Kế</h2>
          <div className="hn-services__grid">
            {currentServices.map((service, index) => (
              <div key={index} className="hn-service">
                <div className="hn-service__image">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="hn-service__img"
                  />
                  <div className="hn-service__overlay">
                    <h3 className="hn-service__title--hover">{service.title}</h3>
                  </div>
                </div>
                <h3 className="hn-service__title">{service.title}</h3>
              </div>
            ))}
          </div>
          {/* Service Pagination Dots */}
          <div className="hn-services__pagination">
            {services.map((_, index) => (
              <button
                key={index}
                className={`hn-services__dot ${index === currentServicePage ? "hn-services__dot--active" : ""
                  }`}
                onClick={() => handleServiceDotClick(index)}
                aria-label={`Go to service ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;