import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { UniteService } from '../../core/services/unite.service'
import { INews } from '../../core/interfaces/posts.interfaces';
import Card from '../../components/simple/card';
import Button from '../../components/ui/Button';
import SceletoneCard from '../../components/ui/sceletone/SceletoneCard';
import styles from './Profile.module.scss';

const LastNews = () => {
  const [news, setNews] = useState<INews[]>()
  useEffect(() => {
    const fetchPost = async () => {
      const data = await UniteService.getPosts(1, 30)
      setNews(data)
    }
    fetchPost()
  }, [])
  return (
    <div className={styles.newsContainer}>
      {news ? (
        <Card
          key={news[0].id}
          link={`/news/${news[0].id}`}
          imageId={news[0].featured_media}
          title={news[0].title.rendered}
          time={news[0].date}
          topic={news[0].teg}
          fullPage={true} />
      ) : (
        <SceletoneCard fullPage={true} />
      )}
      <Link to='/news'>
        <Button fullPage={true} title='Все новости' />
      </Link>
    </div>
  )
}

export default LastNews

