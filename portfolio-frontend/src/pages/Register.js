export default function Login() {
  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>登录</h2>
      <form>
        <div style={{ marginBottom: '15px' }}>
          <label>账号：</label>
          <input type="text" style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>密码：</label>
          <input type="password" style={{ width: '100%', padding: '8px' }} />
        </div>
        <button type="submit" style={{ padding: '8px 20px' }}>登录</button>
      </form>
    </div>
  );
}
export default function Register() {
  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>注册</h2>
      <form>
        <div style={{ marginBottom: '15px' }}>
          <label>账号：</label>
          <input type="text" style={{ width: '100%', padding: '8px' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>密码：</label>
          <input type="password" style={{ width: '100%', padding: '8px' }} />
        </div>
        <button type="submit" style={{ padding: '8px 20px' }}>注册</button>
      </form>
    </div>
  );
}