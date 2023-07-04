export const MOVIE_URL= "https://api.nomoreparties.co/";
// export const MAIN_API_URL = "https://hollysht.nomoredomains.rocks/api";
 export const MAIN_API_URL ="http://localhost:3001";

 const OK = 200;
 const BAD_REQUEST = 400;
 const UNAUTHORIZED = 401;
 const FORBIDDEN = 403;
 const NOT_FOUND = 404;
 export const CONFLICT = 409;
 const INTERNAL_SERVER = 500;

 const NOT_FOUND_USER_MESSAGE = 'Пользователь не найден';
const BAD_DATA_USER_MESSAGE = 'Переданы некорректные данные';
export const CONFLICT_USER_MESSAGE = 'Пользователь с таким электронным адресом уже зарегистрирован';
const SIGNIN_MESSAGE = 'Пользователь авторизован';
const CLEAR_COOKIE_MESSAGE = 'Cookies удалены';
const NOT_FOUND_MOVIE_MESSAGE = 'Нет такого фильма';
const DEL_MOVIE_MESSAGE = 'Фильм удален';
const FORBIDDEN_MOVIE_MESSAGE = 'Нельзя удалить фильм не из вашей коллекции';
const BAD_DATA_MOVIE_MESSAGE = 'Переданы некорректные данные';
const NOT_SIGNIN_MESSAGE = 'Необходима авторизация';
export const SERVER_MESSAGE = 'На сервере произошла ошибка';
const NOT_FOUND_MESSAGE = 'Cтраница не найдена';
 


export const SCREEN_S = 320;
export const SCREEN_M = 690;
export const SCREEN_L = 1080;

export const INDEX_SCREEN_S =5
export const INDEX_SCREEN_M =8
export const INDEX_SCREEN_L =12

export const INDEX_COUNT ={
    isScreenS: INDEX_SCREEN_S,
    isScreenM: INDEX_SCREEN_M,
    isScreenL: INDEX_SCREEN_L,
}
export const ADD_INDEX_SCREEN_S =2
export const ADD_INDEX_SCREEN_M =2
export const ADD_INDEX_SCREEN_L =3

export const ADD_INDEX_COUNT = {
    isScreenS: ADD_INDEX_SCREEN_S,
    isScreenM: ADD_INDEX_SCREEN_M,
    isScreenL: ADD_INDEX_SCREEN_L,
}

console.log(ADD_INDEX_COUNT)

