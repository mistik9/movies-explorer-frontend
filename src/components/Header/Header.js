import "./Header.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";



function Header({ isLoggedIn, openSideMenu }) {
    return (
        <header class="header">
            <Logo />
            <Navigation isLoggedIn={isLoggedIn} openSideMenu={openSideMenu}/>
        </header>
    )
}
export default Header