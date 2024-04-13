
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const statusLabel = document.getElementById('status');

    fetch(`http://192.168.35.38:8080/api/user/login/${email}/${password}`)
        .then(response => {
            if (response.ok) {
                statusLabel.textContent = 'Success';
                window.location.href = 'createTest.html?data= ' + encodeURIComponent(1);
            } else {
                statusLabel.textContent = 'Failed';
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => {
            console.error('Error:', error);
            statusLabel.textContent = 'Error';
        });
});