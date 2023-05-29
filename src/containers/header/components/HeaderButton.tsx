import { Link, useLocation } from 'react-router-dom'
import Button from '../../../components/ui/Button';

interface HeaderButtonProps {
    linkStyle: string
    buttonStyle: string
}

const HeaderButton = ({ linkStyle, buttonStyle }: HeaderButtonProps) => {
    const location = useLocation();
    
    if (location.pathname === '/sign-in') {
        return (
            <Link className={linkStyle} to='/sign-up'>
                <Button classes={buttonStyle} title='Регистрация' />
            </Link>
        )
    } else {
        return (
            <Link className={linkStyle} to='/sign-in'>
                <Button classes={buttonStyle} title='Войти' />
            </Link>
        )
    }
}

export default HeaderButton