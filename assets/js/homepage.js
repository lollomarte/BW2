
async function homeAlbum() {
    const fetchSec2 = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=origins");
    const HomeFetch = await fetchSec2.json();
    
    const homeimg = document.querySelector(".homeimg");
    homeimg.src = HomeFetch.data[0].album.cover_big;
    const AlbumTitle = document.querySelector(".TitoloCanzone");
    AlbumTitle.innerText = HomeFetch.data[0].title;
    const ArtistName = document.querySelector(".ArtistName");
    ArtistName.innerText = HomeFetch.data[0].artist.name;
}



window.onload = homeAlbum()
//ciao


