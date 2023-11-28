"use client"


import React, { useState, useEffect } from "react";
import Image from "next/image";
import NationDropdown from "./NationDropdown";

const AddNewPersona = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [epoch, setEpoch] = useState(0);
    const [batch, setBatch] = useState(0);

    const handleEpochChange = (e: any) => {
        const value = e.target.value;
        const mappedValue = parseInt(value, 10);
        const clampedValue = Math.min(1000, Math.max(0, mappedValue));
        setEpoch(clampedValue);
        updateCurrentEpochText(clampedValue);
    };
    const handleBatchChange = (e: any) => {
        const value = e.target.value;
        const mappedValue = parseInt(value, 10);
        const clampedValue = Math.min(40, Math.max(0, mappedValue));
        setBatch(clampedValue);
        updateCurrentBatchText(clampedValue);
    };

    const calculateBackground = (value: any) => {
        const percentage = (value / 1000) * 100;
        const background = `linear-gradient(to right, #73F89D 0%, #48A0F9 ${percentage}%, #fff ${percentage}%)`;
        return background;
    };

    const calculateBackground2 = (value: any) => {
        const percentage = (value / 40) * 100;
        const background = `linear-gradient(to right, #73F89D 0%, #48A0F9 ${percentage}%, #fff ${percentage}%)`;
        return background;
    };

    const decreaseEpoch = () => {
        setEpoch((prevEpoch) => Math.max(0, prevEpoch - 1));
    };

    const increaseEpoch = () => {
        setEpoch((prevEpoch) => Math.min(1000, prevEpoch + 1));
    };


    const updateCurrentEpochText = (newEpoch: any) => {
        const currentEpochElement = document.querySelector('.current-Epoch');
        if (currentEpochElement) {
            currentEpochElement.textContent = newEpoch;
        }
    };

    const decreaseBatch = () => {
        setBatch((prevBatch) => Math.max(0, prevBatch - 1));
    };

    const increaseBatch = () => {
        setBatch((prevBatch) => Math.min(40, prevBatch + 1));
    };

    const updateCurrentBatchText = (newBatch: any) => {
        const currentBatchElement = document.querySelector('.current-batch');
        if (currentBatchElement) {
            currentBatchElement.textContent = newBatch;
        }
    };

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event: any) => {
            if (isPopupOpen && !event.target.closest(".popup-content")) {
                closePopup();
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [isPopupOpen]);




    return (
        <div className="relative">
            <form className="bg-white w-[290px] h-[790px] rounded-[10px] boxShadow 2xl:max-container relative flex flex-col lg:mt-0 lg:mb-[12px]">
                <h4 className="px-5 pt-[15px] pb-[11px] text-[16px] font-bold">Generate Persona</h4>
                <section className="bg-white w-[250px] h-[175px] border mx-5 rounded-[10px] z-10 flex justify-center items-center boxShadow">
                    <Image
                        src="/addPlus.svg"
                        alt="Add More"
                        width={70}
                        height={20}
                        className="mb-2 cursor-pointer"
                        onClick={openPopup}
                    />
                </section>
                <div className="px-5 pt-[18px]">
                    <button
                        type="button"
                        className="buttonBg w-full h-[50px] rounded-[8px] text-[14px] text-white font-bold"

                    >
                        Generate
                    </button>
                </div>

            </form>



            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center font-semibold">
                    <div className="bg-white w-[569px] h-auto popup-content overflow-auto pb-3">
                        <div className="p-5 space-y-3">
                            <div className="flex space-x-2">
                                <label htmlFor="voiceName" className="whitespace-nowrap">Name:</label>
                                <input type="text" id="voiceName" className="w-full mb-3 outline-none px-2 border rounded-[5px]" />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex space-x-2">
                                    <label htmlFor="age" className="whitespace-nowrap">Age:</label>
                                    <input
                                        type="number"
                                        id="voiceName"
                                        className="w-[85px] mb-3 outline-none px-2 border rounded-[5px]"

                                    />

                                </div>
                                <div className="flex space-x-2 ml-5">
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

                            </div>
                            <div className="flex justify-between flex-row-reverse">
                                <div className="flex space-x-2">
                                    <label htmlFor="publicFigure" className="whitespace-nowrap">Public Figure:</label>
                                    <input type="text" id="voiceName" className="w-[85px] mb-3 outline-none px-2 border rounded-[5px]" />
                                </div>
                                <div className="flex space-x-2">
                                    <label htmlFor="visibilty" className="whitespace-nowrap">Visibility:</label>
                                    <div className="flex space-x-3 justify-center items-center -mt-3">
                                        <input type="radio" id="public" name="visible" value="public" checked />
                                        <label htmlFor="public">Public</label>
                                        <input type="radio" id="private" name="visible" value="private" checked />
                                        <label htmlFor="private">Private</label>
                                    </div>
                                </div>

                            </div>
                            <div className="flex space-x-3">
                                <div className="flex space-x-2">
                                    <label htmlFor="personality" className="whitespace-nowrap">Personality :</label>
                                    <input type="text" id="personality" className="w-[160px] mb-3 outline-none px-2 border rounded-[5px]" />
                                </div>
                                <div className="flex space-x-2">
                                    <label htmlFor="nation" className="whitespace-nowrap">Nation :</label>
                                    <NationDropdown />
                                </div>


                            </div>

                            <div className="flex space-x-2">
                                <label htmlFor="occupation" className="whitespace-nowrap">Occupation :</label>
                                <input type="text" id="occupation" placeholder="Select an occupation" className="placeholder-black text-xs p-1 w-full mb-3 outline-none px-2 border rounded-[5px]" />
                            </div>

                            <div className="flex justify-start items-center">
                                <label htmlFor="uploadFile" className="whitespace-nowrap  pb-5 mr-3">Upload PDF</label>
                                <input type="file" id="uploadFile" accept=".pdf" className="w-full text-sm mb-3 border p-1 rounded-[5px]" />
                            </div>

                            <div className="text-black text-sm font-normal font-['Inter']">OR</div>

                            <div className="flex justify-start items-start flex-col">
                                <label htmlFor="typeByYourSelf" className="whitespace-nowrap  pb-2">Type by Yourself :</label>
                                <textarea id="typeByYourSelf" className="w-full resize-none mb-3 border p-2 rounded-[5px]" />
                            </div>

                            <div className="flex justify-start items-center">
                                <label htmlFor="uploadFile" className="whitespace-nowrap  pb-5 mr-3">Upload Image</label>
                                <input type="file" id="uploadFile" accept=".jpeg, .jpg, .png, .gif, .bmp, .svg, image/jpeg, image/jpg, image/png, image/gif, image/bmp, image/svg+xml" className="w-full text-sm mb-3 border p-1 rounded-[5px]" />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="buttonBg w-[93%] h-[50px] mx-[19px] rounded-[8px] text-[14px] text-white font-bold"
                            onClick={closePopup}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default AddNewPersona;
