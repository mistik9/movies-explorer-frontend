import "./Logo.css";
import logo from "../../images/logo.svg"


function Logo() {
    return (
        <div>
            <img class="logo" src={logo} alt="логотип приложения" />
        </div>
    );
}

export default Logo;