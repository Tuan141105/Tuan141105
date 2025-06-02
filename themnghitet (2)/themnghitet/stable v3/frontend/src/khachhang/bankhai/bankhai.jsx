import React, { useState } from "react";
import Header from '../../Header';
import Sidebar from '../../Sidebar';

const BanKhai = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const customers = [
    {
      email: "nthang91@gmail.com",
      name: "Nguyễn Thắng",
      phone: "0916531611",
      type: "Cá nhân",
      location: "Pleiku Gia Lai, Kon Tum, Việt Nam",
      cmnd: "Chưa có",
    },
    {
      email: "admin@anhpro.biz",
      name: "Quốc Anh",
      phone: "0941280777",
      type: "Cá nhân",
      location: "HCM, Hồ Chí Minh, Việt Nam",
      cmnd: "Chưa có",
    },
    {
      email: "xuantruong080889@gmail.com",
      name: "Nông Xuân Trường",
      phone: "0988480101",
      type: "Cá nhân",
      location: "DiLêYa, Đắk Lắk, Việt Nam",
      cmnd: "Chưa có",
    },
    {
      email: "giandon20vn@gmail.com",
      name: "Phan Thành Giản",
      phone: "0967994997",
      type: "Cá nhân",
      location: "Phùng Hưng, Đắk Lắk, Việt Nam",
      cmnd: "241470412",
    },
    {
      email: "sakerno82@gmail.com",
      name: "Lê Hữu Tạo",
      phone: "01654005022",
      type: "Cá nhân",
      location: "Buôn Ma Thuột, Đắk Lắk, Việt Nam",
      cmnd: "241518528",
    },
    {
        email: "xuantruong080889@gmail.com",
        name: "Nông Xuân Trường",
        phone: "0988480101",
        type: "Cá nhân",
        location: "DiLêYa, Đắk Lắk, Việt Nam",
        cmnd: "Chưa có",
      },
      {
        email: "giandon20vn@gmail.com",
        name: "Phan Thành Giản",
        phone: "0967994997",
        type: "Cá nhân",
        location: "Phùng Hưng, Đắk Lắk, Việt Nam",
        cmnd: "241470412",
      },
      {
        email: "sakerno82@gmail.com",
        name: "Lê Hữu Tạo",
        phone: "01654005022",
        type: "Cá nhân",
        location: "Buôn Ma Thuột, Đắk Lắk, Việt Nam",
        cmnd: "241518528",
      },
  ];

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm)
  );

  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="container">
        <div className="Dashboard">
          <div className="icon-dashboard">
            <i className="fa-solid fa-bars"></i>
            <p>Bản Khai</p>
          </div>
        </div>
    <div className="customer-list-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Email hoặc số điện thoại"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button">Tìm</button>
      </div>
      <table className="customer-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Họ Tên - Điện Thoại</th>
            <th>Loại</th>
            <th>Chủ Thể</th>
            <th>CMND</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.email}</td>
              <td>
                {customer.name} - {customer.phone}
              </td>
              <td>
                <button className="type-button">{customer.type}</button>
              </td>
              <td>{customer.location}</td>
              <td className={customer.cmnd === "Chưa có" ? "red-text" : ""}>
                {customer.cmnd}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default BanKhai;
