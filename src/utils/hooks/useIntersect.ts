import { useEffect, useState } from 'react';
import { useInView } from "react-intersection-observer";

export const useIntersect = (isLoading: boolean) => {
    const [currentPage, setCurrentPage] = useState(0);
    const {ref, inView, } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if(inView && !isLoading) {
            setCurrentPage(currentPage + 1);
        }
    },[inView]);

    return {ref, currentPage};
};

