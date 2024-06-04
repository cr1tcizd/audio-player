import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./TrackItem.scss";
import { PlayerContext } from "../../context/PlayerContext";

export const TrackItem = ({ audioRef, song, title, image, duration, id }) => {
  const { playWithTrack, track } = useContext(PlayerContext);
  let trackStyle = "track";
  let titleStyle;
  if (track.id === song.id) {
    trackStyle += " track-active";
    titleStyle = { color: "#1DB954" };
  }
  return (
    <div className={trackStyle}>
      <div className="track__number">
        <p className="track__number-num">{id}</p>
        <assets.play_icon
          className="track__number-play"
          onClick={() => playWithTrack(song)}
        />
      </div>

      <img className="track__image" src={image} alt="" />
      <div className="track__heading">
        <p style={titleStyle}>{title}</p>
      </div>
      <p className="track__duration">{duration}</p>
    </div>
  );
};
