import React, { useState } from "react";
import "./taikhoanchinh.css";
import Header from '../../Header';
import Sidebar from '../../Sidebar';

const TransactionList = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const transactions = [
    {
      code: "BILL-E8Q55V",
      content: "Thanh toán đơn hàng TADU-E176KV",
      amount: "-1,188,000",
      total: "6,897",
      date: "21/06/2024 03:04:47",
    },
    {
      code: "BILL-E7055R",
      content: "Thanh toán đơn hàng TADU-DL5MPZ",
      amount: "-1,689,600",
      total: "1,194,897",
      date: "21/06/2024 03:04:06",
    },
    {
      code: "BILL-L0M16R",
      content: "Nạp tiền vào tài khoản",
      amount: "2,877,600",
      total: "2,884,497",
      date: "21/06/2024 01:09:32",
    },
    {
      code: "BILL-E179GM",
      content: "Thanh toán đơn hàng TADU-E454Z9",
      amount: "-2,640,000",
      total: "6,897",
      date: "21/05/2024 03:53:01",
    },
    {
      code: "BILL-EZNKPR",
      content: "Nạp tiền vào tài khoản",
      amount: "2,640,000",
      total: "2,646,897",
      date: "21/05/2024 03:48:47",
    },
    {
      code: "BILL-E9RY5P",
      content: "Thanh toán đơn hàng TADU-P652Y4",
      amount: "-279,565",
      total: "6,897",
      date: "19/04/2024 09:19:53",
    },
    {
      code: "BILL-EZNGZR",
      content: "Nạp tiền vào tài khoản",
      amount: "280,000",
      total: "286,462",
      date: "27/03/2024 08:19:20",
    },
    {
      code: "BILL-E8Q55V",
      content: "Thanh toán đơn hàng TADU-E176KV",
      amount: "-1,188,000",
      total: "6,897",
      date: "21/06/2024 03:04:47",
    },
    {
      code: "BILL-E7055R",
      content: "Thanh toán đơn hàng TADU-DL5MPZ",
      amount: "-1,689,600",
      total: "1,194,897",
      date: "21/06/2024 03:04:06",
    },
    {
      code: "BILL-L0M16R",
      content: "Nạp tiền vào tài khoản",
      amount: "2,877,600",
      total: "2,884,497",
      date: "21/06/2024 01:09:32",
    },
    {
      code: "BILL-E8Q55V",
      content: "Thanh toán đơn hàng TADU-E176KV",
      amount: "-1,188,000",
      total: "6,897",
      date: "21/06/2024 03:04:47",
    },
    
    {
      code: "BILL-L0M16R",
      content: "Nạp tiền vào tài khoản",
      amount: "2,877,600",
      total: "2,884,497",
      date: "21/06/2024 01:09:32",
    },
    {
      code: "BILL-E7055R",
      content: "Thanh toán đơn hàng TADU-DL5MPZ",
      amount: "-1,689,600",
      total: "1,194,897",
      date: "21/06/2024 03:04:06",
    },
    {
      code: "BILL-E8Q55V",
      content: "Thanh toán đơn hàng TADU-E176KV",
      amount: "-1,188,000",
      total: "6,897",
      date: "21/06/2024 03:04:47",
    },
    {
      code: "BILL-E7055R",
      content: "Thanh toán đơn hàng TADU-DL5MPZ",
      amount: "-1,689,600",
      total: "1,194,897",
      date: "21/06/2024 03:04:06",
    },
    {
      code: "BILL-L0M16R",
      content: "Nạp tiền vào tài khoản",
      amount: "2,877,600",
      total: "2,884,497",
      date: "21/06/2024 01:09:32",
    },
    {
      code: "BILL-E8Q55V",
      content: "Thanh toán đơn hàng TADU-E176KV",
      amount: "-1,188,000",
      total: "6,897",
      date: "21/06/2024 03:04:47",
    },
    {
      code: "BILL-E7055R",
      content: "Thanh toán đơn hàng TADU-DL5MPZ",
      amount: "-1,689,600",
      total: "1,194,897",
      date: "21/06/2024 03:04:06",
    },
    {
      code: "BILL-L0M16R",
      content: "Nạp tiền vào tài khoản",
      amount: "2,877,600",
      total: "2,884,497",
      date: "21/06/2024 01:09:32",
    },
  ];

  // Hàm lọc giao dịch theo ngày
  const filteredTransactions = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date); // Chuyển ngày giao dịch sang Date object
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;
  
    // Lọc ngày theo khoảng thời gian
    return (
      (!from || transactionDate >= from) &&
      (!to || transactionDate <= to)
    );
  });
  

  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="container">
        <div className="Dashboard">
          <div className="icon-dashboard">
            <i className="fa-solid fa-bars"></i>
            <p>Sao Kê Giao Dịch</p>
          </div>
        </div>
    <div className="transaction-list-container">
      <div className="filter-bar">
        <input
          type="date"
          placeholder="Từ ngày"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
        <input
          type="date"
          placeholder="Đến ngày"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
        <button className="filter-button">Xem Sao Kê</button>
      </div>

      {/* Bảng giao dịch */}
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Nội dung</th>
            <th>Số tiền</th>
            <th>Tổng tiền</th>
            <th>Ngày</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction, index) => (
            <tr key={index} className={index % 2 === 1 ? "highlight-row" : ""}>
              <td>{transaction.code}</td>
              <td>{transaction.content}</td>
              <td className={transaction.amount.startsWith("-") ? "negative" : "positive"}>
                {transaction.amount}
              </td>
              <td>{transaction.total}</td>
              <td>{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default TransactionList;
