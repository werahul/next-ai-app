"use client"
import React, { useState } from 'react'
import RatingStars from '../RatingStars';

const MainChatScreen = () => {

    const [isMenuVisible, setMenuVisibility] = useState(false);
    const [showMenuOotion, setShowMenuOption] = useState(false);
    const [isAddPlusClicked, setAddPlusClicked] = useState(true);

    const showMenu = () => {
        setMenuVisibility(!isMenuVisible);
    };
    const [activePerson, setActivePerson] = useState(null);
    const [activeItem, setActiveItem] = useState(0);
    const [activeGradaint, setActiveGradaint] = useState(null);
    const [activeItemId, setActiveItemId] = useState(null);

    const handleItemClick = (index: any) => {
        setActiveItem(index);
    };

    const handleAddPlusClick = () => {
        showMenu();
        setShowMenuOption(true)
        setAddPlusClicked(false);
    };

    const handleCrossChatClick = () => {
        setMenuVisibility(false);
        setShowMenuOption(false)
        setAddPlusClicked(true);
    };
    const handlePersonClick = (id: any) => {
        if (activePerson === id) {

            setActivePerson(null);
        } else {

            setActivePerson(id);
        }
    };
    const showProfile = (id: any) => {
        if (isProfileDivPresent == true && activeGradaint === id) {
            setIisProfileDivPresent(false)
            setActiveGradaint(null)
        }
        else {
            setIisProfileDivPresent(true)
            // setActiveItem(id)
            setActiveGradaint(id)
            setActiveItemId(id)
        }


    };

    const [showCollapsibleContent, setShowCollapsibleContent] = useState(true);
    const [isProfileDivPresent, setIisProfileDivPresent] = useState(false);

    const handleCollapsClick = () => {
        setShowCollapsibleContent(!showCollapsibleContent);
    };



    const items = [
        // Add your data objects here
        // Example:
        { id: 1, name: 'PERSON NAME', },
        { id: 2, name: 'PERSON NAME', },
        { id: 3, name: 'PERSON NAME', },
        { id: 4, name: 'PERSON NAME', },
        { id: 5, name: 'PERSON NAME', },
        { id: 6, name: 'PERSON NAME', },
        { id: 7, name: 'PERSON NAME', },
        { id: 8, name: 'PERSON NAME', },
        { id: 9, name: 'PERSON NAME', },
        { id: 10, name: 'PERSON NAME', },

        // ...
    ];


    return (
        <div className='flexTwo gap-x-6  max-container mb-4'>
            <div className="w-[290px] xxl:w-[350px] h-[805px] bg-white rounded-[10px] shadow dropShadow p-6 overflow-hidden">
                <div className="flex items-center justify-between">
                    <div className="text-black text-xl font-medium font-Inter">Chat History</div>
                    <div className="">
                        <img src="/collaps.svg" alt="" className="cursor-pointer" onClick={handleCollapsClick} />
                    </div>
                </div>

                <div className="mt-10">
                    {items.map((item) => (
                        <div className=" flex flex-col space-y-0">
                            <div className={`relative flex justify-start items-center space-x-3 rounded-tl-[15px] rounded-bl-[15px] rounded-tr-[15px] rounded-bl-[15px h-[68.71px] bg-transparent ${activePerson === item.id ? 'px-3 bg-gradient-to-l from-[#4CA9F0] to-[#70F2A4]' : ''} ${activeGradaint === item.id ? 'px-3  bg-gradient-to-l from-[#4CA9F0] to-[#70F2A4]' : ''}  `} >
                                <div className="w-[54.04px] h-[54.04px] rounded-[27.02px] bg-blue-400 flex justify-center items-center cursor-pointer" onClick={() => {
                                    showProfile(item.id)
                                }} >
                                    <img src="/profle.svg" alt="" className="w-10 h-10" />
                                </div>
                                <div className={`text-black text-[14px] font-semibold font-Inter uppercase ${activePerson === item.id ? 'text-white' : ''} ${activeGradaint === item.id ? 'text-white' : ''}`}>{item.name}</div>
                                <div className="absolute right-2" onClick={() => handlePersonClick(item.id)}>
                                    {activePerson === item.id ? (
                                        <img
                                            src="/whiteDown.svg"
                                            alt=""
                                            className="cursor-pointer w-6 h-6"
                                        />
                                    ) : (
                                        <img src="/blackDown.svg" alt="" className="w-6 h-6 cursor-pointer" />
                                    )}
                                </div>
                            </div>

                            {activePerson === item.id && (
                                <div className="ml-auto mr-[2px] w-[194.03px] h-auto bg-white rounded-sm shadow py-1 dropShadow flex flex-col gap-y-2">
                                    <div className="flex justify-start items-center space-x-3 hover:bg-gray-10 px-3 py-[2px] cursor-pointer">
                                        <div className="w-[33px] h-[33px] rounded-[27.02px] bg-blue-400 flex justify-center items-center">
                                            <img src="/profle.svg" alt="" className="w-7 h-7" />
                                        </div>
                                        <div className="text-black text-base font-medium font-Inter">Chat 1</div>
                                    </div>
                                    <div className="flex justify-start items-center space-x-3 hover:bg-gray-10 px-3 py-[2px] cursor-pointer">
                                        <div className="w-[33px] h-[33px] rounded-[27.02px] bg-blue-400 flex justify-center items-center">
                                            <img src="/profle.svg" alt="" className="w-7 h-7" />
                                        </div>
                                        <div className="text-black text-base font-medium font-Inter">Chat 2</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mainChatDiv slideClass relative h-[805px] bg-white bg-opacity-95 rounded-lg backdrop-blur-[20px] dropShadow p-5" style={{ width: isProfileDivPresent ? '650px' : '950px' }} >
                <div className="senderProfileChat">
                    <div className="flex justify-between">
                        <div className=" flex items-center gap-x-3 ">
                            <div className="w-[54.04px] h-[54.04px] rounded-[27.02px] bg-blue-400 flex justify-center items-center">
                                <img src="/profle.svg" alt="" className="w-10 h-10" />
                            </div>

                            <div className="flex flex-col gap-y-2">
                                <div className="text-black text-[13px] font-medium font-['Inter']">Person Name</div>
                                <div className="text-black text-xs font-normal font-['Inter']">Text..............</div>
                            </div>
                        </div>
                        <div className="flex mt-8">
                            <img src="/LikeUnfilled.svg" alt="" className='cursor-pointer' />
                            <img src="/dislikeUnfilled.svg" alt="" className='cursor-pointer' />
                        </div>
                    </div>
                    <div className="w-full h-[0px] border border-stone-300 mt-6"></div>
                </div>
                <div className="reciverProfileChat">
                    <div className="flex flex-row-reverse items-center pt-5  justify-between">
                        <div className=" flex flex-row-reverse items-center gap-x-3 ">
                            <div className="w-[54.04px] h-[54.04px] rounded-[27.02px] bg-green-300 flex justify-center items-center">
                                <img src="/profle.svg" alt="" className="w-10 h-10" />
                            </div>

                            <div className="flex flex-col gap-y-2">
                                <div className="text-black text-[13px] font-medium font-['Inter']">Person Name</div>
                                <div className="text-black text-xs font-normal font-['Inter']">Text..............</div>
                            </div>
                        </div>
                        <div className="flex mt-8">
                            <img src="/LikeUnfilled.svg" alt="" className='cursor-pointer' />
                            <img src="/dislikeUnfilled.svg" alt="" className='cursor-pointer' />
                        </div>
                    </div>
                    <div className="w-full h-[0px] border border-stone-300 mt-6"></div>
                </div>
                <div className="codeSnip mt-8">
                    <img src="/codeSnip.jpg" alt="" className='rounded-t-md mx-auto my-auto' />
                </div>

                <div className="w-[96%] absolute bottom-5">
                    <div className="w-[509px] h-[41px] bg-white rounded-[5px] shadow border border-zinc-300 mx-auto flex justify-evenly items-center dropShadow">
                        <p
                            className={`text-black text-xs font-medium font-['Inter'] px-4 cursor-pointer ${activeItem === 0 ? 'activeBg  py-[2px] rounded-md text-white' : ''}`}
                            onClick={() => handleItemClick(0)}
                        >
                            Rewrite
                        </p>
                        <p
                            className={`text-black text-xs font-medium font-['Inter'] cursor-pointer px-4 ${activeItem === 1 ? 'activeBg  py-[2px] rounded-md text-white' : ''}`}
                            onClick={() => handleItemClick(1)}
                        >
                            Casual
                        </p>
                        <p
                            className={`text-black text-xs font-medium font-['Inter'] cursor-pointer px-4 ${activeItem === 2 ? 'activeBg  py-[2px] rounded-md text-white' : ''}`}
                            onClick={() => handleItemClick(2)}
                        >
                            Formal
                        </p>
                        <p
                            className={`text-black text-xs font-medium font-['Inter'] cursor-pointer px-4 ${activeItem === 3 ? 'activeBg  py-[2px] rounded-md text-white' : ''}`}
                            onClick={() => handleItemClick(3)}
                        >
                            Shorten
                        </p>
                        <p
                            className={`text-black text-xs font-medium font-['Inter'] cursor-pointer px-4 ${activeItem === 4 ? 'activeBg  py-[2px] rounded-md text-white' : ''}`}
                            onClick={() => handleItemClick(4)}
                        >
                            Expand
                        </p>
                        <p
                            className={`text-black text-xs font-medium font-['Inter'] cursor-pointer px-4 ${activeItem === 5 ? 'activeBg  py-[2px] rounded-md text-white' : ''}`}
                            onClick={() => handleItemClick(5)}
                        >
                            Copy
                        </p>
                    </div>

                    {showMenuOotion ? (<div className="absolute transitionTransform -top-[84px] left-3 w-[51.02px] h-[140.28px] flex flex-col justify-around items-center bg-white shadow dropShadow" >
                        <div className="w-full hover:bg-gray-10 transition-all" >

                            <input type="file" accept="video/*" id="file-input" />
                            <label htmlFor="file-input" className="cursor-pointer">
                                <img src="/videoUploadInChat.svg" alt="" className='mx-auto cursor-pointer' />
                            </label>

                        </div>
                        <div className="w-full hover:bg-gray-10 transition-all">
                            <input type="file" accept=".csv" id="file-input2" />
                            <label htmlFor="file-input2" className="cursor-pointer">
                                <img src="/csvUploadInChat.svg" alt="" className='mx-auto cursor-pointer' />
                            </label>

                        </div>
                        <div className="w-full hover:bg-gray-10 transition-all">
                            <input type="file"
                                accept="application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/pdf, text/plain"
                                id="file-input3" />
                            <label htmlFor="file-input3" className="cursor-pointer">
                                <img src="/docUploadInChat.png" alt="" className='mx-auto cursor-pointer' />
                            </label>


                        </div>
                        <div className="w-full hover:bg-gray-10 transition-all">
                            <input type="file" accept=".pdf" id="file-input4" />
                            <label htmlFor="file-input4" className="cursor-pointer">
                                <img src="/pdfUploadInChat.png" alt="" className='mx-auto cursor-pointer' />
                            </label>

                        </div>
                    </div>) : ""}
                    <div className="chatDiv relative w-full h-[62px] bg-white rounded-[5px] shadow border dropShadow border-zinc-300 flex items-center justify-start px-5 gap-x-5 mt-4">
                        <div className="transition-btn">
                            {isAddPlusClicked ? (
                                <img src="/addPlus.svg" alt="" className="w-10 h-10 cursor-pointer" onClick={handleAddPlusClick} />
                            ) : (
                                <img src="/crossChat.svg" alt="" className="w-10 h-10 cursor-pointer opacity-50" onClick={handleCrossChatClick} />
                            )}
                        </div>
                        <div className="">
                            <input type="text" id="chat_type" placeholder="Type Your Text Here............" className="text-neutral-500 text-sm font-medium font-['Inter'] w-[500px] outline-none" />
                        </div>
                        <div className="absolute right-4 w-[33.33px] h-[33.33px] bg-zinc-300 rounded-full flex justify-center items-center">
                            <img src="/sendButton.svg" alt="" className="cursor-pointer ml-2" />
                        </div>
                    </div>
                </div>



            </div>
            {isProfileDivPresent && (
                <div className="mainProfileDiv slideClass w-[290px] xxl:w-[350px] h-[805px] bg-white rounded-[10px] shadow dropShadow p-6 flex flex-col justify-start items-center">
                    {items.map((item) => (
                        // Assuming you have a variable like activeItemId to store the active item's id
                        activeItemId === item.id && (
                            <div key={item.id} className='text-center flex-col flex items-center justify-center'>
                                <div className="w-[140px] h-[140px] rounded-full bg-green-300 flex items-center justify-center">
                                    <img src="/bigProfile.svg" alt="" className="w-[105px]" />
                                </div>
                                <div className="text-black text-[28px] font-medium font-['Inter']">{item.name}</div>
                                <div className="text-black text-[15px] font-medium font-['Inter']">GENDER</div>
                                <div className="text-black text-sm font-medium font-['Inter'] uppercase mt-1">country OCCUPATION</div>
                                <div className="mt-1">
                                    <RatingStars />
                                </div>
                            </div>
                        )
                    ))}
                </div>
            )}

        </div>
    )
}

export default MainChatScreen