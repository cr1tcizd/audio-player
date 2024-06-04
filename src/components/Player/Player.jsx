import "./player.scss";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";

export const Player = () => {
  const {
    audioRef,
    track,
    seekBg,
    seekBar,
    playStatus,
    play,
    pause,
    mute,
    time,
    muted,
    seekSong,
    seekVolume,
    volume,
    seekVolumeBg,
  } = useContext(PlayerContext);

  if ((time.totalTime.minute && time.totalTime.second) === isNaN) {
    time.totalTime.minute = 0;
    time.totalTime.second = 0;
  }

  return (
    <div className="player">
      <div className="player-row">
        <div ref={seekBg} onClick={seekSong} className="player__progress">
          <hr
            ref={seekBar}
            style={{
              width: `${
                (audioRef.current.currentTime / audioRef.current.duration) * 100
              }vw`,
            }}
            className="player__progress__bar"
          />
        </div>
        <div className="player__left">
          <img className="player__left__image" src={track.image} alt="" />
          <div className="player__left__content">
            <p className="player__left__title">
              {track.title.length > 12
                ? track.title.slice(0, 12) + ".."
                : track.title}
            </p>
            <p className="player__left__artist">{track.artist}</p>
          </div>
        </div>
        <div className="player__center">
          <assets.backward_icon className="player__btn" />

          {playStatus ? (
            <assets.pause_icon
              className="player__btn player__btn__play"
              onClick={pause}
            />
          ) : (
            <assets.play_icon
              className="player__btn player__btn__play"
              onClick={play}
            />
          )}

          <assets.forward_icon className="player__btn" />
        </div>
        <div className="player__right">
          <div className="player__right__progress-time">
            <p className="">
              {time.currentTime.minute}:
              {time.currentTime.second < 10
                ? `0${time.currentTime.second}`
                : time.currentTime.second}
            </p>
            <p className="">/</p>
            <p className="">
              {time.totalTime.minute}:
              {time.totalTime.second < 10
                ? `0${time.totalTime.second}`
                : time.totalTime.second}
            </p>
          </div>
          <div className="player__right__volume">
            {muted ? (
              <assets.volumeMuted_icon className="player__btn" onClick={mute} />
            ) : (
              <assets.volume_icon className="player__btn" onClick={mute} />
            )}
            <div
              ref={seekVolumeBg}
              className="player__right__volume-progress"
              onClick={seekVolume}
            >
              <hr
                className="player__right__volume-progress__bar"
                style={{ width: `${volume}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
