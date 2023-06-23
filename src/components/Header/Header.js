import "./Header.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";



function Header({ isLoggedIn, openSideMenu, isVisible }) {
    return (
        <header className={`header ${isVisible ? "" : "header_hidden"}`}>
            <Logo />
            <Navigation isLoggedIn={isLoggedIn} openSideMenu={openSideMenu}/>
        </header>
    )
}
export default Header