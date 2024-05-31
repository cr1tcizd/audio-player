import { assets } from "../../assets/assets";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__arrow">
        <assets.arrowLeft_icon className="navbar__arrow-arr" />
        <div className="navbar__arrow__home">Home</div>
        <assets.arrowRight_icon className="navbar__arrow-arr" />
      </div>
      <div className="navbar__search">
        <label htmlFor="search">
          <assets.search__icon className="navbar__search__icon" />
          <input
            className="navbar__search__input"
            type="text"
            name="search"
            id="search"
            placeholder="Search music, artist"
          />
        </label>
      </div>
    </div>
  );
};
