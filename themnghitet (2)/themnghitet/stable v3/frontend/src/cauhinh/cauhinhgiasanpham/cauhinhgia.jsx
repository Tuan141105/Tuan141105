import React from 'react';
import './cauhinhgia.css';
import Header from '../../Header';
import Sidebar from '../../Sidebar';

function CauHinhGia() {
  return (
    <div className="wrapper">
    <Header />
    <Sidebar />
    <div className="container">
      <div className="Dashboard">
        <div className="icon-dashboard">
          <i className="fa-solid fa-bars"></i>
          <h3>Cấu Hình Đại Lý</h3>
        </div>
      </div>

        {/* Tìm kiếm */}
        <div className="search-menu">
          <input type="text" placeholder=" Dịch vụ" className="search-bar" />
          <button className="search-btn">Tìm</button>
        </div>

        {/* Dữ liệu */}
        <div className="data-container">
            <div className="data-menu">
              <div className="data-items">Tên dịch vụ<br />đại lý</div>
              <div className="data-items">Giá khởi tạo</div>
              <div className="data-items">Giá gia hạn tháng 1</div>
              <div className="data-items">Giá gia hạn tháng 3</div>
              <div className="data-items">Giá gia hạn tháng 6</div>
              <div className="data-items">Giá gia hạn tháng 12</div>
              <div className="data-items">Hỗ Trợ</div>
              </div>        
          <hr />
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="data-row">
              <div className="data-item">Chưa cấu hình</div>
              <div className="data-item">0 đ</div>
              <div className="data-item">Không hỗ trợ</div>
              <div className="data-item">Không hỗ trợ</div>
              <div className="data-item">Không hỗ trợ</div>
              <div className="data-item">30,000 đ</div>
              <div className="action-icon">
                <i className="fa-solid fa-bars"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Điều hướng trang */}
        <div className="pagination">
          <button className="page-btn">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn">4</button>
        </div>
      </div>
    </div>
  );
}

export default CauHinhGia;