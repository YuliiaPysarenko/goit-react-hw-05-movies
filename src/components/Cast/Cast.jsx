import PropTypes from 'prop-types';
import styles from './Cast.module.css';

export default function Cast({ castList }) {

  return (
    <>
    {castList && castList.length !== 0 ?
      <ul className={styles.castList}>
        {castList.map(cast => 
            <li key={cast.cast_id} className={styles.castItem}>
                {cast.profile_path ?
                <img src={`http://image.tmdb.org/t/p/w300${cast.profile_path}`} alt={cast.name} width="200" className={styles.castImage} /> :
                <img src={`https://github.com/YuliiaPysarenko/media-files/raw/48e3b1ccd5838f7e4a04767b8d601692c13357bc/default_poster.jpg`} alt={cast.name} width="200" className={styles.castImage} />}
                <p className={styles.castName}>{cast.name}</p>
            </li>)}
      </ul>
      : <p className={styles.castListEmpty}>Oops, seems like the cast list is empty</p>}
      </>
  );
}

Cast.propTypes = {
  castList: PropTypes.arrayOf(PropTypes.object),
}