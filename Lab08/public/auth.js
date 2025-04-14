$(document).ready(function() {
    // Email availability check
    let emailCheckTimeout;
    $('#registerEmail').on('input', function() {
        clearTimeout(emailCheckTimeout);
        const email = $(this).val();
        
        if (email) {
            emailCheckTimeout = setTimeout(() => {
                $.ajax({
                    url: '/api/check-email',
                    method: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify({ email }),
                    success: function(response) {
                        if (response.exists) {
                            showMessage('#registerMessage', 'Email already registered!', 'error');
                        } else {
                            showMessage('#registerMessage', 'Email is available!', 'success');
                        }
                    },
                    error: function(xhr) {
                        showMessage('#registerMessage', 'Error checking email availability', 'error');
                    }
                });
            }, 500);
        }
    });

    // Registration Form Submit
    $('#registerForm').on('submit', function(e) {
        e.preventDefault();
        const userData = {
            name: $('#registerName').val(),
            email: $('#registerEmail').val(),
            password: $('#registerPassword').val()
        };

        $.ajax({
            url: '/api/register',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(userData),
            success: function(response) {
                showMessage('#registerMessage', 'Registration successful! Please login.', 'success');
                $('#registerForm')[0].reset();
                setTimeout(() => {
                    window.location.href = '/auth.html';
                }, 2000);
            },
            error: function(xhr) {
                showMessage('#registerMessage', 'Error during registration', 'error');
            }
        });
    });

    // Login Form Submit
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();
        const loginData = {
            email: $('#loginEmail').val(),
            password: $('#loginPassword').val()
        };

        $.ajax({
            url: '/api/login',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(loginData),
            success: function(response) {
                showMessage('#loginMessage', 'Login successful! Redirecting...', 'success');
                setTimeout(() => {
                    window.location.href = '/index.html';
                }, 1000);
            },
            error: function(xhr) {
                showMessage('#loginMessage', 'Invalid credentials', 'error');
            }
        });
    });
});

// Show Message Function
function showMessage(elementId, message, type) {
    const element = $(elementId);
    element.removeClass('success error').addClass(type).text(message);
    setTimeout(() => {
        element.removeClass('success error').text('');
    }, 3000);
} 