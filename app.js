const quotes = {
    1: ["It's okay to feel sad sometimes.", "Take a deep breath and let it out slowly."],
    2: ["Things will get better.", "Talk to someone you trust."],
    3: ["Neutral is a good place to start.", "Try doing something you enjoy."],
    4: ["You're doing great!", "Keep smiling!"],
    5: ["Happiness looks good on you.", "Spread your positivity!"],
    6: ["You're shining bright!", "Keep up the good vibes!"],
    7: ["You're amazing!", "Celebrate your wins!"],
    8: ["Keep being awesome!", "Share your happiness with others!"],
    9: ["You're unstoppable!", "Keep chasing your dreams!"],
    10: ["You're radiating joy!", "Keep spreading love and kindness!"]
};

const emojis = document.querySelectorAll('.emoji');
const quoteElement = document.getElementById('quote');
const tipElement = document.getElementById('tip');

emojis.forEach(emoji => {
    emoji.addEventListener('click', () => {
        // Remove previous selection
        emojis.forEach(e => e.classList.remove('selected'));
        emoji.classList.add('selected');

        const value = emoji.getAttribute('data-value');
        const messages = quotes[value];
        let randomQuote, randomTip;

        // Ensure quote and tip are different
        do {
            randomQuote = messages[Math.floor(Math.random() * messages.length)];
            randomTip = messages[Math.floor(Math.random() * messages.length)];
        } while (randomQuote === randomTip);

        quoteElement.textContent = `Quote: ${randomQuote}`;
        tipElement.textContent = `Tip: ${randomTip}`;
    });
});