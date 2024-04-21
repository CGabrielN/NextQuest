let stepCount = 0;

document.getElementById('addStep').addEventListener('click', function() {
    // Create a new container
    var container = document.createElement('div');
    container.className = stepCount % 2 === 0 ? 'container left' : 'container right';

    // Create the content div
    var content = document.createElement('div');
    content.className = 'content';

    // Create the input fields and button
    var nameInput = document.createElement('input');
    nameInput.placeholder = 'Name';

    var positionInput = document.createElement('input');
    positionInput.placeholder = 'Position';

    var contentInput = document.createElement('input');
    contentInput.placeholder = 'Add Content';

    var testButton = document.createElement('button');
    testButton.textContent = 'Create Test';

    testButton.addEventListener('click', function() {
        console.log('Create Test')
        let name = nameInput.value;
        let position = positionInput.value;
        let content = contentInput.value;
        let data = {
            id: null,
            name: name,
            position: position,
            details: content,
            isDone: false,
            roadmap:null
        }
        console.log(data)
        let dat;

        fetch('http://localhost:8080/api/step', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                window.location.href = 'createTest.html?step=' + encodeURIComponent(JSON.stringify(data));
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        // window.location.href = 'create-test.html?step=' + encodeURIComponent(JSON.stringify(dat.Object));
    });

    // Append the input fields and button to the content div
    content.appendChild(nameInput);
    content.appendChild(positionInput);
    content.appendChild(contentInput);
    content.appendChild(testButton);

    // Append the content div to the container
    container.appendChild(content);

    // Append the container to the timeline
    document.querySelector('.timeline').appendChild(container);

    // Increment the step count
    stepCount++;
});

document.getElementById('saveRoadmap').addEventListener('click', function() {
    // Hide the timeline
    document.querySelector('.timeline').style.display = 'none';

    // Create a new container
    var container = document.createElement('div');
    container.className = 'inputContainer';

    // Create the input fields
    var nameInput = document.createElement('input');
    nameInput.placeholder = 'Roadmap Name';

    var domainInput = document.createElement('input');
    domainInput.placeholder = 'Domain';

    var daysInput = document.createElement('input');
    daysInput.placeholder = 'Available Days';

    var difficultyInput = document.createElement('input');
    difficultyInput.placeholder = 'Difficulty Level';

    var priceInput = document.createElement('input');
    priceInput.placeholder = 'Price';

    // Append the input fields to the container
    container.appendChild(nameInput);
    container.appendChild(domainInput);
    container.appendChild(daysInput);
    container.appendChild(difficultyInput);
    container.appendChild(priceInput);

    // Append the container to the body
    document.body.appendChild(container);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const backButton = document.getElementById('logout_button');
    backButton.addEventListener('click', () => {
        window.location.href = 'roadmaps_main_window.html';
    });
});