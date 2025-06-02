import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Nếu lấy userId từ query string
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import './thongtincanhan.css';

const Info = () => {
  const [formData, setFormData] = useState({
    email: '',
    fullname: '',
    phone: '',
    address: '',
    city: '',
    country: '',
  });

  const [message, setMessage] = useState('');
  const [userId, setUserId] = useState(null); // `userId` sẽ được lấy từ query string hoặc JWT


  // Lấy userId từ query string
  const location = useLocation();
  useEffect(() => {
    // Lấy userId từ localStorage thay vì từ query string
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);  // Lưu userId từ localStorage vào state
    } else {
      setMessage('User ID is missing in localStorage');
    }
  }, []);
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const id = params.get('id'); // Trích xuất `id` từ query string
    if (!id) {
      setMessage('User ID is missing in the URL');
      return;
    }
    setUserId(id);
  }, [location]);
  

  // Fetch user data từ API
  useEffect(() => {
    if (userId) {
      fetch(`http://localhost:5000/api/users?id=${userId}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Failed to fetch user data');
        })
        .then((data) => {
          if (data && data.length > 0) {
            const user = data[0];  // Giả sử API trả về một mảng người dùng
            setFormData({
              email: user.email || '',
              fullname: user.fullname || '',
              phone: user.phone || '',
              address: user.address || '',
              city: user.city || '',
              country: user.country || '',
            });
          } else {
            setMessage('No user found with the provided ID');
          }
        })
        .catch((error) => {
          console.error(error);
          setMessage('Unable to fetch user data');
        });
    }
  }, [userId]);
  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/users`, {
      method: 'PUT', // PUT để cập nhật dữ liệu người dùng
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setMessage('User information updated successfully!');
        } else {
          throw new Error('Failed to update user information');
        }
      })
      .catch((error) => {
        console.error(error);
        setMessage('An error occurred while updating user information');
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
            <p>Thay Đổi Thông Tin Cá Nhân</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="acc-info">
            <label>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="acc-info">
            <label>
              Họ tên
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="acc-info">
            <label>
              Điện thoại
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="acc-info">
            <label>
              Địa chỉ
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="acc-info">
            <label>
              Tỉnh/Thành phố
              <select name="city" value={formData.city} onChange={handleChange}>
                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                <option value="Hà Nội">Hà Nội</option>
                <option value="Đà Nẵng">Đà Nẵng</option>
              </select>
            </label>
          </div>
          <div className="acc-info">
            <label>
              Quốc gia
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="Viet Nam">Viet Nam</option>
                <option value="United States">United States</option>
                <option value="Japan">Japan</option>
              </select>
            </label>
          </div>
          <button className="acc-info-button" type="submit">
            Cập nhật ➤
          </button>
        </form>
        {message && <div className="message">{message}</div>}
      </div>
    </div>
  );
};

export default Info;
