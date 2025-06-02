const express = require('express');
const { getUsers, createUser } = require('../controllers/userController');

const router = express.Router();

// Các route cho User
router.get('/', getUsers);      // Lấy danh sách người dùng
router.post('/', createUser);   // Tạo người dùng mới

module.exports = router;
