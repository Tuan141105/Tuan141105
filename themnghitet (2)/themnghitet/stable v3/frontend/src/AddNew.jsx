import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddNew = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook để điều hướng

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

  // Lấy dữ liệu khách hàng nếu có ID
  useEffect(() => {
    if (id) {
      setLoading(true);
      axios
        .get(`http://localhost:5000/api/customers/${id}`)
        .then((response) => {
          setFormData({
            email: response.data.email,
            password: '', 
            fullName: response.data.name,
            phone: response.data.phone,
            note: response.data.note || '', 
          });
          setLoading(false);
        })
        .catch((err) => {
          setError('Lỗi khi lấy thông tin khách hàng');
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
      ? `http://localhost:5000/api/customers/${id}`
      : 'http://localhost:5000/api/customers'; 

    const method = id ? 'put' : 'post';

    axios({
      method,
      url,
      data: {
        email: formData.email,
        name: formData.fullName,
        phone: formData.phone,
        status: 'Active',
        note: formData.note,
      },
    })
      .then((response) => {
        setLoading(false);
        alert('Thông tin đã được cập nhật!');
      })
      .catch((err) => {
        setLoading(false);
        setError('Lỗi khi cập nhật thông tin khách hàng');
      });
  };

  const handleExit = () => {
    navigate(-1); // Quay lại trang trước
  };

  return (
    <div className="addnew-wrapper">
      <div className="addnew-content">
        <h2>{id ? 'Chỉnh sửa khách hàng' : 'Thêm mới khách hàng'}</h2>
        
        <form onSubmit={handleSubmit} className="addnew-form">
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
                required={!id} 
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
            <label>Họ và tên</label>
            <input
              type="text"
              name="fullName"
              placeholder="Họ và tên"
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

        {/* Nút Thoát */}
        <button className="exit-btn" onClick={handleExit}>
          Thoát
        </button>
      </div>
    </div>
  );
};

export default AddNew;
