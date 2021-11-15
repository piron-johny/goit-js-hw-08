import Player from '@vimeo/player';

const options = {
  id: 59777392,
  width: 640,
  loop: true
};

const player = new Vimeo.Player('vimeo-player', options);

player.setVolume(0);

player.on('play', function () {
  console.log('played the video!');
});