import React, { useState } from 'react';
import { FaTachometerAlt, FaCloud, FaUser, FaCog, FaBox, FaUsers, FaLink, FaMoneyBill, } from 'react-icons/fa';
const Sidebar = () => {
    const menuItems = [
        {
            title: 'Đăng Ký Mới',
            icon: <FaTachometerAlt />,
            submenu: [
                { title: 'Đăng ký Cloud Server', link: '/vps' },
                { title: 'Đăng ký Cloud Server Pro', link: '/cloud_server_pro' },
                { title: 'Đăng ký Hosting', link: '/hosting' },
                { title: 'Đăng ký Email Server', link: '/email_server' },
                { title: 'Đăng ký SSL', link: '/products/ssl' },
                { title: 'Đăng ký Tổng Đài Ảo', link: '/products/taduphone' },
                { title: 'Đăng ký Điện Tử', link: '/hoadondientu' },
                { title: 'Đăng ký Cloud Backup', link: '/cloudbackup' },
                { title: 'Đăng ký Chữ Ký Số', link: '/chukyso' },
            ],
        },
        {
            title: 'Dịch Vụ',
            icon: <FaCloud />,
            submenu: [
                { title: 'Tất cả', link: '/tatcadichvu' },
                { title: 'Tên Miền', link: '/tatcadichvu' },
                { title: 'Cloud Server', link: '/tatcadichvu' },
                { title: 'Hosting', link: '/tatcadichvu' },
                { title: 'Email', link: '/tatcadichvu' },
                { title: 'Khác', link: '/tatcadichvu' },
            ],
        },
        {
            title: 'Hỗ Trợ (24/7)',
            icon: <FaUser />,
            submenu: [
                { title: 'Gửi yêu cầu mới', link: '/guiyeucau' },
                { title: 'Yêu cầu đã gửi', link: '/ho-tro/tra-loi' },
            ],
        },
        {
            title: 'Trả Lời Hỗ Trợ',
            icon: <FaUser />,
            submenu: [
                { title: 'Trả lời hỗ trợ', link: '/traloihotro' },
            ],
        },
        {
            title: 'Đơn Hàng',
            icon: <FaBox />,
            submenu: [
                { title: 'Danh sách đơn hàng', link: '/danhsachdonhang' },
            ],
        },
        {
            title: 'Quản Lý Tài Khoản',
            icon: <FaUser />,
            submenu: [
                { title: 'Tài khoản chính', link: '/taikhoanchinh' },
                { title: 'Tài khoản khuyến mãi', link: '/taikhoankhuyenmai' },
                { title: 'Nạp tiền vào tài khoản', link: '/naptien' },
            ],
        },
        {
            title: 'Khách Hàng',
            icon: <FaUsers />,
            submenu: [
                { title: 'Thêm mới', link: '/themkhachhangmoi' },
                { title: 'Danh sách', link: '/danhsachkhachhang' },
                { title: 'Bản khai', link: '/bankhaikhachhang' },
            ],
        },
        {
            title: 'API',
            icon: <FaLink />,
            submenu: [
                { title: 'Giới thiệu chung', link: '/gioithieuchung' },
                { title: 'Download ví dụ mẫu', link: '/api/example' },
                { title: 'Download plugin WordPress', link: '/api/plugin' },
                { title: 'Hướng dẫn sử dụng WordPress Plugin', link: '/huongdansudung' },
                { title: 'Lấy danh sách sản phẩm', link: '/theodanhsach' },
                { title: 'Kiểm tra tên miền', link: '/kiemtratenmien' },
            ],
        },
        {
            title: 'Cấu Hình',
            icon: <FaCog />,
            submenu: [
                { title: 'Thông tin đại lý', link: '/cauhinhdaily' },
                { title: 'Sản phẩm', link: '/cauhinhgia' },
                { title: 'Trang hoàn tất đơn hàng', link: '/config/products' },
            ],
        },
        {
            title: 'Bảng Giá Tên Miền',
            icon: <FaMoneyBill />,
            submenu: [
                { title: 'Bảng giá tên miền', link: '/banggia' },
            ],
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const sidebarStyle = {
        width: '250px',
        height: '100%',
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '10px',
        position: 'fixed',
        overflowY: 'auto',
        top: '60px',
    };

    const menuItemStyle = {
        padding: '10px 15px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#ecf0f1',
        transition: 'background-color 0.3s',
    };

    const submenuStyle = {
        paddingLeft: '30px',
        backgroundColor: '#34495e',
    };

    const handleMenuClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div style={sidebarStyle}>
            {menuItems.map((item, index) => (
                <div key={index}>
                    <div
                        style={{
                            ...menuItemStyle,
                            backgroundColor: activeIndex === index ? '#1abc9c' : 'transparent',
                        }}
                        onClick={() => handleMenuClick(index)}
                    >
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            {item.icon}
                            <span style={{ marginLeft: '10px' }}>{item.title}</span>
                        </span>
                        {item.submenu && <span>{activeIndex === index ? '▼' : '►'}</span>}
                    </div>
                    {item.submenu && activeIndex === index && (
                        <div style={submenuStyle}>
                            {item.submenu.map((subItem, subIndex) => (
                                <a
                                    key={subIndex}
                                    href={subItem.link}
                                    style={{
                                        padding: '8px 15px',
                                        color: '#bdc3c7',
                                        display: 'block',
                                        textDecoration: 'none',
                                    }}
                                >
                                    {subItem.title}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
