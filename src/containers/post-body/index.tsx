import styles from './PostBody.module.scss';
import Body from "../body"

interface PostBodyProps {
    title: string
    time: string
    topic: string
    image?: string
}

const PostBody = ({ image, title, time, topic }: PostBodyProps) => {
    return (
        <Body>
            <main>
                <section className={styles.section}>
                    <img className={styles.image} src={image} alt={title} />
                    <div className={styles.wraper}>
                        <p className={styles.topic}>{topic}</p>
                        <h1 className={styles.title}>{title}</h1>
                        <p className={styles.time}>{time}</p>
                    </div>
                </section>
            </main>
        </Body>
    )
}

export default PostBody