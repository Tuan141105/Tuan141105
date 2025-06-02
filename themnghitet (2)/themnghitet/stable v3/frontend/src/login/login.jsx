import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null); // Lưu trữ thông tin user
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", formData);
      
      // Kiểm tra dữ liệu trả về từ API
      console.log("Response from API:", response.data);
  
      if (response.data && response.data.userId) {
        // Lưu userId vào localStorage
        const { userId } = response.data;
        localStorage.setItem('userId', userId);
  
        console.log("Navigating to /home");
        navigate("/home");
      } else {
        console.error("userId not found in response data");
        setMessage("Login failed. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      } else {
        setMessage("An error occurred. Please try again later.");
      }
    }
  };
  
  

  const fetchUser = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/users?id=${userId}`);
      setUser(response.data.user); // Cập nhật thông tin user
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Login</button>
          {message && <p className="message">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
