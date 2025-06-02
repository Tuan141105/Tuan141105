import React from "react";
import "./kiemtratenmien.css";
import Header from '../../Header';
import Sidebar from '../../Sidebar';

function KTTM() {
    return (
        <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="container">
      <div className="Dashboard">
        <div className="icon-dashboard">
          <i className="fa-solid fa-bars"></i>
          <h3>Kiểm Tra Tên Miền</h3>
        </div>   
      </div>
                <div className="container-con">
                    <h2 className="title">Kiểm tra tên miền</h2>
                    <p className="description">
                        Kiểm tra domain đã có người mua hay chưa. <br />
                        <span className="highlight">
                            <strong className="red-text">Lưu ý:</strong>{" "}
                            <a
                                className="link"
                                href="http://me.xxxx.com"
                            >
                                http://me.xxxx.com
                            </a>{" "}
                            là tên dùng cho thương hiệu riêng của đại lý.
                        </span>{" "}
                        <a
                            className="link"
                            href="/"
                        >
                            Hướng dẫn cấu hình thương hiệu riêng.
                        </a>
                    </p>

                    <h3 className="subtitle">Ứng dụng</h3>
                    <p className="description">
                        Dùng để xây dựng tính năng check domain khi khách hàng đặt mua
                        Share Hosting, SSL, Email Server.
                    </p>

                    <h3 className="subtitle">Sử dụng</h3>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className="table-cell">GET</td>
                                <td className="table-cell">Method</td>
                            </tr>
                            <tr>
                                <td className="table-cell">
                                    <a
                                        className="link"
                                        href="http://me.xxxx.com/rest/check-domain/domain"
                                    >
                                        http://me.xxxx.com/rest/check-domain/domain
                                    </a>
                                </td>
                                <td className="table-cell">Link</td>
                            </tr>
                            <tr>
                                <td className="table-cell">application/json</td>
                                <td className="table-cell">Content-Type</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 className="subtitle">URL Fields</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="table-header">Biến</th>
                                <th className="table-header">Loại</th>
                                <th className="table-header">Mô tả</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="table-cell">DOMAIN</td>
                                <td className="table-cell">Bắt buộc nhập</td>
                                <td className="table-cell">
                                    Domain phải đúng định dạng (xxxx.com, xxxx.vn...)
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h3 className="subtitle">Kết quả trả về</h3>
                    <ul className="results-list">
                        <li className="result-item">
                            <strong>"Exist": true</strong> Tên miền này đã có người mua.
                        </li>
                        <li className="result-item">
                            <strong>"Exist": false</strong> Tên miền này chưa có người mua.
                        </li>
                        <li className="result-item">
                            <strong>"error":</strong> Tên miền không đúng định dạng. Báo
                            lỗi tên miền không đúng định dạng.
                        </li>
                    </ul>

                    <footer className="footer">
                        © 2015 - 2020 - Công ty cổ phần Công Nghệ Tadu -{" "}
                        <a
                            className="link"
                            href="https://tadu.cloud"
                        >
                            Tadu.cloud
                        </a>{" "}
                        - v1.0.5
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default KTTM;
