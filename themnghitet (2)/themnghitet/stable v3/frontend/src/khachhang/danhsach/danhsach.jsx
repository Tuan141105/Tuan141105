import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for making API calls
import Header from '../../Header';
import Sidebar from '../../Sidebar';
import './danhsach.css';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]); // State to store customers
  const [loading, setLoading] = useState(false); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  // Function to fetch customers
  const fetchCustomers = async () => {
    setLoading(true); // Set loading to true before the request
    setError(null); // Reset any previous errors

    try {
      const response = await axios.get('http://localhost:5000/api/customers', {
        params: {
          searchTerm: searchTerm
        }
      });
      setCustomers(response.data); // Set the fetched customers data
    } catch (err) {
      setError("Error fetching customers: " + err.message); // Set error if any
    } finally {
      setLoading(false); // Set loading to false after the request completes
    }
  };

  // Fetch customers when component mounts or when searchTerm changes
  useEffect(() => {
    fetchCustomers();
  }, [searchTerm]);

  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="container">
        <div className="Dashboard">
          <div className="icon-dashboard">
            <i className="fa-solid fa-bars"></i>
            <p>Danh Sách Khách Hàng</p>
          </div>
        </div>
        <div className="customer-list-wrapper">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Email, số điện thoại"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term on change
            />
            <button
              className="search-button"
              onClick={fetchCustomers} // Trigger fetch on search
            >
              Tìm
            </button>
          </div>

          {/* Show loading or error messages */}
          {loading && <p>Loading customers...</p>}
          {error && <p className="error">{error}</p>}

          {/* Show customers list in table */}
          {!loading && !error && (
            <table className="customer-table">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Họ Tên - Điện Thoại</th>
                  <th>Trạng Thái</th>
                </tr>
              </thead>
              <tbody>
                {customers.length > 0 ? (
                  customers.map((customer, index) => (
                    <tr key={index}>
                      <td>{customer.email}</td>
                      <td>
                        {customer.name} - {customer.phone}
                      </td>
                      <td>
                        <span
                          className={`status ${
                            customer.status === "Đã kích hoạt" ? "active" : "inactive"
                          }`}
                        >
                          {customer.status.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">No customers found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
