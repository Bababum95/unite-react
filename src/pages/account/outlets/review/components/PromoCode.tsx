import Button from '../../../../../components/ui/Button';
import LayoutBlock from '../../components/LayoutBlock'
import styles from './styles/PromoCode.module.scss';

const PromoCode = () => {
  return (
    <LayoutBlock title='использовать код'>
        <form className={styles.form}>
        <input placeholder='XXXX-XXXX-XXXX' className={styles.input} />
        <Button classes={styles.button} title='Использовать' />
        </form>
    </LayoutBlock>
  )
}

export default PromoCode