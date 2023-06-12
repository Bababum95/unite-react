import LayoutBlock from '../../components/LayoutBlock'
import styles from './styles/UserInfo.module.scss';

const UserInfo = () => {
  return (
    <LayoutBlock
      title='ваши данные'
      link={{
          text: 'Сведения об учётной записи >',
          path: '/account/user-info'
      }} >
        <div className={styles.body}>
            <p className={styles.label}>ID:</p>
            <p className={styles.value}>ID: UG-45-qwer</p>
            <p className={styles.label}>Имя:</p>
            <p className={styles.value}>Heras</p>
            <p className={styles.label}>Телефон:</p>
            <p className={styles.value}>+993 (65) 81-25-14</p>
            <p className={styles.label}>Электронная почта:</p>
            <p className={styles.value}>petrosov.her@yandex.ru</p>
            <p className={styles.label}>Реферальный номер:</p>
            <p className={styles.value}>ХХХХ-ХХХХ-XXXX</p>
        </div>
</LayoutBlock>
  )
}

export default UserInfo