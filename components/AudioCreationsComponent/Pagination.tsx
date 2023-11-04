import React, { useState } from 'react';
import Image from 'next/image';

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  const handlePageClick = (page: any) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    const firstPageNumbers = pageNumbers.slice(0, 3); // First 3 numbers
    const lastPageNumbers = pageNumbers.slice(-1); // Last page number

    return (
      <div className="flex items-center mt-8">
        <span
          className={`cursor-pointer p-2 mx-1 ${currentPage === 1 ? 'text-gray-300' : 'cursor-pointer text-blue-400'
            }`}
          onClick={() => handlePageClick(currentPage - 1)}
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
            className={`cursor-pointer p-2 rounded-md mx-1 ${currentPage === page ? 'paginationBg text-white' : ''
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
            className={`cursor-pointer p-2 rounded-md mx-1 ${currentPage === page ? 'bg-blue-400 text-white' : ''
              }`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </span>
        ))}
        <span
          className={`cursor-pointer p-0 mx-0 ${currentPage === totalPages
              ? ""
              : 'cursor-pointer'
            }`}
          onClick={() => handlePageClick(currentPage + 1)}
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
