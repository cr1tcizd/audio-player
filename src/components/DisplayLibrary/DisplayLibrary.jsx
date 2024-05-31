import { assets, localMusicData } from "../../assets/assets";
import { Navbar } from "../Navbar/Navbar";
import { TrackItem } from "../TrackItem/TrackItem";
import "./displayLibrary.scss";

export const DisplayLibrary = () => {
  return (
    <>
      <Navbar />
      <div className="display-home">
        <div className="display-home__detail">
          <p className="display-home__detail-number">#</p>
          <p className="display-home__detail-title">Title</p>
          <assets.watch_icon className="display-home__detail-time" />
        </div>
        {localMusicData.map((track, index) => (
          <TrackItem
            key={index}
            title={track.title}
            id={track.id}
            image={track.image}
            duration={track.duration}
            track={track}
          />
        ))}
      </div>
    </>
  );
};
