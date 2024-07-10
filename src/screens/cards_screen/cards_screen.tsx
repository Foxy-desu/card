import cl from './cards_screen.module.scss';
import CardList from '../../components/cards_list/cards_list';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/hooks';
import { fetchCards, selectCards } from '../../store/cards_slice';
import { useEffect, useState } from 'react';

const CardsScreen = () => {
    const {cards, isLoading, error} = useAppSelector(selectCards);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCards({limit: 10, offset: 0}));
    }, []);
    
    return (
        <div className={cl.cardScreen}>
            <header className={cl.header}>
                <h1 className={cl.headerContent}>Управление картами</h1>
            </header>
            <main className={cl.main}>
                <div className={cl.cards}>
                    {   isLoading
                        ? <p style={{color: 'black'}}>...Загрузка</p>
                        : error
                        ? <p style={{color: 'black'}}>{error.message}</p>
                        : cards?.length > 0
                        ? <CardList cards={cards}/>
                        : <p style={{color: 'black'}}>Карточки не найдены</p>}
                    {/* loading cards */}
                    {/* to update -swipe up */}
                </div>
                <div className={cl.observer}>

                </div>
            </main>
        </div>
    )
};

export default CardsScreen;