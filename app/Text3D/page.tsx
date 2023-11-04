"use client"

import Options from '@/components/Options'
import Image from 'next/image'
import React, { useState } from 'react'

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('My Creation');

  const handlePageChange = (page : any) => {
    // Add logic to update the content for the selected page
    if (page >= 1) {
      setCurrentPage(page);
    }
  };


  const handleTabClick = (tab : any) => {
    setActiveTab(tab);
    setCurrentPage(1); 
  };

  return (
    <div className='max-container flexTwo padding-container3 gap-10 pt-10 pb-[33px] md:gap-10 lg:pt-10'>
      <div>
        <Options />
      </div>
      <div>
        <div className='flex mt-10 space-x-[11px] tabs'>
          <p
            className={`cursor-pointer flex justify-center items-center ${
              activeTab === 'My Creation'
                ? 'bg-[#2B303A] font-medium rounded-[7px] text-white px-2 '
                : 'bg-[#fff] rounded-[7px] border px-2 '
            }`}
            onClick={() => handleTabClick('My Creation')}
          >
            My Creation
          </p>
          <p
            className={` cursor-pointer flex justify-center items-center ${
              activeTab === 'My Saved'
                ? 'bg-[#2B303A] font-medium rounded-[7px] text-white px-2 '
                : 'bg-[#fff] rounded-[7px] border px-2 py-1'
            }`}
            onClick={() => handleTabClick('My Saved')}
          >
            My Saved
          </p>
          <p
            className={`cursor-pointer flex justify-center items-center ${
              activeTab === 'Public'
                ? 'bg-[#2B303A] font-medium rounded-[7px] text-white px-2 '
                : 'bg-[#fff] rounded-[7px] border px-2 py-1'
            }`}
            onClick={() => handleTabClick('Public')}
          >
            Public
          </p>
        </div>
        {/* Content for each tab based on currentPage */}
        {activeTab === 'My Creation' && (
          <div className='grid grid-cols-5 gap-[17px] mt-5'>
             <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          </div>
        )}
        {activeTab === 'My Saved' && (
          <div className='grid grid-cols-5 gap-[17px] mt-5'>
             <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          </div>
        )}
        {activeTab === 'Public' && (
          <div className='grid grid-cols-5 gap-[17px] mt-5'>
          
             <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
          <div className='w-[180px] xxl:w-[198px] h-[295px] rounded-[12px] bg-[#C4C4C4]'></div>
        
          </div>
        )}
        <div className='flexBetween px-14 space-x-16 my-10 pagination'>
          <div>
            <Image
              src="/leftArrow.svg"
              alt='previous'
              width={12}
              height={12}
              onClick={() => handlePageChange(currentPage - 1)}
            />
          </div>
          {[currentPage, currentPage + 1, currentPage + 2, currentPage + 3, currentPage + 4].map((page) => (
            <div
              key={page}
              className={`font-medium text-[18px] ${
                page === currentPage ? 'buttonBg' : ''
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </div>
          ))}
          <div>
            <Image
              src="/rightSideArrow.svg"
              alt='next'
              width={12}
              height={12}
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
