import { useState } from 'react';

export function usePagination (data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = Math.ceil(data.length / itemsPerPage);

  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(null, end);
  }

  const next = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }

  return { next, currentData, currentPage, maxPage };

}