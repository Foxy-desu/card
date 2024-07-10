import cl from './card_logo.module.scss';
import logo from '../../assets/icons/logo.png';

interface ILogo {
    src?: string;
}

const Logo = ({src}: ILogo): JSX.Element => {
    const defaultLogo = logo;
    return (
        <div className={cl.logo}>
            <img className={cl.image} src={src || defaultLogo} alt="Логотип компании" />
        </div>
    )
};

export default Logo;