import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import api from "../../utils/MainApi";
import getMovies from "../../utils/MoviesApi";
import "./Movies.css";


function Movies({ isLoggedIn, openSideMenu, isVisible }) {

    const [allMovies, setAllMovies] = React.useState([]);
    const [isPreloader, setIsPreloader] = React.useState(false);
    const [isFoundMovies, setIsFoundMovies] = React.useState([]);

    React.useEffect(() => {
        getMovies()
            .then((res) => {
                setAllMovies(res)
            })
            .catch((err) => console.log(err))
    }, [])

    React.useEffect(() => {
        localStorage.setItem('allMovies',  JSON.stringify(allMovies))
   
    }, [allMovies])


    React.useEffect(() => {
        const movies = JSON.parse(localStorage.getItem('allMovies'));
        
        setAllMovies(movies)
   
    }, [])

    function renderMovies() {
        setIsPreloader(false);
    }

  








    return (
        <div className="movies">
            <Header isLoggedIn={isLoggedIn} isVisible={true} openSideMenu={openSideMenu} />
            <main className="movies__content">
                <SearchForm />
                <Preloader isLoading={false} />
                <MoviesCardList />
            </main>
            <Footer />
        </div>
    )
}
export default Movies