import React from 'react';

export default function Home() {
  const handleLogin = async () => {
    const token = "mock_google_token"; // Use real token from Google login
    const res = await fetch('http://localhost:5000/api/auth/google', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token })
    });
    const data = await res.json();
    alert(data.message);
    window.location.href = '/dashboard';
  };

  return <button onClick={handleLogin}>Login with Google</button>;
}