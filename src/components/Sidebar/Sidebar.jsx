import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import "./sidebar.scss";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <assets.logo_icon />
        <h1 className="sidebar__title">Music Player</h1>
      </div>
      <nav className="sidebar__nav">
        <Link to="/">
          <div className="sidebar__nav-items sidebar__home">
            <assets.home_icon className="sidebar__icon" />
            <p className="sidebar__home-text">Home</p>
          </div>
        </Link>

        <Link to="/library">
          <div className="sidebar__nav-items sidebar__library">
            <assets.library_icon className="sidebar__icon" />
            <p className="sidebar__library-text">Library</p>
          </div>
        </Link>
      </nav>
    </div>
  );
};
