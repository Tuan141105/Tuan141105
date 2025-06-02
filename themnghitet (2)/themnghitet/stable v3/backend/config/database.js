// config/database.js
const mysql = require('mysql2');

// Cấu hình kết nối cơ sở dữ liệu
const db = mysql.createConnection({
  host: 'localhost', // Địa chỉ host của MySQL (thường là localhost)
  user: 'root', // Tên đăng nhập của MySQL
  password: '12345', // Mật khẩu MySQL
  database: 'my_database', // Tên cơ sở dữ liệu
});

// Kiểm tra kết nối
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = db;
