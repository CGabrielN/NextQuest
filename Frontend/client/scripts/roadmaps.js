const BASE_API_URL = 'http://localhost:8080/api';

const params = new URLSearchParams(window.location.search);

const userData = params.get('user');
const user = JSON.parse(decodeURIComponent(userData));

// console.log(user);

let userNameElement = document.getElementById('user_name');
userNameElement.textContent = user.fullName;

window.onload = function () {
    function populateContainer(apiEndpoint) {
        let container = document.getElementById('filterable-cards');

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
                for (let i = 0; i < data.length; i++) {
                    let card = document.createElement('div');
                    card.className = 'card p-0 generated-card';
                    card.setAttribute('data-name', 'nature');
                    card.style.display = 'flex';
                    card.style.justifyContent = 'center';
                    card.style.alignItems = 'center';
                    card.style.height = 400 + 'px';
                    card.style.width = 200 + 'px';

                    // Create the img element
                    let img = document.createElement('img');
                    let imgSrc = data[i].imgPath;
                    img.src = '../assets/' + imgSrc;
                    img.alt = 'img';
                    img.height = 200;
                    img.width = 200;
                    card.appendChild(img);

                    // Create the card body div
                    let cardBody = document.createElement('div');
                    cardBody.className = 'card-body';


                    // Create the card title
                    let cardTitle = document.createElement('h6');
                    cardTitle.className = 'card-title';
                    cardTitle.textContent = data[i].name; // Replace with the actual property name
                    cardBody.appendChild(cardTitle);

                    // Create the card text
                    let cardText1 = document.createElement('p');
                    cardText1.className = 'card-text';
                    cardText1.textContent = 'Difficulty: ' + data[i].difficulty; // Replace with the actual property name
                    cardBody.appendChild(cardText1);

                    if (data[i].price > 0) {
                        let buyButton = document.createElement('button');
                        buyButton.textContent = 'Buy';
                        buyButton.style.position = 'absolute'; // Set the position of the button to absolute
                        buyButton.style.right = '10px'; // Position the button 10px from the right edge of the card
                        buyButton.style.bottom = '10px'; // Position the button 10px from the bottom edge of the card
                        buyButton.style.padding = '10px 20px'; // Add padding to the button
                        buyButton.style.borderRadius = '12px';
                        cardBody.appendChild(buyButton);
                    } else {
                        let buyButton = document.createElement('button');
                        buyButton.textContent = 'See Free Roadmap';
                        buyButton.style.position = 'absolute'; // Set the position of the button to absolute
                        buyButton.style.right = '10px'; // Position the button 10px from the right edge of the card
                        buyButton.style.bottom = '10px'; // Position the button 10px from the bottom edge of the card
                        buyButton.style.padding = '10px 20px'; // Add padding to the button
                        buyButton.style.borderRadius = '12px';
                        cardBody.appendChild(buyButton);
                    }

                    let cardText2 = document.createElement('p');
                    cardText2.className = 'card-text';
                    cardText2.textContent = 'Price: ' + data[i].price; // Replace with the actual property name
                    cardBody.appendChild(cardText2);

                    card.appendChild(cardBody);

                    cardBody.addEventListener('click', function () {
                        let domainSearch = document.getElementById('domainSearch').value;
                        let paid = document.getElementById('paid').checked;
                        let free = document.getElementById('free').checked;
                        let apiEndpoint;
                        if (paid) {
                            apiEndpoint = `${BASE_API_URL}/roadmaps/getPayedRoadmaps/${domainSearch}`;
                        } else if(free) {
                            apiEndpoint = `${BASE_API_URL}/roadmaps/getFreeRoadmaps/${domainSearch}`;
                        }
                        else{
                            apiEndpoint = `${BASE_API_URL}/roadmaps/getAll`;
                        }
                        populateContainer(apiEndpoint);
                    });
                    container.appendChild(card);
                }

                let cards = document.getElementsByClassName('generated-card');
                for (let i = 0; i < cards.length; i++) {
                    cards[i].style.flex = '0 0 calc(30% - 10px)';
                    cards[i].style.maxWidth = 'calc(30% - 10px)';
                    cards[i].style.margin = '12px';
                }
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }

    populateContainer(`${BASE_API_URL}/roadmaps/getAll`);

    let searchButton = document.getElementById('search_button');

    searchButton.addEventListener('click', function () {
        let domainSearch = document.getElementById('domainSearch').value;
        let paid = document.getElementById('paid').checked;
        let free = document.getElementById('free').checked;
        let apiEndpoint;
        if (paid) {
            apiEndpoint = `${BASE_API_URL}/roadmaps/getPayedRoadmaps/${domainSearch}`;
        } else if(free) {
            apiEndpoint = `${BASE_API_URL}/roadmaps/getFreeRoadmaps/${domainSearch}`;
        }
        else{
            apiEndpoint = `${BASE_API_URL}/roadmaps/getAll`;
        }
        populateContainer(apiEndpoint);
    });
}


let goRoadmapButton = document.getElementById('logout_button');

goRoadmapButton.addEventListener('click', function () {
    let apiEndpoint = `${BASE_API_URL}/roadmaps/getAllByDomain/lemn`;

    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            let dataString = encodeURIComponent(JSON.stringify(data));

            window.location.href = `show_tour_roadmap.html?data=${dataString}`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

let createRoadmapButton = document.getElementById('create_roadmap');

createRoadmapButton.addEventListener('click', function () {
    window.location.href = 'createRoadmapHori.html';
});