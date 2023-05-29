import SceletoneImage from '../../../components/ui/sceletone/SceletoneImage';
import SceletoneString from '../../../components/ui/sceletone/SceletoneString';
import styles from './SceletoneNewsPost.module.scss';

const SceletoneNewsPost = () => {
    return (
        <section className={styles.section}>
            <SceletoneImage />
            <div className={styles.wraper}>
                <SceletoneString style={styles.topic} />
                <SceletoneString style={styles.title} />
                <SceletoneString style={styles.time} />
                <SceletoneString style={styles.text_1} />
                <SceletoneString style={styles.text_2} />
                <SceletoneString style={styles.text_3} />
                <SceletoneString style={styles.text_4} />
            </div>
        </section>
    )
}

export default SceletoneNewsPost