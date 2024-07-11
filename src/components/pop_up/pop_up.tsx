import { useEffect } from 'react';
import CloseBtn from '../close_btn/close_btn';
import cl from './pop_up.module.scss';

interface IPopUpProps {
    pType: string,
    error?: null | string,
    cardData?: {
        btnClicked?: string | null,
        companyId?: string | null,
    }
    ref?: HTMLDivElement | null;
    onClick: () => void
};
interface IErrorContentProps {
    error: IPopUpProps['error'],
};

const PopUp = ({onClick, ...props}: IPopUpProps) => {


    useEffect(()=> {
        const scrollWidth =  window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflowY = 'hidden';
        if (props.ref) props.ref.style.paddingRight = scrollWidth + 'px';
        
        return () => {
            document.body.style.overflowY = 'visible';
            if (props.ref) props.ref.style.paddingRight = 0 + 'px';
        };
    }, [])



    return (
        <div className={cl.popup}>
            <div className={cl.contentWrap}>
                <div className={cl.popupContent}>
                    {props.pType === 'error'
                        ? <ErrorContent error={props.error}/>
                        : <CardContent cardData={props.cardData}/>}
                </div>
            </div>
                <div className={cl.btnWrap}>
                    <CloseBtn onClick={onClick}/>
                </div>
        </div>
    )
};

const ErrorContent = ({error}: IErrorContentProps) => {
    return (
        <div className={cl.error}>
            <div className={`${cl.errorIcon} ${cl.cardField}`}>
                <span className='visuallyHidden'>Возникла ошибка</span>
            </div>
            <p className={cl.cardField}>{error}</p>
        </div>
    )
};
const CardContent = ({cardData}: {cardData: IPopUpProps['cardData']}) => {
    return (
        <div className={cl.card}>
            <p className={cl.cardField}>Нажата кнопка "{cardData?.btnClicked}"</p>
            <p className={cl.cardField}>ID компании: {cardData?.companyId}</p>
        </div>
    )
};

export default PopUp;