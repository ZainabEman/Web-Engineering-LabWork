// public/js/script.js

document.getElementById('emailField').addEventListener('blur', () => {
    const email = document.getElementById('emailField').value;
    if (email) {
      fetch(`/api/students/check-email/${email}`)
        .then(res => res.json())
        .then(data => {
          const feedback = document.getElementById('emailFeedback');
          if (data.available) {
            feedback.textContent = '✅ Email is available';
            feedback.style.color = 'green';
          } else {
            feedback.textContent = '❌ Email already exists';
            feedback.style.color = 'red';
          }
        });
    }
  });
  
  document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
  
    fetch('/api/students/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(response => {
        const alertBox = document.getElementById('alertBox');
        if (response.success) {
          alertBox.innerHTML = `<div class="alert alert-success">${response.message}</div>`;
          this.reset();
          document.getElementById('emailFeedback').textContent = '';
        } else {
          alertBox.innerHTML = `<div class="alert alert-danger">${response.message}</div>`;
        }
      });
  });
  