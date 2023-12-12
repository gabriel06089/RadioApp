/* eslint-disable prettier/prettier */

import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import TrackPlayer, { Event, State } from 'react-native-track-player';
import { ButtonPlayer } from './styles';
import { Play, Stop } from 'phosphor-react-native';
interface CaririPlayerProps {
    track: {
        id: number;
        url: string;
        title: string;
        artist: string;
    };
}

const CaririPlayer: React.FC<CaririPlayerProps> = ({ track }) => {
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

                // Log playback state
                if (state === State.Playing) {
                    console.log(`Track ${currentTrackId} is playing.`);
                } else if (state === State.Paused) {
                    console.log(`Track ${currentTrackId} is paused.`);
                }
            });

            TrackPlayer.addEventListener(Event.RemoteStop, async () => {
                // Log when playback is stopped externally (e.g., notification stop button)
                console.log('Playback stopped externally.');
            });
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
            setCurrentTrack(track.id);

            // Log when a new track starts playing
            console.log(`Starting playback of Track ${track.id}.`);
        } else if (currentState === State.Playing) {
            await TrackPlayer.pause();

            // Log when playback is paused
            console.log(`Paused playback of Track ${track.id}.`);
        } else {
            await TrackPlayer.play();
            setShowStopButton(true);
            setCurrentTrack(track.id);

            // Log when playback is resumed
            console.log(`Resumed playback of Track ${track.id}.`);
        }
    };

    const stopPlayback = async () => {
        await TrackPlayer.stop();
        await TrackPlayer.reset();
        setShowStopButton(false);
        setCurrentTrack(null);

        // Log when playback is stopped
        console.log(`Resumed playback of Track ${track.id}.`);
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

export default CaririPlayer;

