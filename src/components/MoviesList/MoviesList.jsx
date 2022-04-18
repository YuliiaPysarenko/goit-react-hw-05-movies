import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MoviesList.module.css';

export default function MoviesList( { movies }) {
    return (
    <ul className={styles.moviesList}>
        {movies.map(movie => 
        <li key={movie.id} className={styles.movie}>
            <Link to={`/movies/${movie.id}`} className={styles.movieLink}>
                {movie.poster_path ?
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}  className={styles.movieImage} width="250" /> :
                <img src="https://github.com/YuliiaPysarenko/media-files/raw/48e3b1ccd5838f7e4a04767b8d601692c13357bc/default_poster.jpg" alt={movie.title}  className={styles.movieImage} width="250" />}
                <p className={styles.movieTitle}>{movie.title}</p>
            </Link>
        </li>)}
    </ul>
    )
}

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
}