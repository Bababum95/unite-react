import { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import MainAuth from '../components/MainAuth';
import styles from './Confirm.module.scss';
import Body from '../../../containers/body';
import Button from '../../../components/ui/Button';
import { PinInput, IPinInputRef } from './components/PinInput';
import SuportLink from '../components/SuportLink';

const initialDigits = ['', '', '', '', '', ''];

const Confirm = () => {
    const [digits, setDigits] = useState<string[]>(initialDigits);
    const ref = useRef<IPinInputRef>(null);
    const navigate = useNavigate();
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(digits)
    };
    return (
        <Body>
            <MainAuth text={{ title: 'Проверка безопастности' }} >
                <p className={styles.text}>Введите проверочный код, отправленный на:</p>
                <p className={styles.mail}>mail</p>
                <form onSubmit={onSubmit} className={styles.form} noValidate>
                    <label className='label'>
                        <PinInput ref={ref} digits={digits} onChange={setDigits} />
                    </label>
                    <Button type='button' classes={styles.repeat} title='Запросить код заново' fullPage={true} />
                    <Button type='submit' title='Далее' fullPage={true} />
                    <Link to='/sign-in'>
                        <Button type='button' classes={styles.cancel} title='Отмена' fullPage={true} />
                    </Link>
                </form>
                <SuportLink />
            </MainAuth>
        </Body>
    )
}

export default Confirm