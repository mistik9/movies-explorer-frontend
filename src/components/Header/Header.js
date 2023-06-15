import "./Header.css";
import Logo from "../../images/logo.svg"



function Header() {
    return (
 <header class="header">
    <img class="header__logo" src={Logo} alt="Логотип"></img>
 </header>
    )
}
export default Header