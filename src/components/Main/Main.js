import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import AboutMe from "../AboutMe/AboutMe";
import Techs from "../Techs/Techs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Main.css";



function Main({ isLoggedIn }) {
    return (
        <div class="main">
            <div class="main__section_gray">
            <Header isLoggedIn={false}/>
            </div>
            <main class="main__content">
                <Promo />
                <NavTab />
                <AboutProject />
                <Techs />
                <AboutMe />
            </main>
            <Footer />
        </div>

    )
}
export default Main