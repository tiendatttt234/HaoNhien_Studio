import React from 'react';
import { Link } from 'react-router-dom';
import './ProductByCategory.css';

const ProductByCategory = () => {
  React.useEffect(() => {
    return () => {};
  }, []);

  const projects = [
    {
      name: 'BRG Diamond Le Van Luong',
      image: 'https://image-resource.creatie.ai/155865189425801/155865189425803/88a0d061e3c0251ec11a15bbdb273c7d.png',
    },
    {
      name: 'The Nine Apartment',
      image: 'https://image-resource.creatie.ai/155865189425801/155865189425803/a7bf342ec186c80ef4c7ffde11f9eebf.png',
    },
    {
      name: 'Lancaster',
      image: 'https://image-resource.creatie.ai/155865189425801/155865189425803/1c3ca3b1750e1cac62727f8a4d99cab0.png',
    },
    {
      name: 'Duplex Sungrand City',
      image: 'https://image-resource.creatie.ai/155865189425801/155865189425803/795a20af401fa27e75f3d04aea0fde54.png',
    },
    {
      name: 'Duplex Sunshine',
      image: 'https://image-resource.creatie.ai/155865189425801/155865189425803/fc3c5fa85bb346c0bce301d6d934e519.png',
    },
    {
      name: 'Royal City',
      image: 'https://image-resource.creatie.ai/155865189425801/155865189425803/39015ed5d1de494756341561b61045e7.png',
    },
  ];

  return (
    <div className="pbc-container">
      <div className="pbc-banner">
        <img
          className="pbc-banner-image"
          src="https://image-resource.creatie.ai/155865189425801/155865189425803/75f8a6319af930b402b2353c010226ee.png"
          alt="Apartment Interior Banner"
        />
        <div className="pbc-banner-overlay"></div>
        <div className="pbc-banner-content">
          <div className="pbc-banner-text">
            <h1 className="pbc-banner-title">Nội Thất Chung Cư</h1>
            <p className="pbc-banner-subtitle">Không gian sống đẳng cấp, thiết kế tinh tế</p>
          </div>
        </div>
      </div>
      <div className="pbc-main">
        <div className="pbc-intro">
          <h2 className="pbc-intro-title">Dự Án Tiêu Biểu</h2>
          <p className="pbc-intro-description">
            Những BST thiết kế nội thất chung cư đến từ các designer và kiến trúc sư dày dặn kinh nghiệm khiến bạn muốn
            thay đổi ngay không gian căn hộ đã quá phổ thông của mình.
          </p>
        </div>
        <div className="pbc-projects-grid">
          {projects.map((project, index) => (
            <Link to="/detail" key={index} className="pbc-project-item">
              <div className="pbc-project-image-wrapper">
                <img src={project.image} alt={`${project.name} Interior`} className="pbc-project-image" />
              </div>
              <h3 className="pbc-project-title">{project.name}</h3>
            </Link>
          ))}
        </div>
        <div className="pbc-pagination">
          <button className="pbc-pagination-button"></button>
          <button className="pbc-pagination-button"></button>
          <button className="pbc-pagination-button"></button>
        </div>
      </div>
    </div>
  );
};

export default ProductByCategory;