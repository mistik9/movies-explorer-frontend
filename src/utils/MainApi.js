import { MAIN_API_URL, MOVIE_URL } from "./consts"


class Api {
    constructor() {
        this._baseUrl = MAIN_API_URL;

    }

    getMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })

            .then(res => res.json())
    }

    addMovie(data) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: `${MOVIE_URL}${data.image.url}`,
                trailerLink: data.trailerLink,
                thumbnail: `${MOVIE_URL}${data.image.url}`,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN,
              
            })
        })
            .then(res => res.json())
            
    }

    deleteMovie(movie) {
        return fetch(`${this._baseUrl}/movies/${movie._id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    }

    register({ email, password, name }) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {

                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, name })
        })
            .then(res => {
                if (res.ok) {
                    return res.json();

                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    };

    authorize(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
    }

    checkToken() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())

    }

    logout() {
        return fetch(`${this._baseUrl}/users/signout`, {
            method: 'GET',
        })
            .then(res => res.json())
    }

    getUserData() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())

    }

    updateUserData(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email
            })
        })
            .then(res => res.json())
    }
}


const api = new Api();


export default api;

