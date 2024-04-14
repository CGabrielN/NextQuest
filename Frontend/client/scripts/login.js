document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch(`http://192.168.35.38:8080/api/user/login/${email}/${password}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Login failed');
        })
        .then(user => {
            window.location.href = 'roadmaps.html?user=' + encodeURIComponent(JSON.stringify(user));
        })
        .catch(error => {
            console.error('Error:', error);
        });
});