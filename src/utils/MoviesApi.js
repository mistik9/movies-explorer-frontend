import { MOVIE_URL } from "./consts"

function getMovies() {
    return fetch(`${MOVIE_URL}/beatfilm-movies`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }

        })
}


export default getMovies;