import React from "react";
import Header from '../../Header';
import Sidebar from '../../Sidebar';

const DKTM = () => {
    return (
        <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="container">
      <div className="Dashboard">
        <div className="icon-dashboard">
          <i className="fa-solid fa-bars"></i>
          <h3>Lấy sản phẩm theo ID</h3>
        </div>   
      </div>
        <div className="container-con">
            <h1 className="title">Đăng ký tên miền</h1>
            <h4 className="subtitle">
                Lấy đường dẫn gắn vào button kiểm tra domain ngoài trang chủ để khách hàng có thể kiểm tra.
            </h4>
            <section className="alert-section">
                <p className="alert-text">
                    <strong className="red-text">Lưu ý:</strong>{" "}
                    <span className="brand-url">http://me.xxxx.com/</span> là đường dẫn thương hiệu riêng của đại lý.
                    <a className="link" href="#">Hướng dẫn cấu hình thương hiệu riêng.</a>
                </p>
            </section>

            <section className="usage-section">
                <h2 className="section-title">Ứng dụng</h2>
                <p className="description">
                    Dùng xây dựng tính năng kiểm tra và đăng ký domain như trang chủ{" "}
                    <a className="link" href="https://tadu.cloud">tadu.cloud</a>.
                </p>
            </section>

            <section className="usage-details">
                <h2 className="section-title">Sử dụng</h2>
                <table className="details-table">
                    <tbody>
                        <tr>
                            <td className="table-cell">GET</td>
                            <td className="table-cell">Method</td>
                        </tr>
                        <tr>
                            <td className="table-cell">
                                <a className="link" href="http://me.xxxx.com/rest/check-domain/domain">
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
            </section>

            <section className="url-fields">
                <h2 className="section-title">URL fields</h2>
                <table className="fields-table">
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
                                <ul className="field-description">
                                    <li>
                                        <b>xxxx.com</b>: sẽ kiểm tra chính xác và duy nhất domain này.
                                    </li>
                                    <li>
                                        <b>xxxx</b>: sẽ kiểm tra xxxx.com, xxxx.com.vn, xxxx.vn,...
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <footer className="footer">
                © 2015 - 2020 - Công ty cổ phần Công Nghệ Tadu -{" "}
                <a className="link" href="https://tadu.cloud">Tadu.cloud</a> - v1.0.5
            </footer>
        </div>
        </div>
        </div>
    );
};

export default DKTM;
