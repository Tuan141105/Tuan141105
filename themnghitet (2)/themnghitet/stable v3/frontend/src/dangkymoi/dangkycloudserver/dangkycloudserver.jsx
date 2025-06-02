import axios from 'axios'; // Import axios
import React, { useEffect, useState } from 'react';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import './dangkycloudserver.css';

const CloudServer = () => {
  // State to store the cloud server data
  const [cloudServers, setCloudServers] = useState([]);
  
  // Fetch cloud server data from API on component mount
  useEffect(() => {
    // Fetch data from your API
    axios.get('http://localhost:5000/api/cloud_servers')
      .then(response => {
        setCloudServers(response.data); // Set data to state
      })
      .catch(error => {
        console.error('There was an error fetching the cloud servers!', error);
      });
  }, []); // Empty array means it will only run once when the component mounts
  
  return (
    <>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="container">
          <div className="Dashboard">
            <div className="icon-dashboard">
              <i className="fa-solid fa-bars"></i>
              <p>Cloud Server</p>
            </div>
          </div>
          <div className="card-container">
          {cloudServers.map((server) => (
  <div className="pricing-card" key={server.cloud_servers_id}>
    <h3 className="pricing-card-title">{server.name}</h3>
    <ul className="pricing-card-list">
      <li>CPU : <b>{server.cpu}</b></li>
      <li>SSD : <b>{server.ssd}</b></li>
      <li>RAM : <b>{server.ram}</b></li>
      <li>Bandwidth : <b>{server.bandwidth}</b></li>
      <li>Hệ điều hành : <b>{server.operating_system}</b></li>
      <li>Backup : <b>{server.backup}</b></li>
    </ul>
    <div className="pricing-card-price">
      Giá chỉ từ <br /><span className="pricing-card-price-amount">{server.price} x 12 tháng</span>
    </div>
    <p className="pricing-card-note">(Giá trên chưa bao gồm VAT)</p>
    <a href="/products/vps/order/"><button className="pricing-card-button">Đặt Mua Ngay</button></a>
  </div>
))}

          </div>
        </div>
      </div>
    </>
  );
};

export default CloudServer;
