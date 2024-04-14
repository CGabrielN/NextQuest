let questions = [];

document.addEventListener('DOMContentLoaded', (event) => {
    const backButton = document.getElementById('back_button');
    backButton.addEventListener('click', () => {
        window.location.href = 'roadmaps.html';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const createQuestionButton = document.getElementById('createQuestionButton');
    const questionsContainer = document.getElementById('questionsContainer');
    let questionCount = 1;

    createQuestionButton.addEventListener('click', () => {
        // Get the input values
        const question = document.getElementById('questionInput').value;
        const response1 = document.getElementById('response1Input').value;
        const response2 = document.getElementById('response2Input').value;
        const response3 = document.getElementById('response3Input').value;
        const response4 = document.getElementById('response4Input').value;
        const correctAnswer = document.getElementById('correctAnswerInput').value;

        const responses = [response1, response2, response3, response4];
        questions.push({
            question: question,
            responses: responses.map((response, index) => ({
                response: response,
                is_correct: index + 1 === correctAnswer
            }))
        });


        // Create a new div for the question
        const questionDiv = document.createElement('div');
        questionDiv.style.width = '100%';
        questionDiv.style.display = 'flex';
        questionDiv.style.flexDirection = 'column';
        questionDiv.style.marginBottom = '50px';

        const questionLabel = document.createElement('label');
        questionLabel.textContent = `${questionCount}. ${question}`;
        questionLabel.style.width = '100%';
        questionLabel.style.textAlign = 'center'; // Center the question
        questionDiv.appendChild(questionLabel);

        // Add the responses
        const responsesDiv = document.createElement('div');
        responsesDiv.style.display = 'flex';
        responsesDiv.style.justifyContent = 'space-between';
        const responseLabels = ['a', 'b', 'c', 'd']; // Labels for the responses
        for (let i = 1; i <= 4; i++) {
            const responseLabel = document.createElement('label');
            responseLabel.textContent = `${responseLabels[i - 1]}. ${eval('response' + i)}`; // Add the label before the response
            responseLabel.style.color = (i == correctAnswer) ? 'green' : 'red';
            responsesDiv.appendChild(responseLabel);
        }
        questionDiv.appendChild(responsesDiv);

        // Add the question div to the questions container
        questionsContainer.appendChild(questionDiv);

        questionCount++;

        // Clear the input fields
        questionInput.value = '';
        response1Input.value = '';
        response2Input.value = '';
        response3Input.value = '';
        response4Input.value = '';
        correctAnswerInput.value = '';
    });
});


document.getElementById('createTestButton').addEventListener('click', async () => {
    // Get the test name from the input field
    const testName = document.getElementById('testNameInput').value;

    let urlParams = new URLSearchParams(window.location.search);
    let step = urlParams.get('step');

    console.log(step);
    // Create the test
    const response = await fetch('http://192.168.35.38:8080/api/test', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            test_id: null,
            name: testName,
            points: 50,
            step: step // Assuming `step` is a global variable
        })
    });
    const test = await response.json();
    console.log(test);

    // Create the questions
    for (const question of questions) {
        const response = await fetch('http://192.168.35.38:8080/api/question', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                question_id: null,
                question: question.question,
                test: test
            })
        });
        const createdQuestion = await response.json();
        console.log(createdQuestion);

        // Create the responses
        for (const response of question.responses) {
            await fetch('http://192.168.35.38:8080/api/response', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    response_id: null,
                    is_correct: response.is_correct,
                    response: response.response,
                    question: createdQuestion
                })
            });
        }
    }

    // Clear the questions array
    questions = [];
});


