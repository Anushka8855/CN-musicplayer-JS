const songs = [
    { id: 1, name: "Shape of You", artist: "Ed Sheeran", image: "assets/Shape_Of_You.png", genre: "pop", source: "shape-of-you.mp3" },
    { id: 2, name: "Wonderwall", artist: "Oasis", image: "assets/Wonderwall_cover.jpg", genre: "rock", source: "wonderwall.mp3" },
    { id: 3, name: "Sugar", artist: "Maroon", image: "assets/Wonderwall_cover.jpg", genre: "pop", source: "wonderwall.mp3" },
    { id: 4, name: "Locked Away", artist: "R. City", image: "assets/Wonderwall_cover.jpg", genre: "rock", source: "wonderwall.mp3" }
    // { id: 5, name: "All of me", artist: "Adele", image: "", genre: "rock", source: "wonderwall.mp3" },
    // { id: 6, name: "Somelike Like You", artist: "Adele", image: "", genre: "rock", source: "wonderwall.mp3" }

];

// const themeToggle = document.getElementById('theme-toggle');
// const body = document.body;

// themeToggle.addEventListener('change', function() {
//     if(this.checked) {
//         body.classList.add('dark-mode');
//     } else {
//         body.classList.remove('dark-mode');
//     }
// });

let i = 0;

function renderSongs(i){
    const selectedSong = songs[i];

    const songsContainer = document.getElementById('song-container');
    songsContainer.innerHTML = '';

    const songCard = document.createElement('div');
    songCard.classList.add('card');

    const songImage = document.createElement('img');
    songImage.src = selectedSong.image;
    songImage.alt = 'Song Image';

    const songTitle = document.createElement('h3');
    songTitle.textContent = selectedSong.name;

    const songArtist = document.createElement('p');
    songArtist.textContent = selectedSong.artist;

    const prevButton = document.createElement('button');
    prevButton.textContent = `<=`;
    prevButton.classList.add('prev-button');

    prevButton.addEventListener('click', () => {
        
        if (i < songs.length - 1){
            i = i - 1;
        } else {
            i = songs.length - 1;
            alert("first song");
        }       
        renderSongs(i);
    });

    const nextButton = document.createElement('button');
    nextButton.textContent = `=>`;
    nextButton.classList.add('next-button');

    nextButton.addEventListener('click', () => {
        if (i < songs.length - 1){
            i = i + 1;
        } else {
            i = 0;
        }       
        renderSongs(i);
    });

 

    songCard.appendChild(songImage);
    songCard.appendChild(songTitle);    
    songCard.appendChild(songArtist);  
    songCard.appendChild(prevButton); 
    songCard.appendChild(nextButton);    

    songsContainer.appendChild(songCard);  
  

    // getCards.addEventListener('click', function(){
    //     const songCard = `<div class="song-container">
    //     <img id="song-image" src=${songs.image} alt="Album Photo" />
    //     <h2 id="song-title">${songs.name}</h2>
    //     <p id="artist-name">${songs.artist}</p>
    //     </div>`;
    // });

}

renderSongs(i);













// function toggleTheme() {
//     const body = document.body;
//     const themeToggleBtn = document.getElementById('theme-toggle');
//     const currentTheme = body.getAttribute('data-theme');
//     const newTheme = currentTheme === 'light' ? 'dark' : 'light';
//     body.setAttribute('data-theme', newTheme);
//     themeToggleBtn.textContent = newTheme === 'light' ? 'Dark' : 'Light';
// }

// function showSongs(genre) {
//     const list = document.getElementById('songs-list');
//     list.innerHTML = ''; // Clear list
//     songs.filter(song => genre === 'all' || song.genre === genre).forEach(song => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${song.name} - ${song.artist}`;
//         listItem.onclick = () => playSong(song.id);
//         list.appendChild(listItem);
//     });
// }

// function playSong(songId) {
//     const song = songs.find(s => s.id === songId);
//     const audioPlayer = document.getElementById('audio-player');
//     const songTitle = document.getElementById('song-title');
//     const artistName = document.getElementById('artist-name');
//     const albumArt = document.getElementById('album-art');

//     songTitle.textContent = song.name;
//     artistName.textContent = song.artist;
//     albumArt.src = song.img;
//     audioPlayer.src = song.source;
//     audioPlayer.play();
// }

// function createPlaylist() {
//     const playlistNameInput = document.getElementById('new-playlist-name');
//     const playlistList = document.getElementById('playlist-list');
//     const playlistName = playlistNameInput.value.trim();

//     if (playlistName) {
//         const listItem = document.createElement('li');
//         listItem.textContent = playlistName;
//         playlistList.appendChild(listItem);
//     }
// }

// document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
// document.getElementById('genre-filter').addEventListener('change', function() {
//     showSongs(this.value);
// });
// document.getElementById('create-playlist').addEventListener('click', createPlaylist);

// Initialize the player with all songs
// showSongs('all');
