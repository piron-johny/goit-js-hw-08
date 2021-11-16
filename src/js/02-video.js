import Player from '@vimeo/player';
// import { save, load, remove } from './storage';


const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640
});

player.on('timeupdate', (data) => {
  console.log(data);
  localStorage.setItem("videoplayer-current-time", data.seconds)
});

const currentTime = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(currentTime).then(function (seconds) {
  // seconds = the actual time that the player seeked to / фактическое время, которое искал игрок
  console.log('sec', seconds);
}).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      // the time was less than 0 or greater than the video’s duration / ремя было меньше 0 или больше, чем продолжительность видео 
      break;

    default:
      // some other error occurred / произошла другая ошибка
      break;
  }
});

