CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  fullName VARCHAR(255) NOT NULL,
  phone VARCHAR(15),
  address VARCHAR(255),
  city VARCHAR(100),
  country VARCHAR(100)
);

INSERT INTO users (email, password, fullName, phone, address, city, country)
VALUES 
('info@dakdesign.net', '12345', 'ggg', '0123456789', '123 Example St', 'Hồ Chí Minh', 'Vietnam'),
('john@example.com', 'password123', 'John Doe', '0987654321', '456 Another Rd', 'Hà Nội', 'Vietnam'),
('alice@example.com', 'password456', 'Alice Wonderland', '0912345678', '789 Wonderland Ave', 'Đà Nẵng', 'Vietnam');
SELECT * FROM users WHERE id = 2;

select * from users

CREATE TABLE cloud_servers (
  cloud_servers_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  cpu VARCHAR(255),
  ssd VARCHAR(255),
  ram VARCHAR(255),
  bandwidth VARCHAR(255),
  operating_system VARCHAR(255),
  backup VARCHAR(255),
  price VARCHAR(255),
  note VARCHAR(255)
);

INSERT INTO cloud_servers (name, cpu, ssd, ram, bandwidth, operating_system, backup, price, note)
VALUES
('Cloud Server 00', '1 core', '15GB [Enterprise Storage]', '1024 MB', 'Unlimited', 'Linux', 'Hàng tuần', '90,000 đ x 12 tháng', 'Giá trên chưa bao gồm VAT'),
('Cloud Server 01', '2 Core', '40GB [Enterprise Storage]', '2048 MB', 'Unlimited', 'Linux', 'Hàng tuần', '160,000 đ x 12 tháng', 'Giá trên chưa bao gồm VAT'),
('Cloud Server 02', '2 core', '60GB [Enterprise Storage]', '3072 MB', 'Unlimited', 'Linux', 'Hàng tuần', '250,000 đ x 12 tháng', 'Giá trên chưa bao gồm VAT'),
('Cloud Server 03', '3 core', '80GB [Enterprise Storage]', '4096 MB', 'Unlimited', 'Linux', 'Hàng tuần', '360,000 đ x 12 tháng', 'Giá trên chưa bao gồm VAT'),
('Cloud Server 04', '4 core', '100GB [Enterprise Storage]', '6GB', 'Unlimited', 'Linux / Windows', 'Hàng tuần', '550,000 đ x 12 tháng', 'Giá trên chưa bao gồm VAT'),
('Cloud Server 05', '5 core', '180GB [Enterprise Storage]', '8GB', 'Unlimited', 'Linux / Windows', 'Hàng tuần', '1,200,000 đ x 12 tháng', 'Giá trên chưa bao gồm VAT'),
('Cloud Server 06', '6 core', '280GB [Enterprise Storage]', '16GB', 'Unlimited', 'Linux', 'Hàng tuần', '2,000,000 đ x 12 tháng', 'Giá trên chưa bao gồm VAT'),
('Cloud Server 07', '8 core', '360GB [Enterprise Storage]', '32GB', 'Unlimited', 'Linux / Windows', 'Hàng tuần', '2,500,000 đ x 12 tháng', 'Giá trên chưa bao gồm VAT'),
('Cloud Server 08', '16 core', '800GB [Enterprise Storage]', '64GB', 'Unlimited', 'Linux / Windows', 'Hàng tuần', '5,000,000 đ x 12 tháng', 'Giá trên chưa bao gồm VAT');

select * from cloud_servers

CREATE TABLE customers (
  customer_id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  status VARCHAR(50) NOT NULL
);

INSERT INTO customers (email, name, phone, status)
VALUES ('nthang91@gmail.com', 'Nguyễn Thắng', '0916531611', 'Đã kích hoạt');

select * from customers
