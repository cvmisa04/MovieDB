import React from 'react'
const IMG_API = "https://image.tmdb.org/t/p/w500"

function Movie({ title, orignal_title, overview, popularity, poster_path, vote_average }) {

    const setVoteClass = (vote) => {
        if (vote >= 8) {
            return 'green'

        } else if (vote >= 6) {
            return 'orange'
        } else {
            return 'red'
        }
    }

    return (
        <div className='movie'>
            <img src={poster_path ? (IMG_API + poster_path) :
                'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80'
            } />
            <div className='movie-info'>
                <h3>{title}</h3>
                <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
            </div>
            <div className='movie-over'>
                {overview}
            </div>

        </div>
    )
}

export default Movie;
