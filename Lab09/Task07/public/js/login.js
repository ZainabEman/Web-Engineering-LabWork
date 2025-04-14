// login.js

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then(response => {
      if (response.success) {
        localStorage.setItem('userId', response.userId);
        window.location.href = 'dashboard.html';
      } else {
        document.getElementById('alertBox').innerHTML =
          `<div class="alert alert-danger">${response.message}</div>`;
      }
    });
  });
  