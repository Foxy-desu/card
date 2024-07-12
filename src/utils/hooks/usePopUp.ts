import { useState } from "react";

export interface IUsePopupProps {
    error: string | null;
    cardData: object | {
        btnClicked: string;
        companyId: string;
    };
}
interface IUsePopupStats {
    isOpen: boolean,
    pType: string,
    error: IUsePopupProps['error']
    cardData: IUsePopupProps['cardData'],
}
export const usePopUp = () => {
   const [popupStats, setIPopupStats] = useState<IUsePopupStats>({
    isOpen: false,
    pType: '',
    error: null,
    cardData: {}
})
   const closePopUp = ()=> {
    setIPopupStats({
        isOpen: false,
        pType: '',
        error: null,
        cardData: {}
    });
   };
   const openOnError = (error: string) => {
    setIPopupStats({
        isOpen: true,
        pType: 'error',
        error: error,
        cardData: {}
    });
   };
   const openOnCard = (cardData: IUsePopupProps['cardData']) => {
    setIPopupStats({
        isOpen: true,
        pType: 'card',
        error: null,
        cardData: cardData
    });
   }
   
   return {popupStats, closePopUp, openOnError, openOnCard};
};