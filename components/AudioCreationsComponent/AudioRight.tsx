"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import GridCard from './GridCard';
import Pagination from './Pagination';

const AudioRight = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedOption, setSelectedOption] = useState('voice');
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 4; // Number of cards per page
    const [showVoiceContent, setShowVoiceContent] = useState(true); // Control visibility


    // Calculate the range of cards to display on the current page
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    const handlePageChange = (newPage: any) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleOptionClick = (option :any) => {
        setSelectedOption(option);
        if (option === 'voice') {
          setShowVoiceContent(true); // Show the content for "Voice" tab
        } else {
          setShowVoiceContent(false); // Hide the content for other tabs
        }
      };

    const gridCardsData = [
        {
            bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name",
        },
        {
            bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Video",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name",
        },
        {
            bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Text",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name",
        },
        {
            bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Image",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name",
        },
    ];
    const totalPages = Math.ceil(gridCardsData.length / cardsPerPage);
    return (
        <>
            <div className="w-[270px] h-[570px] bg-white rounded-[10px] boxShadow" >
                <div className="px-[18px] pt-[27px]">
                    <div className="mx-auto border flex space-x-0 px-4 rounded-[8px] justify-between items-center bg-[#FAFAFA] boxShadow z-50">
                        <p
                            className={`my-[8px] text-[12px] py-1 cursor-pointer rounded-[6px]  px-3 ${selectedOption === "selectVoice" ? "bg-[#2B303A] text-white" : "text-black"
                                }`}
                            onClick={() => handleOptionClick("selectVoice")}
                        >
                            Select Voice
                        </p>
                        <p
                            className={`my-[8px] text-[12px] cursor-pointer rounded-[6px] px-8 py-1 ${selectedOption === "voice" ? "bg-[#2B303A] text-white" : "text-black"
                                }`}
                            onClick={() => handleOptionClick("voice")}
                        >
                            Voice
                        </p>

                    </div>
                    {showVoiceContent && ( // Render only if showVoiceContent is true
                        <>
                            <div className="grid grid-cols-2 grid-rows-2 gap-x-9 gap-y-[22px] mt-[29px]">
                                {gridCardsData.slice(startIndex, endIndex).map((card, index) => (
                                    <GridCard key={index} card={card} />
                                ))}
                            </div>
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                handlePageChange={handlePageChange}
                            />
                        </>
                    )}



                </div>

            </div >



        </>
    )
}

export default AudioRight






