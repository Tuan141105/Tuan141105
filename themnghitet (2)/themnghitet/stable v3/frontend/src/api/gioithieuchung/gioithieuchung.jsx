import React from 'react';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import './gioithieuchung.css';

const DownloadPage = () => {
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
            <p>Giới Thiệu Chung</p>
          </div>
        </div>
    <div className = "gioithieuchung-container">
      <p>
        Nắm bắt được nhu cầu các đại lý (sử dụng thương hiệu riêng) đều mong muốn sở hữu một trang bán hàng
        riêng dành cho thương hiệu của mình. Tadu xin giới thiệu đến quý đại lý hệ thống API giúp quý đại lý
        có thể xây dựng ra trang bán hàng (như <a href="https://tadu.cloud" target="_blank" rel="noopener noreferrer">tadu.cloud</a>) hoàn chỉnh
        để phục vụ nhu cầu phát triển thị trường thuận lợi hơn. Tadu đã cố gắng đơn giản hóa các API này để
        giúp quý đại lý không tốn nhiều thời gian tìm hiểu và sử dụng.
      </p>
      <button class = "button-download" onClick={() =>
          handleDownload('/path/to/sample/file.zip', 'sample-file.zip')
        }
      >
        Download ví dụ mẫu
      </button>

      <p>
        Đối với những đại lý quen sử dụng CMS Wordpress và mong muốn xây dựng trang bán hàng bằng CMS này, quý
        đại lý có thể tải plugin Tadu đã xây dựng sẵn. Với plugin này, quý đại lý không cần lập trình xây dựng
        tính năng mà chỉ cần CSS lại cho phù hợp với nhận diện thương hiệu của mình.
      </p>
      <button
        class = "button-downloadplugin"
        onClick={() =>
          handleDownload('/path/to/wordpress/plugin.zip', 'wordpress-plugin.zip')
        }
      >
        Download plugin wordpress tại đây
      </button>

      <p>
        Quý khách cần vào <strong><a href="/config-page" style={{ color: '#007BFF', textDecoration: 'none' }}>cấu hình thông tin đại lý</a></strong> nhập vào
        đường dẫn <strong><a href="/home-page" style={{ color: '#007BFF', textDecoration: 'none' }}>trang chủ</a></strong> để hoạt động đủ tính năng.
      </p>
    </div>
    </div>
    </div>
  );
};

export default DownloadPage;
