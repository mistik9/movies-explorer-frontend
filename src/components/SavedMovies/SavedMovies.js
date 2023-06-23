import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";;

function SavedMovies({ isLoggedIn, isVisible }) {
    return (
        <div className="saved-movies">
            <Header isLoggedIn={true}  isVisible={true}/>

            <main className="saved-movies__container">
            <SearchForm />
                <MoviesCardList />
            </main>
            <Footer />
        </div>
    )
}
export default SavedMovies