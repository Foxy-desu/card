import { ICards} from '../../store/cards_slice';
import Card from '../card/card';
import cl from './cards_list.module.scss';


const CardList = ({cards}: {cards: ICards['cards']}) => {
    function renderCards(cards: ICards['cards']){
        if (cards.length > 0) {
            return cards.map(card => {
                const cardProps = {
                    companyId: card.company.companyId,
                    loyaltyLevel: card.customerMarkParameters.loyaltyLevel.name,
                    cashback: card.customerMarkParameters.loyaltyLevel.cashToMark,
                    credits: card.customerMarkParameters.mark,
                    appDashboard: card.mobileAppDashboard,
                }
                return (
                    <li key={card.company.companyId}>
                        <Card {...cardProps}/>
                    </li>
                )
            })
        }
    }
    return (
        <ul className={cl.cardsList}>
            {renderCards(cards)}
        </ul>
    )
};

export default CardList;