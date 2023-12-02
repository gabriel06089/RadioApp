import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TrackPlayer from 'react-native-track-player';

const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setupTrackPlayer();
  }, []);

  const setupTrackPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add({
      id: 'radio',
      url: 'https://webradio.amsolution.com.br/radio/8020/plus',
      title: 'Radio Stream',
      artist: 'Your Radio Name',
    });
  };

  const togglePlayback = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <View>
      <TouchableOpacity onPress={togglePlayback}>
        <Text>{isPlaying ? 'Pause' : 'Play'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RadioPlayer;
