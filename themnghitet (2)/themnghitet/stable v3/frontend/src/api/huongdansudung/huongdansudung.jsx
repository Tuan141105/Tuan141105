import React from 'react';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import Image1 from './img/wp_01.png'
import Image2 from './img/wp_02.png'
import Image3 from './img/wp_03.png'

const DownloadPlugin = () => {
  const handleDownload = (url, fileName) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="container">
        <div className="Dashboard">
          <div className="icon-dashboard">
            <i className="fa-solid fa-bars"></i>
            <p>Hướng Dẫn Sử Dụng</p>
          </div>
        </div>
    <div className = "gioithieuchung-container">
      <button
        class = "button-downloadplugin"
        onClick={() =>
          handleDownload('/path/to/wordpress/plugin.zip', 'wordpress-plugin.zip')
        }
      >
        Download plugin wordpress tại đây
      </button>

      <p>1. Sau khi download, upload lên thư mục plugins của wordpress. <br />
      2. Login và active plugin "Tadu API".</p>
      <img src={Image1} alt="" />
      <p>3. Vào theo đường dẫn <b>Appearance -&gt; Tadu.cloud</b>, nhập vào đường dẫn thương hiệu riêng của đại lý (ví dụ: id.xxxx.com).</p>
      <img src={Image2} alt="" />
      <p>4. Nhấn <b>Lưu cài đặt</b> <br />
      Sau khi cài đặt hoàn tất, plugin sẽ tạo ra các <b>pages:</b>
      <ul>
        <li>host: trang liệt kê các gói dịch vụ Share Hosting.</li>
        <li>vps: trang liệt kê các gói dịch vụ VPS.</li>
        <li>email: trang liệt kê các gói dịch vụ Email Server.</li>
        <li>ssl: trang liệt kê các gói dịch vụ SSL.</li>
        <li>Ngoài trang chủ, các tính năng check domain và sản phẩm đặc trưng có thể sử dụng shortcode để xây dựng ra.</li>
      </ul></p>
      <img src={Image3} alt="" />
      <p>Các shortcode có thể sử dụng:</p>
      <ul>
        <li>[domain_frm]: Tạo hộp chức năng kiểm tra domain (như ngoài trang chủ <a href="">tadu.cloud</a>)</li>
        <li>[json_posts cat="product-type" product_id="product-id"]: Lấy 1 sản phẩm theo ID (product-id) và thuộc loại sản phẩm nào (product-type)</li>
        <li>[json_posts cat="product-type"]: Lấy danh sách sản phẩm theo loại sản phẩm (product-type)</li>
      </ul>
    </div>
    </div>
    </div>
  );
};

export default DownloadPlugin;
