const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const next = document.querySelector("#next");
const name = document.getElementById("name");
const artist = document.getElementById("artist");
const image = document.getElementById("image");
const volumeRange = document.getElementById("volume");
const prev = document.getElementById("prev");
const load = document.getElementById("time-load");
const randomBtn = document.getElementById("random");
const time = document.getElementById("time");
const total = document.getElementById("total-time");
let track_index = 0;
let isPlaying = false;
//bize heleki bu funksiyonalliq gelmiyib)
let isRandom = false;
let UpdateTimer;

const music_list = [
    {
        img: 'images/forest.jpg',
        name: 'Sparky Deatchap',
        artist: 'September  ',
        music: 'music/sparky.mp3'
    },
    {
        img: 'images/ibrahim.png',
        name: 'Neye Yarar Speed Up',
        artist: 'İbrahim Tatlıses x Snoop Dog',
        music: 'music/İbrahim Tatlıses Neye Yarar.mp3'
    }
];
const music = new Audio(music_list[track_index].music);

//xod verib azaltmag
volumeRange.addEventListener('change', () => {
    music.volume = volumeRange.value / 100;
  });

const musicAbout = (track_index) => {
    music.src = music_list[track_index].music;
    artist.textContent = music_list[track_index].artist;
    name.textContent = music_list[track_index].name;
    image.setAttribute("src", music_list[track_index].img);
};

musicAbout(track_index);

const musicPlay = () => {
    music.play();
    isPlaying = true;
    play.style.display = "none";
    pause.style.display = "block";
    image.style.animation = "cover 4.5s infinite linear";
}

const musicStop = () => {
    music.pause();
    isPlaying = false;
    pause.style.display = "none";
    play.style.display = "block";
    image.style.animation = "";
};

const musicNext = () => {
    track_index++;
    musicAbout(track_index);
    isPlaying = false;
    pause.style.display = "none";
    play.style.display = "block";
};

prev.addEventListener("click", () => {
    track_index--;
    musicAbout(track_index);
    isPlaying = false;
    console.log(prev);
});

randomBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * music_list.length);
    musicAbout(randomIndex);
});
const musicLoad = () => {
    music.addEventListener("timeupdate", () => {
        let minute = Math.floor(music.currentTime / 60);
        let second = Math.floor(music.currentTime % 60);
        let minuteTotal = Math.floor(music.duration / 60);
        let secondTotal = Math.floor(music.duration % 60);
        time.textContent = `0${minute}:${second < 10? "0" + second : second}`
        total.textContent = `0${minuteTotal}:${secondTotal < 10? "0" + secondTotal : secondTotal}`
        
    });
};
musicLoad();

load.addEventListener("change", () => {
    const changeLoad = music.currentTime = load.value;
});
// const musicPrev = () => {
//     track_index--;
//     musicAbout(track_index);
//     isPlaying = false;
// };



