import React, { useState, useEffect } from 'react';
import './dangkyssl.css';
import Header from '../../Header';
import Sidebar from '../../Sidebar';

const SSL = () => {
  const [domain, setDomain] = useState('');
  const [availableDomains, setAvailableDomains] = useState([
    'buncha.com',
    'lmao.net',
    'ancomkhong.org',
  ]);
  const [cart, setCart] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showDomainSearch, setShowDomainSearch] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '' });

  // Update search results as the user types
  useEffect(() => {
    if (domain) {
      const results = availableDomains.filter((d) =>
        d.toLowerCase().includes(domain.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [domain, availableDomains]);

  const addToCart = (domain) => {
    setCart((prevCart) => [...prevCart, domain]);
    setNotification({ show: true, message: `${domain} đã được thêm vào giỏ hàng!` });
  };

  const handleBuyNowClick = () => {
    setShowDomainSearch(true);
  };

  const closeDomainSearch = () => {
    setShowDomainSearch(false);
  };

  const closeNotification = () => {
    setNotification({ show: false, message: '' });
  };

  return (
    <>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="container">
          <div className="Dashboard">
            <div className="icon-dashboard">
              <i className="fa-solid fa-bars"></i>
              <p>SSL</p>
            </div>
          </div>

          {/* Hộp thông báo */}
          {notification.show && (
            <div className="notification-box">
              <p>{notification.message}</p>
              <button onClick={closeNotification}>Đóng</button>
            </div>
          )}

          {/* Hộp thoại tìm kiếm tên miền */}
          {showDomainSearch && (
            <div className="domain-search-modal">
              <div className="domain-search">
                <h3>Chọn Tên Miền</h3>
                <input
                  type="text"
                  placeholder="Nhập tên miền..."
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                />
                <button onClick={closeDomainSearch} className="close-button">
                  Đóng
                </button>

                {/* Kết quả tìm kiếm */}
                {searchResults.length > 0 && (
                  <div className="search-results">
                    <h4>Kết quả tìm kiếm:</h4>
                    <ul>
                      {searchResults.map((d) => (
                        <li key={d}>
                          {d} <button onClick={() => addToCart(d)}>Thêm vào giỏ hàng</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {searchResults.length === 0 && domain && (
                  <p>Không tìm thấy tên miền phù hợp.</p>
                )}
              </div>
            </div>
          )}

          {/* Thẻ giá SSL */}
          <div className="card-container">
            <div className="pricing-card">
              <h3 className="pricing-card-title">RAPIDSSL</h3>
              <ul className="pricing-card-list">
                <li>Chính sách bảo hiểm : <b>$10.000</b></li>
                <li>Số domain được bảo mật : <b>1</b></li>
                <li>Độ tin cậy : <b>Cơ bản</b></li>
                <li>Thanh địa chỉ màu xanh : <b>Không</b></li>
                <li>SANs : <b>Không có</b></li>
              </ul>
              <div className="pricing-card-price">
                Giá chỉ từ <br /><span className="pricing-card-price-amount">375,000 đ / 12 tháng</span>
              </div>
              <p className="pricing-card-note">(Giá trên chưa bao gồm VAT)</p>
              <button className="pricing-card-button" onClick={handleBuyNowClick}>Đặt Mua Ngay</button>
            </div>
            <div className="pricing-card">
              <h3 className="pricing-card-title">THAWTE EV SSL</h3>
              <ul className="pricing-card-list">
                <li>Chính sách bảo hiểm : <b>$1.000.000</b></li>
                <li>Số domain được bảo mật : <b>1</b></li>
                <li>Độ tin cậy : <b>Cao</b></li>
                <li>Thanh địa chỉ màu xanh : <b>Có</b></li>
                <li>SANs : <b>Không có</b></li>
              </ul>
              <div className="pricing-card-price">
                Giá chỉ từ <br /><span className="pricing-card-price-amount">3,400,000 đ / 12 tháng</span>
              </div>
              <p className="pricing-card-note">(Giá trên chưa bao gồm VAT)</p>
              <button className="pricing-card-button" onClick={handleBuyNowClick}>Đặt Mua Ngay</button>
            </div>
            <div className="pricing-card">
              <h3 className="pricing-card-title">RAPIDSSL WILDCARD</h3>
              <ul className="pricing-card-list">
                <li>Chính sách bảo hiểm : <b>$10.000</b></li>
                <li>Số domain được bảo mật : <b>Unlimited</b></li>
                <li>Độ tin cậy : <b>Cao</b></li>
                <li>Thanh địa chỉ màu xanh : <b>Không</b></li>
                <li>SANs : <b>Không có</b></li>
              </ul>
              <div className="pricing-card-price">
                Giá chỉ từ <br /><span className="pricing-card-price-amount">3,750,000 đ / 12 tháng</span>
              </div>
              <p className="pricing-card-note">(Giá trên chưa bao gồm VAT)</p>
              <button className="pricing-card-button" onClick={handleBuyNowClick}>Đặt Mua Ngay</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SSL;
