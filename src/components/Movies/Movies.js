import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Movies.css"

function Movies({ isLoggedIn, openSideMenu, isVisible }) {
    return (
        <div className="movies">
            <Header isLoggedIn={true} isVisible={true} openSideMenu={openSideMenu}/>
            <main className="movies__content">
                <SearchForm />
                <Preloader isLoading={false}/>
                <MoviesCardList />
            </main>
            <Footer />
        </div>
    )
}
export default Movies