import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making API calls
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import './themmoi.css';
import { useParams } from 'react-router-dom'; // Import the useParams hook

const AddNew = () => {
  const { id } = useParams(); // Use useParams to get the customer ID from the URL

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    phone: '',
    note: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch customer data for editing if an ID is provided
  useEffect(() => {
    if (id) {
      setLoading(true);
      axios
        .get(`http://localhost:5000/api/customers/${id}`)
        .then((response) => {
          setFormData({
            email: response.data.email,
            password: '', // Do not pre-fill password
            fullName: response.data.name,
            phone: response.data.phone,
            note: response.data.note || '', // Optional field
          });
          setLoading(false);
        })
        .catch((err) => {
          setError('Error fetching customer data');
          setLoading(false);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const url = id
      ? `http://localhost:5000/api/customers/${id}` // Update existing customer
      : 'http://localhost:5000/api/customers'; // Add new customer if no ID

    const method = id ? 'put' : 'post';

    axios({
      method,
      url,
      data: {
        email: formData.email,
        name: formData.fullName,
        phone: formData.phone,
        status: 'Active', // Example, adjust based on your form
        note: formData.note,
      },
    })
      .then((response) => {
        setLoading(false);
        alert('Thông tin đã được cập nhật!');
      })
      .catch((err) => {
        setLoading(false);
        setError('Error updating customer data');
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
            <p>Thêm Mới</p>
          </div>
        </div>
        <h2 className="form-title">{id ? 'Chỉnh Sửa Khách Hàng' : 'Thêm Mới'}</h2>
        <form onSubmit={handleSubmit} className="user-info-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Mật khẩu</label>
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required={!id} // Don't require password if editing (unless needed)
              />
              <button
                type="button"
                className="toggle-password-btn"
                onClick={handleTogglePassword}
              >
                {showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Họ tên</label>
            <input
              type="text"
              name="fullName"
              placeholder="Họ Tên"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Số điện thoại</label>
            <input
              type="tel"
              name="phone"
              placeholder="Số điện thoại"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Ghi chú</label>
            <textarea
              name="note"
              placeholder="Ghi chú"
              value={formData.note}
              onChange={handleChange}
            />
          </div>

          <button className="submit-btn" type="submit" disabled={loading}>
            {loading ? 'Đang lưu...' : 'Lưu'}
          </button>

          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AddNew;
