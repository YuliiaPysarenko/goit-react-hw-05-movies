import PropTypes from 'prop-types';

export default function GetGenres({genres}) {
    return genres.map(genre => genre.name).join(', ');
}

GetGenres.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.object),
}