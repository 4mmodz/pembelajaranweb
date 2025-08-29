function showSection(id) {
  document.querySelectorAll('.card').forEach(card => card.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function toggleDark() {
  document.body.classList.toggle('dark-mode');
}

// Music Play/Pause
const music = document.getElementById("myMusic");
let isPlaying = false;

function toggleMusic() {
  if (isPlaying) {
    music.pause();
  } else {
    music.play();
  }
  isPlaying = !isPlaying;
}