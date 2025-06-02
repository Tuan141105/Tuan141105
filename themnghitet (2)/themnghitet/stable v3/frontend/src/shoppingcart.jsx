import React, { useEffect, useState } from 'react';
import AddNew from './AddNew'; // Import AddNew vào đây
import Header from './Header';
import './shoppingcart.css';
import Sidebar from './Sidebar';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { name: 'TaduPhone #0', type: 'Đăng ký mới', price: 960000, duration: '1 năm' },
  ]);
  const [discount, setDiscount] = useState(0);
  const [vatRate] = useState(0.1);
  const [isModalOpen, setModalOpen] = useState(false);

  const removeFromCart = (index) => {
    setCartItems((prevCartItems) => prevCartItems.filter((_, i) => i !== index));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price || 0), 0);
  };

  const calculateVAT = () => {
    const subtotal = calculateSubtotal();
    return subtotal * vatRate;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const vat = calculateVAT();
    return subtotal - discount + vat;
  };

  const handleDurationChange = (index, newDuration) => {
    const updatedCartItems = [...cartItems];
    const pricePerYear = 960000; // Giá 1 năm cơ bản
    const multiplier = newDuration === '1 năm' ? 1 : newDuration === '2 năm' ? 2 : 3;

    updatedCartItems[index].duration = newDuration;
    updatedCartItems[index].price = pricePerYear * multiplier;

    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    if (discount > calculateSubtotal()) {
      setDiscount(calculateSubtotal());
    }
  }, [discount, cartItems]);

  return (
    <>
      <div className="wrapper">
        <Header /> {/* Luôn render Header */}
        <Sidebar /> {/* Luôn render Sidebar */}
        
        <div className="container">
          <div className="Dashboard">
            <div className="icon-dashboard">
              <i className="fa-solid fa-shopping-cart"></i>
              <p>Giỏ Hàng</p>
            </div>
          </div>

          {/* Nội dung giỏ hàng */}
          <div className="cart-container">
            <h2>Giỏ Hàng Của Bạn</h2>

            {cartItems && cartItems.length > 0 ? (
              <>
                <table className="cart-table">
                  <thead>
                    <tr>
                      <th>Loại</th>
                      <th>Sản phẩm</th>
                      <th>Thời gian</th>
                      <th>Thành tiền</th>
                      <th>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={index}>
                        <td>{item.type}</td>
                        <td>{item.name}</td>
                        <td>
                          <select
                            value={item.duration}
                            onChange={(e) => handleDurationChange(index, e.target.value)}
                          >
                            <option value="1 năm">1 năm</option>
                            <option value="2 năm">2 năm</option>
                            <option value="3 năm">3 năm</option>
                          </select>
                        </td>
                        <td>{item.price.toLocaleString()} đ</td>
                        <td>
                          <button
                            className="remove-button"
                            onClick={() => removeFromCart(index)}
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Tóm tắt giỏ hàng */}
                <div className="cart-summary">
                  <h4>Tóm tắt đơn hàng</h4>
                  <div className="summary-item">
                    <span>Tổng tiền:</span>
                    <span>{cartItems.length > 0 ? calculateSubtotal().toLocaleString() : 0} đ</span>
                  </div>
                  <div className="summary-item">
                    <span>Giảm giá:</span>
                    <span>{cartItems.length > 0 ? discount.toLocaleString() : 0} đ</span>
                  </div>
                  <div className="summary-item">
                    <span>VAT (10%):</span>
                    <span>{cartItems.length > 0 ? calculateVAT().toLocaleString() : 0} đ</span>
                  </div>
                  <div className="summary-total">
                    <span>Thành tiền:</span>
                    <span>{cartItems.length > 0 ? calculateTotal().toLocaleString() : 0} đ</span>
                  </div>

                  <div className="customer-dropdown">
                    <select>
                      <option>Khách hàng đăng ký tên miền...</option>
                      <option>Lê Hà Thu Hằng <br /> ihateyoupass@gmail.com</option>
                      <option>Mai Ngọc Phúc</option>
                      <option>Nguyễn Thảo LyLy</option>
                    </select>
                    <button className="add-customer" onClick={() => setModalOpen(true)}>+</button>
                  </div>

                  <button className="checkout-button">Tiếp tục</button>
                </div>
              </>
            ) : (
              <p>Giỏ hàng của bạn đang trống.</p>
            )}
          </div>
        </div>
      </div>

      {/* Hiển thị Modal trực tiếp tại đây */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={() => setModalOpen(false)}>X</button>
            <AddNew />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
