const mp3 = new Audio("lemonadediary.mp3");

const music = document.querySelector(".fa-music");

music.addEventListener("click", handleMusicPlay);

function handleMusicPlay() {
  if (music.classList.contains("music")) {
    mp3.play();
    mp3.loop = true;
    mp3.volume = 0.5;
    music.classList.remove("music");
  } else {
    mp3.pause();
    mp3.currentTime = 0;
    music.classList.add("music");
  }
}
