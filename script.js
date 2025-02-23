const songs = ['music.mp3', 'music1.mp3', ' music2.mp3']; 
let currentSongIndex = 0; 
function playNextSong() {
    var audio = new Audio(songs[currentSongIndex]);
    audio.loop = false; 
    audio.volume = 0.4;
    audio.addEventListener('ended', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length; 
        playNextSong(); 
    });
    audio.play(); 
}
function userHasClicked() {
    document.getElementById("flexboxcontainer").style.display = "none";
    document.getElementById("flexboxcontainer").style.width = 0;
    document.getElementById("flexboxcontainer").style.height = 0;
    const hiddenContainer = document.getElementById("hiddencontainer");
    hiddenContainer.style.display = "flex";
    playNextSong(); 

    setTimeout(() => {
        hiddenContainer.style.opacity = 1;
    }, 50);
}
function updateFlicker() {
    const randomOpacity = Math.random() * 0.75 + 0.75;

    const flickerTexts = document.querySelectorAll('.flickertext').forEach(element => {
        element.style.setProperty('--rand', randomOpacity);
    });
}
setInterval(updateFlicker, 500);
