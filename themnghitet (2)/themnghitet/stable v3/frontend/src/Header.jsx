import React from 'react';
import { FaBell, FaEnvelope, FaUserCircle, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    const headerStyle = {
        height: '60px',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        borderBottom: '1px solid #ccc',
        position: 'fixed',
        top: 0,
        left: '250px',
        right: 0,
        zIndex: 1000,
        left: '-10px',
    };

    const logoStyle = {
        display: 'flex',
        alignItems: 'center',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#e74c3c',
    };

    const iconsContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
    };

    const iconStyle = {
        fontSize: '18px',
        color: '#555',
        cursor: 'pointer',
    };

    const userInfoStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontSize: '14px',
        color: '#333',
        position: 'relative', /* Add this line */
    };

    const cartStyle = {
        position: 'relative',
        fontSize: '18px',
        cursor: 'pointer',
    };

    const cartBadgeStyle = {
        position: 'absolute',
        top: '-5px',
        right: '-10px',
        backgroundColor: '#e74c3c',
        color: '#fff',
        fontSize: '12px',
        borderRadius: '50%',
        width: '18px',
        height: '18px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div style={headerStyle}>
            {/* Logo */}
            <a href="/home">
                <div style={logoStyle}>
                    <span>TADU</span>
                    <span style={{ color: '#f39c12' }}>.cloud</span>
                </div>
            </a>

            {/* Icons Section */}
            <div style={iconsContainerStyle}>
                <i style={iconStyle} className="fas fa-comment-alt"></i>
                <i style={iconStyle} className="fas fa-envelope"></i>
                <a href="/user/feedback"><span style={iconStyle}>Báo lỗi và góp ý chức năng</span></a>
            </div>

            {/* User Info */}
            <div style={userInfoStyle} className="user-info">
                <span>Hoàng Quốc Tuấn</span>
                <div className="submenu">
                    <a href="/thongtincanhan">Thông Tin Cá Nhân</a>
                    <a href="/login">Đăng Xuất</a>
                </div>
                <div style={cartStyle}>
                    <a href="/giohang"><i className="fas fa-shopping-cart"></i>
                    <div style={cartBadgeStyle}>0</div></a>
                </div>
                
            </div>
        </div>
    );
};

export default Header;
