import { Link } from 'react-router-dom'
import styles from './styles/SuportLink.module.scss';

const SuportLink = () => {
  return (
    <Link className={styles.suport} to='/suport'>Обратиться в службу поддержки<span></span></Link>
    )
}

export default SuportLink