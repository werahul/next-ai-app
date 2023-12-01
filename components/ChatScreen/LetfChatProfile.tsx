"use client"
import React, { useState } from 'react'

const LetfChatProfile = () => {


    const [activePerson, setActivePerson] = useState(null);

    const [showCollapsibleContent, setShowCollapsibleContent] = useState(true);

    const handleCollapsClick = () => {
        setShowCollapsibleContent(!showCollapsibleContent);
    };
    const handlePersonClick = (id: any) => {
        setActivePerson(id);
    };

    const items = [
        // Add your data objects here
        // Example:
        { id: 1, name: 'Orca', },
        { id: 2, name: 'Heumes', },
        { id: 3, name: 'Wizardlm', },
        { id: 4, name: 'Mistral', },
        { id: 5, name: 'PERSON NAME', },
        { id: 6, name: 'PERSON NAME', },
        { id: 7, name: 'PERSON NAME', },
        { id: 8, name: 'PERSON NAME', },
        // { id: 9, name: 'PERSON NAME', },
        // { id: 10, name: 'PERSON NAME', },

        // ...
    ];

    return (
        <>
            
                <div className="w-[60%]  h-[790px] bg-white rounded-[10px] shadow dropShadow p-6 overflow-hidden">
                    <div className="flex items-center justify-between">
                        <div className="text-black text-xl font-medium font-Inter">Chat History</div>
                        <div className="">
                            <img src="/collaps.svg" alt="" className="cursor-pointer" onClick={handleCollapsClick} />
                        </div>
                    </div>

                    <div className="mt-10">
                        {items.map((item) => (
                            <div className=" flex flex-col space-y-0" key={item.id}>
                                <div className={`relative flex justify-start items-center space-x-3 rounded-tl-[15px] rounded-tr-[15px] rounded-bl-[15px h-[68.71px] bg-transparent ${activePerson === item.id ? 'px-3 bg-gradient-to-l from-[#4CA9F0] to-[#70F2A4]' : ''}`} onClick={() => handlePersonClick(item.id)}>
                                    <div className="w-[54.04px] h-[54.04px] rounded-[27.02px] bg-blue-400 flex justify-center items-center">
                                        <img src="/profle.svg" alt="" className="w-10 h-10" />
                                    </div>
                                    <div className={`text-black text-[16px] font-semibold font-Inter uppercase ${activePerson === item.id ? 'text-white' : ''}`}>{item.name}</div>
                                    <div className="absolute right-2">
                                        {activePerson === item.id ? (<img src="/whiteDown.svg" alt="" className="cursor-pointer w-8 h-8" />) : (<img src="/blackDown.svg" alt="" className="w-8 h-8 cursor-pointer" />)}
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
           
        </>
    );
}
export default LetfChatProfile