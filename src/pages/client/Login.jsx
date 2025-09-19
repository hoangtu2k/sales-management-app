import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginClient } from '@services/authClient';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginClient({ username, password });
      navigate('/products'); // Chuyển đến trang sản phẩm sau khi đăng nhập
    } catch (error) {
      alert('Đăng nhập thất bại: ' + error.message);
    }
  };

  return (
    <div className="login-page">
      <h2>Đăng nhập Khách hàng</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên đăng nhập:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mật khẩu:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}

export default Login;