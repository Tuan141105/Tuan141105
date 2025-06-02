import React from "react";
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import ImageNap from "./VCB-1014480066-print.png"; // Đảm bảo tên biến không có ký tự đặc biệt

const NapTien = () => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="container">
        {/* Dashboard Section */}
        <div className="Dashboard">
          <div className="icon-dashboard">
            <i className="fa-solid fa-bars"></i>
            <p>Nạp tiền tài khoản</p>
          </div>
        </div>
        <div className="content">
          <h3>Thông tin chuyển khoản ngân hàng</h3>
          <p>
            Để nạp tiền vào tài khoản Tadu, trong nội dung chuyển khoản quý
            khách chỉ cần điền <b>NAPKPNN</b>.
          </p>
          <p>
            <b>Vietcombank - Ngân Hàng TMCP Ngoại Thương Việt Nam CN Tân Sơn Nhất</b>
            <br />
            Chủ tài khoản: <b>Trần Thị Huỳnh Trang</b>
            <br />
            Tài khoản: <b>101.4480.066</b>
          </p>
          <img
            src={ImageNap}
            alt="Thông tin chuyển khoản ngân hàng"
            width="600"
          />
        </div>
      </div>
    </div>
  );
};

export default NapTien;
