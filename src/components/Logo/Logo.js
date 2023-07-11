import "./Logo.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";


function Logo() {
    return (
        <div className="logo">
            <Link to="/" className="logo__link">
                <img className="logo__img" src={logo} alt="логотип приложения" />
            </Link>
        </div>
    );
}

export default Logo;