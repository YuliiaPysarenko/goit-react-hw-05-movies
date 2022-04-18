import PropTypes from 'prop-types';
import styles from './Heading.module.css';

export default function Heading({title}) {
    return <h1 className={styles.heading}>{title}</h1>;
}

Heading.propTypes = {
    title: PropTypes.string,
}