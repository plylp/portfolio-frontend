import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ padding: '20px', background: '#f5f5f5', borderBottom: '1px solid #eee' }}>
      <nav>
        <Link to="/" style={{ marginRight: '20px' }}>首页</Link>
        <Link to="/login" style={{ marginRight: '20px' }}>登录</Link>
        <Link to="/register">注册</Link>
      </nav>
    </header>
  );
}