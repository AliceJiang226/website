document.getElementById('helloBtn').addEventListener('click', function() {
    alert('Hello from your new website!');
});

function flipCard(card) {
    card.classList.toggle('flipped');
}

document.getElementById('movie-survey-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const movie = document.getElementById('favorite-movie').value.trim();
    const responseDiv = document.getElementById('survey-response');
    const feedbackBar = document.getElementById('survey-feedback-bar');
    if (movie) {
        responseDiv.textContent = `Thank you for sharing! Your favorite movie is: "${movie}"`;
        document.getElementById('favorite-movie').value = '';
        // Show feedback bar
        feedbackBar.textContent = Math.random() > 0.5 ? 'Amazing!' : 'Nice!';
        feedbackBar.classList.add('show');
        setTimeout(() => {
            feedbackBar.classList.remove('show');
        }, 3000);
    } else {
        responseDiv.textContent = 'Please enter a movie name.';
    }
});
