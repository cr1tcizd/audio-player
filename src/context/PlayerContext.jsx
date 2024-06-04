import { useEffect, useRef, useState } from "react";
import { createContext } from "react";
import { localMusicData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef("");
  const seekBg = useRef();
  const seekBar = useRef();
  const seekVolumeBg = useRef();

  const [track, setTrack] = useState(localMusicData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [muted, setMuted] = useState(audioRef.current.muted);
  const [volume, setVolume] = useState(100);

  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60)
              ? Math.floor(audioRef.current.duration % 60)
              : 0,
            minute: Math.floor(audioRef.current.duration / 60)
              ? Math.floor(audioRef.current.duration / 60)
              : 0,
          },
        });
      };
    }, 1000);
  }, [audioRef]);

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const mute = () => {
    audioRef.current.muted
      ? (audioRef.current.muted = false)
      : (audioRef.current.muted = true);
    setMuted(audioRef.current.muted);
  };

  const seekSong = (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };

  const seekVolume = (e) => {
    audioRef.current.volume =
      e.nativeEvent.offsetX / seekVolumeBg.current.offsetWidth;
    setVolume((e.nativeEvent.offsetX / seekVolumeBg.current.offsetWidth) * 100);
  };

  const playWithTrack = async (track) => {
    await setTrack(track);
    await audioRef.current.play();
    setPlayStatus(true);
  };

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    mute,
    muted,
    setMuted,
    seekSong,
    seekVolume,
    volume,
    setVolume,
    seekVolumeBg,
    playWithTrack,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
