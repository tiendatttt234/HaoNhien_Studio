import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './ProductDetail.css';

// Dữ liệu liên quan
const relatedProducts = [
  { name: 'Lancaster Eden Villa', img: 'https://image-resource.creatie.ai/155865189425801/155865189425803/c3bb0b4cf77f114c7130208511a9de56.png' },
  { name: 'Villa CS Đức Phúc', img: 'https://image-resource.creatie.ai/155865189425801/155865189425803/2da34ca6a052c9fe6a98f5c03ed4405d.png' },
  { name: 'Villa Thảo Điền', img: 'https://image-resource.creatie.ai/155865189425801/155865189425803/cb2e4cc41d8602d5a30d33f8f72e6c93.png' },
  { name: 'Villa Vinhomes Bason', img: 'https://image-resource.creatie.ai/155865189425801/155865189425803/fb1d717876caa84882f160c1bbc1d55e.png' },
  { name: 'Phạm Hương Villa', img: 'https://image-resource.creatie.ai/155865189425801/155865189425803/a2962a4d217677ce4ec1319fe1a3bc12.png' },
];

const galleryImages = [
  'https://image-resource.creatie.ai/155865189425801/155865189425803/5f8dcf89a9081d58fe767fa5499f29ed.png',
  'https://image-resource.creatie.ai/155865189425801/155865189425803/949ed027e24561eca0f848be01c5e77e.png',
  'https://image-resource.creatie.ai/155865189425801/155865189425803/b06abba2b64638e8ee31db2b15afbad8.png',
  'https://image-resource.creatie.ai/155865189425801/155865189425803/bbf7024d4276e0d93c62344a178e76ba.png',
];

