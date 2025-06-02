import React from 'react';
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import './cauhinhdaily.css'

function CauHinhDaiLy() {
  return (
        <div className="wrapper">
    <Header />
    <Sidebar />
    <div className="container">
      <div className="Dashboard">
        <div className="icon-dashboard">
          <i className="fa-solid fa-bars"></i>
          <h3>Cấu Hình Đại Lý</h3>
        </div>
      </div>


      <div className="slide-bar">
       
      </div>

     
      <div className="container-thongtin">
        <h1>Thông tin chung</h1>
        <p>Cung cấp các thông tin về tên miền và trang chủ.</p>

        <div className="section-z">
          <label>Phân loại</label>
          <div className="toggle-group">
            <button className="active">Thương hiệu Của Tôi</button>
            <button>Thương hiệu riêng</button>
          </div>
          <div className="alert">
            Khi dùng thương hiệu riêng, khách hàng của đại lý sẽ không thể sử dụng tính năng gửi hỗ trợ (ticket), không thể login vào id.lowtech.com
          </div>
        </div>

        <div className="section-z">
          <label htmlFor="domain">Tên miền *</label>
          <input type="text" id="domain" placeholder="me.lowtech.net" />
        </div>

        <div className="section-z">
          <label htmlFor="homepage">Trang chủ</label>
          <input type="text" id="homepage" placeholder="www.lowtech.net" />
        </div>

        <div className="section-z">
          <label>Chức năng</label>
          <div className="checkbox">
            <input type="checkbox" id="ticket-support" />
            <label htmlFor="ticket-support">Bật tính năng hỗ trợ ticket</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="send-mail" />
            <label htmlFor="send-mail">
              Bật / tắt gửi mail thông báo gia hạn đến khách hàng
            </label>
          </div>
          <h4>Thông tin công ty</h4>
          <form>
            <label>
              Tên công ty:
              <input type="text" placeholder='Nhập Tên Công Ty Của Bạn' />
            </label>
            <label>
              Địa chỉ công ty:
              <input type="text" placeholder='Nhập Địa Chỉ Công Ty Của Bạn' />
            </label>
            <label>
              Email:
              <input type="email" placeholder='Nhập Email Công Ty Của Bạn' />
            </label>
            <label>
              Hotline:
              <input type="text" placeholder='Nhập Hotline Công Ty Của Bạn'/>
            </label>
            <label>
              Logo:
              <input type="file" />
            </label>
            <label>
              Favicon:
              <input type="file" />
            </label>
          </form> 
          <h3>Thông tin ngân hàng đại lý</h3>
          <p>
            Thông tin này sẽ được hiển thị trong email đơn hàng gửi khách hàng của đại lý 
            thay thế thông tin ngân hàng LowTech
          </p>
          <textarea 
            placeholder="Nhập thông tin ngân hàng đại lý tại đây" 
            style={{
              width: "100%",
              height: "150px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "16px",
              boxSizing: "border-box"
            }}
          ></textarea>
          <button 
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px"
            }}
          >
            Cập nhật
          </button>
        </div> 
      </div>
    </div>
    </div>
  );
}

export default CauHinhDaiLy;
