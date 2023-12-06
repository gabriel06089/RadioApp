/* eslint-disable prettier/prettier */
import React from 'react';
import { Button } from 'react-native';
import TrackPlayer from 'react-native-track-player';

const RadioPlayer = () => {
 const startRadio = (id) => {
   TrackPlayer.play({ id });
 };

 const stopRadio = (id) => {
   TrackPlayer.stop({ id });
 };

 return (
   <>
     <Button title="Start Radio 1" onPress={() => startRadio('radio1')} />
     <Button title="Stop Radio 1" onPress={() => stopRadio('radio1')} />
     <Button title="Start Radio 2" onPress={() => startRadio('radio2')} />
     <Button title="Stop Radio 2" onPress={() => stopRadio('radio2')} />
   </>
 );
};

export default RadioPlayer;
