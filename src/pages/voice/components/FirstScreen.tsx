import styles from './styles/NewsList.module.scss';
import Heading from "../../../components/simple/heading"
import Button from "../../../components/ui/Button"

interface FirstScreenProps {
    heading: {
        title: string
        subtitle: string
    }
}

const FirstScreen = ({heading}: FirstScreenProps) => {
  return (
    <section className={styles.section}>
        <Heading text={heading} />
        <div>
            <Button title='Скачать на PC' />
            <Button title='Скачать на Android' />
        </div>
    </section>
  )
}

export default FirstScreen