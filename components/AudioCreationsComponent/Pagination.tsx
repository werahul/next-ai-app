"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, handlePageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
    const visiblePages = 4; // Display 3 pages at most

    let startPage = currentPage - Math.floor(visiblePages / 2);
    let endPage = currentPage + Math.floor(visiblePages / 2);

    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(visiblePages, totalPages);
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, totalPages - visiblePages + 1);
    }

    return (
      <div className="flex items-center mt-8  justify-center min-w-[100%] ">
        <span
          className={`cursor-pointer mx-2 ${currentPage === 1 ? 'text-gray-300' : 'text-blue-400'}`}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          {/* Left Arrow Icon */}
          <Image
            src="/leftArw.svg"
            alt="left"
            width={8}
            height={5} 
          />
        </span>

        {pageNumbers.map((page) => {
          if (page >= startPage && page <= endPage) {
            const isCurrentPage = currentPage === page;

            return (
              <span
                key={page}
                className={`cursor-pointer p-2 rounded-md mx-auto ${isCurrentPage ? 'paginationBg text-white' : ''}`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </span>
            );
          } else if (page === startPage - 1 || page === endPage + 1) {
            // Display ellipsis before and after visible pages
            // return <span key={page} className="mx-1">...</span>;
          }
          return null;
        })}

        <span
          className={`cursor-pointer p-0 -ml-2 ${currentPage === totalPages ? '' : 'cursor-pointer'}`}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          {/* Right Arrow Icon */}
          <Image src="/rghArow.svg" alt="Right" width={50} height={50}/>
        </span>
      </div>
    );
  };

  return <div>{renderPageNumbers()}</div>;
};

export default Pagination;
