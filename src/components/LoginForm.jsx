import { useState } from 'react';
import { login } from '@services/auth';

function LoginForm({ onSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ username, password });
      const role = localStorage.getItem('role');
      onSuccess(role);
    } catch (error) {
      alert('Đăng nhập thất bại: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Tên đăng nhập:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Mật khẩu:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Đăng nhập</button>
    </form>
  );
}

export default LoginForm;