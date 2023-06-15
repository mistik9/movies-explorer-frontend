import "./SavedMovies.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Footer from "../Footer/Footer";

function SavedMovies() {
    return (
        <div class="saved-movies">
            <main class="saved-movies__container">
                <MoviesCard />
            </main>
            <Footer />
        </div>
    )
}
export default SavedMovies