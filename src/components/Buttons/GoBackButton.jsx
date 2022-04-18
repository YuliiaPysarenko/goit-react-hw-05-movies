import { useNavigate } from 'react-router-dom';
import styles from './GoBackButton.module.css';

export default function GoBackButton() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)} className={styles.GoBackButton}>Go back</button>
    </>
  );
}