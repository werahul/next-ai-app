"use client"


import React, { useState } from "react";
import Image from "next/image";


interface AudioLeftProps {
    onTextChange: (text: string) => void;
    onMusicUpload: (music: any) => void;
    onImageUpload: (image: any) => void;
    onAudioUpload: (audio: any) => void;
}


const AiNewsReader = (props: AudioLeftProps) => {


    const [selectedOption, setSelectedOption] = useState("persona");   
   

    const handleOptionClick = (option: any) => {
        setSelectedOption(option);
    };



    const renderInputBasedOnOption = () => {
        if (selectedOption === "persona") {
            return (
                <div className="mx-auto flex flex-col rounded-[8px] pt-14 items-center h-[204px] w-[250px]  z-10 bg-transparent">

                </div>
            );

        } else if (selectedOption === "chatbot") {
            return (
                <div className="mx-auto flex flex-col rounded-[8px] pt-14 items-center h-[204px] w-[250px]  z-10 bg-transparent">

                </div>
            );
        }
    };

    return (
        <form className="bg-white w-[290px] h-[790px] rounded-[10px] boxShadow 2xl:max-container relative flex px-5 flex-col lg:mt-0 pt-[30px] lg:mb-[33px]">

            <div className="text-zinc-900 text-base font-semibold font-['Inter'] mb-3">Talk to a:</div>

            <section className="bg-[#FAFAFA] w-[250px] h-[274px] border  rounded-[10px] z-10 boxShadow">
                <div>
                    <div className="px-[11px] pt-[5px]">
                        <div className="mx-auto border flex space-x-0 px-2 rounded-[8px] justify-between items-center bg-[#FAFAFA] boxShadow z-50">
                            <p
                                className={`my-[8px] text-[12px] py-1 cursor-pointer rounded-[6px] font-medium px-3 ${selectedOption === "persona" ? "bg-[#2B303A] text-white" : "text-black"
                                    }`}
                                onClick={() => handleOptionClick("persona")}
                            >
                                Persona
                            </p>
                            <p
                                className={`my-[8px] text-[12px] cursor-pointer rounded-[6px] font-medium px-2 py-1 ${selectedOption === "chatbot" ? "bg-[#2B303A] text-white" : "text-black"
                                    }`}
                                onClick={() => handleOptionClick("chatbot")}
                            >
                                Chatbot
                            </p>

                        </div>
                    </div>
                    {/* <div className="px-0 pt-0 absolute top-14 z-10">
                        {renderInputBasedOnOption()}
                    </div> */}

                </div>

            </section>

            <div className="text-zinc-900 text-base font-semibold font-['Inter'] my-3">Type your text or speak</div>

            <section className="bg-[#FAFAFA] w-[250px] h-[282px] border  rounded-[10px] z-10 boxShadow p-4 relative">
                {/* <div>
                    <div className="px-[11px] pt-[5px]">
                        <div className="mx-auto border flex space-x-0 px-2 rounded-[8px] justify-between items-center bg-[#FAFAFA] boxShadow z-50">
                            <p
                                className={`my-[8px] text-[12px] py-1 cursor-pointer rounded-[6px] font-medium px-3 ${selectedOption === "text" ? "bg-[#2B303A] text-white" : "text-black"
                                    }`}
                                onClick={() => handleOptionClick("persona")}
                            >
                                Persona
                            </p>
                            <p
                                className={`my-[8px] text-[12px] cursor-pointer rounded-[6px] font-medium px-2 py-1 ${selectedOption === "image" ? "bg-[#2B303A] text-white" : "text-black"
                                    }`}
                                onClick={() => handleOptionClick("chatbot")}
                            >
                                Chatbot
                            </p>
                            
                        </div>
                    </div>
                    <div className="px-0 pt-0 absolute top-14 z-10">
                        {renderInputBasedOnOption()}
                    </div>

                </div> */}
                <div className="flex justify-between items-center">
                    <div className="text-zinc-900 text-sm font-medium font-['Inter']">Text Box</div>
                    <Image src="/record.svg" alt="Record Icon" width={35} height={35} />
                </div>

                <button className="w-[88px] h-[34px] px-2.5 py-[16.50px] bg-gradient-to-r from-green-300 to-blue-400 rounded-lg justify-center items-center gap-2.5 inline-flex text-white text-sm font-semibold font-['Inter'] absolute bottom-5 right-5 hover:from-blue-400 hover:to-green-300 transition-all">Enter</button>
            </section>

            <div className="text-black text-base font-semibold font-['Inter'] mt-8">Currently chatting With:<br/>XYZ Render</div>
        </form>
    );
};

export default AiNewsReader;
