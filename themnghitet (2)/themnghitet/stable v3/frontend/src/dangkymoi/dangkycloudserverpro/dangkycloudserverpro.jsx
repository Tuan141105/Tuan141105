import './dangkycloudserverpro.css';
import Header from '../../Header';
import Sidebar from '../../Sidebar';

const CloudServerPro = () => {
  return (
    <>
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="container">
        <div className="Dashboard">
          <div className="icon-dashboard">
            <i className="fa-solid fa-bars"></i>
            <p>CLoud Server Pro</p>
          </div>
        </div>
    <div className="card-containerz">
    <div className="pricing-card">
      <h3 className="pricing-card-title">Cloud Server Pro 0</h3>
      <ul className="pricing-card-list">
        <li>CPU : <b>2 core</b></li>
        <li>NVME : <b>15GB</b></li>
        <li>RAM : <b>2 GB</b></li>
        <li>Bandwidth : <b>Unlimited</b></li>
        <li>Hệ điều hành : <b>Linux</b></li>
        <li>Backup : <b>Hàng tuần</b></li>
      </ul>
      <div className="pricing-card-price">
        Giá chỉ từ <br /><span className="pricing-card-price-amount">120,000 đ / tháng</span>
      </div>
      <p className="pricing-card-note">(Giá trên chưa bao gồm VAT)</p>
      <button className="pricing-card-button">Đặt Mua Ngay</button>
    </div>
    <div className="pricing-card">
      <h3 className="pricing-card-title">Cloud Server Pro 1</h3>
      <ul className="pricing-card-list">
        <li>CPU : <b>4 Core</b></li>
        <li>NVME : <b>30GB</b></li>
        <li>RAM : <b>4 GB</b></li>
        <li>Bandwidth : <b>Unlimited</b></li>
        <li>Hệ điều hành : <b>Linux</b></li>
        <li>Backup : <b>Hàng tuần</b></li>
      </ul>
      <div className="pricing-card-price">
        Giá chỉ từ <br /><span className="pricing-card-price-amount">300,000 đ / tháng</span>
      </div>
      <p className="pricing-card-note">(Giá trên chưa bao gồm VAT)</p>
      <button className="pricing-card-button">Đặt Mua Ngay</button>
    </div>
    <div className="pricing-card">
      <h3 className="pricing-card-title">Cloud Server Pro 2</h3>
      <ul className="pricing-card-list">
        <li>CPU : <b>6 core</b></li>
        <li>SSD : <b>50GB</b></li>
        <li>RAM : <b>8GB</b></li>
        <li>Bandwidth : <b>Unlimited</b></li>
        <li>Hệ điều hành : <b>Linux / Windows</b></li>
        <li>Backup : <b>Hàng tuần</b></li>
      </ul>
      <div className="pricing-card-price">
        Giá chỉ từ <br /><span className="pricing-card-price-amount">700,000 đ / tháng</span>
      </div>
      <p className="pricing-card-note">(Giá trên chưa bao gồm VAT)</p>
      <button className="pricing-card-button">Đặt Mua Ngay</button>
    </div>
    <div className="pricing-card">
      <h3 className="pricing-card-title">Cloud Server Pro 3</h3>
      <ul className="pricing-card-list">
        <li>CPU : <b>8 core</b></li>
        <li>SSD : <b>50GB</b></li>
        <li>RAM : <b>16GB</b></li>
        <li>Bandwidth : <b>Unlimited</b></li>
        <li>Hệ điều hành : <b>Linux / Windows</b></li>
        <li>Backup : <b>Hàng tuần</b></li>
      </ul>
      <div className="pricing-card-price">
        Giá chỉ từ <br /><span className="pricing-card-price-amount">900,000 đ / tháng</span>
      </div>
      <p className="pricing-card-note">(Giá trên chưa bao gồm VAT)</p>
      <button className="pricing-card-button">Đặt Mua Ngay</button>
    </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default CloudServerPro;
