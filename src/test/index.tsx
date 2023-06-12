import {useEffect} from 'react'
import { UniteService } from '../core/services/unite.service'

const Test = () => {
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