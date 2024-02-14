document.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio('d4vd_-_This_Is_How_It_Feels_feat_Laufey__FlexyOkay.com.mp3');
    const playButton = document.getElementById('playButton');

    // Event listener for play button click
    playButton.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click event from reaching the envelope
        audio.loop = true;
        audio.play();
        playButton.style.display = 'none'; // Hide the play button after clicking
    });

    // Attach click event listener to the envelope
    const envelope = document.querySelector('.envelope-wrapper');
    envelope.addEventListener('click', () => {
        envelope.classList.toggle('flap');
    });
});
