import { useState, useMemo } from "react";

export const usePagination = (items, itemsPerPage = 8) => {
    const [currentPage, setCurrentPage] = useState(1);
 
    const totalPages = useMemo(() => {
        return Math.ceil(items.length / itemsPerPage);
    }, [items, itemsPerPage]);

    const currentItems = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return items.slice(start, start + itemsPerPage);
    },[items, currentPage, itemsPerPage]);

    const nextPage = () => {
        setCurrentPage((p) => (p < totalPages ? p + 1 : p));
    };

    const prevPage = () => {
        setCurrentPage((p) => (p > 1 ? p - 1 : p ));
    };

    const goToPage = (page) => {
        if(page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const resetPage = () => setCurrentPage(1);

    return {
        currentPage,
        totalPages,
        currentItems,
        nextPage,
        prevPage,
        goToPage,
        resetPage
    };
};