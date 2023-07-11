import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import SideMenu from "../SideMenu/SideMenu";


function App() {
    const [isRegister, setIsRegister] = React.useState(false);
    const [isLoggedIn, setIsloggedIn] = React.useState(false);
    const [isSideMenuOpen, setIsSidemenuOpen] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(true);
    const[isLoading, setIsLoading] = React.useState(false);

    function openSideMenu() {
        setIsSidemenuOpen(true)
    }

    function closeSideMenu() {
        setIsSidemenuOpen(false)
    }

    return (
    <div>
            <Routes>
                <Route path="/" element={<Main isLoggedIn={false} isVisible={false} />} />
                <Route path="/movies" element={<Movies isLoggedIn={true} isVisible={true} openSideMenu={openSideMenu} isLoading={false} />} />
                <Route path="/saved-movies" element={<SavedMovies isLoggedIn={true} isVisible={true} openSideMenu={openSideMenu}/>} />
                <Route path="/profile" element={<Profile isLoggedIn={true} isVisible={true} />} />
                <Route path="/signin" element={<Login isRegister={false} />} />
                <Route path="/signup" element={<Register isRegister={true} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <SideMenu isOpen={isSideMenuOpen} onClose={closeSideMenu} />
        </div>
    )
}
export default App;