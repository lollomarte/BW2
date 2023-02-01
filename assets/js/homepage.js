async function homeAlbum() {
  const fetchSec2 = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=origins");
  const HomeFetch = await fetchSec2.json();

  const homeimg = document.querySelector(".homeimg"); // immagine
  homeimg.src = HomeFetch.data[0].album.cover_big;
  const AlbumTitle = document.querySelector(".TitoloCanzone"); // canzone
  AlbumTitle.innerText = HomeFetch.data[0].title;
  const ArtistName = document.querySelector(".ArtistName"); // nome artista
  ArtistName.innerText = HomeFetch.data[0].artist.name;
}

window.onload = homeAlbum();

const fetchArray = ["75621062", "75621062", "75621062", "75621062", "75621062", "75621062"];

async function homeMidCards() {
  for (i = 0; i < fetchArray.length; i++) {
    let idCard;
    idCard = fetchArray[i];
    let fetchId = 'https://striveschool-api.herokuapp.com/api/deezer/album/' + idCard;
    const singleAlbum = await fetch(fetchId);
    const singleAlbumJson = await singleAlbum.json();

    const midCardsHits = document.querySelector(".midCardsHits");
    midCardsHits.innerHTML =
      midCardsHits.innerHTML +
      `<div class="col-6 col-6 col-sm-6 col-md-4">
                <div class="card mb-3" style="max-width: 100%">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src='${singleAlbumJson.cover_big}'
                        class="img-fluid rounded-start" style="height: 100px"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">${singleAlbumJson.title}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`;
  }
  console.log("dove sono", i);
}

homeMidCards();
//striveschool-api.herokuapp.com/api/deezer/album/75621062
//ciao

https: {
  /* <div class="col-6 col-6 col-sm-6 col-md-4">
                <div class="card mb-3" style="max-width: 300px">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src="./assets/img/Mika_cover-nuovo-album-041019.jpeg"
                        class="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">Mika</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */
}


//  <div class="col-12 col-md-2 col-lg-2 my-4">
// <div class="card" style="width: 100%">
// <img src="./assets/img/TOPITALIA2022.jpeg" class="card-img-top" alt="..." />
// <div class="card-body">
//   <h5 class="card-title">Top 2022</h5>
//   <p class="card-text">Ascolta il suo nuovo singolo!</p>
// </div>
// </div>
// </div> 

const PreferiteFetch = ["75621062", "75621062", "75621062", "75621062", "75621062", "75621062"];
async function homeEndPage() {
    for (i = 0; i < PreferiteFetch.length; i++) {
      let PreferiteId;
      PreferiteId = PreferiteFetch[i];
      let PrefIdFetch = 'https://striveschool-api.herokuapp.com/api/deezer/album/' + PreferiteId;
      const singlePreferite = await fetch(PrefIdFetch);
      const singlePreferiteJson = await singlePreferite.json();
      const homeEndPage = document.querySelector(".homeEndPage");
      homeEndPage.innerHTML =
       homeEndPage.innerHTML +
       `<div class="col-12 col-md-2 col-lg-2 my-4">
       <div class="card" style="width: 100%">
       <img src='${singlePreferiteJson.cover_big}' class="card-img-top" alt="..." />
       <div class="card-body">
         <h5 class="card-title">${singlePreferiteJson.title}</h5>
         <p class="card-text">${singlePreferiteJson.artist.name}</p>
       </div>
       </div>
       </div> `;
    }

} 
homeEndPage();