import "../Login/Login.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import Form from "../Form/Form";


function Login({ isRegister }) {
    return (
        <main class='login'>
            <Logo />
            <h2 class="login__title">Рады видеть!</h2>
          <Form isRegister={isRegister}/>
            <div className="login__sign-in">
                <p className="login__sign-in-text">Еще не зарегистрированы? </p>
                <Link to="/signup" className="login__sign-in-link"> Регистрация</Link>
            </div>
        </main>

    )
}
export default Login;