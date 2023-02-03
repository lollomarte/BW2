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
}

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
    console.log(PreferiteId)
    let PrefIdFetch = "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + PreferiteId;
    const singlePreferite = await fetch(PrefIdFetch);
    const singlePreferiteJson = await singlePreferite.json();
    const homeEndPage1 = document.querySelector(".homeEndPage1");
    homeEndPage1.innerHTML =
      homeEndPage1.innerHTML +
      `<div class="col-12 col-md-2 col-lg-2 my-4">
         <div class="card SpanLeftAsideBox" style="width: 100%">
         <a href="#"><img src='${singlePreferiteJson.data[randomArray[i+1]].album.cover_big}' class="card-img-top px-3 pt-3" alt="photo" /></a>
           <div class="card-body d-flex flex-column align-items-start">
           <a href="#"><h5 class="card-title fontSetter">${singlePreferiteJson.data[randomArray[i]].title}</h5></a>
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
    homeEndPage2.innerHTML =
      homeEndPage2.innerHTML +
      `<div class="col-12 col-md-2 col-lg-2 my-4">
         <div class="card SpanLeftAsideBox" style="width: 100%">
         <a href="#"><img src='${singleRockJSON.data[randomArray[i]].album.cover_big}' class="card-img-top px-3 pt-3" alt="photo" /></a>
           <div class="card-body d-flex flex-column align-items-start">
           <a href="#"><h5 class="card-title fontSetter">${singleRockJSON.data[randomArray[i+1]].title}</h5></a>
           <a href="#"><p class="card-text greyWrite">${singleRockJSON.data[randomArray[i+1]].artist.name}</p></a>
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
    homeEndPage3.innerHTML =
      homeEndPage3.innerHTML +
      `<div class="col-12 col-md-2 col-lg-2 my-4">
         <div class="card SpanLeftAsideBox" style="width: 100%">
         <a href="#"><img src='${singleClassicJSON.data[randomArray[i]].album.cover_big}' class="card-img-top px-3 pt-3" alt="photo" /></a>
           <div class="card-body d-flex flex-column align-items-start">
           <a href="#"><h5 class="card-title fontSetter">${singleClassicJSON.data[randomArray[i+1]].title}</h5></a>
           <a href="#"><p class="card-text greyWrite">${singleClassicJSON.data[randomArray[i+1]].artist.name}</p></a>
           </div>
         </div>
       </div>`;
  }
}

homeEndPage3();

// const progressControl = document.getElementById("progress");
// player.addEventListener("timeupdate", () => {
//   progressControl.value = (player.currentTime / player.duration) * 100;
// });
