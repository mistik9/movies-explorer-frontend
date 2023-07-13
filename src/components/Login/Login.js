import "../Login/Login.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import Form from "../Form/Form";



function Login({ onLogin, isRegister }) {

    

    return (
        <main className="login">
            <Logo />
            <h2 className="login__title">Рады видеть!</h2>
          <Form isRegister={false} onSubmit={onLogin}/>
            <div className="login__sign-in">
                <p className="login__sign-in-text">Еще не зарегистрированы? </p>
                <Link to="/signup" className="login__sign-in-link"> Регистрация</Link>
            </div>
        </main>

    )
}
export default Login;