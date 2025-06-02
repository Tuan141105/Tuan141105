import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import Header from '../Header';
import Sidebar from '../Sidebar';

const FeedbackForm = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState("");
  const [feedback, setFeedback] = useState("");

  // Cập nhật thời gian thực tế
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Cập nhật mỗi giây

    return () => clearInterval(timer); // Dọn dẹp bộ đếm khi thành phần bị hủy
  }, []);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Selected Option:", selectedOption);
    console.log("Feedback:", feedback);
    alert("Response submitted successfully!");
  };

  // Định dạng thời gian
  const formattedTime = currentTime.toLocaleString("vi-VN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <>
    <div className="wrapper">
    <Header />
    <Sidebar />
    <div className="container">
    <div className="Dashboard">
          <div className="icon-dashboard">
            <i className="fa-solid fa-bars"></i>
            <p>Báo Lỗi và Góp Ý Chức Năng</p>
          </div>
        </div>
    <div className="feedback-container">
      <div className="feedback-message">
        <p>Hi Tadu,</p>
        <p>
          Mình có ý kiến này hy vọng là TADU có thể làm được để mở
          rộng ngày càng nhiều Khách hàng hơn...
        </p>
        <p className="feedback-time">
          <em>{formattedTime}</em> {/* Hiển thị thời gian thực */}
        </p>
      </div>

      <label htmlFor="options" className="feedback-label">
        Vui lòng chọn:
      </label>
      <select
        id="options"
        value={selectedOption}
        onChange={handleOptionChange}
        className="feedback-select"
      >
        <option value="" disabled>
          -- Chọn một tùy chọn --
        </option>
        <option value="option1">Góp ý xây dựng tính năng mới</option>
        <option value="option2">Chức năng bị lỗi, không hoạt động</option>
      </select>
      <br />
      <label htmlFor="feedback" className="feedback-label">
      </label>
      <ReactQuill
        value={feedback}
        onChange={setFeedback}
        className="feedback-editor"
      />
      <br />
      <button onClick={handleSubmit} className="feedback-button">
        Gửi
      </button>
    </div>
    </div>
    </div>
    </>
  );
};

export default FeedbackForm;
