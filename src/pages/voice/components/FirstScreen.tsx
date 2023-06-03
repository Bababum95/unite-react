import styles from './styles/FirstScreen.module.scss';
import Heading from "../../../components/simple/heading"
import Button from "../../../components/ui/Button"
import Windows from '../../../components/svg/Windows';
import Android from '../../../components/svg/Android';

interface FirstScreenProps {
  heading: {
    title: string
    subtitle: string
  }
}

const FirstScreen = ({ heading }: FirstScreenProps) => {
  return (
    <section className={styles.section}>
      <Heading text={heading} />
      <div className={styles.wrapper}>
        <Button classes={styles.button} title='Скачать на PC'>
          <Windows />
        </Button>
        <Button classes={styles.button} title='Скачать на Android'>
          <Android />
        </Button>
      </div>
    </section>
  )
}

export default FirstScreen