import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Login({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 로그인 로직 처리 (예: 서버 인증 요청)
    console.log('Logging in:', username, password);
    onLogin();
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h2 className='text-2xl mb-4'>Login</h2>
      <input
        type='text'
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='mb-2 p-2 border border-gray-300 rounded'
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='mb-4 p-2 border border-gray-300 rounded'
      />
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
}
