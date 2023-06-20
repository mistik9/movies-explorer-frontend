import "./Header.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";



function Header({ isLoggedIn }) {
    return (
        <header class="header">
            <Logo />
            <Navigation isLoggedIn={isLoggedIn}/>
        </header>
    )
}
export default Header