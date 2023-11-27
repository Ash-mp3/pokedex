import dexLogo from "../images/dexLogo.png";
import { Link } from "react-router-dom";
import Search from "./Search";

function Header() {
  return (
    <header className="header w-full flex justify-between py-[10px] px-[10px] sm:px-[35px] gap-5">
      <Link to="/">
        <img className="logo" src={dexLogo} alt="dex logo" />
      </Link>
      <div className="search flex items-center justify-center w-auto">
        <Search />
      </div>
    </header>
  );
}

export default Header;
