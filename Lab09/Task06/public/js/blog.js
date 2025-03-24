// blog.js

function loadBlogs() {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(blogs => {
        const container = document.getElementById('blogList');
        container.innerHTML = '';
        blogs.forEach(blog => {
          container.innerHTML += `
            <div class="col-md-6">
              <div class="card shadow-sm h-100">
                <div class="card-body">
                  <h5 class="card-title">${blog.title}</h5>
                  <p class="card-subtitle mb-2 text-muted">by ${blog.author}</p>
                  <p class="text-muted small">${new Date(blog.created_at).toLocaleString()}</p>
                  <a href="view.html?id=${blog.id}" class="btn btn-outline-primary">Read More</a>
                </div>
              </div>
            </div>
          `;
        });
      });
  }
  
  document.getElementById('blogForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const data = {
      title: document.getElementById('title').value,
      author: document.getElementById('author').value,
      content: document.getElementById('content').value
    };
  
    fetch('/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(() => {
      this.reset();
      loadBlogs();
    });
  });
  
  loadBlogs();
  