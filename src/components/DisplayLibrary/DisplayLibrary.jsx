import { albumList, assets, localMusicData } from "../../assets/assets";
import { AlbumItem } from "../AlbumItem/AlbumItem";
import { Navbar } from "../Navbar/Navbar";
import { TrackItem } from "../TrackItem/TrackItem";
import "./displayLibrary.scss";

export const DisplayLibrary = () => {
  return (
    <>
      <Navbar />
      <AlbumItem album={albumList} />
    </>
  );
};
