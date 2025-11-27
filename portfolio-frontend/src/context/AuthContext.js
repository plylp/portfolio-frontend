// src/context/AuthContext.js
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 注册
  const register = async (userData) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/register`, userData);
    const data = res.data;
    // 存储Token到localStorage
    localStorage.setItem('token', data.token);
    setUser(data);
    return data;
  };

  // 登录
  const login = async (userData) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/users/login`, userData);
    const data = res.data;
    localStorage.setItem('token', data.token);
    setUser(data);
    return data;
  };

  // 登出
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  // 初始化：从localStorage加载用户
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          // （可选）后端可加“获取用户信息”接口，这里简化为直接用token
          setUser({ token });
        } catch (err) {
          localStorage.removeItem('token');
          setUser(null);
        }
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;