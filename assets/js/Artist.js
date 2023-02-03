// let params = new URLSearchParams(location.search);
// let Artistname = params.get("Artistname");
// console.log(Artistname);

async function ArtistNsmeFetch() {
  const ArtistUrl = "https://striveschool-api.herokuapp.com/api/deezer/album/" + "77648602";
  const fetchartistname = await fetch(ArtistUrl);
  console.log(fetchartistname);
  const AlbumJason = await fetchartistname.json();
  console.log(AlbumJason);
  const { artist } = AlbumJason;
  console.log("Questo", artist);
  let ArtistName = document.querySelector(".ArtistNameCard");
  ArtistName.innerText = artist.name;
  const { tracks } = AlbumJason;
  console.log("tracks", tracks);
  const { data: songs } = tracks;
  console.log("songs", songs);
  console.log(songs);
  songs.forEach((song, i) => {
    if (i < 10) {
      const second = (param) => {
        if (param < 10) {
          let second;
          return (second = "0" + param);
        } else {
          return param;
        }
      };
      let timer = Math.floor(song.duration / 60) + ":" + second(song.duration % 60);

      const tbody = document.querySelector(".TbodyArtist");
      tbody.innerHTML =
        tbody.innerHTML +
        `<tr class="mb-2 SpanLeftAsideBox">
      <td class="numeroList font-size:1.2em" style="width: 50px!important;">${i + 1}</td>
      <td class="ps-2 d-flex align-items-center" style="font-size:1.2em">
        <img src="${song.album.cover_big}" style="width: 50px!important;"/>
        <p class="songTitle">${song.title}</p>
      </td>
      <td style="font-size:1.2em">${song.rank}</td>
      <td style="font-size:1.2em">${timer}</td>
    </tr>;`;
    }
  });
}

window.onload = ArtistNsmeFetch();

// const headerImg = document.querySelector(".headerAlbum img");
//     headerImg.src = jsonResAlbum.cover_big; // load img
//     const preferTitle = document.querySelector(".headerAlbum h1");
//     preferTitle.innerText = jsonResAlbum.title; // load title
//     const preferAlbum = document.querySelector(".headerAlbum .headerAlbumP");
//     preferAlbum.innerText = jsonResAlbum.artist.name; // load artist

/* <tr class="mb-2">
  <td class="numeroList">1</td>
  <td class="ps-2">
    <img src="./assets/img/pinkfloyd.jpeg" alt="img" width="40px" height="40px" />
  </td>
  <td>
    <p class="songTitle">Ocean Avenue</p>
  </td>
  <td>276.616.912</td>
  <td>3:18</td>
</tr>; */

// punto 1) A partire da questo endpoint: https://dummyjson.com/todos <--- fetch da fare
// punto 2) creare una lista su un div
// punto 3) Creare una lista usando flexbox (no ul ma div 🙂 )
// punto 4) mettere un badge con bootstrap
// punto 5) Usando le bootstrap, inserire un badge contenente l'id dell'utente

/* punto 1 e 2) selezionare l'url fatto
collegarmi al server fatto
estrarre i dati sotto forma di stringa fatto
rendere la stringa un oggetto fatto
creare una serie di div --> {
  creare un bersaglio nel html
  selezionarlo
  aggiungersi una struttura html
  caricarci variabili dinamiche
} 
riempirli con i dati del fetch*/

const randomArtistArray = [];

const randomArtistArrayFunction = () => {
  for (let i = 0; i < 6; i++) {
    let checker = Math.floor(Math.random() * 24);
    while (randomArtistArray.includes(checker)) {
      checker = Math.floor(Math.random() * 24);
    }
    randomArtistArray[i] = checker;
  }
};

randomArtistArrayFunction();

async function susannaRule() {
  for (let i = 0; i < randomArtistArray.length; i++) {
    let genre = "rock";
    let urlFetch = "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + genre;
    const stringedFetch = await fetch(urlFetch);
    const stringedFetchJSON = await stringedFetch.json();
    const artistRandomCard = document.querySelector(".artistRandomCard");
    let titleTitle1;
    if (stringedFetchJSON.data[randomArtistArray[i]].title_short.length > 15) {
      let titleTitle1Slice = stringedFetchJSON.data[randomArtistArray[i]].title_short.title;
      titleTitle1 = titleTitle1Slice.slice(0, 15);
      titleTitle1 = titleTitle1 + "...";
    } else {
      titleTitle1 = stringedFetchJSON.data[randomArtistArray[i]].title_short.title;
    }
    artistRandomCard.innerHTML =
      artistRandomCard.innerHTML +
      `<div class="col-12 col-md-2 col-lg-2 my-4 px-3">
        <div class="card SpanLeftAsideBox" style="width: 100%;">
          <a href="#"><img src='${
            stringedFetchJSON.data[randomArtistArray[i]].album.cover_big
          }' class="card-img-top px-3 pt-3" alt="photo" /></a>
          <div class="card-body d-flex flex-column align-items-start">
            <a href="#"><h5 class="card-title">${titleTitle1}</h5></a>
            <a href="#"><p class="card-text greyWrite">${
              stringedFetchJSON.data[randomArtistArray[i]].artist.name
            }</p></a>
          </div>
        </div>
      </div>`;
  }
}
susannaRule();
