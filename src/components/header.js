import dexLogo from "../images/dexLogo.png";
import { Link } from "react-router-dom";
import Search from "./Search";

function Header() {
  return (
    <header className="header w-full flex justify-between">
      <Link to="/PokeList">
        <img className="logo" src={dexLogo} alt="dex logo" />
      </Link>

      <div className="search flex items-center justify-center w-auto">
        <Search />
      </div>
    </header>
  );
}

export default Header;
