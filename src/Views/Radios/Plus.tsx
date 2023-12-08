/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TrackPlayer, { Event, State } from 'react-native-track-player';

const track = {
    id: 1,
    url: 'https://webradio.amsolution.com.br/radio/8020/plus',
    title: 'Radio Plus',
    artist: 'Radio Plus',
};

const PlusPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState<number | null>(null);

    useEffect(() => {
        const setupPlayer = async () => {
            await TrackPlayer.setupPlayer();
            await TrackPlayer.add([track]);

            TrackPlayer.addEventListener(Event.PlaybackState, ({ state }) => {
                console.log(`Playback state changed to ${state}`);
                setIsPlaying(state === State.Playing);
            });

            TrackPlayer.addEventListener(
                Event.PlaybackTrackChanged,
                ({ nextTrack }) => {
                    setCurrentTrack(nextTrack);
                },
            );
        };

        setupPlayer();

        return () => {
            TrackPlayer.reset();
        };
    }, []);

    const togglePlayback = async () => {
        const currentState = await TrackPlayer.getState();
        const currentTrack = await TrackPlayer.getCurrentTrack();

        // Se a rádio atual não é a rádio Plus, pare a rádio atual e inicie a rádio Plus
        if (currentTrack !== track.id) {
            await TrackPlayer.stop();
            await TrackPlayer.reset();
            await TrackPlayer.add(track);
            await TrackPlayer.play();
        } else if (currentState === State.Playing) {
            await TrackPlayer.pause();
        } else {
            await TrackPlayer.play();
        }
    };

    return (
        <View>

            <Text>{isPlaying ? 'Tocando' : 'Parado'}</Text>
            <Text>
                {currentTrack
                    ? `Estação Atual: ${track.title}`
                    : 'Nenhuma estação selecionada'}
            </Text>
            <TouchableOpacity onPress={togglePlayback}>
                <Text>{`Tocar - ${track.title}`}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PlusPlayer;
