// js for album page with ID fetch
async function albumFetch() {
    const fetchSec1 = await fetch(" https://striveschool-api.herokuapp.com/api/deezer/album/75621062");
    const jsonResAlbum = await fetchSec1.json();

    const headerImg = document.querySelector(".headerAlbum img");
    headerImg.src = jsonResAlbum.cover_big; // load img
    const preferTitle = document.querySelector(".headerAlbum h1");
    preferTitle.innerText = jsonResAlbum.title; // load title
    const preferAlbum = document.querySelector(".headerAlbum .headerAlbumP");
    preferAlbum.innerText = jsonResAlbum.artist.name; // load artist

    const {tracks} = jsonResAlbum;
    const {data:songs} = tracks;
    console.log(songs)
    songs.forEach((song, i) => {
        const second = (param) => {
            if(param < 10) {
                let second;
                return second = '0'+ param;
            } else {
                return param;
            }
        }
        let timer = Math.floor(song.duration/60)+':'+ second(song.duration%60)

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
             </tr>`
});

}
window.onload = albumFetch()