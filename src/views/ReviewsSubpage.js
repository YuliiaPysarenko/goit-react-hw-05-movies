import { useState, useEffect, Suspense } from "react";
import { useParams } from 'react-router-dom';
import { getReviews } from '../services/themoviedb-api';
import Reviews from '../components/Reviews/Reviews';

export function ReviewsSubpage() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        getReviews(movieId).then(setReviews);
    }, [movieId]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Reviews reviews={reviews} />
        </Suspense>
    )
}