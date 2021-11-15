import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640
});

// player.on('play', function () {
//   console.log('played the video!');
// });

// const data = {
//   duration: 61.857,
//   percent: 0.502,
//   seconds: 31.052,
// }

player.on('play', (data)=> {
  console.log(data);

} );




