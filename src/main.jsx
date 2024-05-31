import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import "./reset.scss";
import "./index.scss";
import PlayerContextProvider from "./context/PlayerContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PlayerContextProvider>
        <App />
      </PlayerContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
