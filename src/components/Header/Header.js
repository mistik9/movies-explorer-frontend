import "./Header.css";
import Logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";



function Header() {
    return (
 <header class="header">
    <img class="header__logo" src={Logo} alt="Логотип"></img>
<Navigation />
 </header>
    )
}
export default Header