
// Define PaginationProps
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (newPage: number) => void;
}

import React, { useState } from 'react';
import Image from 'next/image';

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, handlePageChange })=> {
  const [localPage, setlocalPage] = useState(1);
  const localTotalPage = 20;

  const handlePageClick = (page: any) => {
    setlocalPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = Array.from({ length: localTotalPage }, (_, index) => index + 1);

    const firstPageNumbers = pageNumbers.slice(0, 3); // First 3 numbers
    const lastPageNumbers = pageNumbers.slice(-1); // Last page number

    return (
      <div className="flex items-center mt-8">
        <span
          className={`cursor-pointer p-2 mx-1 ${localPage === 1 ? 'text-gray-300' : 'cursor-pointer text-blue-400'
            }`}
          onClick={() => handlePageClick(localPage - 1)}
        >
          {/* &lt; Left Arrow Icon */}
          <Image
            src="/leftArrow.svg"
            alt='left'
            width={40}
            height={40} />

        </span>
        {firstPageNumbers.map((page) => (
          <span
            key={page}
            className={`cursor-pointer p-2 rounded-md mx-1 ${localPage === page ? 'paginationBg text-white' : ''
              }`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </span>
        ))}
        <span className="mx-1">...</span> {/* Dots */}
        {lastPageNumbers.map((page) => (
          <span
            key={page}
            className={`cursor-pointer p-2 rounded-md mx-1 ${localPage === page ? 'bg-blue-400 text-white' : ''
              }`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </span>
        ))}
        <span
          className={`cursor-pointer p-0 mx-0 ${localPage === localTotalPage
              ? ""
              : 'cursor-pointer'
            }`}
          onClick={() => handlePageClick(localPage + 1)}
        >
          <Image
            src="/rghArow.svg"
            alt='Right'
            width={200}
            height={200} />
          {/* &gt; Right Arrow Icon */}
          
        </span>
      </div>
    );
  };

  return <div>{renderPageNumbers()}</div>;
};

export default Pagination;
