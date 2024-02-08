/* eslint-disable prettier/prettier */
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import TrackPlayer, {Capability, Track, Event} from 'react-native-track-player';
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
  frequency: string | null;
  stopIfYoutube: (url: string) => Promise<void>; // Adicione esta linha
  currentSong: any; // Substitua 'any' pelo tipo correto
  setCurrentSong: (song: any) => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextData>(
  {} as AudioPlayerContextData,
);

export const AudioPlayerProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [currentSong, setCurrentSong] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [frequency] = useState<string | null>(null);
  const playTrack = useCallback(async () => {
    console.log('Iniciando a reprodução...');
    setIsPlaying(true);
    await TrackPlayer.play();
    const track = await TrackPlayer.getTrack(
      (await TrackPlayer.getCurrentTrack()) || 0,
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

      try {
        await TrackPlayer.setupPlayer();
        console.log('Player configurado.');
      } catch (error) {
        console.log('Player já configurado.');
      }

      // Configuração das opções do player para exibir a notificação
      TrackPlayer.updateOptions({
        capabilities: [Capability.Play, Capability.Pause, Capability.Stop],
        compactCapabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.Stop,
        ],
        notificationCapabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.Stop,
        ],
      });

      const currentHour = new Date().getHours();
      const currentDay = new Date().getDay();

      let artist = 'Rádio Plus';
      if (
        currentDay >= 0 &&
        currentDay <= 6 &&
        currentHour >= 0 &&
        currentHour < 5
      ) {
        artist = 'Corujão da Plus';
      } else if (
        currentDay >= 1 &&
        currentDay <= 5 &&
        currentHour >= 5 &&
        currentHour < 6
      ) {
        artist = 'Clube Plus';
      } else if (
        currentDay >= 1 &&
        currentDay <= 5 &&
        currentHour >= 6 &&
        currentHour < 7
      ) {
        artist = 'Deu B.O.';
      } else if (
        currentDay >= 1 &&
        currentDay <= 5 &&
        currentHour >= 7 &&
        currentHour < 8
      ) {
        artist = 'Ceará News';
      } else if (
        currentDay >= 1 &&
        currentDay <= 6 &&
        currentHour >= 8 &&
        currentHour < 9
      ) {
        artist = 'Ao Colo de Jesus e Maria';
      } else if (
        currentDay >= 1 &&
        currentDay <= 6 &&
        currentHour >= 9 &&
        currentHour < 11
      ) {
        artist = 'Manhã da Plus';
      } else if (
        currentDay >= 1 &&
        currentDay <= 5 &&
        currentHour >= 12 &&
        currentHour < 14
      ) {
        artist = 'Redação da Plus';
      } else if (
        currentDay >= 1 &&
        currentDay <= 5 &&
        currentHour >= 14 &&
        currentHour < 17
      ) {
        artist = 'Tarde Plus';
      } else if (
        currentDay >= 1 &&
        currentDay <= 5 &&
        currentHour >= 17 &&
        currentHour < 18
      ) {
        artist = 'Tá Todo Mundo Plus';
      } else if (
        currentDay >= 1 &&
        currentDay <= 5 &&
        currentHour >= 18 &&
        currentHour < 19
      ) {
        artist = 'As Mais Pedidas';
      } else if (
        currentDay >= 1 &&
        currentDay <= 5 &&
        currentHour >= 20 &&
        currentHour < 22
      ) {
        artist = 'Plus Mania';
      } else if (currentDay === 6 && currentHour >= 12 && currentHour < 14) {
        artist = 'Festa Plus';
      } else if (currentDay === 6 && currentHour >= 21 && currentHour < 22) {
        artist = 'Time Machine';
      } else if (currentDay === 6 && currentHour >= 22 && currentHour < 24) {
        artist = 'Upgrade';
      } else if (
        currentDay === 0 &&
        ((currentHour >= 5 && currentHour < 8) ||
          (currentHour >= 20 && currentHour < 22))
      ) {
        artist = 'Playlist da Plus';
      } else if (currentDay === 0 && currentHour >= 8 && currentHour < 9) {
        artist = 'Terço da Misericórdia';
      } else if (currentDay === 0 && currentHour >= 10 && currentHour < 15) {
        artist = 'Domingão da Plus';
      } else if (currentDay === 0 && currentHour >= 15 && currentHour < 19) {
        artist = 'Mega Plus';
      } else if (currentDay === 0 && currentHour >= 19 && currentHour < 20) {
        artist = 'A Grande Hora';
      } else if (currentDay === 0 && currentHour >= 22 && currentHour < 24) {
        artist = 'Sem Limites Para Amar';
      } else if (
        currentDay >= 1 &&
        currentDay <= 6 &&
        currentHour >= 11 &&
        currentHour < 12
      ) {
        artist = 'As melhores da Plus';
      } else if (
        currentDay >= 1 &&
        currentDay <= 5 &&
        currentHour >= 22 &&
        currentHour < 24
      ) {
        artist = 'Slow Motion';
      }

      const plusTrack = {
        id: 2,
        url: 'https://webradio.amsolution.com.br/radio/8020/plus',
        title: 'Rádio Plus',
        artist: artist,
        isPlaying: false,
        artwork: 'https://plusfm.com.br/Imagens/artwork.jpeg',
        frequency: 'Rede',
      };

      await setTrack(plusTrack);
      await playTrack();

      setIsLoading(false);
    };

    setupPlayer();
  }, [setTrack, playTrack]);
  useEffect(() => {
    const playEventListener = TrackPlayer.addEventListener(
      Event.RemotePlay,
      async () => {
        console.log('Evento RemotePlay acionado');
        setIsPlaying(true);
        await TrackPlayer.play();
      },
    );

    const pauseEventListener = TrackPlayer.addEventListener(
      Event.RemotePause,
      async () => {
        console.log('Evento RemotePause acionado');
        setIsPlaying(false);
        await TrackPlayer.pause();
      },
    );

    const stopEventListener = TrackPlayer.addEventListener(
      Event.RemoteStop,
      async () => {
        console.log('Evento RemoteStop acionado');
        setIsPlaying(false);
        await TrackPlayer.stop();
      },
    );

    return () => {
      // Remover os ouvintes de eventos quando o componente for desmontado
      playEventListener.remove();
      pauseEventListener.remove();
      stopEventListener.remove();
    };
  }, []);
  useEffect(() => {
    const startEventListener = TrackPlayer.addEventListener(
      Event.RemoteDuck,
      async data => {
        if (data.paused) {
          // Outro aplicativo de áudio começou a tocar, diminuir o volume
          await TrackPlayer.setVolume(0.5); // Defina o volume para o nível desejado
        } else {
          // A interrupção de áudio terminou, aumentar o volume
          await TrackPlayer.setVolume(1.0); // Restaure o volume para o nível original
        }
      },
    );

    return () => {
      // Parar a escuta de eventos quando o componente for desmontado
      startEventListener.remove();
    };
  }, [playTrack, pauseTrack]);
  const stopIfYoutube = useCallback(async (url: string) => {
    if (url.includes('youtube.com')) {
      console.log('Parando a reprodução porque o YouTube foi aberto...');
      setIsPlaying(false);
      await TrackPlayer.stop();
      console.log('Reprodução parada.');
    }
  }, []);
  useEffect(() => {
    const fetchSong = () => {
      fetch('https://webradio.amsolution.com.br/api/nowplaying/plus', {
        headers: {
          Authorization: 'ec1e12625c87f3fd:3522595694202dccc04b294711eb85cd',
        },
      })
        .then(response => response.json())
        .then(data => {
          setCurrentSong(data.now_playing.song);
          console.log(
            `Tocando agora: ${data.now_playing.song.title} por ${data.now_playing.song.artist}`,
          ); // Adicione esta linha
        })
        .catch(error => {
          console.error('Erro:', error);
        });
    };

    fetchSong();
    const intervalId = setInterval(fetchSong, 10000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <AudioPlayerContext.Provider
      value={{
        currentSong,
        setCurrentSong,
        isPlaying,
        setIsPlaying,
        currentTrack,
        setCurrentTrack: setTrack,
        playTrack,
        pauseTrack,
        stopPlayback,
        isLoading,
        setIsLoading,
        frequency,
        stopIfYoutube,
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
