import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './ParallaxContainer.module.scss';
import classNames from 'classnames'

interface ParallaxContainerProps {
    leftItem?: string
    rightItem?: string
    children: JSX.Element | JSX.Element[]
  }


const ParallaxContainer = ({children, rightItem, leftItem}: ParallaxContainerProps) => {
    const leftItemClases = classNames(leftItem, styles.item)
    const rightItemlases = classNames(rightItem, styles.item)
    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => setOffsetY(window.pageYOffset)
    const parallaxStyle = (speed: number) => {
        return {transform: `translateY(-${offsetY * speed}px)` }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    },[])
    return (
        <section className={styles.section}>
            <div className={styles.left}>
                <div className={leftItemClases} style={parallaxStyle(0.2)}><Link to='/'></Link></div>
                <div className={leftItemClases} style={parallaxStyle(0.1)}><Link to='/'></Link></div>
                <div className={leftItemClases} style={parallaxStyle(0.4)}><Link to='/'></Link></div>
                <div className={leftItemClases} style={parallaxStyle(0.1)}><Link to='/'></Link></div>
                <div className={leftItemClases} style={parallaxStyle(0.5)}><Link to='/'></Link></div>
                <div className={leftItemClases} style={parallaxStyle(0.15)}><Link to='/'></Link></div>
                <div className={leftItemClases} style={parallaxStyle(0.2)}><Link to='/'></Link></div>
                <div className={leftItemClases} style={parallaxStyle(0.15)}><Link to='/'></Link></div>
            </div>
            {children}
            <div className={styles.right}>
                <div className={rightItemlases} style={parallaxStyle(0.2)}><Link to='/'></Link></div>
                <div className={rightItemlases} style={parallaxStyle(0.2)}><Link to='/'></Link></div>
                <div className={rightItemlases} style={parallaxStyle(0.1)}><Link to='/'></Link></div>
                <div className={rightItemlases} style={parallaxStyle(0.4)}><Link to='/'></Link></div>
                <div className={rightItemlases} style={parallaxStyle(0.5)}><Link to='/'></Link></div>
                <div className={rightItemlases} style={parallaxStyle(0.1)}><Link to='/'></Link></div>
                <div className={rightItemlases} style={parallaxStyle(0.1)}><Link to='/'></Link></div>
                <div className={rightItemlases} style={parallaxStyle(0.1)}><Link to='/'></Link></div>
                <div className={rightItemlases} style={parallaxStyle(0.3)}><Link to='/'></Link></div>
            </div>
            <div className={styles.phone}>
                <div className={styles.item}><Link to='/'></Link></div>
                <div className={styles.item}><Link to='/'></Link></div>
                <div className={styles.item}><Link to='/'></Link></div>
                <div className={styles.item}><Link to='/'></Link></div>
                <div className={styles.item}><Link to='/'></Link></div>
                <div className={styles.item}><Link to='/'></Link></div>
                <div className={styles.item}><Link to='/'></Link></div>
                <div className={styles.item}><Link to='/'></Link></div>
                <div className={styles.item}><Link to='/'></Link></div>
                <div className={styles.item}><Link to='/'></Link></div>
                <div className={styles.item}><Link to='/'></Link></div>
                <div className={styles.item}><Link to='/'></Link></div>
                <div className={styles.item}><Link to='/'></Link></div>
            </div>
        </section>
    )
}

export default ParallaxContainer