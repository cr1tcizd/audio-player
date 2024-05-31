import { Route, Routes } from "react-router-dom";
import "./display.scss";
import { DisplayHome } from "../DisplayHome/DisplayHome";
import { DisplayLibrary } from "../DisplayLibrary/DisplayLibrary";

export const Display = () => {
  return (
    <div className="display">
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/library" element={<DisplayLibrary />} />
      </Routes>
    </div>
  );
};
