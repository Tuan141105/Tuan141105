import React, { useState } from "react";
import Header from '../../Header';
import Sidebar from '../../Sidebar';

const VoucherList = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const transactions = [
    {
      code: "BILL-E8Q55V",
      content: "Số dư đầu kỳ",
      amount: "0",
      total: "0",
      date: "21/06/2024 03:04:47",
    },
  ];

  // Hàm lọc giao dịch theo ngày
  const filteredTransactions = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
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

export default VoucherList;
