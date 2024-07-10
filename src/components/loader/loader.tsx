import loadAnimation from '../../assets/Rolling@1x-1.9s-200px-200px-black.svg';
import refreshAnimation from '../../assets/Rolling@1x-1.9s-200px-200px.svg'
import cl from "./loader.module.scss";

export const Loader = () => {
    return (
        <section className={cl.loader}>
            <div className={cl.loaderImage}>
                <img className={cl.loaderAnimation} src={loadAnimation} alt="Анимация загрузки" />
            </div>
            <h2 className={cl.loaderTitle}>
                Подгрузка компаний
            </h2>
        </section>
    )
};

export const Refresh = () => {
    return (
        <div className={cl.refresh}>
            <div className={cl.refreshImage}>
                <img className={cl.refreshAnimation} src={refreshAnimation} alt="Анимация обновления страницы" />
            </div>
        </div>
    )
};