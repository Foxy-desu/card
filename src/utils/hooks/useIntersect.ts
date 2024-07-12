import { SerializedError } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useInView } from "react-intersection-observer";

export const useIntersect = (isLoading: boolean, isPopupOpen: boolean, hasError: SerializedError | null) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [shouldFetch, setShouldFetch] = useState(false);
    const [shouldShowUpdate, setShouldShowUpdate] = useState(false);
    const {ref, inView, } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if(inView && !isLoading && !isPopupOpen && !hasError) {
            setCurrentPage(currentPage + 1);
            setShouldFetch(true);
        } else if (inView && !isLoading && !isPopupOpen && hasError){
            setShouldFetch(true);
            setShouldShowUpdate(true)
        }
    },[inView, isPopupOpen]);

    return {ref, currentPage, shouldFetch, setShouldFetch, shouldShowUpdate, setShouldShowUpdate};
};

