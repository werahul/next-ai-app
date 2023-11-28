"use client"

import React, { useState } from 'react'

const LeftSection = () => {

    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)
    const [cfgScale, setCfgScale] = useState(0)
    const [sampling, setSampling] = useState(0)
    const [NumberOfImages, setNumberOfImages] = useState(0)
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e: any) => {
        const newValue = e.target.value;
        const sanitizedValue = newValue.replace(/[^0-9-]/g, '');
        const intValue = sanitizedValue.startsWith('-')
            ? parseInt(sanitizedValue, 10)
            : parseInt(sanitizedValue.replace(/-/g, ''), 10);
        if (newValue === '' || newValue === '-' || (!isNaN(intValue) && intValue >= -100 && intValue <= 100)) {
            setInputValue(sanitizedValue);
        }

    };

    const resetAll = () =>{
        setHeight(0)
        setWidth(0)
        setCfgScale(0)
        setSampling(0)
        setNumberOfImages(0)
    }



    const decreaseHeight = () => {
        setHeight((prevHeight) => Math.max(0, prevHeight - 1));
    };
    const increaseHeight = () => {
        setHeight((prevHeight) => Math.min(2048, prevHeight + 1));
    };

    const decreaseWidth = () => {
        setWidth((prevWidth) => Math.max(0, prevWidth - 1));
    };
    const increaseWidth = () => {
        setWidth((prevWidth) => Math.min(2048, prevWidth + 1));
    };

    const decreaseCfgScale = () => {
        setCfgScale((prevCfgScale) => Math.max(0, prevCfgScale - 1));
    };
    const increaseCfgScale = () => {
        setCfgScale((prevCfgScale) => Math.min(30, prevCfgScale + 1));
    };
    const decreaseSampling = () => {
        setSampling((prevSampling) => Math.max(0, prevSampling - 1));
    };
    const increaseSampling = () => {
        setSampling((prevSampling) => Math.min(50, prevSampling + 1));
    };
    const decreaseNumberOfImages = () => {
        setNumberOfImages((prevNumberOfImages) => Math.max(0, prevNumberOfImages - 1));
    };
    const increaseNumberOfImages = () => {
        setNumberOfImages((prevNumberOfImages) => Math.min(10, prevNumberOfImages + 1));
    };






    const handleHeightChange = (e: any) => {
        const value = parseInt(e.target.value, 10);

        const minValue = 0;
        const maxValue = 2048;

        if (value >= minValue && value <= maxValue) {
            setHeight(value);

            const left = `calc(${((value / (maxValue - minValue)) * 100)}% - 10px)`; // Adjusted calculation

            // Find the element representing the span by class name
            const currentExposureElement = document.querySelector('.current-exposure');

            if (currentExposureElement instanceof HTMLElement) {
                currentExposureElement.style.left = left;
            }
        }
    };
    const handleWidthChange = (e: any) => {
        const value = parseInt(e.target.value, 10);

        const minValue = 0;
        const maxValue = 2048;

        if (value >= minValue && value <= maxValue) {
            setWidth(value);

            const left2 = `calc(${((value / (maxValue - minValue)) * 100)}% - 10px)`; // Adjusted calculation

            // Find the element representing the span by class name
            const currentExposureElement = document.querySelector('.widthRange');

            if (currentExposureElement instanceof HTMLElement) {
                currentExposureElement.style.left = left2;
            }
        }
    };
    const handleCfgScaleChange = (e: any) => {
        const value = parseInt(e.target.value, 10);

        if (value >= 0 && value <= 30) {
            setCfgScale(value);
            updateCurrentCfgScale(value);

            // Calculate the left position based on the value (assuming a linear mapping from 0 to 30 to a width)
            const left = `calc(${((value / 60) * 100)}% - 10px)`;
            const currentExposureElement = document.querySelector('.cfgScale-class');

            if (currentExposureElement instanceof HTMLElement) {
                currentExposureElement.style.left = left;
            }
        }
    };
    const handleSampleChange = (e: any) => {
        const value = parseInt(e.target.value, 10);

        if (value >= 0 && value <= 50) {
            setSampling(value);
            // updateCurrentCfgScale(value);

            // Calculate the left position based on the value (assuming a linear mapping from 0 to 50 to a width)
            const left = `calc(${((value / 50) * 100)}% - 10px)`;
            const currentExposureElement = document.querySelector('.sampling-class');

            if (currentExposureElement instanceof HTMLElement) {
                currentExposureElement.style.left = left;
            }
        }
    };
    const handleNumberOfImagesChange = (e: any) => {
        const value = parseInt(e.target.value, 10);

        if (value >= 0 && value <= 10) {
            setNumberOfImages(value);
            // updateCurrentCfgScale(value);

            // Calculate the left position based on the value (assuming a linear mapping from 0 to 10 to a width)
            const left = `calc(${((value / 10) * 100)}% - 10px)`;
            const currentExposureElement = document.querySelector('.numberOfImages-class');

            if (currentExposureElement instanceof HTMLElement) {
                currentExposureElement.style.left = left;
            }
        }
    };



    const updateCurrentCfgScale = (newCfgScale: any) => {
        const currentCfgScaleElement = document.querySelector('.current-CfgScale');
        if (currentCfgScaleElement) {
            currentCfgScaleElement.textContent = newCfgScale;
        }
    };

    const calculateBackground = (value: any) => {
        const minRange = 0;
        const maxRange = 2048;
        const percentage = ((value - minRange) / (maxRange - minRange)) * 100;
        const clampedPercentage = Math.min(100, Math.max(0, percentage));
        const background = `linear-gradient(to right, #73F89D 0%, #48A0F9 ${clampedPercentage}%, #fff ${clampedPercentage}%)`;
        return background;
    };
    const calculateBackgroundForCfgScale = (value: any) => {
        const minRange = 0;
        const maxRange = 30;
        const percentage = ((value - minRange) / (maxRange - minRange)) * 100;
        const clampedPercentage = Math.min(100, Math.max(0, percentage));
        const background = `linear-gradient(to right, #73F89D 0%, #48A0F9 ${clampedPercentage}%, #fff ${clampedPercentage}%)`;
        return background;
    };
    const calculateBackgroundForSampling = (value: any) => {
        const minRange = 0;
        const maxRange = 50;
        const percentage = ((value - minRange) / (maxRange - minRange)) * 100;
        const clampedPercentage = Math.min(100, Math.max(0, percentage));
        const background = `linear-gradient(to right, #73F89D 0%, #48A0F9 ${clampedPercentage}%, #fff ${clampedPercentage}%)`;
        return background;
    };
    const calculateBackgroundForNumberOfImages = (value: any) => {
        const minRange = 0;
        const maxRange = 10;
        const percentage = ((value - minRange) / (maxRange - minRange)) * 100;
        const clampedPercentage = Math.min(100, Math.max(0, percentage));
        const background = `linear-gradient(to right, #73F89D 0%, #48A0F9 ${clampedPercentage}%, #fff ${clampedPercentage}%)`;
        return background;
    };





    return (
        <div>
            <div className="w-[290px] h-auto bg-white rounded-[10px] dropShadow p-5" >

                <div className="">
                    <div className="text-zinc-900 text-base font-semibold font-['Inter'] mb-1">Positive Prompt</div>
                    <div className="w-[100%] h-[140px] bg-neutral-50 rounded-lg shadow border border-gray-200 outline-none p-3 pt-6">

                        <textarea name="positivePrompt" rows={5} placeholder="Type your text......" className="bg-transparent outline-none resize-none overflow-hidden"></textarea>
                    </div>
                </div>

                <div className="mt-6">
                    <div className="text-zinc-900 text-base font-semibold font-['Inter'] mb-1">Negative Prompt</div>
                    <div className="w-[100%] h-[140px] bg-neutral-50 rounded-lg shadow border border-gray-200 outline-none p-3 pt-6">

                        <textarea name="negetivePrompt" rows={5} placeholder="Type your text......" className="bg-transparent outline-none resize-none overflow-hidden"></textarea>
                    </div>
                </div>



                <div className="flex justify-between items-center mt-4">
                    <div className="text-zinc-900 text-base font-semibold font-['Inter']">Options</div>
                    <div className="text-black text-[10px] font-semibold font-['Inter'] cursor-pointer">(?)</div>
                </div>

                {/* Range Section ------------------------------------------------------------------------------------------------------>>>>> */}
                <div className="mt-4"></div>
                <div className="range-container">
                    <label htmlFor="height" className="font-[500] text-[12px] mb-2">
                        Height
                    </label>
                    <div className="flex items-center justify-center space-x-3">
                        <div className="flex flex-col items-center justify-center mt-0">
                            <p className="text-[9px] font-semibold">0</p>
                            <button onClick={(e) => { e.preventDefault(); decreaseHeight(); }} className="font-bold text-[20px] -mt-3">
                                -
                            </button>
                        </div>

                        <div className="w-full relative">
                            <input
                                type="range"
                                id="height"
                                min="0"
                                max="2048"
                                step="1"
                                value={height}
                                onChange={handleHeightChange}
                                style={{ background: calculateBackground(height) }}
                            />
                            <span
                                className="current-exposure absolute text-[10px] font-[600] top-[-8px] mt-1"
                                style={{ left: `calc(${((height / 2048) * 100)}% - 1px)` }}
                            >
                                {height}
                            </span>
                        </div>

                        <div className="flex flex-col items-center justify-center -mt-1">
                            <p className="text-[9px] font-semibold">2048</p>
                            <button onClick={(e) => { e.preventDefault(); increaseHeight(); }} className="font-bold text-[20px] -mt-3">
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className="range-container">
                    <label htmlFor="'width'" className="font-[500] text-[12px] mb-2">
                        Width
                    </label>
                    <div className="flex items-center justify-center space-x-3">
                        <div className="flex flex-col items-center justify-center mt-0">
                            <p className="text-[9px] font-semibold">0</p>
                            <button onClick={(e) => { e.preventDefault(); decreaseWidth(); }} className="font-bold text-[20px] -mt-3">
                                -
                            </button>
                        </div>

                        <div className="w-full relative">
                            <input
                                type="range"
                                id="width"
                                min="0"
                                max="2048"
                                step="1"
                                value={width}
                                onChange={handleWidthChange}
                                style={{ background: calculateBackground(width) }}
                            />
                            <span
                                className=" widthRange absolute text-[10px] font-[600] top-[-8px] mt-1"
                                style={{ left: `calc(${((width / 2048) * 100)}% - 1px)` }}
                            >
                                {width}
                            </span>

                        </div>

                        <div className="flex flex-col items-center justify-center -mt-1">
                            <p className="text-[9px] font-semibold">2048</p>
                            <button onClick={(e) => { e.preventDefault(); increaseWidth(); }} className="font-bold text-[20px] -mt-3">
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className="range-container">
                    <label htmlFor="cfgScale" className="font-[500] text-[12px] mb-2">
                        CFG Scale
                    </label>
                    <div className="flex items-center space-x-3">

                        <div className="flex flex-col items-center justify-center -mt-1">
                            <p className="text-[9px] font-semibold">0</p>
                            <button onClick={(e) => { e.preventDefault(); decreaseCfgScale(); }} className="font-bold text-[20px] -mt-3">
                                -
                            </button>
                        </div>
                        <div className="w-full relative">
                            <input
                                type="range"
                                id="cfgScale"
                                min="0"
                                max="30"
                                value={cfgScale}
                                onChange={handleCfgScaleChange}
                                style={{ background: calculateBackgroundForCfgScale(cfgScale) }}
                            />
                            <span
                                className="absolute text-[10px] font-[600] top-[-8px]"
                                style={{ left: `calc(${((cfgScale / 30) * 100)}% - 1px)` }}
                            >
                                {cfgScale}
                            </span>
                        </div>

                        <div className="flex flex-col items-center justify-center -mt-1">
                            <p className="text-[9px] font-semibold">30</p>
                            <button onClick={(e) => { e.preventDefault(); increaseCfgScale(); }} className="font-bold text-[20px] -mt-3">
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className="range-container">
                    <label htmlFor="Sampling" className="font-[500] text-[12px] mb-2 font-['Inter']">
                        Sampling Steps
                    </label>
                    <div className="flex items-center space-x-3">

                        <div className="flex flex-col items-center justify-center -mt-1">
                            <p className="text-[9px] font-semibold">0</p>
                            <button onClick={(e) => { e.preventDefault(); decreaseSampling(); }} className="font-bold text-[20px] -mt-3">
                                -
                            </button>
                        </div>
                        <div className="w-full relative">
                            <input
                                type="range"
                                id="sampling"
                                min="0"
                                max="50"
                                value={sampling}
                                onChange={handleSampleChange}
                                style={{ background: calculateBackgroundForSampling(sampling) }}
                            />
                            <span
                                className="absolute text-[10px] font-[600] top-[-8px]"
                                style={{ left: `calc(${((sampling / 50) * 100)}% - 1px)` }}
                            >
                                {sampling}
                            </span>

                        </div>

                        <div className="flex flex-col items-center justify-center -mt-1">
                            <p className="text-[9px] font-semibold">50</p>
                            <button onClick={(e) => { e.preventDefault(); increaseSampling(); }} className="font-bold text-[20px] -mt-3">
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className="range-container">
                    <label htmlFor="numberOfImages" className="font-[500] text-[12px] mb-2 font-['Inter']">
                        No.of Images
                    </label>
                    <div className="flex items-center space-x-3">

                        <div className="flex flex-col items-center justify-center -mt-1">
                            <p className="text-[9px] font-semibold">0</p>
                            <button onClick={(e) => { e.preventDefault(); decreaseNumberOfImages(); }} className="font-bold text-[20px] -mt-3">
                                -
                            </button>
                        </div>
                        <div className="w-full relative">
                            <input
                                type="range"
                                id="numberOfImages"
                                min="0"
                                max="10"
                                value={NumberOfImages}
                                onChange={handleNumberOfImagesChange}
                                style={{ background: calculateBackgroundForNumberOfImages(NumberOfImages) }}
                            />
                            <span
                                className="absolute text-[10px] font-[600] top-[-8px]"
                                style={{ left: `calc(${((NumberOfImages / 10) * 100)}% - 1px)` }}
                            >
                                {NumberOfImages}
                            </span>


                        </div>

                        <div className="flex flex-col items-center justify-center -mt-1">
                            <p className="text-[9px] font-semibold">10</p>
                            <button onClick={(e) => { e.preventDefault(); increaseNumberOfImages(); }} className="font-bold text-[20px] -mt-3">
                                +
                            </button>
                        </div>
                    </div>
                </div>


                <div className="flex justify-between items-center">
                    <div className="text-black text-[10px] font-semibold font-['Inter']">Seed</div>
                    <input
                        type="text"
                        placeholder='0'
                        className='placeholder-black text-[9px] w-[38.20px] h-3.5 bg-white rounded-sm shadow border outline-none border-stone-300 p-1 px-2'
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex justify-between items-center  mt-3">
                    <button onClick={resetAll} className="w-14 h-[22px] bg-gray-800 rounded-[3px] text-white text-[10px] font-medium font-['Inter'] cursor-pointer">Reset</button>

                    <button className="w-14 h-[22px] bg-gray-800 rounded-[3px] text-white text-[10px] font-medium font-['Inter'] cursor-pointer">Save</button>
                </div>

                <div className="px-0 pt-0 mt-6 mb-3 z-10">
                    <button
                        type="button"
                        className="buttonBg w-full h-[50px] rounded-[8px] text-[14px] text-white font-bold"
                    >
                        Generate
                    </button>
                </div>
            </div>


        </div>

    )
}

export default LeftSection
