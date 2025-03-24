function loadTodos() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(todos => {
        const list = document.getElementById('todoList');
        list.innerHTML = '';
        todos.forEach(todo => {
          list.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center ${todo.status ? 'completed' : ''}">
              <div>
                <input type="checkbox" class="form-check-input me-2" onchange="toggleStatus(${todo.id}, this)" ${todo.status ? 'checked' : ''}>
                <span class="task-text" contenteditable="true" onblur="updateTitle(${todo.id}, this)">${todo.title}</span>
              </div>
              <button class="btn btn-sm btn-danger" onclick="deleteTask(${todo.id})">Delete</button>
            </li>
          `;
        });
      });
  }
  
  document.getElementById('todoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('todoInput').value.trim();
    if (!title) return;
    fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    }).then(() => {
      document.getElementById('todoInput').value = '';
      loadTodos();
    });
  });
  
  function toggleStatus(id, checkbox) {
    const status = checkbox.checked ? 1 : 0;
    const title = checkbox.nextElementSibling.innerText;
    fetch(`/api/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, status })
    }).then(loadTodos);
  }
  
  function updateTitle(id, span) {
    const title = span.innerText;
    const status = span.closest('li').querySelector('input[type="checkbox"]').checked ? 1 : 0;
    fetch(`/api/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, status })
    });
  }
  
  function deleteTask(id) {
    fetch(`/api/todos/${id}`, { method: 'DELETE' })
      .then(loadTodos);
  }
  
  loadTodos();
  