const ProductDetail = () => {
  const [galleryPosition, setGalleryPosition] = useState(0);
  const [productsPosition, setProductsPosition] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [zoomTranslate, setZoomTranslate] = useState({ x: 0, y: 0 });
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [isBrowserFullscreen, setIsBrowserFullscreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [mainImage, setMainImage] = useState(galleryImages[0]);
  const fullscreenRef = useRef(null);
  const imageRef = useRef(null);

  const itemsPerPageGallery = 4;
  const itemsPerPageProducts = 5;
  const maxZoom = 3;
  const minZoom = 1;

  const handleGalleryNext = () => {
    setGalleryPosition((prev) => {
      const newPos = (prev + 1) % galleryImages.length;
      setMainImage(galleryImages[newPos]);
      return newPos;
    });
  };

  const handleGalleryPrev = () => {
    setGalleryPosition((prev) => {
      const newPos = (prev - 1 + galleryImages.length) % galleryImages.length;
      setMainImage(galleryImages[newPos]);
      return newPos;
    });
  };

  const handleProductsNext = () => {
    setProductsPosition((prev) => (prev + 1) % relatedProducts.length);
  };

  const handleProductsPrev = () => {
    setProductsPosition((prev) => (prev - 1 + relatedProducts.length) % relatedProducts.length);
  };

  const openFullscreen = (imgSrc) => {
    const index = galleryImages.indexOf(imgSrc);
    setFullscreenImage(imgSrc);
    setCurrentImageIndex(index);
    setIsZoomed(false);
    setZoomScale(1);
    setZoomTranslate({ x: 0, y: 0 });
    setShowThumbnails(false);
    setIsBrowserFullscreen(false);
    triggerSpin();
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
    setCurrentImageIndex(0);
    setIsZoomed(false);
    setZoomScale(1);
    setZoomTranslate({ x: 0, y: 0 });
    setShowThumbnails(false);
    setIsBrowserFullscreen(false);
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  const toggleZoom = () => {
    if (isZoomed) {
      setIsZoomed(false);
      setZoomScale(1);
      setZoomTranslate({ x: 0, y: 0 });
    } else {
      setIsZoomed(true);
      setZoomScale(1.5);
    }
  };

  const handleImageMouseDown = (e) => {
    if (!isZoomed) return;
    e.preventDefault();
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const originX = (x / rect.width) * 100;
    const originY = (y / rect.height) * 100;
    setZoomScale((prev) => Math.min(prev + 0.5, maxZoom));
    setZoomTranslate({ x: -originX * 2, y: -originY * 2 });
  };

  const handleImageTouchStart = (e) => {
    if (!isZoomed) return;
    e.preventDefault();
    const touch = e.touches[0];
    const rect = imageRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    const originX = (x / rect.width) * 100;
    const originY = (y / rect.height) * 100;
    setZoomScale((prev) => Math.min(prev + 0.5, maxZoom));
    setZoomTranslate({ x: -originX * 2, y: -originY * 2 });
  };

  const toggleBrowserFullscreen = () => {
    if (!document.fullscreenElement) {
      fullscreenRef.current?.requestFullscreen().catch((err) => {
        console.error('Error entering fullscreen:', err);
      });
      setIsBrowserFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsBrowserFullscreen(false);
    }
  };

  const toggleThumbnails = () => {
    setShowThumbnails((prev) => !prev);
  };

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length;
    setCurrentImageIndex(nextIndex);
    setFullscreenImage(galleryImages[nextIndex]);
    setZoomScale(1);
    setZoomTranslate({ x: 0, y: 0 });
    setIsZoomed(false);
    triggerSpin();
  };

  const handlePrevImage = () => {
    const prevIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentImageIndex(prevIndex);
    setFullscreenImage(galleryImages[prevIndex]);
    setZoomScale(1);
    setZoomTranslate({ x: 0, y: 0 });
    setIsZoomed(false);
    triggerSpin();
  };

  const selectThumbnail = (imgSrc) => {
    const index = galleryImages.indexOf(imgSrc);
    setCurrentImageIndex(index);
    setFullscreenImage(imgSrc);
    setZoomScale(1);
    setZoomTranslate({ x: 0, y: 0 });
    setIsZoomed(false);
    triggerSpin();
  };

  const triggerSpin = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 500);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsBrowserFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div className="body-container">
      <div className="main">
        {/* Banner integrated directly */}
        <div className="product-banner">
          <img
            src="https://image-resource.creatie.ai/155865189425801/155865189425803/75f8a6319af930b402b2353c010226ee.png"
            alt="Product Banner Background"
            className="product-banner-img"
          />
          <div className="product-banner-overlay"></div>
          <div className="product-banner-content">
            <h1>Sản Phẩm Của HAONHIEN</h1>
            <p>Thiết kế đẳng cấp số 1 Việt Nam</p>
          </div>
        </div>
        <div className="content">
          <h1 className="villa-title">DUONG HA VILLA</h1>
          <div className="main-image">
            <img src={mainImage} alt="Duong Ha Villa" />
          </div>
          <div className="gallery">
            <div
              className="gallery-list"
              style={{ transform: `translateX(-${galleryPosition * (100 / itemsPerPageGallery)}%)` }}
            >
              {galleryImages.concat(galleryImages).map((img, index) => (
                <div key={index} className="gallery-item">
                  <img
                    src={img}
                    alt={`Detail ${index + 1}`}
                    onClick={() => openFullscreen(img)}
                    className="gallery-image"
                  />
                </div>
              ))}
            </div>
            <button className="carousel-prev" onClick={handleGalleryPrev}>
              <ArrowLeft size={24} />
            </button>
            <button className="carousel-next" onClick={handleGalleryNext}>
              <ArrowRight size={24} />
            </button>
            <div className="gallery-dots">
              {[...Array(galleryImages.length)].map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === galleryPosition ? 'active' : ''}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
        <section className="related-products-container">
          <div className="related-products">
            <h2>SẢN PHẨM LIÊN QUAN</h2>
            <div
              className="products-list"
              style={{ transform: `translateX(-${productsPosition * (100 / itemsPerPageProducts)}%)` }}
            >
              {relatedProducts.concat(relatedProducts).map((product, index) => (
                <div key={index} className="product-item">
                  <div className="product-card">
                    <img src={product.img} alt={product.name} />
                    <h3>{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-prev" onClick={handleProductsPrev}>
              <ArrowLeft size={24} />
            </button>
            <button className="carousel-next" onClick={handleProductsNext}>
              <ArrowRight size={24} />
            </button>
            <div className="carousel-dots">
              {[...Array(relatedProducts.length)].map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === productsPosition ? 'active' : ''}`}
                ></button>
              ))}
            </div>
          </div>
        </section>
      </div>
      {fullscreenImage && (
        <div
          className={`fullscreen-overlay ${isBrowserFullscreen ? 'browser-fullscreen' : ''}`}
          ref={fullscreenRef}
        >
          <div className="image-counter">
            {currentImageIndex + 1}/{galleryImages.length}
          </div>
          <div className="fullscreen-controls">
            <button className="fullscreen-close" onClick={closeFullscreen}>
              ×
            </button>
            <button className="fullscreen-zoom" onClick={toggleZoom}>
              {isZoomed ? '−' : '+'}
            </button>
            <button className="fullscreen-browser" onClick={toggleBrowserFullscreen}>
              ⛶
            </button>
            <button className="fullscreen-thumbnails" onClick={toggleThumbnails}>
              ☰
            </button>
          </div>
          <div className="fullscreen-image-container">
            <button className="fullscreen-prev" onClick={handlePrevImage}>
              <ArrowLeft size={24} />
            </button>
            <img
              ref={imageRef}
              src={fullscreenImage}
              alt="Fullscreen view"
              className={`fullscreen-image ${isSpinning ? 'spinning' : ''}`}
              style={{
                transform: `scale(${zoomScale}) translate(${zoomTranslate.x}px, ${zoomTranslate.y}px)`,
                cursor: isZoomed ? 'zoom-in' : 'default',
              }}
              onMouseDown={handleImageMouseDown}
              onTouchStart={handleImageTouchStart}
            />
            <button className="fullscreen-next" onClick={handleNextImage}>
              <ArrowRight size={24} />
            </button>
            {showThumbnails && (
              <div className="thumbnail-list">
                {galleryImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className={`thumbnail ${img === fullscreenImage ? 'active' : ''}`}
                    onClick={() => selectThumbnail(img)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;