let playBtn = document.getElementById('masterPlay')
let songIndex = 0;
let audioElement = new Audio('./1.mp3');
let progressBar = document.getElementById('progressBar');
let previous = document.getElementsByClassName('previous');
let next = document.getElementsByClassName('next');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let gif=document.getElementById('giphy')
let playSongName = document.getElementById('playSongName')

let songs = [
    { songName: 'helloKitty', songPath: './1.mp3'},
    { songName: 'helloKitty', songPath: './2.mp3'},
    { songName: 'helloKitty', songPath: './3.mp3'},
    { songName: 'Chann vi gawah', songPath: './4.mp3'},
    { songName: 'filhal 2', songPath: './5.mp3'},
    { songName: 'haaye ve', songPath: './6.mp3'},
    { songName: 'hath chumme', songPath: './7.mp3'},
    { songName: 'hosh', songPath: './8.mp3'},
    { songName: 'ikko mikke', songPath: './9.mp3'},
]


songItem.forEach((element, i)=> {
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
    // element.getElementsByClassName('timeStamp')[i].innerText = songs[i].songName;
})

playBtn.addEventListener('click',() =>{
    if (audioElement.currentTime <= 0||audioElement.paused) {
         audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
        
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0;
        
    }
}
);
const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('playAllSong')).forEach((element) => {
        element.classList.add('fa-play-circle')
        element.classList.remove('fa-pause-circle')
    })
    
}

Array.from(document.getElementsByClassName('playAllSong')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log((e.target));
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `./${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    })
})




audioElement.addEventListener('timeupdate', () => {
    let progress = parseFloat((audioElement.currentTime / audioElement.duration )* 100);
    progressBar.value = progress;
    
})
progressBar.addEventListener('change', () => {
    
    audioElement.currentTime = ((progressBar.value* audioElement.duration)/ 100)
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >=9) {
        songIndex = 0;
    }
    // if (songIndex = 0) {
    //     songIndex = 0;
    // }
    else {
        songIndex += 1;
    }
        audioElement.src = `./${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    
    
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
        audioElement.src =`./${songIndex-1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    
    
})

  