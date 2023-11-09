import "../App.src.css";
import dexLogo from '../images/dexLogo.png'
import pokeMag from '../images/pokemon_mag.png'

function Header() {
    return (
        <header className="header w-full flex justify-between">
            <img className="logo" src={dexLogo} alt="dex logo"/>
            <div className="search flex items-center justify-center w-12">
                <img src={pokeMag} alt="search icon"/>
            </div>
      </header>
    )
}

export default Header