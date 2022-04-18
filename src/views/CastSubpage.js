import { useState, useEffect, Suspense } from "react";
import { useParams } from 'react-router-dom';
import { getCast } from '../services/themoviedb-api';
import Cast from '../components/Cast/Cast';

export function CastSubpage() {
    const { movieId } = useParams();
    const [castList, setCastList] = useState(null);

    useEffect(() => {
        getCast(movieId).then(setCastList);
    }, [movieId]);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Cast castList={castList} />
        </Suspense>
    )
}