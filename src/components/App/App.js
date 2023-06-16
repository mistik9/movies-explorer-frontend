import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Profile from "../Profile/Profile";

function App(){

    return(
        <>
         <Routes>
          <Route path="/" element= {<Main />} />
          <Route path="/movies" element= {<Movies />} />
          <Route path="/saved-movies" element= {<SavedMovies />} />
          <Route path="/profile" element= {<Profile />} />
          {/* <Route path="/signin" element= {} />
          <Route path="/signup" element= {} /> */}
          </Routes>
        </>
    )
}
export default App;