document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let user_id = null;
    let email = document.getElementById('email').value;
    let password_hash = document.getElementById('password').value;
    let full_name = document.getElementById('name').value; // Marked as null since it's not in the form
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

    fetch('http://192.168.35.38:8080/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
        });
});