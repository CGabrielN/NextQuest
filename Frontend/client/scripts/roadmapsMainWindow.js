const BASE_API_URL = 'http://localhost:8080/api';

function populateContainer(apiEndpoint) {
    let container = document.getElementById('filterable-cards');
    container.innerHTML = '';

    fetch(apiEndpoint)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                // Create a new card div
                let card = document.createElement('div');
                card.className = 'generatedCard';
                card.setAttribute('data-name', 'nature');


                // Create the img element
                let img = document.createElement('img');
                let imgSrc = data[i].imgPath;
                img.src = '../assets/' + imgSrc;
                card.appendChild(img);

                // Create the card body div
                let cardBody = document.createElement('div');


                // Create the card title
                let cardTitle = document.createElement('h6');
                cardTitle.textContent = data[i].name;
                cardBody.appendChild(cardTitle);

                // Create the card text
                let cardText1 = document.createElement('label');
                cardText1.className = 'difficultyLabel';
                cardText1.textContent = 'Domain: ' + data[i].domain + ' - ' + data[i].difficulty;
                cardBody.appendChild(cardText1);

                let buyButton = document.createElement('button');
                buyButton.textContent = data[i].price > 0 ? 'Buy' : 'See Free Roadmap';
                cardBody.appendChild(buyButton);

                let cardText2 = document.createElement('label');
                cardText2.className = 'priceLabel';
                cardText2.textContent = 'Price: $' + data[i].price;
                cardBody.appendChild(cardText2);

                card.appendChild(cardBody);

                container.appendChild(card);
            }

            let cards = document.getElementsByClassName('generatedCard');
            for (let i = 0; i < cards.length; i++) {
                cards[i].style.flex = '0 0 22%';
                cards[i].style.maxWidth = '22%';
                cards[i].style.margin = '20px';
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

window.onload = function () {
    populateContainer(`${BASE_API_URL}/roadmaps/getAll`);

    populateCardLeft();

    setFieldsAndEvents();
}

function populateCardLeft() {
    const params = new URLSearchParams(window.location.search);

    const userData = params.get('user');
    const user = JSON.parse(decodeURIComponent(userData));

    console.log(user);

    let userNameElement = document.getElementById('user_name');
    userNameElement.textContent = user.fullName;


    let apiEndpoint = `${BASE_API_URL}/roadmaps/getRoadmapForUser/${user.id}`;

    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            let card = document.getElementById('card-left');
            let cardImage = document.getElementById('leftCardImage');
            let cardName = document.getElementById('leftCardName');
            let cardDifficulty = document.getElementById('leftCardDifficulty');

            let roadmap = data;
            cardImage.src = '../assets/' + roadmap.imgPath;
            cardName.textContent = roadmap.name;
            cardDifficulty.textContent = 'Domain: ' + roadmap.domain + ' - ' + roadmap.difficulty;

            card.addEventListener('click', function () {
                let dataString = encodeURIComponent(JSON.stringify(roadmap));
                window.location.href = `show_tour_roadmap.html?data=${dataString}`;
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


function setFieldsAndEvents() {
    let logoutButton = document.getElementById('logout_button');

    logoutButton.addEventListener('click', function () {
        window.location.href = '../html-files/login.html';
    });

    let createRoadmapButton = document.getElementById('create_roadmap');

    createRoadmapButton.addEventListener('click', function () {
        window.location.href = 'createRoadmapHori.html';
    });

    let searchButton = document.getElementById('search_button');
    let paidCheck = document.getElementById('paidBox');
    let freeCheck = document.getElementById('freeBox');

    searchButton.addEventListener('click', function () {
        let domainSearch = document.getElementById('domainSearch').value;
        let paid = paidCheck.checked;
        let free = freeCheck.checked;
        let apiEndpoint;
        if (paid && free) {
            if (domainSearch.trim() !== '') {
                apiEndpoint = `${BASE_API_URL}/roadmaps/getAllByDomain/${domainSearch}`;
            } else {
                apiEndpoint = `${BASE_API_URL}/roadmaps/getAll`;
            }
        } else if (paid) {
            if (domainSearch.trim() !== '') {
                apiEndpoint = `${BASE_API_URL}/roadmaps/getPayedRoadmapsByDomain/${domainSearch}`;
            } else {
                apiEndpoint = `${BASE_API_URL}/roadmaps/getPayedRoadmaps`;
            }
        } else if (free) {
            if (domainSearch.trim() !== '') {
                apiEndpoint = `${BASE_API_URL}/roadmaps/getFreeRoadmapsByDomain/${domainSearch}`;
            } else {
                apiEndpoint = `${BASE_API_URL}/roadmaps/getFreeRoadmaps`;
            }
        } else {
            if(domainSearch.trim() !== ''){
                apiEndpoint = `${BASE_API_URL}/roadmaps/getAllByDomain/${domainSearch}`;
            } else {
                apiEndpoint = `${BASE_API_URL}/roadmaps/getAll`;
            }
        }
        populateContainer(apiEndpoint);
    });
}

