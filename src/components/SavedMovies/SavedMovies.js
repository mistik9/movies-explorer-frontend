import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";;

function SavedMovies({ isLoggedIn }) {
    return (
        <div class="saved-movies">
            <Header isLoggedIn={true} />

            <main class="saved-movies__container">
            <SearchForm />
                <MoviesCardList />
            </main>
            <Footer />
        </div>
    )
}
export default SavedMovies