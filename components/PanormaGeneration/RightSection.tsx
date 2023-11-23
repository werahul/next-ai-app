"use client"

import React, { useState } from 'react'
// import GridCard from './GridCard';
// import Pagination from './Pagination';
import GridPanorma from './GridPanorma';
import PaginationPanorma from './PaginationPanorma';

const RightSection = ({ audio, music }: any) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedOption, setSelectedOption] = useState('models');
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 8; // Number of cards per page
    const [showVoiceContent, setShowVoiceContent] = useState(true); // Control visibility
    const [showSelectVoice, setShowSelectVoice] = useState(false); // Control visibility
    const [showVoiceBox, setShowVoiceBox] = useState(false);


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

    const handleOptionClick = (option: any) => {
        setSelectedOption(option);
        if (option === 'models') {
            setShowVoiceContent(true);
            setShowSelectVoice(false) // Show the content for "Voice" tab
        }
        else if (option === 'selectVoice') {
            setShowSelectVoice(true)
            setShowVoiceContent(false);

        }

    };


    // Cards Values---------------------------------------------- Array of Cards



    const gridCardsData = [];

    for (let i = 1; i <= 160; i++) {
        gridCardsData.push({
            // bgColor: "blue-400",
            // imageSrc: "/ibtn.svg",
            // label: "Audio",
            // ratingSrc: "/ratingStars.svg",
            personName: i.toString(),
        });
    }

    const totalPages = Math.ceil(gridCardsData.length / cardsPerPage);
    return (
        <>
            <div className="min-w-[280px] h-[910px] bg-white rounded-[10px] boxShadow" >
                <div className="px-[18px] pt-[27px]">
                    <div className="mx-auto border flex space-x-0 px-4 rounded-[8px] justify-between items-center bg-[#FAFAFA] boxShadow z-50">
                        <p
                            className={`my-[8px] text-[12px] py-1 cursor-pointer rounded-[6px] font-medium px-3 ${selectedOption === "models" ? "bg-[#2B303A] text-white" : "text-black"
                                }`}
                            onClick={() => handleOptionClick("models")}
                        >
                            Models
                        </p>
                        <p
                            className={`my-[8px] text-[12px] cursor-pointer rounded-[6px] font-medium px-8 py-1 ${selectedOption === "styles" ? "bg-[#2B303A] text-white" : "text-black"
                                }`}
                            onClick={() => handleOptionClick("styles")}
                        >
                            Styles
                        </p>

                    </div>
                    {showVoiceContent && ( // Render only if showVoiceContent is true
                        <>
                            <div className="grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-[22px] mt-[29px]">
                                {gridCardsData.slice(startIndex, endIndex).map((card, index) => (
                                    <GridPanorma key={index} card={card} />
                                ))}
                            </div>
                            <PaginationPanorma
                                currentPage={currentPage}
                                totalPages={totalPages}
                                handlePageChange={handlePageChange}
                            />
                        </>
                    )}

                    {/* {showSelectVoice && (
                        <>
                            {(audio || music) && (
                            <div className="grid grid-cols-2 grid-rows-2 gap-x-9 gap-y-[22px] mt-[29px]">
                                <div className="">
                                    <img src="selectedVoice.png" alt="SelectVoice" />
                                </div>
                            </div>
                            )}

                        </>
                    )} */}




                </div>

            </div >



        </>
    )
}

export default RightSection






