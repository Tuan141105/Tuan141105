import React from 'react';
import './laytheoid.css';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import Image from './results.png'
function TheoID() {
  return (
    <div>
      <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="container">
      <div className="Dashboard">
        <div className="icon-dashboard">
          <i className="fa-solid fa-bars"></i>
          <h3>Lấy sản phẩm theo ID</h3>
        </div>   
      </div>
      <div className="slide-bar"></div>
      <div className="display-infor">
          <div className="get-info">
            <p>Lấy thông tin duy nhất 1 sản phẩm theo ID của sản phẩm đó. </p>
            <div className="getlink">
              <p><b>Lưu ý:</b> https://Abcd.com/ là đường dẫn thương hiệu riêng của đại lý: </p>
                <ul>
                  <li>
                    <a href="">Hướng Dẫn Cấu Hình Thương Hiệu Riêng</a>
                  </li>
                </ul>
            </div>
          </div>
          <div className="display-app">
            <h2><u>Ứng Dụng</u></h2>
            <p>Dùng để lấy sản phẩm tiêu biểu đặt ra ngoài trang chủ hoặc các trang khuyến mãi cho một sản phẩm đặc thù</p>
          </div>
          <div className="use">
            <h2><u>Sử Dụng</u></h2>
            <div className="container">
              <div className="info-box">
                <p>
                  <strong>Method:</strong> <span style={{ color: "#007BFF" }}>GET</span>
                </p>
                <p>
                  <strong>Link:</strong>{" "}
                  <a
                    href="http://me.xxxx.com/rest/product/product-id"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://me.xxxx.com/rest/product/product-id
                  </a>
                </p>
                <p>
                  <strong>Content-Type:</strong> application/json
                </p>
              </div>
            </div>
          <div className="url">
              <h2><u>URL FILES</u></h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>Biến</th>
                    <th>Loại</th>
                    <th>Mô tả</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>PRODUCT-ID</td>
                    <td>Bắt buộc nhập</td>
                    <td>
                      <ul>
                        <li>Mỗi sản phẩm sẽ có 1 ID</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
           </div>
          </div> 
          <div className="result">
            <h2><u>Kết Quả Trả về</u></h2>
            <img src={Image} alt="image" width={1000}/>
            <p>Để có kết quả như trên, product-id chúng ta truyền vào "2".</p>
              <div className="description">
                <p>Để hiểu các thông số trả về,tham thảo lại :</p>
                <ul><li><a href="">Hướng Dẫn Lấy Danh Sách Sản Phẩm</a></li></ul>
              </div>
          </div>
</div>
</div>
      </div>
    </div>
    
  );
}

export default TheoID;
