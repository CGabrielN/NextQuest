function createStep(name, content, testLink) {
    // Create a new container
    var container = document.createElement('div');
    container.className = stepCount % 2 === 0 ? 'container left' : 'container right';

    // Create the content div
    var contentDiv = document.createElement('div');
    contentDiv.className = 'content';

    // Create the name heading
    var nameElement = document.createElement('h2');
    nameElement.textContent = name;

    // Create the content text
    var contentText = document.createElement('p');
    contentText.textContent = content;

    // Create the test link
    var link = document.createElement('a');
    link.href = testLink;
    link.textContent = 'Test Link';

    // Append the name, content, and link to the content div
    contentDiv.appendChild(nameElement);
    contentDiv.appendChild(contentText);
    contentDiv.appendChild(link);

    // Append the content div to the container
    container.appendChild(contentDiv);

    // Append the container to the timeline
    document.querySelector('.timeline').appendChild(container);

    // Increment the step count
    stepCount++;
}

// Call the createStep function with the name, content, and test link for each step
createStep('Step 1', 'Content for Step 1', 'http://example.com/test1');
createStep('Step 2', 'Content for Step 2', 'http://example.com/test2');
createStep('Step 3', 'Content for Step 3', 'http://example.com/test3');
createStep('Step 4', 'Content for Step 4', 'http://example.com/test4');