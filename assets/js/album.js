// js for album page with ID fetch

// let params = new URLSearchParams(location.search);
// let primoParametro = params.get("correctAnswers");
// let max = params.get("max");
// let secondoParametro = params.get("incorrectAnswers");

let params = new URLSearchParams(location.search);
let Aid = params.get("Aid");
console.log("parametro passato", Aid);
async function albumFetch() {
  const fetchUrl = "https://striveschool-api.herokuapp.com/api/deezer/album/" + Aid;
  const fetchSec1 = await fetch(fetchUrl);
  const jsonResAlbum = await fetchSec1.json();
  console.log("sono un album", jsonResAlbum);
  const headerImg = document.querySelector(".headerAlbum img");
  headerImg.src = jsonResAlbum.cover_big; // load img
  const preferTitle = document.querySelector(".headerAlbum h1");
  preferTitle.innerText = jsonResAlbum.title; // load title
  const preferAlbum = document.querySelector(".headerAlbum .headerAlbumP");
  preferAlbum.innerText = jsonResAlbum.artist.name; // load artist

  const { tracks } = jsonResAlbum;
  const { data: songs } = tracks;
  console.log(songs);
  songs.forEach((song, i) => {
    const second = (param) => {
      if (param < 10) {
        let second;
        return (second = "0" + param);
      } else {
        return param;
      }
    };
    let timer = Math.floor(song.duration / 60) + ":" + second(song.duration % 60);

    const tbody = document.querySelector(".albumHeader tbody");
    tbody.innerHTML =
      tbody.innerHTML +
      `<tr class="mb-2 SpanLeftAsideBox"">
               <td class="fontSetterAlbum alignEndRow">${i + 1}</td>
               <td>
                 <a href="#"><p class="fontSetterAlbum">${song.title}</p></a>
                 <a href="#"><p class="fontSetterAlbum SpanLeftAside">${song.artist.name}</p></a>
               </td>
               <td class="fontSetterAlbum">${song.rank}</td>
               <td class="fontSetterAlbum">${timer}</td>
             </tr>`;
  });
}
window.onload = albumFetch();
