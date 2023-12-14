/* eslint-disable prettier/prettier */
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import TrackPlayer, {Track} from 'react-native-track-player';

TrackPlayer.registerPlaybackService(() => require('./service.js'));

interface AudioPlayerContextData {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  currentTrack: Track | null;
  setCurrentTrack: (track: Track | null) => void;
  playTrack: () => Promise<void>;
  pauseTrack: () => Promise<void>;
  stopPlayback: () => Promise<void>;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextData>(
  {} as AudioPlayerContextData,
);

export const AudioPlayerProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  const playTrack = useCallback(async () => {
    console.log('Iniciando a reprodução...');
    setIsPlaying(true);
    await TrackPlayer.play();
    const track = await TrackPlayer.getTrack(
      await TrackPlayer.getCurrentTrack() || 0,
    );
    console.log(`Reprodução iniciada. Tocando: ${track?.title}`);
  }, []);

  const pauseTrack = useCallback(async () => {
    console.log('Pausando a reprodução...');
    setIsPlaying(false);
    await TrackPlayer.pause();
    console.log('Reprodução pausada.');
  }, []);

  const stopPlayback = useCallback(async () => {
    console.log('Parando a reprodução...');
    setIsPlaying(false);
    await TrackPlayer.stop();
    console.log('Reprodução parada.');
  }, []);

  const setTrack = useCallback(
    async (track: Track | null) => {
      console.log('Configurando a faixa...');
      if (track === null) {
        await TrackPlayer.stop();
        setCurrentTrack(null);
      } else {
        setIsLoading(true);
        await TrackPlayer.reset();
        await TrackPlayer.add(track);
        setCurrentTrack(track);
        setIsLoading(false);
        await playTrack(); // Adicionado aqui
      }
      console.log('Faixa configurada.');
    },
    [playTrack],
  );

  useEffect(() => {
    const setupPlayer = async () => {
      console.log('Configurando o player...');
      setIsLoading(true);
      await TrackPlayer.setupPlayer();
      console.log('Player configurado.');

      const plusTrack = {
        id: 2,
        url: 'https://webradio.amsolution.com.br/radio/8020/plus',
        title: 'Radio Plus',
        artist: 'Radio Plus',
        isPlaying: false,
      };

      await setTrack(plusTrack);
      await playTrack();

      setIsLoading(false);
    };

    setupPlayer();
  }, [setTrack, playTrack]);

  return (
    <AudioPlayerContext.Provider
      value={{
        isPlaying,
        setIsPlaying,
        currentTrack,
        setCurrentTrack: setTrack,
        playTrack,
        pauseTrack,
        stopPlayback,
        isLoading,
        setIsLoading,
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
