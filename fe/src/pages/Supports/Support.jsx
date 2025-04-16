"use client";

import { useState } from "react";
import "./Support.css";

function Support() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="support-container">
      {/* Hero Section with Background Image */}
      <div className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">ĐĂNG KÝ TƯ VẤN</h1>
          <p className="hero-description">
            Đội ngũ nhân viên chuyên nghiệp, nhiệt tình, quý vị hâm tâm với những thành công sẽ giúp khách hàng có được
            sự an tâm và thoải mái khi sử dụng sản phẩm và dịch vụ của XHOME. Để lại thông tin bên dưới, chúng tôi sẽ
            giúp bạn có được không gian sống đẳng cấp ước.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="form-container form-container--padded">
        <div className="form-card">
          <h2 className="form-title">ĐĂNG KÝ TƯ VẤN</h2>
          <div className="form-content">
            <div className="form-fields">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Họ & tên <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nhập họ tên"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Số điện thoại <span className="required">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Nhập số điện thoại"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Nhập email"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address" className="form-label">
                      Địa chỉ <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Nhập địa chỉ"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="form-label">
                    Dịch vụ yêu cầu <span className="required">*</span>
                  </label>
                  <textarea
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="Nhập yêu cầu của bạn"
                    rows={5}
                    className="form-textarea"
                    required
                  />
                </div>

                <div className="form-button-container">
                  <button type="submit" className="submit-button">
                    GỬI ĐI
                  </button>
                </div>
              </form>
            </div>

            <div className="contact-info">
              <div className="contact-item contact-item--email">
                <div className="contact-icon">
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
                    <path d="M22 2L11 13"></path>
                    <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                  </svg>
                </div>
                <div className="contact-text">
                  <h3 className="contact-title">Email:</h3>
                  <p className="contact-value">haonhien.studio@gmail.com</p>
                </div>
              </div>

              <div className="contact-item contact-item--phone">
                <div className="contact-icon">
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
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-text">
                  <h3 className="contact-title">Điện thoại:</h3>
                  <p className="contact-value">HAONHIEN Studio</p>
                </div>
              </div>

              <div className="contact-item contact-item--facebook">
                <div className="contact-icon">
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
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
                <div className="contact-text">
                  <h3 className="contact-title">Facebook:</h3>
                  <p className="contact-value">HAONHIEN Studio</p>
                </div>
              </div>

              <div className="contact-item contact-item--instagram">
                <div className="contact-icon">
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
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div className="contact-text">
                  <h3 className="contact-title">Instagram:</h3>
                  <p className="contact-value">HAONHIEN Studio</p>
                </div>
              </div>

              <div className="contact-item contact-item--tiktok">
                <div className="contact-icon">
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
                    {/* TikTok icon */}
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                  </svg>
                </div>
                <div className="contact-text">
                  <h3 className="contact-title">TikTok:</h3>
                  <p className="contact-value">HAONHIEN Studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;