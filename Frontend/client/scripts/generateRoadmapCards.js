function populateContainer() {
    // Get the container element
    var container = document.getElementById('filterable-cards');

    fetch('http://192.168.35.38:8080/api/roadmaps/getAll')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            // Loop to create the specified number of cards
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

                container.appendChild(card);
            }

            // Adjust the CSS to limit the number of cards per row to 4
            var cards = document.getElementsByClassName('generated-card');
            for (var i = 0; i < cards.length; i++) {
                cards[i].style.flex = '0 0 calc(30% - 10px)';
                cards[i].style.maxWidth = 'calc(30% - 10px)';
                cards[i].style.margin = '12px';
            }
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}