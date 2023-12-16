/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {useAudioPlayer} from '../../Context/AudioPlayerContext';
import {Track, } from 'react-native-track-player';
import {Stop, Play} from 'phosphor-react-native';

export default function PlayPauseButton({track}: {track: Track}) {
  const {isPlaying, isLoading, playTrack, setCurrentTrack, pauseTrack} =
    useAudioPlayer();

  const handleSetTrack = async () => {
    setCurrentTrack(track);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      pauseTrack();
    } else {
      handleSetTrack();
      playTrack();
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePlayPause}>
        {isLoading ? (
          <ActivityIndicator size={44} color="#541084" />
        ) : isPlaying ? (
          <Stop weight="fill" size={44} color="#541084" />
        ) : (
          <Play weight="fill" size={44} color="#541084" />
        )}
      </TouchableOpacity>
    </View>
  );
}
