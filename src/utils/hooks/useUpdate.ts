import { useEffect, useState } from "react";

export const useUpdate = (shouldShowUpdate: boolean, isPopupOpen: boolean) => {
    const [isUpdating, setIsUpdating] = useState(false);

    useEffect(()=> {
        if(!shouldShowUpdate && !isPopupOpen) {
            setTimeout(()=> {
                if(!isPopupOpen) setIsUpdating(false)
            }, 2000);
        } else if (!isPopupOpen){
            setIsUpdating(true);
        }
    }, [shouldShowUpdate, isPopupOpen]);

    return {isUpdating};
};