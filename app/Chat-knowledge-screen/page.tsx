"use client"

import Options from '@/components/ChatKnowledgeScreen/Options';
import AddNew from '@/components/ChatKnowledgeScreen/AddNew';
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('My Creation');
  const [clickedPage, setClickedPage] = useState(1);
  const [showOptions, setShowOptions] = useState(null);
  const totalPages = 20;

  const handlePageChange = (page: any) => {
    if (page >= 1 && page <= totalPages) {
      setClickedPage(page);
    }
  };

  const handleLeftArrowClick = () => {
    if (currentPage > 1) {
      setClickedPage(currentPage - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (currentPage < totalPages) {
      setClickedPage(currentPage + 1);
    }
  };

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const optionsClick = (itemId: any) => {
    setShowOptions(itemId)
  }
  const closeOptions = () => {
    setShowOptions(null)
  }

  useEffect(() => {
    setCurrentPage(clickedPage);
  }, [clickedPage]);

  // Calculate the range of visible pages
  const maxVisiblePages = 4;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  if (endPage === totalPages) {
    startPage = Math.max(1, totalPages - maxVisiblePages + 1);
  }

  const items = [
    // Add your data objects here
    // Example:
    { id: 1, name: 'Person 1', type: 'Chat' },
    { id: 2, name: 'Person 2', type: 'Chat' },
    { id: 3, name: 'Person 3', type: 'Chat' },
    { id: 4, name: 'Person 4', type: 'Chat' },
    { id: 5, name: 'Person 5', type: 'Chat' },
    { id: 6, name: 'Person 6', type: 'Chat' },
    { id: 7, name: 'Person 7', type: 'Chat' },
    { id: 8, name: 'Person 8', type: 'Chat' },
    { id: 9, name: 'Person 9', type: 'Chat' },
    { id: 10, name: 'Person 10', type: 'Chat' },

    // ...
  ];

  return (
    <div className='max-container flexTwo padding-container3 gap-10 pt-10 pb-[33px] md:gap-10 lg:pt-10'>
      <div>
        <AddNew />
      </div>
      <div>
        <div className='flex mt-10 space-x-[11px] tabs'>
          <p
            className={`cursor-pointer flex justify-center items-center ${activeTab === 'My Creation'
              ? 'bg-[#2B303A] font-medium rounded-[7px] text-white px-2 '
              : 'bg-[#fff] rounded-[7px] border px-2 '
              }`}
            onClick={() => handleTabClick('My Creation')}
          >
            My Creation
          </p>
          <p
            className={`cursor-pointer flex justify-center items-center ${activeTab === 'My Saved'
              ? 'bg-[#2B303A] font-medium rounded-[7px] text-white px-2 '
              : 'bg-[#fff] rounded-[7px] border px-2 py-1'
              }`}
            onClick={() => handleTabClick('My Saved')}
          >
            My Saved
          </p>
          <p
            className={`cursor-pointer flex justify-center items-center ${activeTab === 'Public'
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
          <div className='grid grid-cols-5 gap-x-[25px] gap-y-[40px] mt-5'>



            {items.map((item) => (
              <div key={item.id} className='w-[180px] xxl:w-[198px] h-[280px] dropShadow rounded-[12px] bg-[#338CDD]'>
                <div className='w-[180px] xxl:w-[198px] h-[240px] items-center flex-col justify-between rounded-[12px] bg-teal-400 flex'>
                  <div className="w-[180px] xxl:w-[198px] h-[200px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex ">
                    <div className='flex justify-between space-x-[140px] mt-2 '>
                      <Image src="/ibtn.svg" alt='more' width={14} height={20} className='mb-2 cursor-pointer' />
                      <div className="relative">
                        <Image src="/threeDots.svg" alt='dots' width={8} height={8} className='mb-2 mr-0 cursor-pointer z-20' onClick={() => optionsClick(item.id)} />

                        {showOptions === item.id ? (<div className="w-[91.50px] h-[142.02px] bg-neutral-50 rounded-tr-[13px] shadow  absolute -left-[76px] -top-2 z-10 dropShadow" >
                          <button onClick={closeOptions} className='w-[21.94px] h-[21.94px] bg-zinc-300 rounded-full flex justify-center items-center ml-auto mt-2'>
                            <Image src="/threeDots.svg" alt='dots' width={8} height={8} className='cursor-pointer' />
                          </button>
                          <div className="ml-0 mt-3 flex flex-col gap-y-0">
                            <div className="flex justify-start gap-x-4 items-center px-2 py-1 hover:bg-slate-200 cursor-pointer">
                              <img src="/selectCheck.svg" alt="Select" className='w-3 h-3' />
                              <p className="text-black text-xs font-medium font-['Poppins']" >Select</p>
                            </div>
                            <div className="flex justify-start gap-x-4 items-center px-2 py-1 hover:bg-slate-200 cursor-pointer">
                              <img src="/saveIcon.png" alt="Save" className='w-3 h-3' />
                              <p className="text-black text-xs font-medium font-['Poppins']" >Save</p>
                            </div>
                            <div className="flex justify-start gap-x-4 items-center px-2 py-1 hover:bg-slate-200 cursor-pointer">
                              <img src="/shareIcon.png" alt="Share" className='w-3 h-3' />
                              <p className="text-black text-xs font-medium font-['Poppins']" >Share</p>
                            </div>
                            <div className="flex justify-start gap-x-4 items-center px-2 py-1 hover:bg-slate-200 cursor-pointer">
                              <img src="/deleteIcon.png" alt="Delete" className='w-3 h-3' />
                              <p className="text-black text-xs font-medium font-['Poppins']" >Delete</p>
                            </div>
                          </div>


                        </div>) : null}

                      </div>
                    </div>
                    <Image src="/ratingStars.svg" alt='stars' width={100} height={20} className='mb-2' />

                  </div>
                  <p className='font-semibold flex justify-center items-center mb-2 text-white'>{item.name}</p>
                </div>
                <p className='font-semibold flex justify-center items-center mt-2 text-white'>{item.type}</p>
              </div>
            ))}

          </div>
        )}
        {activeTab === 'My Saved' && (
          <div className='grid grid-cols-5 gap-x-[25px] gap-y-[40px] mt-5'>
            {items.map((item) => (
              <div key={item.id} className='w-[180px] xxl:w-[198px] h-[280px] dropShadow rounded-[12px] bg-[#338CDD]'>
                <div className='w-[180px] xxl:w-[198px] h-[240px] items-center flex-col justify-between rounded-[12px] bg-teal-400 flex'>
                  <div className="w-[180px] xxl:w-[198px] h-[200px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex ">
                    <div className='flex justify-between space-x-[140px] mt-2 '>
                      <Image src="/ibtn.svg" alt='more' width={14} height={20} className='mb-2 cursor-pointer' />
                      <div className="relative">
                        <Image src="/threeDots.svg" alt='dots' width={8} height={8} className='mb-2 mr-0 cursor-pointer z-20' onClick={() => optionsClick(item.id)} />

                        {showOptions === item.id ? (<div className="w-[91.50px] h-[142.02px] bg-neutral-50 rounded-tr-[13px] shadow  absolute -left-[76px] -top-2 z-10 dropShadow" >
                          <button onClick={closeOptions} className='w-[21.94px] h-[21.94px] bg-zinc-300 rounded-full flex justify-center items-center ml-auto mt-2'>
                            <Image src="/threeDots.svg" alt='dots' width={8} height={8} className='cursor-pointer' />
                          </button>
                          <div className="ml-0 mt-3 flex flex-col gap-y-0">
                            <div className="flex justify-start gap-x-4 items-center px-2 py-1 hover:bg-slate-200 cursor-pointer">
                              <img src="/selectCheck.svg" alt="Select" className='w-3 h-3' />
                              <p className="text-black text-xs font-medium font-['Poppins']" >Select</p>
                            </div>
                            <div className="flex justify-start gap-x-4 items-center px-2 py-1 hover:bg-slate-200 cursor-pointer">
                              <img src="/saveIcon.png" alt="Save" className='w-3 h-3' />
                              <p className="text-black text-xs font-medium font-['Poppins']" >Save</p>
                            </div>
                            <div className="flex justify-start gap-x-4 items-center px-2 py-1 hover:bg-slate-200 cursor-pointer">
                              <img src="/shareIcon.png" alt="Share" className='w-3 h-3' />
                              <p className="text-black text-xs font-medium font-['Poppins']" >Share</p>
                            </div>
                            <div className="flex justify-start gap-x-4 items-center px-2 py-1 hover:bg-slate-200 cursor-pointer">
                              <img src="/deleteIcon.png" alt="Delete" className='w-3 h-3' />
                              <p className="text-black text-xs font-medium font-['Poppins']" >Delete</p>
                            </div>
                          </div>


                        </div>) : null}

                      </div>
                    </div>
                    <Image src="/ratingStars.svg" alt='stars' width={100} height={20} className='mb-2' />

                  </div>
                  <p className='font-semibold flex justify-center items-center mb-2 text-white'>{item.name}</p>
                </div>
                <p className='font-semibold flex justify-center items-center mt-2 text-white'>{item.type}</p>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'Public' && (
          <div className='grid grid-cols-5 gap-x-[25px] gap-y-[40px] mt-5'>
            {items.map((item) => (
              <div key={item.id} className='w-[180px] xxl:w-[198px] h-[280px] dropShadow rounded-[12px] bg-[#338CDD]'>
                <div className='w-[180px] xxl:w-[198px] h-[240px] items-center flex-col justify-between rounded-[12px] bg-teal-400 flex'>
                  <div className="w-[180px] xxl:w-[198px] h-[200px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex ">
                    <div className='flex justify-between space-x-[140px] mt-2 '>
                      <Image src="/ibtn.svg" alt='more' width={14} height={20} className='mb-2 cursor-pointer' />
                      <div className="relative">
                        <Image src="/threeDots.svg" alt='dots' width={8} height={8} className='mb-2 mr-0 cursor-pointer z-20' onClick={() => optionsClick(item.id)} />

                        {showOptions === item.id ? (<div className="w-[91.50px] h-[142.02px] bg-neutral-50 rounded-tr-[13px] shadow  absolute -left-[76px] -top-2 z-10 dropShadow" >
                          <button onClick={closeOptions} className='w-[21.94px] h-[21.94px] bg-zinc-300 rounded-full flex justify-center items-center ml-auto mt-2'>
                            <Image src="/threeDots.svg" alt='dots' width={8} height={8} className='cursor-pointer' />
                          </button>
                          <div className="ml-0 mt-3 flex flex-col gap-y-0">
                            <div className="flex justify-start gap-x-4 items-center px-2 py-1 hover:bg-slate-200 cursor-pointer">
                              <img src="/selectCheck.svg" alt="Select" className='w-3 h-3' />
                              <p className="text-black text-xs font-medium font-['Poppins']" >Select</p>
                            </div>
                            <div className="flex justify-start gap-x-4 items-center px-2 py-1 hover:bg-slate-200 cursor-pointer">
                              <img src="/saveIcon.png" alt="Save" className='w-3 h-3' />
                              <p className="text-black text-xs font-medium font-['Poppins']" >Save</p>
                            </div>
                            <div className="flex justify-start gap-x-4 items-center px-2 py-1 hover:bg-slate-200 cursor-pointer">
                              <img src="/shareIcon.png" alt="Share" className='w-3 h-3' />
                              <p className="text-black text-xs font-medium font-['Poppins']" >Share</p>
                            </div>
                            <div className="flex justify-start gap-x-4 items-center px-2 py-1 hover:bg-slate-200 cursor-pointer">
                              <img src="/deleteIcon.png" alt="Delete" className='w-3 h-3' />
                              <p className="text-black text-xs font-medium font-['Poppins']" >Delete</p>
                            </div>
                          </div>


                        </div>) : null}

                      </div>
                    </div>
                    <Image src="/ratingStars.svg" alt='stars' width={100} height={20} className='mb-2' />

                  </div>
                  <p className='font-semibold flex justify-center items-center mb-2 text-white'>{item.name}</p>
                </div>
                <p className='font-semibold flex justify-center items-center mt-2 text-white'>{item.type}</p>
              </div>
            ))}
          </div>
        )}
        <div className='pagination flex justify-around mt-10'>
          <button className='pagination-button' onClick={handleLeftArrowClick}>
            <Image src="/leftArrow.svg" alt='left' width={12} height={20} />
          </button>
          {startPage > 1 && (
            <>
              <button
                className={`pagination-button ${startPage === 1 ? 'active buttonBg' : ''
                  }`}
                onClick={() => handlePageChange(1)}
              >
                1
              </button>
              {startPage > 2 && (
                <span className="pagination-ellipsis my-auto">...</span>
              )}
            </>
          )}
          {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
            const page = startPage + index;
            return page > 0 && page <= totalPages ? (
              <button
                key={page}
                className={`pagination-button ${page === clickedPage ? 'active buttonBg' : ''
                  }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ) : null;
          })}
          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && (
                <span className="pagination-ellipsis my-auto">...</span>
              )}
              <button
                className={`pagination-button ${endPage === totalPages ? 'active paginationBG' : ''
                  }`}
                onClick={() => handlePageChange(totalPages)}
              >
                {totalPages}
              </button>
            </>
          )}
          <button className='pagination-button' onClick={handleRightArrowClick}>
            <Image src="/rightSideArrow.svg" alt='right' width={12} height={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;







