import React, { useState } from "react";
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import './tatca.css'

const AllService = () => {
  const tasks = [
    { id: "bach.com", name: "info@dakdesign.net", status: "Đang sử dụng", startdate: "06-08-2024 11:56:55", enddate: "06-11-2025 11:56:55" },
    { id: "thuy.com", name: "info@dakdesign.net", status: "Hết hạn", startdate: "06-08-2024 11:56:55", enddate: "06-11-2025 11:56:55" },
    { id: "haudien.com", name: "info@dakdesign.net", status: "Sắp hết hạn", startdate: "06-08-2024 11:56:55", enddate: "06-11-2025 11:56:55" },
    { id: "ty.com", name: "info@dakdesign.net", status: "Đang sử dụng", startdate: "06-08-2024 11:56:55", enddate: "06-11-2025 11:56:55" },
    { id: "bundien.com", name: "info@dakdesign.net", status: "Đang sử dụng", startdate: "06-08-2024 11:56:55", enddate: "06-11-2025 11:56:55" },
    { id: "cha.com", name: "info@dakdesign.net", status: "Sắp hết hạn", startdate: "06-08-2024 11:56:55", enddate: "06-11-2025 11:56:55" },
    { id: "phodien.com", name: "info@dakdesign.net", status: "Đang sử dụng", startdate: "06-08-2024 11:56:55", enddate: "06-11-2025 11:56:55" },
    { id: "ga.com", name: "info@dakdesign.net", status: "Đang sử dụng", startdate: "06-08-2024 11:56:55", enddate: "06-11-2025 11:56:55" },
    { id: "rieudien.com", name: "info@dakdesign.net", status: "Sắp hết hạn", startdate: "06-08-2024 11:56:55", enddate: "06-11-2025 11:56:55" },
    { id: "com.com", name: "info@dakdesign.net", status: "Đang sử dụng", startdate: "06-08-2024 11:56:55", enddate: "06-11-2025 11:56:55" },
    { id: "todien.com", name: "info@dakdesign.net", status: "Đang sử dụng", startdate: "06-08-2024 11:56:55", enddate: "06-11-2025 11:56:55" },
  ];

  const [filter, setFilter] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTasks, setSelectedTasks] = useState([]);

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter = filter === "Tất cả" || task.status === filter;
    const matchesSearch = task.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleCheckboxChange = (taskId) => {
    setSelectedTasks((prevSelected) =>
      prevSelected.includes(taskId)
        ? prevSelected.filter((id) => id !== taskId)
        : [...prevSelected, taskId]
    );
  };

  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="container">
        <div className="Dashboard">
          <div className="icon-dashboard">
            <i className="fa-solid fa-bars"></i>
            <p>Tất cả dịch vụ</p>
          </div>
        </div>

        {/* Bộ lọc */}
        <div className="filter-bar">
          <button onClick={() => setFilter("Tất cả")}>Tất cả</button>
          <button onClick={() => setFilter("Đang sử dụng")}>Đang sử dụng</button>
          <button onClick={() => setFilter("Sắp hết hạn")}>Sắp hết hạn</button>
          <button onClick={() => setFilter("Hết hạn")}>Hết hạn</button>
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
                <th>Dịch vụ</th>
                <th>Thông tin khách hàng</th>
                <th>Trạng thái</th>
                <th>Ngày tạo</th>
                <th>Ngày hết hạn</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((task) => (
                <tr key={task.id}>
                  <td><input
                      type="checkbox"
                      checked={selectedTasks.includes(task.id)}
                      onChange={() => handleCheckboxChange(task.id)}
                    />{task.id}</td>
                  <td>{task.name}</td>
                  <td>{task.status}</td>
                  <td>{task.startdate}</td>
                  <td>{task.enddate}</td>
                </tr>
              ))}
              {filteredTasks.length === 0 && (
                <tr>
                  <td colSpan="6">Không tìm thấy công việc nào!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <br />
        <div className="renew-button-container">
          <button
            className="renew-button"
            disabled={selectedTasks.length === 0}
            onClick={() => alert("Gia hạn dịch vụ cho các công việc đã chọn!")}
            style={{
              backgroundColor: selectedTasks.length > 0 ? "#007bff" : "#ccc",
              cursor: selectedTasks.length > 0 ? "pointer" : "not-allowed",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Gia hạn dịch vụ
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllService;
