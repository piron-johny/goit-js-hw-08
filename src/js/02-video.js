import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640
});

player.on('timeupdate', throttle(
  (data) => {
    localStorage.setItem("videoplayer-current-time", data.seconds)
  }, 1000)
);

const currentTime = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(currentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to / фактическое время, которое искал игрок
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



