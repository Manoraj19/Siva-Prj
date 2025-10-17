document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('send-button');
    const initialView = document.getElementById('initial-view');
    const thankYouView = document.getElementById('thank-you-view');
    const heartsContainer = document.querySelector('.hearts');

    sendButton.addEventListener('click', () => {
        initialView.style.animation = 'fadeOut 1s forwards';
        setTimeout(() => {
            initialView.classList.add('hidden');
            thankYouView.classList.remove('hidden');
            thankYouView.style.animation = 'fadeIn 2s forwards';
        }, 1000);
    });

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 5 + 5}s`; // 5-10 seconds
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000); // Remove heart after 10 seconds
    }

    setInterval(createHeart, 300); // Create a new heart every 300ms
});

// Add fadeOut keyframes to the stylesheet
const styleSheet = document.styleSheets[0];
const keyframes =
`@keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
}`;
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);