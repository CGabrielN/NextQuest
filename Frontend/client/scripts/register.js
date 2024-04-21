const BASE_API_URL = 'http://localhost:8080/api';

document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let user_id = null;
    let email = document.getElementById('email').value;
    let password_hash = document.getElementById('password').value;
    let full_name = document.getElementById('name').value;
    let phone_number = document.getElementById('phone').value;
    let domain = document.getElementById('domain').value;
    let startRoadmapDate = null; // Marked as null since it's not in the form
    let roadmap = null; // Marked as null since it's not in the form
    let company = null; // Marked as null since it's not in the form

    let data = {
        id: user_id,
        email,
        password_hash,
        fullName: full_name,
        phoneNumber: phone_number,
        domain,
        startRoadmapDate,
        roadmap,
        company
    };

    fetch(`${BASE_API_URL}/user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then(user => {
            console.log(user);
            window.location.href = "../html-files/roadmaps_main_window.html?user=" + encodeURIComponent(JSON.stringify(user));
        })
        .catch((error) => {
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

function goBackToLogin(){
    window.location.href = "../html-files/login.html"
}