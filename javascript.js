document.querySelectorAll('.play-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Playing music...');
        // Here you can add real functionality to play a music file, e.g., using HTML5 <audio> tag
    });
});
