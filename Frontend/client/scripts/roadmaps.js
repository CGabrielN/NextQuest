// Get the query parameters from the current URL
// const params = new URLSearchParams(window.location.search);
//
// // Extract the user data from the query parameters
// const userData = params.get('user');
//
// // Parse the user data from a JSON string to a JavaScript object
// const user = JSON.parse(decodeURIComponent(userData));
//
// // Log the user data
// console.log(user);
//
// // Get the user_name element
// var userNameElement = document.getElementById('user_name');
//
// // Set the text content of the user_name element to user.fullName
// userNameElement.textContent = user.fullName;

window.onload = function () {
    function populateContainer(apiEndpoint) {
        // Get the container element
        var container = document.getElementById('filterable-cards');

        fetch(apiEndpoint)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Clear the container
                while (container.firstChild) {
                    container.removeChild(container.firstChild);
                }
                for (var i = 0; i < data.length; i++) {
                    // Create a new card div
                    var card = document.createElement('div');
                    card.className = 'card p-0 generated-card';
                    card.setAttribute('data-name', 'nature');
                    card.style.display = 'flex';
                    card.style.justifyContent = 'center';
                    card.style.alignItems = 'center';
                    card.style.height = 400 + 'px';
                    card.style.width = 200 + 'px';


                    // Create the img element
                    var img = document.createElement('img');
                    let imgSrc = data[i].imgPath;
                    img.src = '../assets/' + imgSrc;
                    img.alt = 'img';
                    img.height = 200;
                    img.width = 200;
                    card.appendChild(img);

                    // Create the card body div
                    var cardBody = document.createElement('div');
                    cardBody.className = 'card-body';


                    // Create the card title
                    var cardTitle = document.createElement('h6');
                    cardTitle.className = 'card-title';
                    cardTitle.textContent = data[i].name; // Replace with the actual property name
                    cardBody.appendChild(cardTitle);

                    // Create the card text
                    var cardText1 = document.createElement('p');
                    cardText1.className = 'card-text';
                    cardText1.textContent = 'Difficulty: ' + data[i].difficulty; // Replace with the actual property name
                    cardBody.appendChild(cardText1);

                    if (data[i].price > 0) {
                        var buyButton = document.createElement('button');
                        buyButton.textContent = 'Buy';
                        buyButton.style.position = 'absolute'; // Set the position of the button to absolute
                        buyButton.style.right = '10px'; // Position the button 10px from the right edge of the card
                        buyButton.style.bottom = '10px'; // Position the button 10px from the bottom edge of the card
                        buyButton.style.padding = '10px 20px'; // Add padding to the button
                        buyButton.style.borderRadius = '12px';
                        cardBody.appendChild(buyButton);
                    } else {
                        var buyButton = document.createElement('button');
                        buyButton.textContent = 'See Free Roadmap';
                        buyButton.style.position = 'absolute'; // Set the position of the button to absolute
                        buyButton.style.right = '10px'; // Position the button 10px from the right edge of the card
                        buyButton.style.bottom = '10px'; // Position the button 10px from the bottom edge of the card
                        buyButton.style.padding = '10px 20px'; // Add padding to the button
                        buyButton.style.borderRadius = '12px';
                        cardBody.appendChild(buyButton);



                    }

                    var cardText2 = document.createElement('p');
                    cardText2.className = 'card-text';
                    cardText2.textContent = 'Price: ' + data[i].price; // Replace with the actual property name
                    cardBody.appendChild(cardText2);

                    card.appendChild(cardBody);

                    cardBody.addEventListener('click', function () {
                        // Get the values from your input fields
                        var domainSearch = document.getElementById('domainSearch').value;
                        var paid = document.getElementById('paid').checked;
                        var free = document.getElementById('free').checked;
                        // Define the apiEndpoint within the click event listener
                        var apiEndpoint;
                        if (paid) {
                            apiEndpoint = `http://192.168.35.38:8080/api/roadmaps/getPayedRoadmaps/${domainSearch}`;
                        } else if(free) {
                            apiEndpoint = `http://192.168.35.38:8080/api/roadmaps/getFreeRoadmaps/${domainSearch}`;
                        }
                        else{
                            apiEndpoint = `http://192.168.35.38:8080/api/roadmaps/getAll`;
                        }
                        populateContainer(apiEndpoint);
                    });
                    container.appendChild(card);
                }

                // Adjust the CSS to limit the number of cards per row to 4
                var cards = document.getElementsByClassName('generated-card');
                for (var i = 0; i < cards.length; i++) {
                    cards[i].style.flex = '0 0 calc(30% - 10px)';
                    cards[i].style.maxWidth = 'calc(30% - 10px)';
                    cards[i].style.margin = '12px';
                }
                // Rest of the code...
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }

    // Populate the container with all roadmaps initially
    populateContainer('http://192.168.35.38:8080/api/roadmaps/getAll');

    // Get the search button
    var searchButton = document.getElementById('search_button');

    // Add an event listener to the search button
    // Add an event listener to the search button
    // Add an event listener to the search button
    searchButton.addEventListener('click', function () {
        // Get the values from your input fields
        var domainSearch = document.getElementById('domainSearch').value;
        var paid = document.getElementById('paid').checked;
        var free = document.getElementById('free').checked;
        // Define the apiEndpoint within the click event listener
        var apiEndpoint;
        if (paid) {
            apiEndpoint = `http://192.168.35.38:8080/api/roadmaps/getPayedRoadmaps/${domainSearch}`;
        } else if(free) {
            apiEndpoint = `http://192.168.35.38:8080/api/roadmaps/getFreeRoadmaps/${domainSearch}`;
        }
        else{
            apiEndpoint = `http://192.168.35.38:8080/api/roadmaps/getAll`;
        }

        // Populate the container with the new data
        populateContainer(apiEndpoint);
    });
}


// Get the "Go to your Roadmap" button
var goRoadmapButton = document.getElementById('back_button');

// Add an event listener to the button
goRoadmapButton.addEventListener('click', function () {
    // Define the API endpoint
    var apiEndpoint = 'http://192.168.35.38:8080/api/roadmaps/getAllByDomain/lemn';

    // Use fetch to get the data from the API endpoint
    fetch(apiEndpoint)
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            // Convert the data to a JSON string
            var dataString = encodeURIComponent(JSON.stringify(data));

            // Redirect the user to the show_tour_roadmap page and send the data as a parameter
            window.location.href = `show_tour_roadmap.html?data=${dataString}`;
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
        });
});

var createRoadmapButton = document.getElementById('create_roadmap');

// Add an event listener to the button
createRoadmapButton.addEventListener('click', function () {
    // Redirect the user to the createRoadmapHori.html page
    window.location.href = 'createRoadmapHori.html';
});