import logo from '../../asets/images/logo.svg'

const Logo = (props: {styles: string}) => {
    return (
        <img className={props.styles} src={logo} alt='Unite Games logo' />
    )
}

export default Logo