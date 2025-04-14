$(document).ready(function() {
    // Load products on page load
    loadProducts();

    // Add Product Form Submit
    $('#addProductForm').on('submit', function(e) {
        e.preventDefault();
        const productData = {
            name: $('#productName').val(),
            category: $('#category').val(),
            price: parseFloat($('#price').val())
        };

        $.ajax({
            url: '/api/products',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(productData),
            success: function(response) {
                showMessage('#addProductMessage', 'Product added successfully!', 'success');
                $('#addProductForm')[0].reset();
                loadProducts();
            },
            error: function(xhr) {
                showMessage('#addProductMessage', 'Error adding product', 'error');
            }
        });
    });

    // Edit Product Modal
    let editModal;
    $(document).on('click', '.edit-btn', function() {
        const productId = $(this).data('id');
        const productName = $(this).data('name');
        const category = $(this).data('category');
        const price = $(this).data('price');

        $('#editProductId').val(productId);
        $('#editProductName').val(productName);
        $('#editCategory').val(category);
        $('#editPrice').val(price);

        editModal = new bootstrap.Modal(document.getElementById('editProductModal'));
        editModal.show();
    });

    // Save Edit Changes
    $('#saveEditButton').on('click', function() {
        const productId = $('#editProductId').val();
        const productData = {
            name: $('#editProductName').val(),
            category: $('#editCategory').val(),
            price: parseFloat($('#editPrice').val())
        };

        $.ajax({
            url: `/api/products/${productId}`,
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(productData),
            success: function(response) {
                editModal.hide();
                loadProducts();
            },
            error: function(xhr) {
                showMessage('#addProductMessage', 'Error updating product', 'error');
            }
        });
    });

    // Delete Product
    $(document).on('click', '.delete-btn', function() {
        if (confirm('Are you sure you want to delete this product?')) {
            const productId = $(this).data('id');
            $.ajax({
                url: `/api/products/${productId}`,
                method: 'DELETE',
                success: function(response) {
                    loadProducts();
                },
                error: function(xhr) {
                    showMessage('#addProductMessage', 'Error deleting product', 'error');
                }
            });
        }
    });
});

// Load Products Function
function loadProducts() {
    $.ajax({
        url: '/api/products',
        method: 'GET',
        success: function(products) {
            console.log(products); // Debugging: log the products received
            const tbody = $('#productsTableBody');
            tbody.empty();

            products.forEach(product => {
                // Ensure price is treated as a number
                const price = Number(product.price);
                tbody.append(`
                    <tr>
                        <td>${product.id}</td>
                        <td>${product.name}</td>
                        <td>${product.category}</td>
                        <td>$${price.toFixed(2)}</td>
                        <td>
                            <button class="btn btn-sm btn-primary edit-btn" 
                                data-id="${product.id}"
                                data-name="${product.name}"
                                data-category="${product.category}"
                                data-price="${price}">
                                Edit
                            </button>
                            <button class="btn btn-sm btn-danger delete-btn" 
                                data-id="${product.id}">
                                Delete
                            </button>
                        </td>
                    </tr>
                `);
            });
        },
        error: function(xhr) {
            showMessage('#addProductMessage', 'Error loading products', 'error');
        }
    });
}
// Show Message Function
function showMessage(elementId, message, type) {
    const element = $(elementId);
    element.removeClass('success error').addClass(type).text(message);
    setTimeout(() => {
        element.removeClass('success error').text('');
    }, 3000);
} 