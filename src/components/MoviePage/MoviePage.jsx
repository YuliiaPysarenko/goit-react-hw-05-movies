import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import GetGenres from './MovieGenres';
import styles from './MoviePage.module.css';

export default function MoviePage({movie}) {
    return (
        <div className={styles.movie}>
            {movie.poster_path ?
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}  className={styles.movieImage} width="250" /> :
                <img src="https://github.com/YuliiaPysarenko/media-files/raw/48e3b1ccd5838f7e4a04767b8d601692c13357bc/default_poster.jpg" alt={movie.title}  className={styles.movieImage} width="250" />
            }
            {/* <div className={styles.details}> */}
                <p><b>Year:</b> {movie.release_date.slice(0, 4)}</p>
                <p><b>Genres:</b> <GetGenres genres={movie.genres} /></p>

                <h2>Overview</h2>
                <p>{movie.overview}</p>

                <h2>Additional information</h2>
                <div className={styles.additional}>
                    <NavLink to={`/movies/${movie.id}/cast`} className={({ isActive }) => isActive ? `${styles.activeLink} ${styles.link}` : styles.link}>Cast</NavLink>
                    <NavLink to={`/movies/${movie.id}/reviews`} className={({ isActive }) => isActive ? `${styles.activeLink} ${styles.link}` : styles.link}>Reviews</NavLink>
                </div>
            {/* </div> */}
        </div>
    )
}

MoviePage.propTypes = {
    movie: PropTypes.object
}