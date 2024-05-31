import { useContext } from "react";
import { Player } from "../Player/Player";
import { Sidebar } from "../Sidebar/Sidebar";
import { PlayerContext } from "../../context/PlayerContext";
import "./app.scss";
import { Display } from "../Display/Display";

function App() {
  const { audioRef, track } = useContext(PlayerContext);
  console.log(audioRef);
  return (
    <>
      <div className="main">
        <Sidebar />
        <Display />
      </div>

      <Player />
      <audio ref={audioRef} src={track.audio} preload="auto"></audio>
    </>
  );
}

export default App;
