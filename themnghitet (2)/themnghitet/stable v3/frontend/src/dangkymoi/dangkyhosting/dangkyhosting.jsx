import './dangkyhosting.css';
import Header from '../../Header';
import Sidebar from '../../Sidebar';

const Hosting = () => {
  return (
    <>
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="container">
        <div className="Dashboard">
          <div className="icon-dashboard">
            <i className="fa-solid fa-bars"></i>
            <p>Hosting</p>
          </div>
        </div>
    <div className="card-container">
    <div className="pricing-card">
      <h3 className="pricing-card-title">Sinh Viên</h3>
      <ul className="pricing-card-list">
        <li>Dung lượng : <b>300 MB [SSD]</b></li>
        <li>Băng Thông : <b>Unlimited</b></li>
        <li>Sub-domain : <b>10</b></li>
        <li>Email : <b>10</b></li>
        <li>FTP : <b>Unlimited</b></li>
        <li>Database : <b>1</b></li>
        <li>Addon domain : <b>0</b></li>
        <li>Park domain : <b>3</b></li>
        <li>CPU : <b>1 CORE</b></li>
        <li>RAM : <b>512 MB</b></li>
      </ul>
      <div className="pricing-card-price">
        Giá chỉ từ <br /><span className="pricing-card-price-amount">25,000 đ / tháng</span>
      </div>
      <p className="pricing-card-note">(Giá trên chưa bao gồm VAT)</p>
      <button className="pricing-card-button">Đặt Mua Ngay</button>
    </div>
    <div className="pricing-card">
      <h3 className="pricing-card-title">Cá Nhân</h3>
      <ul className="pricing-card-list">
        <li>Dung lượng : <b>1 GB [SSD]</b></li>
        <li>Băng Thông : <b>Unlimited</b></li>
        <li>Sub-domain : <b>Unlimited</b></li>
        <li>Email : <b>Unlimited</b></li>
        <li>FTP : <b>Unlimited</b></li>
        <li>Database : <b>1</b></li>
        <li>Addon domain : <b>0</b></li>
        <li>Park domain : <b>Unlimited</b></li>
        <li>CPU : <b>1 CORE</b></li>
        <li>RAM : <b>1 GB</b></li>
      </ul>
      <div className="pricing-card-price">
        Giá chỉ từ <br /><span className="pricing-card-price-amount">45,000 đ / tháng</span>
      </div>
      <p className="pricing-card-note">(Giá trên chưa bao gồm VAT)</p>
      <button className="pricing-card-button">Đặt Mua Ngay</button>
    </div>
    <div className="pricing-card">
      <h3 className="pricing-card-title">Cá Nhân++</h3>
      <ul className="pricing-card-list">
        <li>Dung lượng : <b>2GB [SSD]</b></li>
        <li>Băng Thông : <b>Unlimited</b></li>
        <li>Sub-domain : <b>Unlimited</b></li>
        <li>Email : <b>Unlimited</b></li>
        <li>FTP : <b>Unlimited</b></li>
        <li>Database : <b>2</b></li>
        <li>Addon domain : <b>0</b></li>
        <li>Park domain : <b>Unlimited</b></li>
        <li>CPU : <b>1 CORE</b></li>
        <li>RAM : <b>1 GB</b></li>
      </ul>
      <div className="pricing-card-price">
        Giá chỉ từ <br /><span className="pricing-card-price-amount">65,000 đ / tháng</span>
      </div>
      <p className="pricing-card-note">(Giá trên chưa bao gồm VAT)</p>
      <button className="pricing-card-button">Đặt Mua Ngay</button>
    </div>
    <div className="pricing-card">
      <h3 className="pricing-card-title">Bản Chuyên Nghiệp</h3>
      <ul className="pricing-card-list">
        <li>Dung lượng : <b>6 GB [SSD]</b></li>
        <li>Băng Thông : <b>Unlimited</b></li>
        <li>Sub-domain : <b>Unlimited</b></li>
        <li>Email : <b>Unlimited</b></li>
        <li>FTP : <b>Unlimited</b></li>
        <li>Database : <b>3</b></li>
        <li>Addon domain : <b>1</b></li>
        <li>Park domain : <b>Unlimited</b></li>
        <li>CPU : <b>2 CORE</b></li>
        <li>RAM : <b>1.5 GB</b></li>
      </ul>
      <div className="pricing-card-price">
        Giá chỉ từ <br /><span className="pricing-card-price-amount">100,000 đ / tháng</span>
      </div>
      <p className="pricing-card-note">(Giá trên chưa bao gồm VAT)</p>
      <button className="pricing-card-button">Đặt Mua Ngay</button>
    </div>
    <div className="pricing-card">
      <h3 className="pricing-card-title">Chuyên nghiệp</h3>
      <ul className="pricing-card-list">
        <li>Dung lượng : <b>8 GB [SSD]</b></li>
        <li>Băng Thông : <b>Unlimited</b></li>
        <li>Sub-domain : <b>Unlimited</b></li>
        <li>Email : <b>Unlimited</b></li>
        <li>FTP : <b>Unlimited</b></li>
        <li>Database : <b>5</b></li>
        <li>Addon domain : <b>2</b></li>
        <li>Park domain : <b>Unlimited</b></li>
        <li>CPU : <b>3 CORE</b></li>
        <li>RAM : <b>2 GB</b></li>
      </ul>
      <div className="pricing-card-price">
        Giá chỉ từ <br /><span className="pricing-card-price-amount">135,000 đ / tháng</span>
      </div>
      <p className="pricing-card-note">(Giá trên chưa bao gồm VAT)</p>
      <button className="pricing-card-button">Đặt Mua Ngay</button>
    </div>
    <div className="pricing-card">
      <h3 className="pricing-card-title">Chuyên Nghiệp++</h3>
      <ul className="pricing-card-list">
        <li>Dung lượng : <b>15 GB [SSD]</b></li>
        <li>Băng Thông : <b>Unlimited</b></li>
        <li>Sub-domain : <b>Unlimited</b></li>
        <li>Email : <b>Unlimited</b></li>
        <li>FTP : <b>Unlimited</b></li>
        <li>Database : <b>8</b></li>
        <li>Addon domain : <b>3</b></li>
        <li>Park domain : <b>Unlimited</b></li>
        <li>CPU : <b>3 CORE</b></li>
        <li>RAM : <b>2 GB</b></li>
      </ul>
      <div className="pricing-card-price">
        Giá chỉ từ <br /><span className="pricing-card-price-amount">210,000 đ / tháng</span>
      </div>
      <p className="pricing-card-note">(Giá trên chưa bao gồm VAT)</p>
      <button className="pricing-card-button">Đặt Mua Ngay</button>
    </div>
    <div className="pricing-card">
      <h3 className="pricing-card-title">Doanh Nghiệp</h3>
      <ul className="pricing-card-list">
        <li>Dung lượng : <b>20 GB [SSD]</b></li>
        <li>Băng Thông : <b>Unlimited</b></li>
        <li>Sub-domain : <b>Unlimited</b></li>
        <li>Email : <b>Unlimited</b></li>
        <li>FTP : <b>Unlimited</b></li>
        <li>Database : <b>10</b></li>
        <li>Addon domain : <b>3</b></li>
        <li>Park domain : <b>3</b></li>
        <li>CPU : <b>4 CORE</b></li>
        <li>RAM : <b>3 GB</b></li>
      </ul>
      <div className="pricing-card-price">
        Giá chỉ từ <br /><span className="pricing-card-price-amount">270,000 đ / tháng</span>
      </div>
      <p className="pricing-card-note">(Giá trên chưa bao gồm VAT)</p>
      <button className="pricing-card-button">Đặt Mua Ngay</button>
    </div>
    <div className="pricing-card">
      <h3 className="pricing-card-title">Thương Mại Điện Tử</h3>
      <ul className="pricing-card-list">
        <li>Dung lượng : <b>30 GB [SSD]</b></li>
        <li>Băng Thông : <b>Unlimited</b></li>
        <li>Sub-domain : <b>Unlimited</b></li>
        <li>Email : <b>Unlimited</b></li>
        <li>FTP : <b>Unlimited</b></li>
        <li>Database : <b>15</b></li>
        <li>Addon domain : <b>5</b></li>
        <li>Park domain : <b>Unlimited</b></li>
        <li>CPU : <b>4 CORE</b></li>
        <li>RAM : <b>4 GB</b></li>
      </ul>
      <div className="pricing-card-price">
        Giá chỉ từ <br /><span className="pricing-card-price-amount">380,000 đ / tháng</span>
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

export default Hosting;
