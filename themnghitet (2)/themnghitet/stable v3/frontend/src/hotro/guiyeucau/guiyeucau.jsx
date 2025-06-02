import React, { useState } from "react";
import './guiyeucau.css'
import Header from '../../Header';
import Sidebar from '../../Sidebar';

const NewRequest = () => {
  const [formData, setFormData] = useState({
    department: "Hỗ trợ 24/7 (Support)",
    serviceType: "",
    supportService: "",
    subject: "",
    content: "",
    attachment: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      attachment: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestData = new FormData();
    Object.keys(formData).forEach((key) => {
      requestData.append(key, formData[key]);
    });

    console.log("Form data submitted:", formData);

    // Example fetch call for submitting the form data
    fetch("/api/support/request", {
      method: "POST",
      body: requestData,
    })
      .then((response) => {
        if (response.ok) {
          alert("Yêu cầu hỗ trợ đã được gửi thành công!");
          setFormData({
            department: "Hỗ trợ 24/7 (Support)",
            serviceType: "",
            supportService: "",
            subject: "",
            content: "",
            attachment: null,
          });
        } else {
          alert("Có lỗi xảy ra, vui lòng thử lại.");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="container">
        <div className="Dashboard">
          <div className="icon-dashboard">
            <i className="fa-solid fa-bars"></i>
            <p>Gửi Yêu Cầu Hỗ Trợ</p>
          </div>
        </div>
    <div className="new-request-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Phòng Ban</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            disabled
          />
        </div>
        <div className="form-group">
          <label>Loại Dịch Vụ</label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
          >
            <option value="">Chọn loại dịch vụ</option>
            <option value="technical">Hỗ Trợ Kỹ Thuật</option>
            <option value="billing">Hỗ Trợ Thanh Toán</option>
            <option value="other">Khác</option>
          </select>
        </div>
        <div className="form-group">
          <label>Dịch Vụ Cần Hỗ Trợ</label>
          <input
            type="text"
            name="supportService"
            value={formData.supportService}
            onChange={handleChange}
            placeholder="Nhập dịch vụ cần hỗ trợ"
            required
          />
        </div>
        <div className="form-group">
          <label>Tiêu Đề</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Nhập tiêu đề"
            required
          />
        </div>
        <div className="form-group">
          <label>Nội Dung</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="5"
            placeholder="Nhập nội dung chi tiết"
            required
          />
        </div>
        <div className="form-group">
          <label>File Đính Kèm</label>
          <input
            type="file"
            name="attachment"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="btn-submit">
          Gửi
        </button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default NewRequest;
