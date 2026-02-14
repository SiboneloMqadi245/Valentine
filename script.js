// 1. Personalize the name 
document.getElementById('name').textContent = 'Nomnotho'; // <-- change name here

// 2. Love quotes array
const quotes = [
    " 💕",
    " ❤️",
    "You stole my heart, but I'll let you keep it. 💘",
    "Every love story is beautiful, but ours is my favourite. 📖",
    "I knew you were special the moment I met you. ✨",
    "You make my heart skip a beat. 💓",
    "If I had a flower for every time I thought of you, I could walk in my garden forever. 🌸"
];

// 3. Quote changer
const quoteDisplay = document.getElementById('quote-display');
const newQuoteBtn = document.getElementById('new-quote');

newQuoteBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
});

// 4. Secret message reveal
const revealBtn = document.getElementById('reveal-btn');
const secretMessage = document.getElementById('secret-message');

revealBtn.addEventListener('click', () => {
    secretMessage.textContent = "You are the reason I smile every day. Happy Valentine's Day, my love! 💌";
    secretMessage.classList.add('show');
    revealBtn.style.display = 'none'; // Hide button after reveal (optional)
});

// 5. Bonus: Create many floating hearts dynamically
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's'; // between 3-6s
    heart.style.fontSize = Math.random() * 20 + 10 + 'px'; // 10-30px
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    document.querySelector('.hearts').appendChild(heart);

    // Remove heart after animation ends to avoid too many elements
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Generate a new heart every 500ms
setInterval(createHeart, 500);

// 6. Music player controls
const loveSong = document.getElementById('love-song');
const playPauseBtn = document.getElementById('play-pause');
const volumeSlider = document.getElementById('volume');

playPauseBtn.addEventListener('click', () => {
    if (loveSong.paused) {
        loveSong.play();
        playPauseBtn.textContent = '⏸️ Pause Music';
    } else {
        loveSong.pause();
        playPauseBtn.textContent = '❤️ Play Music';
    }
});

// Volume control
volumeSlider.addEventListener('input', (e) => {
    loveSong.volume = e.target.value;
});