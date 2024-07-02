import splashIcon from '../../assets/icons/logo.png';
import cl from './splash_screen.module.scss';

const SplashScreen =()=>{
    
    return (
        <div className={cl.splashScreen}>
            <div className={cl.iconContainer}>
                <img className={cl.splashIcon} src={splashIcon} alt="Splashscreen Icon" />
            </div>
        </div>
    )
};

export default SplashScreen;