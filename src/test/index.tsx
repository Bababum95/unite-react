import {useEffect, useState} from 'react'
import { IGame } from '../core/interfaces/interfaces'
import { UniteService } from '../core/services/unite.service'

const Test = () => {
    const [gamesList, setGamesList] = useState<IGame[]>()
    useEffect(() => {
        const fetchPost = async () => {
            const data = await UniteService.getTestPosts()
            console.log(data)
        }
        fetchPost()
    }, [])
  return (
    <div>Test</div>
  )
}

export default Test