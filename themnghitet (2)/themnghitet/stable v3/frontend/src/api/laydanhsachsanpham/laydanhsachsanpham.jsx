import React from 'react';
import Header from '../../Header';
import Sidebar from '../../Sidebar';

function TheoDanhSach() {
  const mockData = [
    {
      id: 2,
      name: "VPS#1",
      price: 100000,
      CPU: "1 core",
      HDD: "20GB [SSD Cloud Storage]",
      RAM: "1024 MB",
      Bandwidth: "Unlimited",
      "Công nghệ ảo hóa": "KVM / LXC",
      "Hệ điều hành": "Linux",
      Backup: "Hàng tuần",
      Panel: "Free Direct Admin",
      is_domain_check: "0",
      url: "/dang-ky/vps/2",
    },
  ];

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
                <p>
                  <b>Lưu ý:</b> https://Abcd.com/ là đường dẫn thương hiệu riêng
                  của đại lý:
                </p>
                <ul>
                  <li>
                    <a href="/">Hướng Dẫn Cấu Hình Thương Hiệu Riêng</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="display-app">
              <h2>
                <u>Ứng Dụng</u>
              </h2>
              <p>
                Dùng để lấy sản phẩm tiêu biểu đặt ra ngoài trang chủ hoặc các
                trang khuyến mãi cho một sản phẩm đặc thù
              </p>
            </div>
            <div className="use">
              <h2>
                <u>Sử Dụng</u>
              </h2>
              <div className="container">
                <div className="info-box">
                  <p>
                    <strong>Method:</strong>{" "}
                    <span style={{ color: "#007BFF" }}>GET</span>
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
                <h2>
                  <u>URL FILES</u>
                </h2>
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
  <h2>
    <u>Kết Quả Trả về</u>
  </h2>
  <p>
    Tên sản phẩm: <strong>{mockData[0].name}</strong>
  </p>
  <p>
    Giá: <strong>{mockData[0].price.toLocaleString()} VND</strong>
  </p>
  <p>
    CPU: <strong>{mockData[0].CPU}</strong>
  </p>
  <p>
    Dung lượng HDD: <strong>{mockData[0].HDD}</strong>
  </p>
  <p>
    RAM: <strong>{mockData[0].RAM}</strong>
  </p>
  <p>
    Băng thông: <strong>{mockData[0].Bandwidth}</strong>
  </p>
  <p>
    Công nghệ ảo hóa: <strong>{mockData[0]["Công nghệ ảo hóa"]}</strong>
  </p>
  <p>
    Hệ điều hành: <strong>{mockData[0]["Hệ điều hành"]}</strong>
  </p>
  <p>
    Backup: <strong>{mockData[0].Backup}</strong>
  </p>
  <p>
    Để có kết quả như trên, product-id chúng ta truyền vào <strong>{mockData[0].id}</strong>.
  </p>
  <div className="description">
    <p>Để hiểu các thông số trả về, tham khảo lại:</p>
    <ul>
      <li>
        <a href="/">Hướng Dẫn Lấy Danh Sách Sản Phẩm</a>
      </li>
    </ul>
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default TheoDanhSach;
