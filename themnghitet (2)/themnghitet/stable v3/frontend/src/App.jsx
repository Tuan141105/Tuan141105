import React, { useState, useEffect } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Bar, Line } from 'react-chartjs-2';
import Header from './Header'
import Sidebar from './Sidebar'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement);

function App() {
  const [userId, setUserId] = useState(null);

  // Lấy userId từ localStorage khi ứng dụng khởi tạo
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId'); // Giả sử userId đã được lưu trong localStorage
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);
  
  const [barData, setBarData] = useState({
    labels: ['Th.1', 'Th.2', 'Th.3', 'Th.4', 'Th.5', 'Th.6', 'Th.7', 'Th.8', 'Th.9', 'Th.10', 'Th.11', 'Th.12'],
    datasets: [
      {
        label: 'Tổng tiền đơn hàng đã thanh toán (Đơn vị triệu)',
        data: [0.5, 1, 1.5, 2, 2.5, 3, 2.5, 3, 2, 1.5, 1, 0.5],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  });

  const [lineData, setLineData] = useState({
    labels: ['Th.1', 'Th.2', 'Th.3', 'Th.4', 'Th.5', 'Th.6', 'Th.7', 'Th.8', 'Th.9', 'Th.10', 'Th.11', 'Th.12'],
    datasets: [
      {
        label: 'Doanh số đại lý (Đơn vị triệu)',
        data: [0.2, 0.5, 0.7, 1.5, 2.2, 2.8, 2.5, 3.1, 3.5, 2.8, 1.8, 0.7],
        borderColor: 'orange',
        fill: false,
        tension: 0.4,
      },
    ],
  });

  const handleTimeClick = (timeFrame) => {
    // Dữ liệu giả lập cho các khoảng thời gian
    const dataMapping = {
      '1 Tháng': {
        bar: [2],
        line: [1],
      },
      '3 Tháng': {
        bar: [1.5, 2, 2.5],
        line: [0.7, 1.2, 1.8],
      },
      '6 Tháng': {
        bar: [0.5, 1, 1.5, 2, 2.5, 3],
        line: [0.2, 0.5, 0.7, 1.5, 2.2, 2.8],
      },
      '1 Năm': {
        bar: [0.5, 1, 1.5, 2, 2.5, 3, 2.5, 3, 2, 1.5, 1, 0.5],
        line: [0.2, 0.5, 0.7, 1.5, 2.2, 2.8, 2.5, 3.1, 3.5, 2.8, 1.8, 0.7],
      },
    };

    const selectedData = dataMapping[timeFrame];

    // Cập nhật dữ liệu biểu đồ
    setBarData((prev) => ({
      ...prev,
      labels: selectedData.bar.map((_, index) => `Th.${index + 1}`),
      datasets: [
        {
          ...prev.datasets[0],
          data: selectedData.bar,
        },
      ],
    }));

    setLineData((prev) => ({
      ...prev,
      labels: selectedData.line.map((_, index) => `Th.${index + 1}`),
      datasets: [
        {
          ...prev.datasets[0],
          data: selectedData.line,
        },
      ],
    }));
  };
  const services = [
    {
      name: 'TÊN MIỀN',
      icon: '🌐', 
      inUse: 6,
      expiring: 0,
      expired: 0,
    },
    {
      name: 'WEB HOSTING',
      icon: '💻', 
      inUse: 0,
      expiring: 0,
      expired: 0,
    },
    {
      name: 'CLOUD VPS',
      icon: '☁️', 
      inUse: 4,
      expiring: 1,
      expired: 2,
    },
    {
      name: 'EMAIL SERVER',
      icon: '📧', 
      inUse: 0,
      expiring: 0,
      expired: 0,
    },
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const dashboard = document.querySelector('.dashboard');
    dashboard.innerHTML = services.map(service => `
      <div class="service-card">
        <div class="service-icon">${service.icon}</div>
        <h3>${service.name}</h3>
        <p>Dịch vụ đang sử dụng <span class="badge">${service.inUse}</span></p>
        <p>Dịch vụ sắp hết hạn <span class="badge">${service.expiring}</span></p>
        <p>Dịch vụ hết hạn <span class="badge">${service.expired}</span></p>
        <button class="register-button">Đăng ký mới</button>
      </div>
    `).join('');
  });
  
  

  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="container">
        <div className="Dashboard">
          <div className="icon-dashboard">
            <i className="fa-solid fa-bars"></i>
            <p>Dashboard</p>
          </div>
        </div>
        <div className="app-container">
          <div className="section">
            <h2>TÀI KHOẢN</h2>
            <img src="https://img1.picmix.com/output/stamp/normal/9/2/4/1/1811429_231d9.png" alt="" width={200} height={200} />
            <div className="text-info">
              <ul>
                <li><a href={`/thongtincanhan?id=${userId}`}>
                      <i className="fa-solid fa-user"></i> Thông tin cá nhân
                    </a></li>
                <li><a href="#"><i className="fa-solid fa-key"></i> Đổi mật khẩu</a></li>
                <li><a href="#"><i className="fa-solid fa-sign-out-alt"></i> Thoát</a></li>
              </ul>
            </div>
          </div>

          <div className="section">
            <h2>SAO KÊ</h2>
            <img src="https://cdn-icons-png.flaticon.com/512/10074/10074041.png" alt="" width={200} height={200} />
            <div className="text-info">
              <ul>
                <li><i className="fa-solid fa-file-alt"></i> Xem sao kê</li>
                <li><i className="fa-solid fa-wallet"></i> Tài khoản chính: 200.000 đ</li>
                <li><i className="fa-solid fa-gift"></i> Tài khoản khuyến mãi: 0 đ</li>
              </ul>
            </div>
          </div>

          <div className="section">
            <h2>HỖ TRỢ</h2>
            <img src="https://friconix.com/png/fi-cnsuxx-question-mark.png" alt="" width={200} height={200 } />
            <div className="text-info">
              <ul>
                <li><i className="fa-solid fa-headset"></i> Liên hệ hỗ trợ</li>
                <li><i className="fa-solid fa-comments"></i> Gửi phản hồi</li>
                <li><i className="fa-solid fa-info-circle"></i> Thông tin ứng dụng</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="statiscal"> 
            <h2>Thống Kê Đơn Hàng </h2>
            <div class="year-selection">
              <label for="year-select">Năm:</label>
                <select id="year-select">
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                </select>
            </div>
            <div className="button-group">
            <button onClick={() => handleTimeClick('1 Tháng')}>1 Tháng</button>
            <button onClick={() => handleTimeClick('3 Tháng')}>3 Tháng</button>
            <button onClick={() => handleTimeClick('6 Tháng')}>6 Tháng</button>
            <button onClick={() => handleTimeClick('1 Năm')}>1 Năm</button>
          </div>
            <div class="service-selection">
              <select id="service-select">
                <option value="all">Tất cả dịch vụ</option>
                <option value="service1">Dịch vụ 1</option>
                <option value="service2">Dịch vụ 2</option>
              </select>
            </div>
        </div>
        <h2>Biểu đồ doanh thu</h2>
        <div className="charts">
          <Bar data={barData} options={{ responsive: true }} />
          </div>
          <h2>Biểu đồ doanh số</h2>
          <div className="charts">
          <Line data={lineData} options={{ responsive: true }} />
          <div className="infor-chart">
              <h3>Biểu Đồ Doanh Số Từ Tháng 1 Đến Tháng 12 Năm 2024
              <br />Tổng Đơn Hàng Đã Thành Toán: 11,065,195
              <br />Tổng Doanh Số Tất Cả Các Dịch Vụ(Không tính tên miền và VAT):8,296,000</h3>
          </div>
        </div>
         <div className="dashboard">
            <div className="service-card">
              <div class="service-icon">🌐</div> 
              <h3>TÊN MIỀN</h3> <p>Dịch vụ đang sử dụng <span class="badge">6</span></p> 
              <p>Dịch vụ sắp hết hạn <span class="badge">0</span></p> 
              <p>Dịch vụ hết hạn <span class="badge">0</span></p> 
              <button class="register-button">Đăng ký mới</button>
            </div>
            <div class="service-card"> 
              <div class="service-icon">💻</div> 
              <h3>WEB HOSTING</h3> 
              <p>Dịch vụ đang sử dụng <span class="badge">0</span></p> 
              <p>Dịch vụ sắp hết hạn <span class="badge">0</span></p> 
              <p>Dịch vụ hết hạn <span class="badge">0</span></p> 
              <button class="register-button">Đăng ký mới</button> 
            </div>
            <div class="service-card"> 
              <div class="service-icon">☁️</div> 
              <h3>CLOUD VPS</h3> 
              <p>Dịch vụ đang sử dụng <span class="badge">4</span></p> 
              <p>Dịch vụ sắp hết hạn <span class="badge">1</span></p> 
              <p>Dịch vụ hết hạn <span class="badge">2</span></p> 
              <button class="register-button">Đăng ký mới</button> 
            </div>
            <div class="service-card"> 
              <div class="service-icon">📧</div> 
              <h3>EMAIL SERVER</h3> 
              <p>Dịch vụ đang sử dụng <span class="badge">0</span></p> 
              <p>Dịch vụ sắp hết hạn <span class="badge">0</span></p> 
              <p>Dịch vụ hết hạn <span class="badge">0</span></p> 
              <button class="register-button">Đăng ký mới</button> 
            </div>
         </div>
      </div>
    </div>
  );
}

export default App;