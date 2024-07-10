import cl from './cards_screen.module.scss';
import CardList from '../../components/cards_list/cards_list';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/hooks';
import { fetchCards, selectCards } from '../../store/cards_slice';
import { useEffect } from 'react';
import { useIntersect } from '../../utils/hooks/useIntersect';
import { Loader } from '../../components/loader/loader';
import PopUp from '../../components/pop_up/pop_up';
import { usePopUp } from '../../utils/hooks/usePopUp';

const CardsScreen = () => {
    const {cards, isLoading, error} = useAppSelector(selectCards);
    const dispatch = useAppDispatch();
    const {ref, currentPage} = useIntersect(isLoading);
    const {popupStats, closePopUp, openOnError, openOnCard} = usePopUp();
   

    useEffect(() => {
        dispatch(fetchCards({limit: 10, offset: currentPage}));
    }, []);

    useEffect(() => {
        if (currentPage > 0) {
            dispatch(fetchCards({limit: 10, offset: currentPage}));
        }
    }, [currentPage]);
    
    useEffect(()=> {
        if(error?.message) {
            openOnError(error.message)
        }
    }, [error])
    
    return (
        <div className={cl.cardScreen}>
            <header className={cl.header}>
                <h1 className={cl.headerContent}>Управление картами</h1>
            </header>
            <main className={cl.main}>
                <div className={cl.cards}>
                    { cards?.length > 0 
                        ? <CardList cards={cards} openPopUp={openOnCard}/>
                        : isLoading ? '' : <p style={{color: 'black'}}>Карточки не найдены</p>
                    }
                    {isLoading && <Loader/>}
                </div>
                <div className={cl.observer} style={{height: '2vw'}} ref={ref}>
                </div>
                {popupStats.isOpen
                    && <PopUp pType={popupStats.pType} error={popupStats.error} cardData={popupStats.cardData} onClick={closePopUp} />
                }
                
            </main>
        </div>
    )
};

export default CardsScreen;