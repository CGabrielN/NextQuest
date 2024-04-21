const BASE_API_URL = 'http://localhost:8080/api';

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch(`${BASE_API_URL}/user/login/${email}/${password}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Login failed');
        })
        .then(user => {
            window.location.href = 'roadmaps_main_window.html?user=' + encodeURIComponent(JSON.stringify(user));
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

function togglePasswordVisibility() {
    let passwordInput = document.getElementById('password');
    let togglePasswordIcon = document.getElementById('togglePassword');

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePasswordIcon.src = "../assets/closed_eye.png";
    } else {
        passwordInput.type = "password";
        togglePasswordIcon.src = "../assets/eye.png";
    }
}