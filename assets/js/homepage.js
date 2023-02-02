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

// second fetch, placeholder card 

const fetchArray = ["75621062", "75621062", "75621062", "75621062", "75621062", "75621062"];

async function homeMidCards() {
  for (let i = 0; i < fetchArray.length; i++) {
    let idCard;
    idCard = fetchArray[i];
    let fetchId = "https://striveschool-api.herokuapp.com/api/deezer/album/" + idCard;
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
                        src='${singleAlbumJson.cover_big}'
                        class="img-fluid rounded-start" style="height: 100px; width:100px"
                        alt="photo"
                      /></a>
                    </div>
                    <div class="col-md-8 d-flex justify-content-center align-item-center">
                      <div class=" card-body d-flex align-items-center">
                      <a href="#"><h5 class="card-title fontSetter ps-2 mb-0">${singleAlbumJson.title}</h5></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;
  }
  console.log("dove sono", i);
}

homeMidCards();

// third fetch, preferit card

const PreferiteFetch = ["6041124", "6041124", "6041124", "6041124", "6041124"];
async function homeEndPage1() {
  for (let i = 0; i < PreferiteFetch.length; i++) {
    let PreferiteId;
    PreferiteId = PreferiteFetch[i];
    let PrefIdFetch = "https://striveschool-api.herokuapp.com/api/deezer/album/" + PreferiteId;
    const singlePreferite = await fetch(PrefIdFetch);
    const singlePreferiteJson = await singlePreferite.json();
    const homeEndPage1 = document.querySelector(".homeEndPage1");
    homeEndPage1.innerHTML =
      homeEndPage1.innerHTML +
      `<div class="col-12 col-md-2 col-lg-2 my-4">
         <div class="card SpanLeftAsideBox" style="width: 100%">
         <a href="#"><img src='${singlePreferiteJson.cover_big}' class="card-img-top px-3 pt-3" alt="photo" /></a>
           <div class="card-body d-flex flex-column align-items-start">
           <a href="#"><h5 class="card-title fontSetter">${singlePreferiteJson.title}</h5></a>
           <a href="#"><p class="card-text greyWrite">${singlePreferiteJson.artist.name}</p></a>
           </div>
         </div>
       </div>`;
  }
}

homeEndPage1()

// fourth fetch, preferit rock

async function homeEndPage2() {
  for (let i = 0; i < PreferiteFetch.length; i++) {
    let rockId;
    rockId = PreferiteFetch[i];
    let rockIdFetch = "https://striveschool-api.herokuapp.com/api/deezer/album/" + rockId;
    const singlePreferiteRock = await fetch(rockIdFetch);
    const singlePreferiteJsonRock = await singlePreferiteRock.json();
    const homeEndPage2 = document.querySelector(".homeEndPage2");
    homeEndPage2.innerHTML =
      homeEndPage2.innerHTML +
      `<div class="col-12 col-md-2 col-lg-2 my-4">
         <div class="card SpanLeftAsideBox" style="width: 100%">
         <a href="#"><img src='${singlePreferiteJsonRock.cover_big}' class="card-img-top px-3 pt-3" alt="photo" /></a>
           <div class="card-body d-flex flex-column align-items-start">
           <a href="#"><h5 class="card-title fontSetter">${singlePreferiteJsonRock.title}</h5></a>
           <a href="#"><p class="card-text greyWrite">${singlePreferiteJsonRock.artist.name}</p></a>
           </div>
         </div>
       </div>`;
  }
}

homeEndPage2();

// fifth fetch, preferit classic


async function homeEndPage3() {
  for (let i = 0; i < PreferiteFetch.length; i++) {
    let ClassicId;
    ClassicId = PreferiteFetch[i];
    let ClassicIdFetch = "https://striveschool-api.herokuapp.com/api/deezer/album/" + ClassicId;
    const singlePreferiteClassic = await fetch(ClassicIdFetch);
    const singlePreferiteJsonClassic = await singlePreferiteClassic.json();
    const homeEndPage3 = document.querySelector(".homeEndPage3");
    homeEndPage3.innerHTML =
      homeEndPage3.innerHTML +
      `<div class="col-12 col-md-2 col-lg-2 my-4">
         <div class="card SpanLeftAsideBox" style="width: 100%">
         <a href="#"><img src='${singlePreferiteJsonClassic.cover_big}' class="card-img-top px-3 pt-3" alt="photo" /></a>
           <div class="card-body d-flex flex-column align-items-start">
           <a href="#"><h5 class="card-title fontSetter">${singlePreferiteJsonClassic.title}</h5></a>
           <a href="#"><p class="card-text greyWrite">${singlePreferiteJsonClassic.artist.name}</p></a>
           </div>
         </div>
       </div>`;
  }
}

homeEndPage3();

const progressControl = document.getElementById("progress");
player.addEventListener("timeupdate", () => {
  progressControl.value = (player.currentTime / player.duration) * 100;
});
