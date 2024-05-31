import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./TrackItem.scss";
import { PlayerContext } from "../../context/PlayerContext";

export const TrackItem = ({ audioRef, track, title, image, duration, id }) => {
  const { setTrack, play } = useContext(PlayerContext);
  const playCurrentTrack = async () => {
    console.log(track);
    setTrack(track);
    await audioRef;
    play();
  };

  return (
    <div className="track">
      <div className="track__number">
        <p className="track__number-num">{id}</p>
        <assets.play_icon
          className="track__number-play"
          onClick={playCurrentTrack}
        />
      </div>

      <img className="track__image" src={image} alt="" />
      <div className="track__heading">
        <p>{title}</p>
      </div>
      <p className="track__duration">{duration}</p>
    </div>
  );
};
