import React, { useState } from 'react';
import Image from 'next/image';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, handlePageChange }) => {
  const itemsPerPage = 4;
  const totalItems = 20; // Update this to your total number of items

  const totalPageCount = Math.ceil(totalItems / itemsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = Array.from({ length: totalPageCount }, (_, index) => index + 1);
    const currentPageIndex = currentPage - 1;

    const visiblePages = 5; // Always show 5 pages

    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPageCount, startPage + visiblePages - 1);

    return (
      <div className="flex items-center mt-8">
        <span
          className={`cursor-pointer p-2 mx-1 ${currentPage === 1 ? 'text-gray-300' : 'text-blue-400'}`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          {/* Left Arrow Icon */}
          <Image src="/leftArrow.svg" alt="left" width={10} height={10} />
        </span>

        {pageNumbers.map((page) => {
          if (page >= startPage && page <= endPage) {
            const isCurrentPage = currentPage === page;

            return (
              <span
                key={page}
                className={`cursor-pointer p-2 rounded-md mx-1 ${isCurrentPage ? 'paginationBg text-white' : ''}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </span>
            );
          } else if (page === startPage - 1 || page === endPage + 1) {
            // Display ellipsis before and after visible pages
            return <span key={page} className="mx-1">...</span>;
          }
          return null;
        })}

        <span
          className={`cursor-pointer p-0 mx-0 ${currentPage === totalPageCount ? '' : 'cursor-pointer'}`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          {/* Right Arrow Icon */}
          <Image src="/rghArow.svg" alt="Right" width={50} height={50} />
        </span>
      </div>
    );
  };

  return <div>{renderPageNumbers()}</div>;
};

export default Pagination;
