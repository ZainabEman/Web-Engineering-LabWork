// product.js

function loadProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(products => {
        const tableBody = document.getElementById('productTableBody');
        tableBody.innerHTML = '';
        products.forEach(p => {
          tableBody.innerHTML += `
            <tr>
              <td>${p.name}</td>
              <td>${p.category}</td>
              <td>${p.price}</td>
              <td>${p.description}</td>
              <td>
                <button class="btn btn-sm btn-warning" onclick="editProduct(${p.id}, '${p.name}', '${p.category}', ${p.price}, '${p.description}')">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteProduct(${p.id})">Delete</button>
              </td>
            </tr>
          `;
        });
      });
  }
  
  document.getElementById('productForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const id = document.getElementById('productId').value;
    const data = {
      name: document.getElementById('name').value,
      category: document.getElementById('category').value,
      price: document.getElementById('price').value,
      description: document.getElementById('description').value
    };
  
    if (id) {
      fetch(`/api/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).then(() => {
        this.reset();
        loadProducts();
      });
    } else {
      fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).then(() => {
        this.reset();
        loadProducts();
      });
    }
  });
  
  function editProduct(id, name, category, price, description) {
    document.getElementById('productId').value = id;
    document.getElementById('name').value = name;
    document.getElementById('category').value = category;
    document.getElementById('price').value = price;
    document.getElementById('description').value = description;
  }
  
  function deleteProduct(id) {
    fetch(`/api/products/${id}`, { method: 'DELETE' })
      .then(() => loadProducts());
  }
  
  loadProducts();
  