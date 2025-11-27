require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const helmet = require('helmet');
const userRoutes = require('./routes/userRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

// 连接数据库
connectDB();

const app = express();

// 中间件
app.use(cors()); // 解决跨域
app.use(helmet()); // 安全头部
app.use(express.json()); // 解析JSON请求体

// 路由
app.use('/api/users', userRoutes);

// 错误处理中间件
app.use(errorMiddleware);

// 启动服务
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));