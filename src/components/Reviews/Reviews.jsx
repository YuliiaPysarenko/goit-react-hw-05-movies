import PropTypes from 'prop-types';
import styles from './Reviews.module.css';

export default function Reviews({reviews}) {
    return (
        <>
          {reviews && reviews.length !== 0 ? 
            <ul className={styles.reviewList}> 
                {reviews.map(review => 
                <li key={review.id} className={styles.reviewItem}>
                    <p className={styles.reviewAuthor}><b>{review.author}:</b></p>
                    <p className={styles.reviewText}>{(review.content).length > 50 ? (review.content).slice(0, 250).concat(" ...") : review.content}</p>
                    <p><a href={review.url} target="_blank" rel="noopener noreferrer">Read more</a></p>
                </li>)}
            </ul> : 
            <p className={styles.reviewsListEmpty}>There are no reviews yet</p>}
        </>
    );
}

Reviews.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.object),
}