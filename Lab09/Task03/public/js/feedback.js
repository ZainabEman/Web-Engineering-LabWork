// feedback.js

function loadFeedback() {
    fetch('/api/feedback')
      .then(res => res.json())
      .then(feedbacks => {
        const list = document.getElementById('feedbackList');
        list.innerHTML = '';
        feedbacks.forEach(fb => {
          list.innerHTML += `
            <li class="list-group-item">
              <strong>${fb.name}</strong> (${fb.email})<br>
              ${fb.message}<br>
              <small class="text-muted">${new Date(fb.submitted_at).toLocaleString()}</small>
            </li>`;
        });
      });
  }
  
  document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const data = {
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      message: document.getElementById('message').value.trim()
    };
  
    if (!data.name || !data.email || !data.message) {
      document.getElementById('alertBox').innerHTML = `<div class="alert alert-danger">All fields are required.</div>`;
      return;
    }
  
    fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(response => {
        document.getElementById('alertBox').innerHTML = `<div class="alert alert-success">${response.message}</div>`;
        document.getElementById('feedbackForm').reset();
        loadFeedback();
      });
  });
  
  loadFeedback();
  