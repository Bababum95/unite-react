import styles from './styles/Industry.module.scss';
import Heading from "../../../components/simple/heading"

const Industry = () => {
    return (
        <section className="section">
            <div className="container">
                <Heading
                    text={{
                        title: 'Вместе развиваем игровую индустрию!',
                        subtitle: 'Наша цель – создавать лучшие решения для комфортной игры с друзьями и другими игроками!'
                    }}
                    classes={{
                        title: styles.title,
                        subtitle: styles.subtitle
                    }} />
            </div>
        </section>
    )
}

export default Industry