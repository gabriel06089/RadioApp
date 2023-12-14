/* eslint-disable prettier/prettier */
import TrackPlayer from 'react-native-track-player';

module.exports = async function() {
    TrackPlayer.addEventListener('remote-play', async () => {
      await TrackPlayer.play();
    });
  TrackPlayer.addEventListener('remote-pause', () => {
    TrackPlayer.pause();
  });

  TrackPlayer.addEventListener('remote-stop', () => {
    TrackPlayer.destroy();
  });
};
