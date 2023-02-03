// first fetch, main card

async function homeAlbum() {
  const fetchSec2 = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=origins");
  const HomeFetch = await fetchSec2.json();
  console.log(HomeFetch);
  const homeimg = document.querySelector(".homeimg"); // immagine
  homeimg.src = HomeFetch.data[0].album.cover_big;
  const AlbumTitle = document.querySelector(".TitoloCanzone"); // canzone
  AlbumTitle.innerText = HomeFetch.data[0].title;
  const ArtistName = document.querySelector(".ArtistName"); // nome artista
  ArtistName.innerText = HomeFetch.data[0].artist.name;
  let Albumid = String(HomeFetch.data[0].album.id);
  console.log("id da passare", Albumid);
}

const sendAlbum = async function () {
  const fetchSec2 = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=origins");
  const HomeFetch = await fetchSec2.json();
  let Albumid = String(HomeFetch.data[0].album.id);
  window.location.assign(`./album.html?Aid=${Albumid}`);
  console.log("id fuori dalla funzione", Albumid);
};

const homeimg = document.querySelector(".homeimg"); // immagine
homeimg.addEventListener("click", sendAlbum);

const sendArtist = async function () {
  const fetchSec2 = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=origins");
  const HomeFetch = await fetchSec2.json();
  let Artistname = String(HomeFetch.data[0].album.id);
  window.location.assign(`./artist.html?Aid=${Artistname}`);
  console.log("id fuori dalla funzione", Artistname);
};

const ArtistName = document.querySelector(".ArtistName"); // nome artista
ArtistName.addEventListener("click", sendArtist);

window.onload = homeAlbum();

// second fetch, six placeholder card

const genreGen = ["blues", "metal", "pop", "classic", "country", "rap"];
const randomArray = [];

// random idCard gen

const randomArrayFunction = () => {
  for (let i = 0; i < 6; i++) {
    let checker = Math.floor(Math.random() * 24);
    while (randomArray.includes(checker)) {
      checker = Math.floor(Math.random() * 24);
    }
    randomArray[i] = checker;
  }
};

