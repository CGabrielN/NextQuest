document.addEventListener('DOMContentLoaded', (event) => {
    const backButton = document.getElementById('logout_button');
    backButton.addEventListener('click', () => {
        window.location.href = 'roadmaps_main_window.html';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {

    var urlParams = new URLSearchParams(window.location.search);

// Get the questions and responses from the URL parameters
    var questionsAndResponsesString = urlParams.get('step');

// Decode the questions and responses string
    var questionsAndResponsesDecoded = decodeURIComponent(questionsAndResponsesString);

// Parse the questions and responses string as JSON
    var step = JSON.parse(questionsAndResponsesDecoded);

    console.log(step);

    var apiEndpoint = `http://localhost:8080/api/getTestForStep/${step.id}`;

    fetch(apiEndpoint)
        .then(response => response.json()) // Parse the response as JSON
        .then(test => {
            console.log(test);


            var dropdownMenu = document.getElementById('dropdownMenu');

            let questions = test.questions;
            console.log(questions);

            let questionKeys = Object.keys(questions);
            for (let key of questionKeys) {
                let question = questions[key];

                var option = document.createElement('option');
                option.text = question.question;
                option.value = question.id;
                dropdownMenu.add(option);
            }

            var paragraph = document.getElementById('paragraph');
            paragraph.innerHTML = questions[0].question;

            var firstQuestionKey = Object.keys(questions)[0];
            var responses = questions[firstQuestionKey];
            var firstResponse = responses[0];
            var secondResponse = responses[1];
            var thirdResponse = responses[2];
            var forthResponse = responses[3];

            var option1 = document.getElementById('option1');
            var option2 = document.getElementById('option2');
            var option3 = document.getElementById('option3');
            var option4 = document.getElementById('option4');

            var responseText = firstResponse.response;

            option1.innerHTML = responseText;
            responseText = secondResponse.response;
            option2.innerHTML = responseText;
            responseText = thirdResponse.response;
            option3.innerHTML = responseText;
            responseText = forthResponse.response;
            option4.innerHTML = responseText;

            let responseCorrect = firstResponse.correct;

            console.log(responseText);


        })
        .catch(error => {
            console.error('Error:', error);
        });


});