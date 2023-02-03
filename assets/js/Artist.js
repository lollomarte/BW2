async function ArtistNsmeFetch() {
  const fetchartistname = await fetch(" https://striveschool-api.herokuapp.com/api/deezer/album/75621062");
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
      <td class="numeroList">${i + 1}</td>
      <td class="ps-2">
        <img src="${song.album.cover_big}" width="40px" height="40px"/>
      </td>
      <td>
        <p class="songTitle">${song.title}</p>
      </td>
      <td>${song.rank}</td>
      <td>${timer}</td>
    </tr>;`;
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
creare una serie di div
riempirli con i dati del fetch*/

// async function susannaRule() {
//   let genre = 'rock';
//   let urlFetch = "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + genre;
//   const stringedFetch = await fetch(urlFetch);
//   // const stringedFetchJSON = await stringedFetch.json();
//   // homeEndPage2.innerHTML =
//   // homeEndPage2.innerHTML +

  
// }
