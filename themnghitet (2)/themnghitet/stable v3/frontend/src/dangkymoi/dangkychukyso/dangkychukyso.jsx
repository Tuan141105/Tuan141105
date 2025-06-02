import Header from '../../Header';
import Sidebar from '../../Sidebar';

const ChuKySo = () => {
  return (
    <>
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="container">
        <div className="Dashboard">
          <div className="icon-dashboard">
            <i className="fa-solid fa-bars"></i>
            <p>Chữ Ký Số</p>
          </div>
        </div>
    <div className="card-container">
    <div className="pricing-card">
      <h3 className="pricing-card-title">1 Năm</h3>
      <ul className="pricing-card-list">
        <li>Giá dịch vụ: 1,680,000 đ</li>
        <li>VAT: 168,000 đ</li>
      </ul>
      <div className="pricing-card-price">
        Giá chỉ từ <br /><span className="pricing-card-price-amount">1,848,000 đ</span>
      </div>
      <p className="pricing-card-note">(Giá trên chưa bao gồm VAT)</p>
      <button className="pricing-card-button">Đặt Mua Ngay</button>
    </div>
    <div className="pricing-card">
      <h3 className="pricing-card-title">2 Năm</h3>
      <ul className="pricing-card-list">
        <li>Giá dịch vụ: 2,480,000 đ</li>
        <li>VAT: 248,000 đ</li>
      </ul>
      <div className="pricing-card-price">
        Giá chỉ từ <br /><span className="pricing-card-price-amount">2,728,000 đ</span>
      </div>
      <p className="pricing-card-note">(Giá trên chưa bao gồm VAT)</p>
      <button className="pricing-card-button">Đặt Mua Ngay</button>
    </div>
    <div className="pricing-card">
      <h3 className="pricing-card-title">3 Năm</h3>
      <ul className="pricing-card-list">
        <li>Giá dịch vụ: 2,800,000 đ</li>
        <li>VAT: 280,000 đ</li>
      </ul>
      <div className="pricing-card-price">
        Giá chỉ từ <br /><span className="pricing-card-price-amount">3,080,000 đ</span>
      </div>
      <p className="pricing-card-note">(Giá trên chưa bao gồm VAT)</p>
      <button className="pricing-card-button">Đặt Mua Ngay</button>
    </div>
    <div className="pricing-card">
      <h3 className="pricing-card-title">4 Năm</h3>
      <ul className="pricing-card-list">
        <li>Giá dịch vụ: 3,000,000 đ</li>
        <li>VAT: 300,000 đ</li>
      </ul>
      <div className="pricing-card-price">
        Giá chỉ từ <br /><span className="pricing-card-price-amount">3,300,000 đ</span>
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

export default ChuKySo;
