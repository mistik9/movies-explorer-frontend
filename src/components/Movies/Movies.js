import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Movies.css"

function Movies() {
    return (
        <div class="movies">
            <Header />
            <SearchForm />
            <Preloader />
            <MoviesCardList />
            <Footer />
        </div>
    )
}
export default Movies