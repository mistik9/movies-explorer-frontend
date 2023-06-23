import "./Logo.css";
import logo from "../../images/logo.svg"


function Logo() {
    return (
        <div>
            <img className="logo" src={logo} alt="логотип приложения" />
        </div>
    );
}

export default Logo;