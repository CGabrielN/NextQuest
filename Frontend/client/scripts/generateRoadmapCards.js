function populateContainer(numCards) {
    // Get the container element
    var container = document.getElementById('filterable-cards');

    // Loop to create the specified number of cards
    for (var i = 0; i < numCards; i++) {
        // Create a new card div
        var card = document.createElement('div');
        card.className = 'card p-0 generated-card';
        card.setAttribute('data-name', 'nature');

        // Create the img element
        var img = document.createElement('img');
        img.src = '../assets/corgi.jpg';
        img.alt = 'img';
        card.appendChild(img);

        // Create the card body div
        var cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // Create the card title
        var cardTitle = document.createElement('h6');
        cardTitle.className = 'card-title';
        cardTitle.textContent = 'Roadmap name';
        cardBody.appendChild(cardTitle);

        // Create the card text
        var cardText1 = document.createElement('p');
        cardText1.className = 'card-text';
        cardText1.textContent = 'Difficulty: advanced';
        cardBody.appendChild(cardText1);

        var buyButton = document.createElement('button');
        buyButton.textContent = 'Buy';
        buyButton.style.position = 'absolute'; // Set the position of the button to absolute
        buyButton.style.right = '10px'; // Position the button 10px from the right edge of the card
        buyButton.style.bottom = '10px'; // Position the button 10px from the bottom edge of the card
        buyButton.style.padding = '10px 20px'; // Add padding to the button
        buyButton.style.borderRadius = '12px';
        cardBody.appendChild(buyButton);

        var cardText2 = document.createElement('p');
        cardText2.className = 'card-text';
        cardText2.textContent = 'Price: 2500';
        cardBody.appendChild(cardText2);

        // Append the card body to the card
        card.appendChild(cardBody);

        // Append the card to the container
        container.appendChild(card);
    }

    // Adjust the CSS to limit the number of cards per row to 4
    var cards = document.getElementsByClassName('generated-card');
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.flex = '0 0 calc(30% - 10px)';
        cards[i].style.maxWidth = 'calc(30% - 10px)';
        cards[i].style.margin = '12px';
    }
}

// Call the function with the number of cards you want to generate
populateContainer(92);