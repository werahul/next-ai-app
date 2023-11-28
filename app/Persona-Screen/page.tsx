"use client"

import NationDropdown from '@/components/PersonaScreen/NationDropdown';
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import AddNewPersona from '@/components/PersonaScreen/AddNewPersona';
import RatingStars from '@/components/RatingStars';
import NationDropdownFillter from '@/components/PersonaScreen/NationDropdownFillter';

const Page = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [activeTab, setActiveTab] = useState('My Creation');
    const [clickedPage, setClickedPage] = useState(1);
    const [showOptions, setShowOptions] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [age, setAge] = useState(0)
    const [rating, setRating] = useState(0)
    const [activePerson, setActivePerson] = useState(null);
    const totalPages = 10;


    const handlePersonClick = (id: any) => {
        setActivePerson(id);
    };


    const decreaseAge = () => {
        setAge((prevNumberOfAge) => Math.max(0, prevNumberOfAge - 1));
    };
    const increaseAge = () => {
        setAge((prevNumberOfAge) => Math.min(99, prevNumberOfAge + 1));
    };

    const decreaseRating = () => {
        setRating((prevRating) => Math.max(0, prevRating - 1));
    };
    const increaseRating = () => {
        setRating((prevRating) => Math.min(5, prevRating + 1));
    };

    const handleAgeChange = (e: any) => {
        const value = parseInt(e.target.value, 10);

        if (value >= 0 && value <= 99) {
            setAge(value);

            // Calculate the left position based on the value (assuming a linear mapping from 0 to 99 to a width)
            const left = `calc(${((value / 99) * 100)}% - 10px)`;
            const currentExposureElement = document.querySelector('.numberOfImages-class');

            if (currentExposureElement instanceof HTMLElement) {
                currentExposureElement.style.left = left;
            }
        }
    };
    const handleRating = (e: any) => {
        const value = parseInt(e.target.value, 10);

        if (value >= 0 && value <= 5) {
            setRating(value);

            // Calculate the left position based on the value (assuming a linear mapping from 0 to 5 to a width)
            const left = `calc(${((value / 5) * 100)}% - 10px)`;
            const currentExposureElement = document.querySelector('.numberOfImages-class');

            if (currentExposureElement instanceof HTMLElement) {
                currentExposureElement.style.left = left;
            }
        }
    };



    const calculateBackgroundForAge = (value: any) => {
        const minRange = 0;
        const maxRange = 99;
        const percentage = ((value - minRange) / (maxRange - minRange)) * 100;
        const clampedPercentage = Math.min(100, Math.max(0, percentage));
        const background = `linear-gradient(to right, #73F89D 0%, #48A0F9 ${clampedPercentage}%, #fff ${clampedPercentage}%)`;
        return background;
    };

    const calculateBackgroundForRatings = (value: any) => {
        const minRange = 0;
        const maxRange = 5;
        const percentage = ((value - minRange) / (maxRange - minRange)) * 100;
        const clampedPercentage = Math.min(100, Math.max(0, percentage));
        const background = `linear-gradient(to right, #73F89D 0%, #48A0F9 ${clampedPercentage}%, #fff ${clampedPercentage}%)`;
        return background;
    };


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
        setShowPopup(false)

    }
    const closeOptions = () => {
        setShowOptions(null)

    }
    const openPopUp = () => {
        setShowPopup(true)
        setShowOptions(null)
    }
    const onClosePopUp = () => {
        setShowPopup(false)
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
        { id: 1, name: 'Chat With SHAHRUKH KHAN', modelImage: "/model1.svg" },
        { id: 2, name: 'Chat With SONAKSHI', modelImage: "/model2.svg" },
        { id: 3, name: 'Chat With PRIYANKA', modelImage: "/model3.svg" },
        { id: 4, name: 'Chat With AKSHAY', modelImage: "/model4.svg" },
        { id: 5, name: 'Chat With PERSON NAME', modelImage: "/blank.png" },
        { id: 6, name: 'Chat With PERSON NAME', modelImage: "/blank.png" },
        { id: 7, name: 'Chat With PERSON NAME', modelImage: "/blank.png" },
        { id: 8, name: 'Chat With PERSON NAME', modelImage: "/blank.png" },
        { id: 9, name: 'Chat With PERSON NAME', modelImage: "/blank.png" },
        { id: 10, name: 'Chat With PERSON NAME', modelImage: "/blank.png" },

        // ...
    ];

    useEffect(() => {
        const handleOutsideClick = (event: any) => {
            if (showPopup && !event.target.closest(".popup-content")) {
                onClosePopUp();
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [showPopup]);


    return (
        <div className='max-container flexTwo padding-container3 gap-10 pt-10 pb-[12px] md:gap-10 lg:pt-10'>
            <div>
                <AddNewPersona />
            </div>
            <div>
                <div className="flex justify-between mt-10">
                    <div className='flex  space-x-[11px] tabs'>
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

                    <div className="">
                        <img src="/fillter.svg" alt="" className='cursor-pointer' onClick={openPopUp} />
                    </div>

                </div>

                {/* Content for each tab based on currentPage */}
                {activeTab === 'My Creation' && (
                    <div className='grid grid-cols-5 gap-x-[25px] gap-y-[25px] mt-5'>



                        {items.map((item) => (
                            <div key={item.id} className={`w-[180px] xxl:w-[198px] h-[280px] dropShadow rounded-[12px] bg-[#338CDD] ${activePerson === item.id ? 'bg-gradient-to-l  from-[#4CA9F0] to-[#70F2A4]' : ''
                                }`} onClick={() => handlePersonClick(item.id)}>

                                <div className="w-[180px] xxl:w-[198px] h-[235px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex pb-2">
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
                                    <img src={item.modelImage} alt='models' className='w-[170px] h-auto -mt-2 cursor-pointer' />
                                    <div className="mb-2">
                                        <RatingStars />
                                    </div>

                                </div>
                                <p className='font-semibold flex justify-center text-xs items-center mt-3 text-white'>{item.name}</p>
                            </div>
                        ))}
                        {showPopup && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center font-semibold">
                                <div className="bg-white w-[472px] h-auto popup-content">
                                    <div className="p-5 space-y-3">
                                        <div className="range-container">
                                            <label htmlFor="age" className="font-[500] text-[12px] mb-2 font-['Inter']">
                                                Age:
                                            </label>
                                            <div className="flex items-center space-x-3">

                                                <div className="flex flex-col items-center justify-center -mt-1">
                                                    <p className="text-[9px] font-semibold">00</p>
                                                    <button onClick={(e) => { e.preventDefault(); decreaseAge(); }} className="font-bold text-[20px] -mt-3">
                                                        -
                                                    </button>
                                                </div>
                                                <div className="w-full relative">
                                                    <input
                                                        type="range"
                                                        id="age"
                                                        min="0"
                                                        max="99"
                                                        value={age}
                                                        onChange={handleAgeChange}
                                                        style={{ background: calculateBackgroundForAge(age) }}
                                                    />
                                                    <span
                                                        className="absolute text-[10px] font-[600] top-[-8px]"
                                                        style={{ left: `calc(${((age / 99) * 100)}% - 1px)` }}
                                                    >
                                                        {age}
                                                    </span>



                                                </div>

                                                <div className="flex flex-col items-center justify-center -mt-1">
                                                    <p className="text-[9px] font-semibold">99</p>
                                                    <button onClick={(e) => { e.preventDefault(); increaseAge(); }} className="font-bold text-[20px] -mt-3">
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="range-container">
                                            <label htmlFor="rating" className="font-[500] text-[12px] mb-2 font-['Inter']">
                                                Rating :
                                            </label>
                                            <div className="flex items-center space-x-3">

                                                <div className="flex flex-col items-center justify-center -mt-1">
                                                    <p className="text-[9px] font-semibold">0</p>
                                                    <button onClick={(e) => { e.preventDefault(); decreaseRating(); }} className="font-bold text-[20px] -mt-3">
                                                        -
                                                    </button>
                                                </div>
                                                <div className="w-full relative">
                                                    <input
                                                        type="range"
                                                        id="rating"
                                                        min="0"
                                                        max="5"
                                                        value={rating}
                                                        onChange={handleRating}
                                                        style={{ background: calculateBackgroundForRatings(rating) }}
                                                    />
                                                    <span
                                                        className="absolute text-[10px] font-[600] top-[-8px]"
                                                        style={{ left: `calc(${((rating / 5) * 100)}% - 1px)` }}
                                                    >
                                                        {rating}
                                                    </span>




                                                </div>

                                                <div className="flex flex-col items-center justify-center -mt-1">
                                                    <p className="text-[9px] font-semibold">5</p>
                                                    <button onClick={(e) => { e.preventDefault(); increaseRating(); }} className="font-bold text-[20px] -mt-3">
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex space-x-2">
                                            <label htmlFor="occupation" className="whitespace-nowrap">Occupation :</label>
                                            <input type="text" id="occupation" placeholder="Select an occupation" className="placeholder-black text-xs p-1 w-full mb-3 outline-none px-2 border rounded-[5px]" />
                                        </div>
                                        <div className="flex space-x-2">
                                            <label htmlFor="gender" className="whitespace-nowrap">Gender:</label>
                                            <div className="flex space-x-3 justify-center items-center">
                                                <input type="radio" id="male" name="gender" value="male" checked />
                                                <label htmlFor="male">Male</label>
                                                <input type="radio" id="female" name="gender" value="female" checked />
                                                <label htmlFor="female">Female</label>
                                                <input type="radio" id="other" name="gender" value="other" checked />
                                                <label htmlFor="other">Others</label>
                                            </div>
                                        </div>

                                        <div className="flex space-x-2">
                                            <label htmlFor="publicFigure" className="whitespace-nowrap">Public Figure:</label>
                                            <input type="text" id="voiceName" className="w-[85px] mb-3 outline-none px-2 border rounded-[5px]" />
                                        </div>
                                        <div className="flex space-x-2">
                                            <label htmlFor="nation" className="whitespace-nowrap">Nation :</label>
                                            <NationDropdownFillter/>
                                        </div>
                                        <button
                                            type="submit"
                                            className="buttonBg w-[100%] h-[50px]  rounded-[8px] tracking-widest text-[14px] text-white font-bold"
                                            onClick={onClosePopUp}
                                        >
                                            APPLY
                                        </button>
                                    </div>

                                </div>

                            </div>
                        )}
                    </div>
                )}
                {activeTab === 'My Saved' && (
                    <div className='grid grid-cols-5 gap-x-[25px] gap-y-[25px] mt-5'>
                        {items.map((item) => (
                            <div key={item.id} className={`w-[180px] xxl:w-[198px] h-[280px] dropShadow rounded-[12px] bg-[#338CDD] ${activePerson === item.id ? 'bg-gradient-to-l  from-[#4CA9F0] to-[#70F2A4]' : ''
                                }`} onClick={() => handlePersonClick(item.id)}>

                                <div className="w-[180px] xxl:w-[198px] h-[235px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex pb-2">
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
                                    <img src={item.modelImage} alt='models' className='w-[170px] h-auto -mt-2 cursor-pointer' />
                                    <div className="mb-2">
                                        <RatingStars />
                                    </div>

                                </div>
                                <p className='font-semibold flex justify-center text-xs items-center mt-3 text-white'>{item.name}</p>
                            </div>
                        ))}
                        {showPopup && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center font-semibold">
                                <div className="bg-white w-[472px] h-auto popup-content">
                                    <div className="p-5 space-y-3">
                                        <div className="range-container">
                                            <label htmlFor="age" className="font-[500] text-[12px] mb-2 font-['Inter']">
                                                Age:
                                            </label>
                                            <div className="flex items-center space-x-3">

                                                <div className="flex flex-col items-center justify-center -mt-1">
                                                    <p className="text-[9px] font-semibold">00</p>
                                                    <button onClick={(e) => { e.preventDefault(); decreaseAge(); }} className="font-bold text-[20px] -mt-3">
                                                        -
                                                    </button>
                                                </div>
                                                <div className="w-full relative">
                                                    <input
                                                        type="range"
                                                        id="age"
                                                        min="0"
                                                        max="99"
                                                        value={age}
                                                        onChange={handleAgeChange}
                                                        style={{ background: calculateBackgroundForAge(age) }}
                                                    />
                                                    <span
                                                        className="absolute text-[10px] font-[600] top-[-8px]"
                                                        style={{ left: `calc(${((age / 99) * 100)}% - 1px)` }}
                                                    >
                                                        {age}
                                                    </span>



                                                </div>

                                                <div className="flex flex-col items-center justify-center -mt-1">
                                                    <p className="text-[9px] font-semibold">99</p>
                                                    <button onClick={(e) => { e.preventDefault(); increaseAge(); }} className="font-bold text-[20px] -mt-3">
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="range-container">
                                            <label htmlFor="rating" className="font-[500] text-[12px] mb-2 font-['Inter']">
                                                Rating :
                                            </label>
                                            <div className="flex items-center space-x-3">

                                                {/* <div className="flex flex-col items-center justify-center -mt-1">
                                                    <p className="text-[9px] font-semibold">00</p>
                                                    <button onClick={(e) => { e.preventDefault(); decreaseAge(); }} className="font-bold text-[20px] -mt-3">
                                                        -
                                                    </button>
                                                </div> */}
                                                <div className="w-full relative px-5">
                                                    <input
                                                        type="range"
                                                        id="rating"
                                                        min="0"
                                                        max="99"
                                                        value={rating}
                                                        onChange={handleRating}
                                                        style={{ background: calculateBackgroundForAge(rating) }}
                                                    />
                                                    {/* <span
                                                        className="absolute text-[10px] font-[600] top-[-8px]"
                                                        style={{ left: `calc(${((age / 99) * 100)}% - 1px)` }}
                                                    >
                                                        {age}
                                                    </span> */}



                                                </div>

                                                {/* <div className="flex flex-col items-center justify-center -mt-1">
                                                    <p className="text-[9px] font-semibold">99</p>
                                                    <button onClick={(e) => { e.preventDefault(); increaseAge(); }} className="font-bold text-[20px] -mt-3">
                                                        +
                                                    </button>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="flex space-x-2">
                                            <label htmlFor="occupation" className="whitespace-nowrap">Occupation :</label>
                                            <input type="text" id="occupation" placeholder="Select an occupation" className="placeholder-black text-xs p-1 w-full mb-3 outline-none px-2 border rounded-[5px]" />
                                        </div>
                                        <div className="flex space-x-2">
                                            <label htmlFor="gender" className="whitespace-nowrap">Gender:</label>
                                            <div className="flex space-x-3 justify-center items-center">
                                                <input type="radio" id="male" name="gender" value="male" checked />
                                                <label htmlFor="male">Male</label>
                                                <input type="radio" id="female" name="gender" value="female" checked />
                                                <label htmlFor="female">Female</label>
                                                <input type="radio" id="other" name="gender" value="other" checked />
                                                <label htmlFor="other">Others</label>
                                            </div>
                                        </div>

                                        <div className="flex space-x-2">
                                            <label htmlFor="publicFigure" className="whitespace-nowrap">Public Figure:</label>
                                            <input type="text" id="voiceName" className="w-[85px] mb-3 outline-none px-2 border rounded-[5px]" />
                                        </div>
                                        <div className="flex space-x-2">
                                            <label htmlFor="nation" className="whitespace-nowrap">Nation :</label>
                                            <input type="text" id="nation" placeholder="Select a nation" className="placeholder-black text-xs w-[60%] mb-3 outline-none p-1 border rounded-[5px]" />
                                        </div>
                                        <button
                                            type="submit"
                                            className="buttonBg w-[100%] h-[50px]  rounded-[8px] tracking-widest text-[14px] text-white font-bold"
                                            onClick={onClosePopUp}
                                        >
                                            APPLY
                                        </button>
                                    </div>

                                </div>

                            </div>
                        )}
                    </div>
                )}
                {activeTab === 'Public' && (
                    <div className='grid grid-cols-5 gap-x-[25px] gap-y-[25px] mt-5'>
                        {items.map((item) => (
                            <div key={item.id} className={`w-[180px] xxl:w-[198px] h-[280px] dropShadow rounded-[12px] bg-[#338CDD] ${activePerson === item.id ? 'bg-gradient-to-l  from-[#4CA9F0] to-[#70F2A4]' : ''
                                }`} onClick={() => handlePersonClick(item.id)}>

                                <div className="w-[180px] xxl:w-[198px] h-[235px] items-center flex-col justify-between rounded-[12px] bg-[#ffffff] flex pb-2">
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
                                    <img src={item.modelImage} alt='models' className='w-[170px] h-auto -mt-2 cursor-pointer' />
                                    <div className="mb-2">
                                        <RatingStars />
                                    </div>
                                </div>
                                <p className='font-semibold flex justify-center text-xs items-center mt-3 text-white'>{item.name}</p>
                            </div>
                        ))}
                        {showPopup && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center font-semibold">
                                <div className="bg-white w-[472px] h-auto popup-content">
                                    <div className="p-5 space-y-3">
                                        <div className="range-container">
                                            <label htmlFor="age" className="font-[500] text-[12px] mb-2 font-['Inter']">
                                                Age:
                                            </label>
                                            <div className="flex items-center space-x-3">

                                                <div className="flex flex-col items-center justify-center -mt-1">
                                                    <p className="text-[9px] font-semibold">00</p>
                                                    <button onClick={(e) => { e.preventDefault(); decreaseAge(); }} className="font-bold text-[20px] -mt-3">
                                                        -
                                                    </button>
                                                </div>
                                                <div className="w-full relative">
                                                    <input
                                                        type="range"
                                                        id="age"
                                                        min="0"
                                                        max="99"
                                                        value={age}
                                                        onChange={handleAgeChange}
                                                        style={{ background: calculateBackgroundForAge(age) }}
                                                    />
                                                    <span
                                                        className="absolute text-[10px] font-[600] top-[-8px]"
                                                        style={{ left: `calc(${((age / 99) * 100)}% - 1px)` }}
                                                    >
                                                        {age}
                                                    </span>



                                                </div>

                                                <div className="flex flex-col items-center justify-center -mt-1">
                                                    <p className="text-[9px] font-semibold">99</p>
                                                    <button onClick={(e) => { e.preventDefault(); increaseAge(); }} className="font-bold text-[20px] -mt-3">
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="range-container">
                                            <label htmlFor="rating" className="font-[500] text-[12px] mb-2 font-['Inter']">
                                                Rating :
                                            </label>
                                            <div className="flex items-center space-x-3">

                                                {/* <div className="flex flex-col items-center justify-center -mt-1">
                                                    <p className="text-[9px] font-semibold">00</p>
                                                    <button onClick={(e) => { e.preventDefault(); decreaseAge(); }} className="font-bold text-[20px] -mt-3">
                                                        -
                                                    </button>
                                                </div> */}
                                                <div className="w-full relative px-5">
                                                    <input
                                                        type="range"
                                                        id="rating"
                                                        min="0"
                                                        max="99"
                                                        value={rating}
                                                        onChange={handleRating}
                                                        style={{ background: calculateBackgroundForAge(rating) }}
                                                    />
                                                    {/* <span
                                                        className="absolute text-[10px] font-[600] top-[-8px]"
                                                        style={{ left: `calc(${((age / 99) * 100)}% - 1px)` }}
                                                    >
                                                        {age}
                                                    </span> */}



                                                </div>

                                                {/* <div className="flex flex-col items-center justify-center -mt-1">
                                                    <p className="text-[9px] font-semibold">99</p>
                                                    <button onClick={(e) => { e.preventDefault(); increaseAge(); }} className="font-bold text-[20px] -mt-3">
                                                        +
                                                    </button>
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="flex space-x-2">
                                            <label htmlFor="occupation" className="whitespace-nowrap">Occupation :</label>
                                            <input type="text" id="occupation" placeholder="Select an occupation" className="placeholder-black text-xs p-1 w-full mb-3 outline-none px-2 border rounded-[5px]" />
                                        </div>
                                        <div className="flex space-x-2">
                                            <label htmlFor="gender" className="whitespace-nowrap">Gender:</label>
                                            <div className="flex space-x-3 justify-center items-center">
                                                <input type="radio" id="male" name="gender" value="male" checked />
                                                <label htmlFor="male">Male</label>
                                                <input type="radio" id="female" name="gender" value="female" checked />
                                                <label htmlFor="female">Female</label>
                                                <input type="radio" id="other" name="gender" value="other" checked />
                                                <label htmlFor="other">Others</label>
                                            </div>
                                        </div>

                                        <div className="flex space-x-2">
                                            <label htmlFor="publicFigure" className="whitespace-nowrap">Public Figure:</label>
                                            <input type="text" id="voiceName" className="w-[85px] mb-3 outline-none px-2 border rounded-[5px]" />
                                        </div>
                                        <div className="flex space-x-2">
                                            <label htmlFor="nation" className="whitespace-nowrap">Nation :</label>
                                            <input type="text" id="nation" placeholder="Select a nation" className="placeholder-black text-xs w-[60%] mb-3 outline-none p-1 border rounded-[5px]" />
                                        </div>
                                        <button
                                            type="submit"
                                            className="buttonBg w-[100%] h-[50px] tracking-widest  rounded-[8px] text-[14px] text-white font-bold"
                                            onClick={onClosePopUp}
                                        >
                                            APPLY
                                        </button>
                                    </div>

                                </div>

                            </div>
                        )}
                    </div>
                )}


                <div className='pagination flex justify-center space-x-[55px] mt-10'>
                    <button className='pagination-button' onClick={handleLeftArrowClick}>
                        <Image src="/leftArrow.svg" alt='left' width={12} height={20} />
                    </button>
                    {startPage > 1 && (
                        <>
                            <button
                                className={`pagination-button ${startPage === 1 ? 'active buttonBg text-white' : ''
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
                    {Array.from({ length: Math.min(5, endPage - startPage + 1) }, (_, index) => {
                        const page = startPage + index;
                        return (
                            <button
                                key={page}
                                className={`pagination-button ${page === clickedPage ? 'active buttonBg text-white' : ''
                                    }`}
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </button>
                        );
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







