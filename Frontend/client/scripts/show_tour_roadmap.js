stepCount = 0;

document.addEventListener('DOMContentLoaded', (event) => {
    const backButton = document.getElementById('button');
    backButton.addEventListener('click', () => {
        window.location.href = 'roadmaps_main_window.html';
    });
});

function createStep(name, courses) {

    var container = document.createElement('div');
    container.className = stepCount % 2 === 0 ? 'container left' : 'container right';

    var contentDiv = document.createElement('div');
    contentDiv.className = 'content';

    // Create the name heading
    var nameElement = document.createElement('h2');
    nameElement.textContent = name;

    // Append the name to the content div
    contentDiv.appendChild(nameElement);

    var courseList = document.createElement('ul');

    // Loop through the courses
    // Loop through the courses
    for (let i = 0; i < courses.length; i++) {
        // Create a div for the course button
        var courseDiv = document.createElement('div');

        // Check if the course is a 'Test'
        if (courses[i].name === 'Test') {
            // Create the course button
            var button = document.createElement('button');
            button.textContent = courses[i].name; // Set the button text to the course name

            // Add the event listener to the button
            button.addEventListener('click', function (event) {
                // Prevent the default action
                event.preventDefault();

                // Define the API endpoint for the test
                var apiEndpoint = 'http://localhost:8080/api/getTestForStep/1';

                console.log(courses[i].link);
                window.location.href = courses[i].link;

            });

            // Append the button to the course div
            courseDiv.appendChild(button);
        } else {
            // Create the course link
            var link = document.createElement('a');
            link.href = courses[i].link;
            link.textContent = courses[i].name; // Set the link text to the course name

            // Append the link to the course div
            courseDiv.appendChild(link);
        }

        // Append the course div to the content div
        contentDiv.appendChild(courseDiv);
    }

    // Append the content div to the container
    container.appendChild(contentDiv);

    // Append the container to the timeline
    document.querySelector('.timeline').appendChild(container);

    // Increment the step count
    stepCount++;
}

// Parse the URL parameters
var urlParams = new URLSearchParams(window.location.search);

// Get the data from the URL parameters
var dataString = urlParams.get('data');

// Parse the data string as JSON
var data = JSON.parse(decodeURIComponent(dataString));

// Get the ID of the roadmap from the data
var roadmapId = data[0].id; // Replace with the actual property name for the ID

// Define the API endpoint for the roadmap components (steps)
var apiEndpoint = `http://localhost:8080/api/getStepsForRoadmap/${roadmapId}`;

// Use fetch to get the data from the API endpoint
fetch(apiEndpoint)
    .then(response => response.json()) // Parse the response as JSON
    .then(steps => {
        console.log(steps);

        for (let step of steps) {

            let link = 'take-test.html'
            var dataString = encodeURIComponent(JSON.stringify(step));
            console.log(dataString);
            link += '?step=' + dataString;

            createStep(step.name, [
                {name: 'Course 1 of step' + step.position, link: 'https://youtu.be/S3nx34WFXjI?si=l52qdjhonFRL3lHx'},
                {name: 'Course 2 of step' + step.position, link: 'https://youtu.be/4psGUiKacPQ?si=NsYcI7jRlRt_EU7I'},
                {name: 'Test', link: link},
            ]);
        }

    })
    .catch(error => {
        console.error('Error:', error);
    });
