document.getElementById('helloBtn').addEventListener('click', function() {
    alert('Hello from your new website!');
});

function flipCard(card) {
    card.classList.toggle('flipped');
}

// Snowflake animation
function createSnowflake() {
    const snowflake = document.createElement('span');
    snowflake.className = 'snowflake';
    snowflake.innerHTML = '❄';
    const size = Math.random() * 1.5 + 1;
    snowflake.style.fontSize = size + 'em';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = (Math.random() * 2 + 3) + 's';
    snowflake.style.opacity = Math.random() * 0.5 + 0.5;
    document.getElementById('snowflakes-container').appendChild(snowflake);
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}
setInterval(createSnowflake, 250);
