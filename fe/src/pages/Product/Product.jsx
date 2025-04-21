import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = () => {
  // Image URLs
  const images = {
    service1: "https://image-resource.creatie.ai/155865189425801/155865189425803/a3c3d34cabce349377254f532c895ceb.png",
    service2: "https://image-resource.creatie.ai/155865189425801/155865189425803/8a5751264610d392f6bafe508ab7a7d5.png",
    service3: "https://image-resource.creatie.ai/155865189425801/155865189425803/5b2ac216b9c84d8ce4f87ab78068d94b.png",
    hero: "https://image-resource.creatie.ai/155865189425801/155865189425803/a3c3d34cabce349377254f532c895ceb.png",
    brand1: "https://image-resource.creatie.ai/155865189425801/155865189425803/0c119d0b5536efb23ced1915758a82cc.png",
    brand2: "https://image-resource.creatie.ai/155865189425801/155865189425803/655bac63e37aaa3ccc940db878b18979.png",
    brand3: "https://image-resource.creatie.ai/155865189425801/155865189425803/ea7ae5587c3a6fe6c9c2af677ebd6f79.png",
    brand4: "https://image-resource.creatie.ai/155865189425801/155865189425803/4a4708e14cb07142e5b9a60278e5bc02.png"
  };

  // Brand data
  const brandData = [
    { id: 1, image: images.brand1, label: "NỘI THẤT SẠCH" },
    { id: 2, image: images.brand2, label: "KIẾN TRÚC" },
    { id: 3, image: images.brand3, label: "LEOPARD" },
    { id: 4, image: images.brand4, label: "FLORA FIORE" },
  ];

  // State for carousel
  const [currentPosition, setCurrentPosition] = useState(0);
  const [visibleBrands, setVisibleBrands] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  // Update visible brands when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setVisibleCount(2);
      } else if (window.innerWidth <= 768) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Update visible brands when position or count changes
  useEffect(() => {
    updateVisibleBrands();
  }, [currentPosition, visibleCount]);

  // Background-image style function
  const getBackgroundStyle = (imageUrl) => {
    return {
      backgroundImage: `url("${imageUrl}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    };
  };

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentPosition((prev) => {
      const newPosition = prev + 1;
      return newPosition >= brandData.length ? 0 : newPosition;
    });
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentPosition((prev) => {
      const newPosition = prev - 1;
      return newPosition < 0 ? brandData.length - 1 : newPosition;
    });
  };

  // Get visible brands based on current position
  const updateVisibleBrands = () => {
    const visibleItems = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentPosition + i) % brandData.length;
      visibleItems.push(brandData[index]);
    }
    setVisibleBrands(visibleItems);
  };

  return (
    <div className="product-container">
      <div className="hero-section">
        <div className="hero-image" style={getBackgroundStyle(images.hero)}></div>
      </div>

      {/* Brand carousel section */}
      <div className="brand-carousel-container">
        {/* Navigation buttons */}
        <button className="carousel-nav-btn prev-btn" onClick={prevSlide} aria-label="Previous">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="carousel-nav-btn next-btn" onClick={nextSlide} aria-label="Next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Brand cards */}
        <div className="brand-cards-wrapper">
          {visibleBrands.map((brand) => (
            <Link key={brand.id} to="/noithat" className="brand-card-link">
              <div className="brand-card">
                <div className="brand-inner">
                  <div className="brand-image" style={getBackgroundStyle(brand.image)}></div>
                  <div className="brand-label">
                    <div className="brand-label-text">{brand.label}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="content-wrapper">
        <div className="section-title">
          <div className="title-text">CÁC GÓI DỊCH VỤ</div>
        </div>
        <div className="intro-text">
          <div className="intro-line-1">
            Từ các sản phẩm nội thất bán lẻ cho đến khảo sát, thiết kế, thi công... chúng tôi đều cung cấp các sản phẩm,
          </div>
          <div className="intro-line-2">
            dịch vụ phù hợp với nhu cầu của từng khách hàng. Tạo nên được cung cách phục vụ đặc biệt chỉ có thể là
          </div>
          <div className="brand-name">XHOME</div>
        </div>
        <div className="services-container">
          <div className="service-row">
            <div className="service-image-wrapper">
              <div className="service-image" style={getBackgroundStyle(images.service1)}></div>
            </div>
            <div className="service-content">
              <div className="service-title">
                <div className="service-title-text">Thiết kế Thi công trọn gói căn hộ</div>
              </div>
              <div className="service-description">
                <div className="service-desc-text">
                  <span>
                    Dịch vụ thiết kế và thi công trọn gói mang đến giải pháp toàn diện cho không gian sống của bạn. Chúng tôi đảm nhận từ khâu tư vấn, thiết kế đến hoàn thiện, giúp bạn tiết kiệm thời gian và chi phí.
                  </span>
                </div>
              </div>
              <Link to="/service" className="view-more-btn">
                <div className="btn-text">Xem thêm</div>
              </Link>
            </div>
          </div>
          <div className="service-row reversed">
            <div className="service-image-wrapper">
              <div className="service-image" style={getBackgroundStyle(images.service2)}></div>
            </div>
            <div className="service-content">
              <div className="service-title">
                <div className="service-title-text">Tư vấn triển khai thi công nhanh</div>
              </div>
              <div className="service-description">
                <div className="service-desc-text">
                  <span>
                    XHOME-STORE có thể giúp bạn tự làm đẹp cho căn hộ của mình một cách nhanh chóng mà không cần thiết kế. Chúng tôi cung cấp giải pháp tối ưu và tiết kiệm thời gian.
                  </span>
                </div>
              </div>
              <Link to="/service" className="view-more-btn">
                <div className="btn-text">Xem thêm</div>
              </Link>
            </div>
          </div>
          <div className="service-row">
            <div className="service-image-wrapper">
              <div className="service-image" style={getBackgroundStyle(images.service3)}></div>
            </div>
            <div className="service-content">
              <div className="service-title">
                <div className="service-title-text">Dịch vụ đăng ký báo giá thi công</div>
              </div>
              <div className="service-description">
                <div className="service-desc-text">
                  <span>
                    Dành cho những khách hàng đã có sẵn bản thiết kế. XHOME sẽ báo giá và triển khai thi công nhanh chóng, đảm bảo chất lượng và tiến độ công trình.
                  </span>
                </div>
              </div>
              <Link to="/service" className="view-more-btn">
                <div className="btn-text">Xem thêm</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;