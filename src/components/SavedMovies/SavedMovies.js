import "./SavedMovies.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function SavedMovies() {
    return (
        <div class="saved-movies">
            <Header/>
            <main class="saved-movies__container">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </main>
            <Footer />
        </div>
    )
}
export default SavedMovies