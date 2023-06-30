import "./Header.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";



function Header({ isColored, isLoggedIn, openSideMenu }) {
    return (
          <header className = {`header ${ isColored ? "header_colored": ""}`}>
            <Logo />
            <Navigation isLoggedIn={isLoggedIn} openSideMenu={openSideMenu}/>
        </header >
    )
}
export default Header