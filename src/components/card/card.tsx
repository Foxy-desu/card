import cl from './card.module.scss';
import IconButton from '../icon_btn/icon_btn';
import Btn from '../btn/btn';
import Logo from '../card_logo/card_logo';
import InfoBlock from '../info_block/info_block';
import CardTitle from '../card_title/card_title';
import { ICard } from '../../store/cards_slice';
import { IUsePopupProps } from '../../utils/hooks/usePopUp';

interface ICardProps {
    companyId: string;
    loyaltyLevel: string;
    cashback: number;
    credits: number;
    appDashboard: ICard['mobileAppDashboard'];
    openPopUp: (cardData: IUsePopupProps['cardData']) => void;
}
const Card =({openPopUp, ...props}: ICardProps)=> {
    const dynamicColor = props.appDashboard.backgroundColor;
    const inlineStyle = dynamicColor? {backgroundColor: dynamicColor}: {};

    return(
        <article className={cl.card} style={inlineStyle}>
            <header className={cl.cardHeader}>
                <CardTitle
                    companyName={props.appDashboard.companyName}
                    dynamicColor={props.appDashboard.cardBackgroundColor}
                />
                <div className={cl.cardIcon}>
                    <Logo src={props.appDashboard.logo}/>
                </div>
            </header>
            <div className={cl.cardInfo}>
                <div className={cl.cardScore}>
                    <InfoBlock
                        data={props.credits}
                        title={'баллов'}
                        type={'spacious'}
                        dynamicColor={{
                            title: props.appDashboard.highlightTextColor,
                            data: props.appDashboard.cardBackgroundColor
                        }}
                    />
                </div>
                <div className={cl.cardLoyalty}>
                    <div className={cl.loyaltyWrap}>
                        <InfoBlock
                            data={`${props.cashback} %`}
                            title={'Кешбек'}
                            type={'narrow'}
                            dynamicColor={{
                                title: props.appDashboard.highlightTextColor,
                                data: props.appDashboard.cardBackgroundColor
                            }}
                        />
                    </div>
                    <div className={cl.loyaltyWrap}>
                        <InfoBlock
                            data={props.loyaltyLevel}
                            title={'Уровень'}
                            type={'narrow'}
                            dynamicColor={{
                                title: props.appDashboard.highlightTextColor,
                                data: props.appDashboard.cardBackgroundColor
                            }}
                        />
                    </div>
                </div>
            </div>
            <footer className={cl.cardFooter}>
                <div className={`${cl.btnWrap} ${cl.btnWrap_sml}`}>
                    <IconButton
                        iconBtnType='eye'
                        dynamicColor={props.appDashboard.textColor}
                        onClick={()=> openPopUp({btnClicked: 'Показать', companyId: props.companyId})}/>
                </div>
                <div className={`${cl.btnWrap} ${cl.btnWrap_sml}`}>
                    <IconButton
                        iconBtnType='trash'
                        dynamicColor={props.appDashboard.mainColor}
                        onClick={()=> openPopUp({btnClicked: 'Удалить', companyId: props.companyId})}/>
                </div>
                <div className={cl.btnWrap}>
                    <Btn dynamicColor={{
                        text: props.appDashboard.textColor,
                        bg: props.appDashboard.accentColor
                        }}
                        onClick={()=> openPopUp({btnClicked: 'Подробнее', companyId: props.companyId})}
                    />
                </div>
            </footer>
        </article>
    )
};

export default Card;