document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const unameInput = document.getElementById('uname');
    const pswdInput = document.getElementById('pswd');
    const unameError = document.getElementById('unameError');
    const pswdError = document.getElementById('pswdError');

    // Handle form submission
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent form submission

            // Clear previous errors
            unameError.textContent = '';
            pswdError.textContent = '';
            unameInput.classList.remove('error');
            pswdInput.classList.remove('error');

            // Get input values
            const uname = unameInput.value.trim();
            const pswd = pswdInput.value.trim();

            // Validate credentials
            if (uname === '' || pswd === '') {
                if (uname === '') {
                    unameError.textContent = 'Username is required';
                    unameInput.classList.add('error');
                }
                if (pswd === '') {
                    pswdError.textContent = 'Password is required';
                    pswdInput.classList.add('error');
                }
                return;
            }

            if (uname === 'admin' && pswd === 'Admin@123') {
                // Set session or local storage
                sessionStorage.setItem('loggedIn', 'true');
                // Trigger animations and redirect to homepage
                document.body.style.animation = 'fadeOut 1s ease-in';
                setTimeout(() => {
                    window.location.href = 'homepage.html';
                }, 1000); // Match the duration of fade-out animation
            } else {
                if (uname !== 'admin') {
                    unameError.textContent = 'Invalid username';
                    unameInput.classList.add('error');
                }
                if (pswd !== 'Admin@123') {
                    pswdError.textContent = 'Invalid password';
                    pswdInput.classList.add('error');
                }
            }
        });
    }

    // Handle logout
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            // Clear session storage or cookies (simulate logout)
            sessionStorage.removeItem('loggedIn');
            // Trigger animation and redirect to login page
            document.body.style.animation = 'fadeOut 1s ease-in';
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000); // Match the duration of fade-out animation
        });
    }

    // Prevent access to home page if not logged in
    if (window.location.pathname === '/homepage.html' && !sessionStorage.getItem('loggedIn')) {
        window.location.href = 'index.html';
    }
});
