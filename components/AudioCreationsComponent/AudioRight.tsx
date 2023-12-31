"use client"

import React, { useState } from 'react'
import GridCard from './GridCard';
import Pagination from './Pagination';

const AudioRight = ({audio, music} : any) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedOption, setSelectedOption] = useState('voice');
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 4; // Number of cards per page
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
        if (option === 'voice') {
            setShowVoiceContent(true);
            setShowSelectVoice(false) // Show the content for "Voice" tab
        }
        else if (option === 'selectVoice') {
            setShowSelectVoice(true)
            setShowVoiceContent(false);

        }

    };


    // Cards Values---------------------------------------------- Array of Cards

    const gridCardsData = [
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name1",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name2",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name3",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name4",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name5",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name6",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name7",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name8",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio1",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name9",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio1",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name10",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio1",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name11",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio1",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name12",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio1",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name13",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name14",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name15",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name16",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio1",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name17",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio1",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name18",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio1",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name19",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name20",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name21",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name22",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name23",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name24",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name25",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name1",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name2",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name3",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name4",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name5",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name6",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name7",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name8",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio1",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name9",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio1",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name10",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio1",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name11",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio1",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name12",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio1",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name13",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name14",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name15",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name16",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio1",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name17",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio1",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name18",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio1",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name19",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name20",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name21",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name22",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name23",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name24",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name25",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio1",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name19",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name20",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name21",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name22",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name23",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name24",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name25",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio1",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name19",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name20",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name21",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name22",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name23",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name24",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name25",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio1",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name19",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name20",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name21",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name22",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name23",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name24",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name25",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio1",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name19",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name20",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name21",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name22",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name23",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name24",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name25",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name24",
        },
        {
            // bgColor: "blue-400",
            imageSrc: "/ibtn.svg",
            label: "Audio2",
            ratingSrc: "/ratingStars.svg",
            personName: "Person Name25",
        },
    ];


    const totalPages = Math.ceil(gridCardsData.length / cardsPerPage);
    return (
        <>
            <div className="w-[270px] h-[570px] bg-white rounded-[10px] boxShadow" >
                <div className="px-[18px] pt-[27px]">
                    <div className="mx-auto border flex space-x-0 px-4 rounded-[8px] justify-between items-center bg-[#FAFAFA] boxShadow z-50">
                        <p
                            className={`my-[8px] text-[12px] py-1 cursor-pointer rounded-[6px] font-medium px-3 ${selectedOption === "selectVoice" ? "bg-[#2B303A] text-white" : "text-black"
                                }`}
                            onClick={() => handleOptionClick("selectVoice")}
                        >
                            Select Voice
                        </p>
                        <p
                            className={`my-[8px] text-[12px] cursor-pointer rounded-[6px] font-medium px-8 py-1 ${selectedOption === "voice" ? "bg-[#2B303A] text-white" : "text-black"
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

                    {showSelectVoice && (
                        <>
                            {(audio || music) && (
                            <div className="grid grid-cols-2 grid-rows-2 gap-x-9 gap-y-[22px] mt-[29px]">
                                <div className="">
                                    <img src="selectedVoice.png" alt="SelectVoice" />
                                </div>
                            </div>
                            )}

                        </>
                    )}




                </div>

            </div >



        </>
    )
}

export default AudioRight






