document.querySelectorAll('.play-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Playing music...');
        // Here you can add real functionality to play a music file, e.g., using HTML5 <audio> tag
    });
});
// Firebase Authentication example (simplified)
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    // Handle successful login
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // Handle login error
  });
document.getElementById('search-bar').addEventListener('input', function(e) {
    const query = e.target.value;
    fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`)
      .then(response => response.json())
      .then(data => {
        const tracks = data.tracks.items;
        let resultsHTML = '';
        tracks.forEach(track => {
          resultsHTML += `<div class="track">
                            <h4>${track.name}</h4>
                            <p>Artist: ${track.artists[0].name}</p>
                            <button class="play-btn">Play</button>
                          </div>`;
        });
        document.getElementById('search-results').innerHTML = resultsHTML;
      });
});
let playlist = [];

// Function to add a song to the playlist
function addToPlaylist(song) {
    playlist.push(song);
    localStorage.setItem('playlist', JSON.stringify(playlist));
}

// Display playlist
function displayPlaylist() {
    const storedPlaylist = JSON.parse(localStorage.getItem('playlist'));
    storedPlaylist.forEach(song => {
        // Display song details on the page
    });
}

