// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        {/* 建议添加一个容器，控制页面内容的布局（可选但实用） */}
        <div style={{ minHeight: 'calc(100vh - 160px)', padding: '20px 0' }}>
          <Routes>
            <Route path="/" element={<Home />} /> {/* 首页路由 */}
            <Route path="/register" element={<Register />} /> {/* 注册页路由 */}
            <Route path="/login" element={<Login />} /> {/* 登录页路由 */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

// 只保留一个 export default
export default App
