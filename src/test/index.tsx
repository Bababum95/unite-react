import {useEffect, useState} from 'react'
import { IGame } from '../core/interfaces/posts.interfaces'
import { UniteService } from '../core/services/unite.service'

const Test = () => {
    const [gamesList, setGamesList] = useState<IGame[]>()
    useEffect(() => {
        const fetchPost = async () => {
            const posts = await UniteService.getTestPosts()
            const categories = await UniteService.getTestCategories()
            console.log(categories, posts)
        }
        fetchPost()
    }, [])
  return (
    <div>Test</div>
  )
}

export default Test