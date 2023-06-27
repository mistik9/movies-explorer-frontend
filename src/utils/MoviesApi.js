import  { MOVIE_URL }  from "./consts"

function getMovies() {
        return fetch(MOVIE_URL)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })
    }


export default getMovies;