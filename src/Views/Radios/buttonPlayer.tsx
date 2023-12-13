/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Text, View} from 'react-native';
import {useAudioPlayer} from '../../Context/AudioPlayerContext';
import {Track} from 'react-native-track-player';

export default function PlayPauseButton({track}: {track: Track}) {
  const {isPlaying, playTrack, stopPlayback, setCurrentTrack, pauseTrack} =
    useAudioPlayer();

  const handleSetTrack = async () => {
    setCurrentTrack(track);
  };

  const handlePlayStop = () => {
    if (isPlaying) {
      stopPlayback();
    } else {
      handleSetTrack();
      playTrack();
    }
  };

  return (
    <View>
      <Text>Is Playing: {isPlaying ? 'Yes' : 'No'}</Text>
      <Button title={isPlaying ? 'Stop' : 'Play'} onPress={handlePlayStop} />
      <Button title="Pause" onPress={pauseTrack} />
    </View>
  );
}
