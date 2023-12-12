/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import TrackPlayer, { Event, State } from 'react-native-track-player';
import { ButtonPlayer } from './styles';
import { Play, Stop } from 'phosphor-react-native';
interface SobralPlayerProps {
    track: {
        id: number;
        url: string;
        title: string;
        artist: string;
    };
}

const SobralPlayer: React.FC<SobralPlayerProps> = ({ track }) => {
    const [, setIsPlaying] = useState(false);
    const [, setCurrentTrack] = useState<number | null>(null);
    const [showStopButton, setShowStopButton] = useState(false);

    useEffect(() => {
        const setupPlayer = async () => {
            await TrackPlayer.setupPlayer();
            await TrackPlayer.add([track]);

            TrackPlayer.addEventListener(Event.PlaybackState, async ({ state }) => {
                const currentTrackId = await TrackPlayer.getCurrentTrack();
                setIsPlaying(currentTrackId === track.id && state === State.Playing);
                setShowStopButton(currentTrackId === track.id && state === State.Playing);
            });

            TrackPlayer.addEventListener(
                Event.PlaybackTrackChanged,
                async ({ nextTrack }) => {
                    setCurrentTrack(nextTrack);
                },
            );
        };

        setupPlayer();

        return () => {
            TrackPlayer.reset();
        };
    }, [track]);

    const togglePlayback = async () => {
        const currentState = await TrackPlayer.getState();
        const currentTrackId = await TrackPlayer.getCurrentTrack();

        if (currentTrackId !== track.id) {
            await TrackPlayer.stop();
            await TrackPlayer.reset();
            await TrackPlayer.add(track);
            await TrackPlayer.play();
            setShowStopButton(true);
        } else if (currentState === State.Playing) {
            await TrackPlayer.pause();
        } else {
            await TrackPlayer.play();
            setShowStopButton(true);
        }
    };

    const stopPlayback = async () => {
        await TrackPlayer.stop();
        await TrackPlayer.reset();
        setShowStopButton(false);
    };

    return (
        <View>

            {showStopButton ? (
                <ButtonPlayer onPress={stopPlayback}>
                    <Stop weight="fill" color="white" />
                </ButtonPlayer>
            ) : null}

            {!showStopButton ? (
                <ButtonPlayer onPress={togglePlayback}>
                    <Play weight="fill" color="white" />
                </ButtonPlayer>
            ) : null}
        </View>
    );
};

export default SobralPlayer;
