import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import api from "../../utils/MainApi";
import "./Movies.css";


function Movies({ isLoggedIn, openSideMenu, isVisible }) {

    const [userMovies, setUserMovies] = React.useState([]);
    const [isPreloader, setIsPreloader] = React.useState(false);
    const [isFoundMovies, setIsFoundMovies] = React.useState([]);


    React.useEffect(() => {
        api.getMovies()
          .then((res) => {
            setUserMovies(res);
          })
          .catch((e) => console.log(e));
      }, [ ]);

      function serchMovies() {
        
      }



   
    return (
        <div className="movies">
            <Header isLoggedIn={isLoggedIn} isVisible={true} openSideMenu={openSideMenu}/>
            <main className="movies__content">
                <SearchForm serchMovies={onSerchMovies}/>
                <Preloader isLoading={false}/>
                <MoviesCardList />
            </main>
            <Footer />
        </div>
    )
}
export default Movies