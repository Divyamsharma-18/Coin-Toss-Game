function tossCoin(playerChoice) {
    const coin = document.getElementById('coin');
    const message = document.getElementById('message');
    const result = document.getElementById('result');

    // Generate the coin result
    const random = Math.random() < 0.5 ? 'heads' : 'tails';
    
    // Add flip animation class
    coin.classList.add('flip');
    
    // Clear previous classes and set the new result
    setTimeout(() => {
        coin.className = 'coin'; // Reset class
        if (random === 'heads') {
            coin.textContent = 'Heads';
            coin.classList.add('heads'); // Apply heads background
        } else {
            coin.textContent = 'Tails';
            coin.classList.add('tails'); // Apply tails background
        }

        // Display the result of the coin toss
        result.textContent = `The coin landed on ${random}.`;
        
        // Check if the player's choice matches the coin's result
        if (playerChoice === random) {
            message.textContent = 'You guessed correctly!';
            message.style.color = 'green';
        } else {
            message.textContent = 'Sorry, try again!';
            message.style.color = 'red';
        }

        // Remove flip animation class after animation
        coin.classList.remove('flip');
    }, 500); // Adjust delay to match animation duration
}

function resetGame() {
    const coin = document.getElementById('coin');
    const message = document.getElementById('message');
    const result = document.getElementById('result');

    // Reset the coin to default
    coin.textContent = '';
    coin.className = 'coin'; // Reset background

    // Clear the messages
    message.textContent = '';
    result.textContent = '';
}

