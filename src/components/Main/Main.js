import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import AboutMe from "../AboutMe/AboutMe";
import Techs from "../Techs/Techs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Main.css";



function Main({ isLoggedIn, isVisible, openSideMenu }) {
    return (
        <div className="main">
                <Header isLoggedIn={false}
                 isColored={true} 
                 isVisible={false}
                 openSideMenu={openSideMenu}/>
                <main className="main__content">
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