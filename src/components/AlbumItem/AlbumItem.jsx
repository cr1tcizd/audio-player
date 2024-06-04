import { useContext } from "react";
import { assets, localMusicData } from "../../assets/assets";
import { TrackItem } from "../TrackItem/TrackItem";
import "./albumItem.scss";
import { PlayerContext } from "../../context/PlayerContext";

export const AlbumItem = ({ album }) => {
  const { playWithTrack } = useContext(PlayerContext);
  return (
    <div className="album-item">
      <div className="album-item__head">
        <img
          className="album-item__head__img"
          src={album[0].image}
          alt="albumCover"
        />
        <div className="album-item__head__top">
          <p className="album-item__head__top__title">{album[0].title}</p>
          <button
            className="album-item__head__top__btn"
            onClick={() => playWithTrack(album[0].trackList[0])}
          >
            Play
          </button>
        </div>
      </div>
      <div className="album-item__tabs">
        <div className="album-item__tabs__detail">
          <p className="album-item__tabs__detail-number">#</p>
          <p className="album-item__tabs__detail-title">Title</p>
          <assets.watch_icon className="album-item__tabs__detail-time" />
        </div>
        {album[0].trackList.map((track, index) => (
          <TrackItem
            key={index}
            title={track.title}
            id={track.id}
            image={track.image}
            duration={track.duration}
            song={track}
          />
        ))}
      </div>
    </div>
  );
};
