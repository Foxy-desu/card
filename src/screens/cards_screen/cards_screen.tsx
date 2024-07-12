import CardList from '../../components/cards_list/cards_list';
import PopUp from '../../components/pop_up/pop_up';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/hooks';
import { fetchCards, selectCards } from '../../store/cards_slice';
import { useEffect, useRef } from 'react';
import { useIntersect } from '../../utils/hooks/useIntersect';
import { Loader, Refresh } from '../../components/loader/loader';
import { usePopUp } from '../../utils/hooks/usePopUp';
import { useUpdate } from '../../utils/hooks/useUpdate';
import cl from './cards_screen.module.scss';

const CardsScreen = () => {
    const {cards, isLoading, error} = useAppSelector(selectCards);
    const dispatch = useAppDispatch();
    const {popupStats, closePopUp, openOnError, openOnCard} = usePopUp();
    const {ref, currentPage, shouldFetch, setShouldFetch, shouldShowUpdate, setShouldShowUpdate} = useIntersect(isLoading, popupStats.isOpen, error);
    const {isUpdating} = useUpdate(shouldShowUpdate, popupStats.isOpen);
    const cardScreenRef = useRef(null);

    useEffect(() => {
        dispatch(fetchCards({limit: 10, offset: currentPage}));
    }, []);

    useEffect(() => {
        if (currentPage > 0 && shouldFetch) {
            dispatch(fetchCards({limit: 10, offset: currentPage})).then(()=>{setShouldShowUpdate(false)});
            setShouldFetch(false);
        }
    }, [shouldFetch]);
    
    useEffect(()=> {
        if(error?.message) {
            openOnError(error.message)
        }
    }, [error]);

    return (
            <div className={cl.cardScreen} id='cardScreen' ref={cardScreenRef}>
                <header className={cl.header}>
                    <h1 className={cl.headerContent}>Управление картами</h1>
                    {isUpdating && <Refresh/>}
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
                        && <PopUp pType={popupStats.pType} error={popupStats.error} cardData={popupStats.cardData} closePopup={closePopUp} referer={cardScreenRef.current}/>
                    }
                    
                </main>
            </div>
    )
};

export default CardsScreen;