import React, { useState } from 'react';
import './order.css';
import Header from '../Header';
import Sidebar from '../Sidebar';

const OrderList = () => {
  const [statusFilter, setStatusFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const orders = [
    {
      id: "TADU-ER9797",
      customer: "info@dakdesign.net - Hoàng Quốc Tuấn - 0943943179",
      paymentMethod: "BANK_TRANSFER",
      status: "MỚI",
      date: "25-10-2024 21:09:43",
      purchasePrice: "6,138,000 đ",
      salePrice: "0 đ",
    },
    {
      id: "TADU-EYM5M5",
      customer: "info@dakdesign.net - Hoàng Quốc Tuấn - 0943943179",
      paymentMethod: "BANK_TRANSFER",
      status: "ĐÃ THANH TOÁN",
      date: "20-10-2024 09:05:33",
      purchasePrice: "440,000 đ",
      salePrice: "0 đ",
    },
    {
      id: "TADU-ER4P1",
      customer: "hoangquoctuan.net@gmail.com - Khách hàng đăng ký tên miền - 0911130105",
      paymentMethod: "BANK_TRANSFER",
      status: "ĐÃ THANH TOÁN",
      date: "10-10-2024 14:08:01",
      purchasePrice: "446,400 đ",
      salePrice: "482,000 đ",
    },
    {
      id: "TADU-DK9498",
      customer: "info@dakdesign.net - Hoàng Quốc Tuấn - 0943943179",
      paymentMethod: "BANK_TRANSFER",
      status: "ĐÃ THANH TOÁN",
      date: "22-08-2024 08:35:39",
      purchasePrice: "625,515 đ",
      salePrice: "0 đ",
    },
    {
      id: "TADU-EYMKX3",
      customer: "info@dakdesign.net - Hoàng Quốc Tuấn - 0943943179",
      paymentMethod: "BANK_TRANSFER",
      status: "ĐÃ THANH TOÁN",
      date: "06-08-2024 11:26:29",
      purchasePrice: "3,168,000 đ",
      salePrice: "0 đ",
    },
    {
      id: "TADU-DL57QL",
      customer: "info@dakdesign.net - Hoàng Quốc Tuấn - 0943943179",
      paymentMethod: "BANK_TRANSFER",
      status: "CHỜ THANH TOÁN",
      date: "06-08-2024 07:19:17",
      purchasePrice: "660,000 đ",
      salePrice: "0 đ",
    },
    {
      id: "TADU-DL5R30",
      customer: "info@dakdesign.net - Hoàng Quốc Tuấn - 0943943179",
      paymentMethod: "BANK_TRANSFER",
      status: "ĐÃ THANH TOÁN",
      date: "04-07-2024 15:19:24",
      purchasePrice: "307,615 đ",
      salePrice: "0 đ",
    },
    {
      id: "TADU-E176KV",
      customer: "info@dakdesign.net - Hoàng Quốc Tuấn - 0943943179",
      paymentMethod: "TADU_ACCOUNT",
      status: "ĐÃ THANH TOÁN",
      date: "04-06-2024 06:25:43",
      purchasePrice: "1,188,000 đ",
      salePrice: "1,188,000 đ",
    },
    {
      id: "TADU-DL5MPZ",
      customer: "info@dakdesign.net - Hoàng Quốc Tuấn - 0943943179",
      paymentMethod: "TADU_ACCOUNT",
      status: "ĐÃ THANH TOÁN",
      date: "03-06-2024 12:14:46",
      purchasePrice: "1,689,600 đ",
      salePrice: "0 đ",
    },
    {
      id: "TADU-DK96M1",
      customer: "info@dakdesign.net - Hoàng Quốc Tuấn - 0943943179",
      paymentMethod: "PAYPAL",
      status: "ĐÃ THANH TOÁN",
      date: "03-06-2024 12:14:19",
      purchasePrice: "1,689,600 đ",
      salePrice: "0 đ",
    },
    {
      id: "TADU-ER1234",
      customer: "info@dakdesign.net - Hoàng Quốc Tuấn - 0943943179",
      paymentMethod: "BANK_TRANSFER",
      status: "MỚI",
      date: "24-12-2024 15:30:00",
      purchasePrice: "1,200,000 đ",
      salePrice: "0 đ",
    },
    {
      id: "TADU-ER5678",
      customer: "info@dakdesign.net - Hoàng Quốc Tuấn - 0943943179",
      paymentMethod: "TADU_ACCOUNT",
      status: "ĐÃ THANH TOÁN",
      date: "23-12-2024 10:45:00",
      purchasePrice: "950,000 đ",
      salePrice: "950,000 đ",
    },
    {
      id: "TADU-ER91011",
      customer: "hoangquoctuan.net@gmail.com - Khách hàng đăng ký tên miền - 0911130105",
      paymentMethod: "PAYPAL",
      status: "ĐÃ THANH TOÁN",
      date: "22-12-2024 08:00:00",
      purchasePrice: "350,000 đ",
      salePrice: "400,000 đ",
    },
    {
      id: "TADU-ER1213",
      customer: "hoangquoctuan.net@gmail.com - Khách hàng đăng ký tên miền - 0911130105",
      paymentMethod: "BANK_TRANSFER",
      status: "CHỜ THANH TOÁN",
      date: "21-12-2024 09:15:00",
      purchasePrice: "500,000 đ",
      salePrice: "550,000 đ",
    },
    {
      id: "TADU-ER1415",
      customer: "info@dakdesign.net - Hoàng Quốc Tuấn - 0943943179",
      paymentMethod: "BANK_TRANSFER",
      status: "ĐÃ THANH TOÁN",
      date: "20-12-2024 14:20:00",
      purchasePrice: "2,500,000 đ",
      salePrice: "2,500,000 đ",
    },
  
  
    {
      id: "TADU-ER1617",
      customer: "info@dakdesign.net - Hoàng Quốc Tuấn - 0943943179",
      paymentMethod: "BANK_TRANSFER",
      status: "MỚI",
      date: "19-12-2024 16:10:00",
      purchasePrice: "800,000 đ",
      salePrice: "0 đ",
    },
    {
      id: "TADU-ER1819",
      customer: "hoangquoctuan.net@gmail.com - Khách hàng đăng ký tên miền - 0911130105",
      paymentMethod: "PAYPAL",
      status: "ĐÃ THANH TOÁN",
      date: "18-12-2024 13:45:00",
      purchasePrice: "450,000 đ",
      salePrice: "500,000 đ",
    },
    {
      id: "TADU-ER2021",
      customer: "info@dakdesign.net - Hoàng Quốc Tuấn - 0943943179",
      paymentMethod: "BANK_TRANSFER",
      status: "ĐÃ THANH TOÁN",
      date: "17-12-2024 11:30:00",
      purchasePrice: "1,000,000 đ",
      salePrice: "1,200,000 đ",
    },
    {
      id: "TADU-ER2223",
      customer: "hoangquoctuan.net@gmail.com - Khách hàng đăng ký tên miền - 0911130105",
      paymentMethod: "TADU_ACCOUNT",
      status: "MỚI",
      date: "16-12-2024 09:20:00",
      purchasePrice: "600,000 đ",
      salePrice: "650,000 đ",
    },
    {
      id: "TADU-ER2425",
      customer: "info@dakdesign.net - Hoàng Quốc Tuấn - 0943943179",
      paymentMethod: "BANK_TRANSFER",
      status: "CHỜ THANH TOÁN",
      date: "15-12-2024 14:55:00",
      purchasePrice: "900,000 đ",
      salePrice: "0 đ",
    },
    {
      id: "TADU-ER2627",
      customer: "hoangquoctuan.net@gmail.com - Khách hàng đăng ký tên miền - 0911130105",
      paymentMethod: "PAYPAL",
      status: "ĐÃ THANH TOÁN",
      date: "14-12-2024 17:40:00",
      purchasePrice: "250,000 đ",
      salePrice: "300,000 đ",
    },
    {
      id: "TADU-ER2829",
      customer: "info@dakdesign.net - Hoàng Quốc Tuấn - 0943943179",
      paymentMethod: "TADU_ACCOUNT",
      status: "MỚI",
      date: "13-12-2024 10:05:00",
      purchasePrice: "1,500,000 đ",
      salePrice: "0 đ",
    },
    {
      id: "TADU-ER3031",
      customer: "hoangquoctuan.net@gmail.com - Khách hàng đăng ký tên miền - 0911130105",
      paymentMethod: "BANK_TRANSFER",
      status: "ĐÃ THANH TOÁN",
      date: "12-12-2024 08:25:00",
      purchasePrice: "350,000 đ",
      salePrice: "400,000 đ",
    },
    {
      id: "TADU-ER3233",
      customer: "info@dakdesign.net - Hoàng Quốc Tuấn - 0943943179",
      paymentMethod: "PAYPAL",
      status: "ĐÃ THANH TOÁN",
      date: "11-12-2024 12:00:00",
      purchasePrice: "700,000 đ",
      salePrice: "750,000 đ",
    },
    {
      id: "TADU-ER3435",
      customer: "info@dakdesign.net - Hoàng Quốc Tuấn - 0943943179",
      paymentMethod: "BANK_TRANSFER",
      status: "CHỜ THANH TOÁN",
      date: "10-12-2024 18:30:00",
      purchasePrice: "1,200,000 đ",
      salePrice: "0 đ",
    },
    {
      id: "TADU-ER3436",
      customer: "info@dakdesign.net - Hoàng Quốc Tuấn - 0943943179",
      paymentMethod: "BANK_TRANSFER",
      status: "ĐÃ HỦY",
      date: "10-12-2024 18:20:00",
      purchasePrice: "1,200,000 đ",
      salePrice: "0 đ",
    },
    {
      id: "TADU-ER4041",
      customer: "info@dakdesign.net - Hoàng Quốc Tuấn - 0943943179",
      paymentMethod: "BANK_TRANSFER",
      status: "ĐÃ HỦY",
      date: "06-12-2024 15:20:00",
      purchasePrice: "850,000 đ",
      salePrice: "0 đ",
    },
    {
      id: "TADU-ER4142",
      customer: "hoangquoctuan.net@gmail.com - Khách hàng đăng ký tên miền - 0911130105",
      paymentMethod: "TADU_ACCOUNT",
      status: "ĐÃ HỦY",
      date: "05-12-2024 10:10:00",
      purchasePrice: "950,000 đ",
      salePrice: "0 đ",
    },
    {
      id: "TADU-ER4243",
      customer: "info@dakdesign.net - Hoàng Quốc Tuấn - 0943943179",
      paymentMethod: "PAYPAL",
      status: "ĐÃ HỦY",
      date: "04-12-2024 12:45:00",
      purchasePrice: "1,100,000 đ",
      salePrice: "0 đ",
    },
    {
      id: "TADU-ER4445",
      customer: "hoangquoctuan.net@gmail.com - Khách hàng đăng ký tên miền - 0911130105",
      paymentMethod: "BANK_TRANSFER",
      status: "ĐÃ HỦY",
      date: "03-12-2024 08:25:00",
      purchasePrice: "600,000 đ",
      salePrice: "0 đ",
    },
    {
      id: "TADU-ER4647",
      customer: "info@dakdesign.net - Hoàng Quốc Tuấn - 0943943179",
      paymentMethod: "TADU_ACCOUNT",
      status: "ĐÃ HỦY",
      date: "02-12-2024 17:30:00",
      purchasePrice: "1,300,000 đ",
      salePrice: "0 đ",
    },
    {
      id: "TADU-ER4849",
      customer: "hoangquoctuan.net@gmail.com - Khách hàng đăng ký tên miền - 0911130105",
      paymentMethod: "BANK_TRANSFER",
      status: "ĐÃ HỦY",
      date: "01-12-2024 14:00:00",
      purchasePrice: "400,000 đ",
      salePrice: "0 đ",
    },
    {
      id: "TADU-ER5051",
      customer: "info@dakdesign.net - Hoàng Quốc Tuấn - 0943943179",
      paymentMethod: "PAYPAL",
      status: "ĐÃ HỦY",
      date: "30-11-2024 09:00:00",
      purchasePrice: "950,000 đ",
      salePrice: "0 đ",
    },
    {
      id: "TADU-ER5253",
      customer: "hoangquoctuan.net@gmail.com - Khách hàng đăng ký tên miền - 0911130105",
      paymentMethod: "TADU_ACCOUNT",
      status: "ĐÃ HỦY",
      date: "29-11-2024 13:15:00",
      purchasePrice: "500,000 đ",
      salePrice: "0 đ",
    },
    {
      id: "TADU-ER5455",
      customer: "info@dakdesign.net - Hoàng Quốc Tuấn - 0943943179",
      paymentMethod: "BANK_TRANSFER",
      status: "ĐÃ HỦY",
      date: "28-11-2024 16:30:00",
      purchasePrice: "1,000,000 đ",
      salePrice: "0 đ",
    },
    {
      id: "TADU-ER5657",
      customer: "hoangquoctuan.net@gmail.com - Khách hàng đăng ký tên miền - 0911130105",
      paymentMethod: "PAYPAL",
      status: "ĐÃ HỦY",
      date: "27-11-2024 10:00:00",
      purchasePrice: "700,000 đ",
      salePrice: "0 đ",
    },
  ];
  

  // Lọc đơn hàng theo trạng thái và từ khóa tìm kiếm
  const filteredOrders = orders.filter((order) => {
    const matchesStatus = statusFilter ? order.status === statusFilter : true;
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
      order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="container">
        <div className="Dashboard">
          <div className="icon-dashboard">
            <i className="fa-solid fa-bars"></i>
            <p>Danh sách đơn hàng</p>
          </div>
        </div>
    <div className="order-list-container">
      {/* Thanh Tìm Kiếm */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Tìm kiếm mã đơn hàng hoặc tên khách hàng"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Cập nhật từ khóa tìm kiếm
        />
      </div>

      
      <div className="status-filters">
        <button
          className={`status-filter ${statusFilter === '' ? 'active' : ''}`}
          onClick={() => setStatusFilter('')}
        >
          TẤT CẢ CÁC ĐƠN HÀNG
        </button>
        <button
          className={`status-filter ${statusFilter === 'MỚI' ? 'active' : ''}`}
          onClick={() => setStatusFilter('MỚI')}
        >
          ĐĂNG KÝ MỚI
        </button>
        <button
          className={`status-filter ${statusFilter === 'CHỜ THANH TOÁN' ? 'active' : ''}`}
          onClick={() => setStatusFilter('CHỜ THANH TOÁN')}
        >
          CHỜ THANH TOÁN
        </button>
        <button
          className={`status-filter ${statusFilter === 'ĐÃ THANH TOÁN' ? 'active' : ''}`}
          onClick={() => setStatusFilter('ĐÃ THANH TOÁN')}
        >
          ĐÃ THANH TOÁN
        </button>
        <button
          className={`status-filter ${statusFilter === 'ĐÃ HỦY' ? 'active' : ''}`}
          onClick={() => setStatusFilter('ĐÃ HỦY')}
        >
          ĐÃ HỦY
        </button>
      </div>

      {/* Bảng Đơn Hàng */}
      <table>
        <thead>
          <tr>
            <th>Mã Đơn Hàng</th>
            <th>Khách Hàng</th>
            <th>Phương Thức TT</th>
            <th>Trạng Thái</th>
            <th>Ngày Đăng Ký</th>
            <th>Giá Mua Vào</th>
            <th>Giá Bán Ra</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.length === 0 ? (
            <tr><td colSpan="7">Không tìm thấy đơn hàng</td></tr>
          ) : (
            filteredOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.paymentMethod}</td>
                <td
                  className={`status ${
                    order.status === "MỚI"
                      ? "status-new"
                      : order.status === "CHỜ THANH TOÁN"
                      ? "status-pending"
                      : order.status === "ĐÃ THANH TOÁN"
                      ? "status-paid"
                      : "status-canceled"
                  }`}
                >
                  {order.status}
                </td>
                <td>{order.date}</td>
                <td>{order.purchasePrice}</td>
                <td>{order.salePrice}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default OrderList;
