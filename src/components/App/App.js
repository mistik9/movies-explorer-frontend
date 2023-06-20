import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";

function App(){
    const [isRegister, setIsRegister] = React.useState(false);
    const [isLoggedIn, setIsloggedIn] = React.useState(false)

    return(
        <>
         <Routes>
          <Route path="/" element= {<Main isLoggedIn={false}/>} />
          <Route path="/movies" element= {<Movies isLoggedIn={true}/>} />
          <Route path="/saved-movies" element= {<SavedMovies isLoggedIn={true}/>} />
          <Route path="/profile" element= {<Profile isLoggedIn={true}/>} />
          <Route path="/signin" element= {<Login isRegister={false}/>} />
          <Route path="/signup" element= {<Register isRegister={true}/>} />
          <Route path="*" element= {<NotFound />} />
          </Routes>
        </>
    )
}
export default App;