import React, { useState } from "react";
import Header from '../Header';
import Sidebar from '../Sidebar';
import './traloihotro.css'

const TraLoiHoTro = () => {
  const tasks = [
    { id: "SHD1", customer: "info@dakdesign.net", title: "Tạo account quản trị", status: "Đang xử lý", date: "06-08-2024 11:56:55", service: "06-11-2025 11:56:55" },
    { id: "SHD2", customer: "info@dakdesign.net", title: "Tạo account quản trị", status: "Đã trả lời", date: "06-08-2024 11:56:55", service: "06-11-2025 11:56:55" },
    { id: "SHD3", customer: "info@dakdesign.net", title: "Tạo account quản trị", status: "Đã trả lời", date: "06-08-2024 11:56:55", service: "06-11-2025 11:56:55" },
  ];

  const [filter, setFilter] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter = filter === "Tất cả" || task.status === filter;
    const matchesSearch = task.customer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusClass = (status) => {
    switch (status) {
      case "Đang xử lý":
        return "status-in-progress";
      case "Đã trả lời":
        return "status-completed";
      default:
        return "status-all";
    }
  };

  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="container">
        <div className="Dashboard">
          <div className="icon-dashboard">
            <i className="fa-solid fa-bars"></i>
            <p>Trả Lời Hỗ Trợ Khách Hàng</p>
          </div>
        </div>

        {/* Bộ lọc */}
        <div className="filter-bar">
          <button onClick={() => setFilter("Tất cả")} className={`all ${filter === "Tất cả" ? "active" : ""}`}>Tất cả yêu cầu</button>
          <button onClick={() => setFilter("Đang xử lý")} className={`in-progress ${filter === "Đang xử lý" ? "active" : ""}`}>Đang xử lý</button>
          <button onClick={() => setFilter("Đã trả lời")} className={`completed ${filter === "Đã trả lời" ? "active" : ""}`}>Đã trả lời</button>
        </div>

        {/* Thanh tìm kiếm */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Tìm kiếm công việc..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="filter-button">Tìm kiếm</button>
        </div>

        {/* Danh sách công việc */}
        <div className="task-list">
          <table className="transaction-table">
            <thead>
              <tr>
                <th>Mã</th>
                <th>Khách hàng</th>
                <th>Trạng thái</th>
                <th>Ngày</th>
                <th>Dịch Vụ</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>{task.customer}</td>
                  <td className={`status ${getStatusClass(task.status)}`}>{task.status}</td>
                  <td>{task.date}</td>
                  <td>{task.service}</td>
                </tr>
              ))}
              {filteredTasks.length === 0 && (
                <tr>
                  <td colSpan="5">Không tìm thấy công việc nào!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TraLoiHoTro;
