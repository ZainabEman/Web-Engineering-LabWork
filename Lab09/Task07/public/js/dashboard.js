// dashboard.js

const userId = localStorage.getItem('userId');
if (!userId) {
  alert('Please login first.');
  window.location.href = 'login.html';
}

fetch(`/api/user/${userId}`)
  .then(res => res.json())
  .then(user => {
    document.getElementById('userInfo').innerHTML = `
      <div class="card p-4 shadow-sm">
        <h4>Name: ${user.name}</h4>
        <p>Email: ${user.email}</p>
        <p>Joined On: ${new Date(user.created_at).toLocaleDateString()}</p>
      </div>
    `;
  });

function logout() {
  localStorage.removeItem('userId');
  window.location.href = 'login.html';
}
