const http = require("http");
const Db = require("./src/models/index"); // Nhập Db từ file index.js

require("dotenv").config(); // Đọc các biến môi trường từ file .env
const mongoose = require("mongoose");

// Kết nối CSDL MongoDB từ .env
Db.connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    await mongoose.connect(mongoUri); // Loại bỏ các tùy chọn deprecated
    console.log("✅ Đã kết nối thành công tới MongoDB");
  } catch (error) {
    console.error("❌ Lỗi kết nối MongoDB:", error);
    process.exit();
  }
};

// Lấy giá trị host và port từ .env
const hostName = process.env.HOST_NAME;
const port = process.env.PORT;

// Khởi chạy server
http
  .createServer((req, res) => {
    // Your server logic here
  })
  .listen(port, hostName, () => {
    console.log(`Server is running on http://${hostName}:${port}`);
  });

// Gọi hàm kết nối DB khi bắt đầu
Db.connectDB();
