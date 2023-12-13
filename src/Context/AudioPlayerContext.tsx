/* eslint-disable prettier/prettier */
// AudioPlayerContext.tsx
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import TrackPlayer, {Event, State, Track} from 'react-native-track-player';

interface AudioPlayerContextData {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  currentTrack: Track | null;
  setCurrentTrack: (track: Track | null) => void;
  playTrack: () => Promise<void>;
  pauseTrack: () => Promise<void>;
  stopPlayback: () => Promise<void>;
}

const AudioPlayerContext = createContext<AudioPlayerContextData>(
  {} as AudioPlayerContextData,
);

export const AudioPlayerProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const plusTrack = {
    id: 2,
    url: 'https://webradio.amsolution.com.br/radio/8020/plus',
    title: 'Radio Plus',
    artist: 'Radio Plus',
    isPlaying: false,
  };
  const [isPlayerInitialized, setIsPlayerInitialized] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(plusTrack);

  const playTrack = useCallback(async () => {
    const currentTrackId = await TrackPlayer.getCurrentTrack();

    if (currentTrack && currentTrackId !== currentTrack.id) {
      await TrackPlayer.stop();
      await TrackPlayer.reset();
      await TrackPlayer.add(currentTrack);
      await TrackPlayer.play();
      setCurrentTrack(currentTrack);
      setIsPlaying(true); // Adicione esta linha

      // Log when a new track starts playing
      console.log(`Starting playback of Track ${currentTrack.id}.`);
    } else {
      await TrackPlayer.play();
      setCurrentTrack(currentTrack);
      setIsPlaying(true); // Adicione esta linha

      // Log when playback is resumed
      if (currentTrack) {
        console.log(`Resumed playback of Track ${currentTrack.id}.`);
      }
    }
  }, [currentTrack]);

  const pauseTrack = async () => {
    const currentState = await TrackPlayer.getState();

    if (currentState === State.Playing) {
      await TrackPlayer.pause();
      setIsPlaying(true); // Adicione esta linha

      // Log when playback is paused
      if (currentTrack) {
        console.log(`Paused playback of Track ${currentTrack.id}.`);
      }
    }
  };
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    const setupPlayer = async () => {
      console.log('Setting up player...');
      await TrackPlayer.setupPlayer();
      console.log('Player setup complete.');

      if (currentTrack) {
        console.log('Adding track to player...');
        await TrackPlayer.add(currentTrack);
        console.log('Track added to player.');
        setIsPlayerReady(true); // Atualize o estado para indicar que o player está pronto
      }

      TrackPlayer.addEventListener(Event.PlaybackState, async ({state}) => {
        if (state === State.Playing) {
          setIsPlaying(true);
          console.log('Track is playing.');
        } else if (state === State.Paused || state === State.Stopped) {
          setIsPlaying(false);
          console.log('Track is paused or stopped.');
        }
      });

      TrackPlayer.addEventListener(Event.RemoteStop, async () => {
        setIsPlaying(false);
        console.log('Playback stopped externally.');
      });
    };

    setupPlayer();
  }, [currentTrack]);

  useEffect(() => {
    if (isPlayerReady && !isPlayerInitialized) {
      playTrack();
      setIsPlayerInitialized(true);
    }
  }, [isPlayerReady, isPlayerInitialized, playTrack]);

  useEffect(() => {
    const setupPlayer = async () => {
      await TrackPlayer.setupPlayer();

      TrackPlayer.addEventListener(Event.PlaybackState, async ({state}) => {
        setIsPlaying(state === State.Playing);
      });
    };

    setupPlayer();

    return () => {
      TrackPlayer.reset();
    };
  }, [currentTrack]);

  const stopPlayback = async () => {
    await TrackPlayer.stop();
    await TrackPlayer.reset();
    setCurrentTrack(null);

    // Log when playback is stopped
    if (currentTrack) {
      console.log(`Stopped playback ${currentTrack.id}.`);
    }
  };

  return (
    <AudioPlayerContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        currentTrack,
        setCurrentTrack,
        playTrack,
        pauseTrack,
        stopPlayback,
      }}>
      {children}
    </AudioPlayerContext.Provider>
  );
};

export function useAudioPlayer(): AudioPlayerContextData {
  const context = useContext(AudioPlayerContext);

  if (!context) {
    throw new Error(
      'useAudioPlayer must be used within an AudioPlayerProvider',
    );
  }

  return context;
}