async function homeMidCards() {
  for (let i = 0; i < 6; i++) {
    randomArrayFunction();

    let idCard = genreGen[Math.floor(Math.random() * 5)];
    let fetchId = "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + idCard;
    const singleAlbum = await fetch(fetchId);
    const singleAlbumJson = await singleAlbum.json();
    const midCardsHits = document.querySelector(".midCardsHits");
    midCardsHits.innerHTML =
      midCardsHits.innerHTML +
      `<div class="col-6 col-6 col-sm-6 col-md-6 col-lg-4">
                <div class="card mb-3 cardColor" style="max-width: 100%">
                  <div class="row g-0 SpanLeftAsideBox" style="height: 100px">
                    <div class="col-md-4">
                    <a href="#"><img
                        src='${singleAlbumJson.data[randomArray[i]].album.cover_big}'
                        class="img-fluid rounded-start" style="height: 100px; width:100px"
                        alt="photo"
                      /></a>
                    </div>
                    <div class="col-md-8 d-flex justify-content-center align-item-center">
                      <div class=" card-body d-flex align-items-center">
                      <a href="#"><h5 class="card-title fontSetter ps-2 mb-0">${
                        singleAlbumJson.data[randomArray[i]].title
                      }</h5></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;
  }
}

homeMidCards();

// third fetch, preferit card

async function homeEndPage1() {
  for (let i = 0; i < 5; i++) {
    let PreferiteId;
    PreferiteId = genreGen[Math.floor(Math.random() * 5)];
    console.log(PreferiteId);
    let PrefIdFetch = "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + PreferiteId;
    const singlePreferite = await fetch(PrefIdFetch);
    const singlePreferiteJson = await singlePreferite.json();
    const homeEndPage1 = document.querySelector(".homeEndPage1");
    let titleCorrect1;
    if (singlePreferiteJson.data[randomArray[i]].title.length > 15) {
      let titleCorrect1Slice = singlePreferiteJson.data[randomArray[i + 1]].title;
      titleCorrect1 = titleCorrect1Slice.slice(0, 15);
      titleCorrect1 = titleCorrect1 + "...";
    } else {
      titleCorrect1 = singlePreferiteJson.data[randomArray[i + 1]].title;
    }
    homeEndPage1.innerHTML =
      homeEndPage1.innerHTML +
      `<div class="col-12 col-md-2 col-lg-2 my-4">
         <div class="card SpanLeftAsideBox" style="width: 100%;">
         <a href="#"><img src='${
           singlePreferiteJson.data[randomArray[i + 1]].album.cover_big
         }' class="card-img-top px-3 pt-3" alt="photo" /></a>
           <div class="card-body d-flex flex-column align-items-start">
           <a href="#"><h5 class="card-title fontSetter">${titleCorrect1}</h5></a>
           <a href="#"><p class="card-text greyWrite">${singlePreferiteJson.data[randomArray[i]].artist.name}</p></a>
           </div>
         </div>
       </div>`;
  }
}

homeEndPage1();

// fourth fetch, preferit rock

async function homeEndPage2() {
  for (let i = 0; i < 5; i++) {
    let rockIdFetch = "https://striveschool-api.herokuapp.com/api/deezer/search?q=rock";
    const singleRock = await fetch(rockIdFetch);
    const singleRockJSON = await singleRock.json();
    const homeEndPage2 = document.querySelector(".homeEndPage2");
    let titleCorrect2;
    if (singleRockJSON.data[randomArray[i + 1]].title.length > 15) {
      let titleCorrect2Slice = singleRockJSON.data[randomArray[i + 1]].title;
      titleCorrect2 = titleCorrect2Slice.slice(0, 15);
      titleCorrect2 = titleCorrect2 + "...";
    } else {
      titleCorrect2 = singleRockJSON.data[randomArray[i + 1]].title;
    }
    homeEndPage2.innerHTML =
      homeEndPage2.innerHTML +
      `<div class="col-12 col-md-2 col-lg-2 my-4">
         <div class="card SpanLeftAsideBox" style="width: 100%;">
         <a href="#"><img src='${
           singleRockJSON.data[randomArray[i]].album.cover_big
         }' class="card-img-top px-3 pt-3" alt="photo" /></a>
           <div class="card-body d-flex flex-column align-items-start">
           <a href="#"><h5 class="card-title fontSetter">${titleCorrect2}</h5></a>
           <a href="#"><p class="card-text greyWrite">${singleRockJSON.data[randomArray[i + 1]].artist.name}</p></a>
           </div>
         </div>
       </div>`;
  }
}

homeEndPage2();

// fifth fetch, preferit classic

async function homeEndPage3() {
  for (let i = 0; i < 5; i++) {
    let ClassicIdFetch = "https://striveschool-api.herokuapp.com/api/deezer/search?q=Classic";
    const singleClassic = await fetch(ClassicIdFetch);
    const singleClassicJSON = await singleClassic.json();
    const homeEndPage3 = document.querySelector(".homeEndPage3");
    let titleCorrect3;
    if (singleClassicJSON.data[randomArray[i + 1]].title.length > 15) {
      let titleCorrect3Sliced = singleClassicJSON.data[randomArray[i + 1]].title;
      titleCorrect3 = titleCorrect3Sliced.slice(0, 15);
      titleCorrect3 = titleCorrect3 + "...";
    } else {
      titleCorrect3 = singleClassicJSON.data[randomArray[i + 1]].title;
    }

    homeEndPage3.innerHTML =
      homeEndPage3.innerHTML +
      `<div class="col-12 col-md-2 col-lg-2 my-4">
         <div class="card SpanLeftAsideBox" style="width: 100%;">
         <a href="#"><img src='${
           singleClassicJSON.data[randomArray[i]].album.cover_big
         }' class="card-img-top px-3 pt-3" alt="photo" /></a>
           <div class="card-body d-flex flex-column align-items-start">
           <a href="#"><h5 class="card-title fontSetter">${titleCorrect3}</h5></a>
           <a href="#"><p class="card-text greyWrite">${singleClassicJSON.data[randomArray[i + 1]].artist.name}</p></a>
           </div>
         </div>
       </div>`;
  }
}

homeEndPage3();

async function songPlayer() {
  const fetchSec3 = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=origins");
  const playerFetch = await fetchSec3.json();
  console.log(playerFetch);
  const playerArtist = document.querySelector(".songArtistPlayer");
  playerArtist.innerText = playerFetch.data[1].artist.name;
  const playerTitle = document.querySelector(".songTitlePlayer");
  playerTitle.innerText = playerFetch.data[1].title;
  const playerImg = document.querySelector(".imgPlayer");
  playerImg.src = playerFetch.data[0].album.cover_big;
}
songPlayer();



// const progressControl = document.getElementById("progress");
// player.addEventListener("timeupdate", () => {
//   progressControl.value = (player.currentTime / player.duration) * 100;
// });

//prova bottoni
// PLAYER 

const player = document.getElementById("player");
const playBtn = document.getElementById("play");
const progressControl = document.getElementById("progress");
const startTime = document.querySelector(".StartTimeOfTheSong");

let interval;

player.addEventListener("timeupdate", () => {
  progressControl.value = (player.currentTime / player.duration) * 100;

  const minutes = Math.floor(player.currentTime / 60);
  const seconds = Math.floor(player.currentTime % 60);
  startTime.innerText = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
});

const togglePlayPause = () => {
  const icon = playBtn.querySelector("i");
  if (player.paused) {
    interval = setInterval(() => {
      const minutes = Math.floor(player.currentTime / 60);
      const seconds = Math.floor(player.currentTime % 60);
      startTime.innerText = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    }, 1000);
    icon.className = "bi bi-pause-fill m-0 text-black fs-1";
    player.play();
  } else {
    clearInterval(interval);
    icon.className = "bi bi-play-fill m-0 text-black fs-1";
    player.pause();
  }
};

playBtn.addEventListener("click", togglePlayPause);

const volumeUp = document.getElementById("muted");
const volumeControl = document.getElementById("volumeControl");

volumeUp.addEventListener("click", function () {
  volumeUp.classList.toggle("bi-volume-up");
  volumeUp.classList.toggle("bi-volume-mute");
  if (volumeUp.classList.contains("bi-volume-mute")) {
    volumeControl.value = 0;
  }
});

volumeControl.addEventListener("input", () => {
  player.volume = volumeControl.value;
});
progressControl.addEventListener("click", function(event) {
  let percent = event.offsetX / this.offsetWidth;
  player.currentTime = percent * player.duration;
});


// SPARIZIONE ASIDE SOTTO I 1200PX
const aside = document.querySelector(".mediaPlayer");

function hideAside() {
  if (window.innerWidth < 1200) {
    aside.style.display = "none";
  } else {
    aside.style.display = "block";
  }
}
window.addEventListener("resize", hideAside);
hideAside();

// icona CUORE
const heartIcon = document.getElementById("heartIcon");
heartIcon.addEventListener("click", function() {
this.classList.toggle("clicked");
});

const shuffleBtn = document.querySelector(".bi-shuffle");
const repeatBtn = document.getElementById("repeat");

shuffleBtn.addEventListener("click", function() {
this.classList.toggle("clicked");
});

repeatBtn.addEventListener("click", function() {
this.classList.toggle("clicked");
});