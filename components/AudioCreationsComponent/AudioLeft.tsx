"use client"


import React, { useState } from "react";
import Image from "next/image";


interface AudioLeftProps {
    onTextChange: (text: string) => void;
    onMusicUpload: (music: any) => void;
    onImageUpload: (image: any) => void;
    onAudioUpload: (audio: any) => void;
}


const AudioLeft = (props: AudioLeftProps) => {
    // const [showVideoUpload, setShowVideoUpload] = useState(true);
    // const [showImageUpload, setShowImageUpload] = useState(false);
    const [protection, setProtection] = useState(0)
    const [transpose, setTranspose] = useState(0)
    const [indexRatio, setIndexRatio] = useState(0)
    const [duration, setDuration] = useState(0);
    const [guidanceScale, setGuidanceScale] = useState(0);
    const [waveform, setWaveform] = useState(0);
    const [audioLength, setAudioLength] = useState(0);
    const [streamingInterval, setStreamingInterval] = useState(0);
    const [seed, setSeed] = useState(0);
    const [textValue, setTextValue] = useState("");


    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedOption, setSelectedOption] = useState("text");

    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedMusic, setSelectedMusic] = useState(null);
    const [selectedAudio, setSelectedAudio] = useState(null);

    const handleTextFileChange = (event: any) => {
        const file = event.target.files;
        setTextValue(file)
    };
    const handleMusicFileChange = (event: any) => {
        const file = event.target.files[0];
        props.onMusicUpload(file);
        setSelectedMusic(file);
        setSelectedOption("music");
    };
    const handleAudioFileChange = (event: any) => {
        const file = event.target.files[0];
        props.onAudioUpload(file)
        setSelectedAudio(file);
        setSelectedOption("audio");
    };
    const handleImageFileChange = (event: any) => {
        const image = event.target.files[0];
        props.onImageUpload(image);
        setSelectedImage(image);
        setSelectedOption("image");

    };

    const handleOptionClick = (option: any) => {
        setSelectedOption(option);
    };

    const handleChange = (event: any) => {
        props.onTextChange(event.target.value)
    };

    const decreaseTranspose = () => {
        setTranspose((prevTranspose) => Math.max(-12, prevTranspose - 1));
    };
    const increaseTranspose = () => {
        setTranspose((prevTranspose) => Math.min(12, prevTranspose + 1));
    };
    const decreaseIndexRatio = () => {
        setIndexRatio((prevIndexRatio) => Math.max(0, prevIndexRatio - 0.01));
    };
    const increaseIndexRatio = () => {
        setIndexRatio((prevIndexRatio) => Math.min(1, prevIndexRatio + 0.01));
    };
    const decreaseProtection = () => {
        setProtection((prevProtection) => Math.max(0, prevProtection - .10));
    };
    const increaseProtection = () => {
        setProtection((prevProtection) => Math.min(0.5, prevProtection + .10));
    };
    const decreaseDuration = () => {
        setDuration((prevDuration) => Math.max(0, prevDuration - 1));
    };
    const increaseDuration = () => {
        setDuration((prevDuration) => Math.min(10, prevDuration + 1));
    };
    const decreaseGuidanceScale = () => {
        setGuidanceScale((prevScale) => Math.max(0, prevScale - 0.01));
    };
    const increaseGuidanceScale = () => {
        setGuidanceScale((prevScale) => Math.min(5, prevScale + 0.01));
    };
    const decreaseWaveform = () => {
        setWaveform((prevWaveform) => Math.max(0, prevWaveform - 1));
    };
    const increaseWaveform = () => {
        setWaveform((prevWaveform) => Math.min(3, prevWaveform + 1));
    };
    const decreaseAudioLength = () => {
        setAudioLength((prevLength) => Math.max(0, prevLength - 1));
    };
    const increaseAudioLength = () => {
        setAudioLength((prevLength) => Math.min(30, prevLength + 1));
    };
    const decreaseStreamingInterval = () => {
        setStreamingInterval((prevInterval) => Math.max(0, prevInterval - .10));
    };
    const increaseStreamingInterval = () => {
        setStreamingInterval((prevInterval) => Math.min(2.5, prevInterval + .10));
    };
    const decreaseSeed = () => {
        setSeed((prevSeed) => Math.max(0, prevSeed - 1));
    };
    const increaseSeed = () => {
        setSeed((prevSeed) => Math.min(10, prevSeed + 1));
    };


    const handleTransposeChange = (e: any) => {
        const value = parseInt(e.target.value, 10);

        // Define the minimum and maximum values for the range
        const minValue = -12;
        const maxValue = 12;

        // Ensure that the value is within the valid range
        if (value >= minValue && value <= maxValue) {
            setTranspose(value);

            // Calculate the left position based on the value (assuming a linear mapping from -12 to 12 to a width)
            const left = `calc(${((value / (maxValue - minValue)) * 100 + 50)}% - 10px)`;

            // Find the element representing the span by class name
            const currentExposureElement = document.querySelector('.current-exposure');

            if (currentExposureElement instanceof HTMLElement) {
                currentExposureElement.style.left = left;
            }

            // You can also update other elements or perform additional actions based on the value here.
        }
    };

    const handleIndexRatioChange = (e: any) => {
        const value = parseFloat(e.target.value);
        const minValue = 0;
        const maxValue = 1;
        const step = 0.10;
        if (value >= minValue && value <= maxValue) {
            setIndexRatio(value);
            const left = `calc(${((value / maxValue) * 100)}% - 10px)`;
            const spanElement = document.querySelector('.your-span-class-name');

            if (spanElement instanceof HTMLElement) {
                spanElement.style.left = left;
            }
        }
    };

    const handleProtectionChange = (e: any) => {
        const value = parseFloat(e.target.value);
        const minValue = 0;
        const maxValue = 0.5;
        const step = 0.1;
        if (value >= minValue && value <= maxValue) {
            setProtection(value);
            const left = `calc(${((value / maxValue) * 100)}% - 10px)`;
            const spanElement = document.querySelector('.your-span-class-name');

            if (spanElement instanceof HTMLElement) {
                spanElement.style.left = left;
            }
        }
    };

    const handleDurationChange = (e: any) => {
        const value = parseInt(e.target.value, 10);

        if (value >= 0 && value <= 10) {
            setDuration(value);
            updateCurrentDuration(value);

            // Calculate the left position based on the value (assuming a linear mapping from 0 to 10 to a width)
            const left = `calc(${((value / 10) * 100)}% - 10px)`;

            // Find the element representing the duration display by class name
            const currentDurationElement = document.querySelector('.current-duration');

            if (currentDurationElement instanceof HTMLElement) {
                currentDurationElement.style.left = left;
            }
        }
    };
    const handleGuidanceScaleChange = (e: any) => {
        const value = parseFloat(e.target.value);
        const minValue = 0;
        const maxValue = 5;

        if (value >= minValue && value <= maxValue) {
            setGuidanceScale(value);
            const left = `calc(${((value / maxValue) * 100)}% - 10px)`;
            const spanElement = document.querySelector('.your-span-class-name');
            if (spanElement instanceof HTMLElement) {
                spanElement.style.left = left;
            }
        }
    };
    const handleWaveformChange = (e: any) => {
        const value = parseInt(e.target.value, 10);

        if (value >= 0 && value <= 3) {
            setWaveform(value);
            updateCurrentWaveform(value);

            // Calculate the left position based on the value (assuming a linear mapping from 0 to 3 to a width)
            const left = `calc(${((value / 3) * 100)}% - 10px)`;

            // Find the element representing the waveform display by class name
            const currentWaveformElement = document.querySelector('.current-waveform');

            if (currentWaveformElement instanceof HTMLElement) {
                currentWaveformElement.style.left = left;
            }
        }
    };
    const handleAudioLengthChange = (e: any) => {
        const value = parseInt(e.target.value, 10);

        if (value >= 0 && value <= 30) {
            setAudioLength(value);
            updateCurrentAudioLength(value);

            // Calculate the left position based on the value (assuming a linear mapping from 0 to 30 to a width)
            const left = `calc(${((value / 60) * 100)}% - 10px)`;
            const currentExposureElement = document.querySelector('.current-exposure');

            if (currentExposureElement instanceof HTMLElement) {
                currentExposureElement.style.left = left;
            }
        }
    };
    const handleStreamingIntervalChange = (e: any) => {
        const value = parseFloat(e.target.value);

        const minValue = 0;
        const maxValue = 2.5;
        const step = 0.10;
        if (value >= minValue && value <= maxValue) {
            const roundedValue = Math.round(value / step) * step;
            setStreamingInterval(roundedValue);
            const left = `calc(${((roundedValue / maxValue) * 100)}% - 10px)`;
            const spanElement = document.querySelector('.your-span-class-name');
            if (spanElement instanceof HTMLElement) {
                spanElement.style.left = left;
            }
        }
    };
    const handleSeedChange = (e: any) => {
        const value = parseInt(e.target.value, 10);

        if (value >= 0 && value <= 10) {
            setSeed(value);
            updateCurrentSeed(value);

            // Calculate the left position based on the value (assuming a linear mapping from 0 to 10 to a width)
            const left = `calc(${((value / 10) * 100)}% - 10px)`;

            // Find the element representing the seed display by class name
            const currentSeedElement = document.querySelector('.current-seed');

            if (currentSeedElement instanceof HTMLElement) {
                currentSeedElement.style.left = left;
            }
        }
    };



    const updateCurrentTransposeText = (newTranspose: any) => {
        const currentTransposeElement = document.querySelector('.current-transpose');
        if (currentTransposeElement) {
            currentTransposeElement.textContent = newTranspose;
        }
    };
    const updateCurrentIndexRatioText = (newIndexRatio: any) => {
        const currentIndexRatioElement = document.querySelector('.current-indexRatio');
        if (currentIndexRatioElement) {
            currentIndexRatioElement.textContent = newIndexRatio;
        }
    };
    const updateCurrentProtectionText = (newProtection: any) => {
        const currentProtectionElement = document.querySelector('.current-Protection');
        if (currentProtectionElement) {
            currentProtectionElement.textContent = newProtection;
        }
    };

    const updateCurrentDuration = (newDuration: any) => {
        const currentDurationElement = document.querySelector('.current-duration');
        if (currentDurationElement) {
            currentDurationElement.textContent = newDuration;
        }
    };

    // const updateCurrentGuidanceScale = (newGuidanceScale: any) => {
    //     const currentGuidanceScaleElement = document.querySelector('.current-GuidanceScale');
    //     if (currentGuidanceScaleElement) {
    //         const formattedValue = parseFloat(newGuidanceScale).toFixed(3); // Format to two decimal places
    //         currentGuidanceScaleElement.textContent = formattedValue;
    //     }
    // };

    const updateCurrentWaveform = (newWaveform: any) => {
        const currentWaveformElement = document.querySelector('.current-Waveform');
        if (currentWaveformElement) {
            currentWaveformElement.textContent = newWaveform;
        }
    };
    const updateCurrentAudioLength = (newAudioLength: any) => {
        const currentAudioLengthElement = document.querySelector('.current-AudioLength');
        if (currentAudioLengthElement) {
            currentAudioLengthElement.textContent = newAudioLength;
        }
    };
    const updateCurrentStreamingInterval = (newStreamingInterval: any) => {
        const currentStreamingIntervalElement = document.querySelector('.current-AudioLength');
        if (currentStreamingIntervalElement) {
            const formattedValue = parseFloat(newStreamingInterval).toFixed(2); // Format to two decimal places
            currentStreamingIntervalElement.textContent = formattedValue;
        }
    };

    const updateCurrentSeed = (newSeed: any) => {
        const currentSeedElement = document.querySelector('.current-Seed');
        if (currentSeedElement) {
            currentSeedElement.textContent = newSeed;
        }
    };



    const calculateBackground = (value: any) => {
        const minRange = -12;
        const maxRange = 12;
        const percentage = ((value - minRange) / (maxRange - minRange)) * 100;
        const clampedPercentage = Math.min(100, Math.max(0, percentage));
        const background = `linear-gradient(to right, #73F89D 0%, #48A0F9 ${clampedPercentage}%, #fff ${clampedPercentage}%)`;
        return background;
    };
    const calculateBackgroundForAudio = (value: any) => {
        const minRange = 0;
        const maxRange = 30;
        const percentage = ((value - minRange) / (maxRange - minRange)) * 100;
        const clampedPercentage = Math.min(100, Math.max(0, percentage));
        const background = `linear-gradient(to right, #73F89D 0%, #48A0F9 ${clampedPercentage}%, #fff ${clampedPercentage}%)`;
        return background;
    };
    const calculateBackgroundForSeed = (value: any) => {
        const minRange = 0;
        const maxRange = 10;
        const percentage = ((value - minRange) / (maxRange - minRange)) * 100;
        const clampedPercentage = Math.min(100, Math.max(0, percentage));
        const background = `linear-gradient(to right, #73F89D 0%, #48A0F9 ${clampedPercentage}%, #fff ${clampedPercentage}%)`;
        return background;
    };
    const calculateBackgroundForWaveform = (value: any) => {
        const minRange = 0;
        const maxRange = 3;
        const percentage = ((value - minRange) / (maxRange - minRange)) * 100;
        const clampedPercentage = Math.min(100, Math.max(0, percentage));
        const background = `linear-gradient(to right, #73F89D 0%, #48A0F9 ${clampedPercentage}%, #fff ${clampedPercentage}%)`;
        return background;
    };
    const calculateBackgroundForStreaming = (value: number) => {
        const minRange = 0;
        const maxRange = 2.5;
        const roundedValue = parseFloat(value.toFixed(2));
        const percentage = ((roundedValue - minRange) / (maxRange - minRange)) * 100;
        const clampedPercentage = Math.min(100, Math.max(0, percentage));
        const background = `linear-gradient(to right, #73F89D 0%, #48A0F9 ${clampedPercentage}%, #fff ${clampedPercentage}%)`;
        return background;
    };
    const calculateBackgroundForGuidance = (value: number) => {
        const minRange = 0;
        const maxRange = 5;
        const roundedValue = parseFloat(value.toFixed(2));
        const percentage = ((roundedValue - minRange) / (maxRange - minRange)) * 100;
        const clampedPercentage = Math.min(100, Math.max(0, percentage));
        const background = `linear-gradient(to right, #73F89D 0%, #48A0F9 ${clampedPercentage}%, #fff ${clampedPercentage}%)`;
        return background;
    };

    const calculateBackgroundForIndexRatio = (value: any) => {
        const minRange = 0;
        const maxRange = 1;
        const roundedValue = parseFloat(value);
        const percentage = ((roundedValue - minRange) / (maxRange - minRange)) * 100;
        const clampedPercentage = Math.min(100, Math.max(0, percentage));
        const background = `linear-gradient(to right, #73F89D 0%, #48A0F9 ${clampedPercentage}%, #fff ${clampedPercentage}%)`;
        return background;
    };

    const calculateBackgroundForProtection = (value: any) => {
        const minRange = 0;
        const maxRange = .5;
        const roundedValue = parseFloat(value);
        const percentage = ((roundedValue - minRange) / (maxRange - minRange)) * 100;
        const clampedPercentage = Math.min(100, Math.max(0, percentage));
        const background = `linear-gradient(to right, #73F89D 0%, #48A0F9 ${clampedPercentage}%, #fff ${clampedPercentage}%)`;
        return background;
    };

    // const backgroundStyle = {
    //     background: calculateBackgroundForIndexRatio(streamingInterval),
    // };


    const renderInputBasedOnOption = () => {
        if (selectedOption === "text") {
            return (
                <div className="flex flex-col">
                    <input
                        type="text"
                        className="font-normal text-[14px] pt-14 px-5 outline-none text-[#737477] mt-[10px] mb-[12px] bg-transparent"
                        placeholder="Type your text....."
                        onChange={handleChange}
                    />

                </div>
            );

        } else if (selectedOption === "image") {
            return (
                <div className="mx-auto flex flex-col rounded-[8px] pt-8 items-center h-[204px] w-[250px]  z-10 bg-transparent">
                    {selectedImage ? (
                        <img src={URL.createObjectURL(selectedImage)} alt="Uploaded Image" className='overflow-hidden object-contain w-[215px] aspect-video rounded-lg' />
                    ) : (
                        <div className="mx-auto flex flex-col rounded-[8px] pt-6     items-center h-[204px] w-[250px]  z-10 bg-transparent">
                            <input type="file" accept={selectedOption === "image" ? "image/*" : ""} id="file-input2" onChange={handleImageFileChange} onClick={() => {
                                setSelectedAudio(null)
                                setSelectedMusic(null)
                            }} />
                            <label htmlFor="file-input2" className="cursor-pointer">
                                <Image src="/upload.svg" alt="Upload Icon" width={20} height={20} className="mx-auto" />
                                <p className="text-[#737477] text-[14px] pt-[5px]">
                                    {selectedOption === "image" ? "Upload Image" : ""}
                                </p>
                            </label>
                        </div>

                    )}
                </div>
            )
        }

        else if (selectedOption === "music") {
            return (
                <div>
                    {selectedMusic ? (
                        <div className="w-[92%] h-[120px] flex items-start justify-center bg-white rounded-lg mt-[26px] z-10">
                            <img src="waveAudio4.png" alt="Wave Length" className="w-full my-auto" />
                        </div>
                    ) : (
                        <div className="mx-auto flex flex-col rounded-[8px] pt-14 items-center h-[204px] w-[250px] z-10 bg-transparent">
                            <input type="file" accept="audio/*" id="file-input2" onChange={handleMusicFileChange} onClick={() => {
                                setSelectedImage(null)
                                setSelectedAudio(null)
                            }} />
                            <label htmlFor="file-input2" className="cursor-pointer">
                                <Image src="/upload.svg" alt="Upload Icon" width={20} height={20} className="mx-auto" />
                                <p className="text-[#737477] text-[14px] pt-[5px]">Upload Music</p>
                            </label>
                        </div>
                    )}
                </div>
            );
        }


        else if (selectedOption === "audio") {
            return (
                <div className="">
                    {selectedAudio ? (
                        <div className="w-[92%] h-[130px] flex items-start justify-center bg-white rounded-lg mt-[26px] z-10">
                            <img src="waveAudio4.png" alt="Wave Length" className="w-full my-auto" />
                        </div>
                    ) : (<div className="mx-auto flex flex-col rounded-[8px] pt-14 items-center h-[204px] w-[250px]  z-10 bg-transparent ">
                        <input type="file" accept={selectedOption === "audio" ? "audio/*" : ""} id="file-input2" onChange={handleAudioFileChange} onClick={() => {
                            setSelectedImage(null)
                            setSelectedMusic(null)
                        }} />
                        <label htmlFor="file-input2" className="cursor-pointer">
                            <Image src="/upload.svg" alt="Upload Icon" width={20} height={20} className="mx-auto" />
                            <p className="text-[#737477] text-[14px] pt-[5px]">
                                {selectedOption === "audio" ? "Upload Audio" : ""}
                            </p>
                        </label>
                    </div>)}

                </div>
            );
        }
    };

    return (
        <form className="bg-white w-[290px] h-[570px] rounded-[10px] boxShadow 2xl:max-container relative flex px-5 flex-col lg:mt-0 pt-[30px] lg:mb-[33px]">
            {/*<h4 className="px-5 pt-[15px] pb-[11px] text-[16px] font-bold">Options</h4>*/}
            <section className="bg-[#FAFAFA] w-[250px] h-[250px] border  rounded-[10px] z-10 boxShadow">
                <div>
                    <div className="px-[11px] pt-[5px] z-20">
                        <div className="mx-auto border flex space-x-0 px-2 rounded-[8px] justify-between items-center bg-[#FAFAFA] boxShadow z-50">
                            <p
                                className={`my-[8px] text-[12px] py-1 cursor-pointer rounded-[6px] font-medium px-3 ${selectedOption === "text" ? "bg-[#2B303A] text-white" : "text-black"
                                    }`}
                                onClick={() => handleOptionClick("text")}
                            >
                                Text
                            </p>
                            <p
                                className={`my-[8px] text-[12px] cursor-pointer rounded-[6px] font-medium px-2 py-1 ${selectedOption === "image" ? "bg-[#2B303A] text-white" : "text-black"
                                    }`}
                                onClick={() => handleOptionClick("image")}
                            >
                                Image
                            </p>
                            <p
                                className={`my-[8px] text-[12px] cursor-pointer rounded-[6px] font-medium px-2 py-1 ${selectedOption === "audio" ? "bg-[#2B303A] text-white" : "text-black"
                                    }`}
                                onClick={() => handleOptionClick("audio")}
                            >
                                Audio
                            </p>
                            <p
                                className={`text-[12px] my-[8px] cursor-pointer rounded-[6px] px-2 font-medium py-1 ${selectedOption === "music" ? "bg-[#2B303A] text-white" : ""
                                    }`}
                                onClick={() => handleOptionClick("music")}
                            >
                                Music
                            </p>
                        </div>
                    </div>
                    <div className="px-0 pt-0 absolute top-14 z-10">
                        {renderInputBasedOnOption()}
                    </div>

                </div>

            </section>
            <div className="flex justify-between items-center mt-4">
                <div className="text-zinc-900 text-base font-semibold font-['Inter']">Options</div>
                <div className="text-black text-[10px] font-semibold font-['Inter'] cursor-pointer">(?)</div>
            </div>

            {selectedOption === "audio" ? (
                <div className="mt-4">
                    <div className="range-container ">
                        <label htmlFor="transpose" className='font-[500] text-[12px] mb-2'>Transpose</label>
                        <div className='flex items-center space-x-2 -ml-[6px]'>
                            <div className="flex flex-col items-center justify-center -mt-1">
                                <p className="text-[12px] font-semibold">-12</p>
                                <button onClick={(e) => { e.preventDefault(); decreaseTranspose(); }} className="font-bold text-[20px] -mt-3">
                                    -
                                </button>

                            </div>

                            <div className='w-full relative'>

                                <input
                                    type="range"
                                    id='exposure'
                                    min="-12"
                                    max="12"
                                    value={transpose}
                                    onChange={handleTransposeChange}
                                    // onInput={updateImageStyles}
                                    style={{ background: calculateBackground(transpose) }}
                                />
                                <span className="current-exposure absolute text-[10px] font-[600] top-[-8px]" style={{ left: `calc(${((transpose / (12 - (-12))) * 100 + 50)}% - 10px)` }}>
                                    {transpose}
                                </span>
                            </div>

                            <div className="flex flex-col items-center justify-center -mt-1">
                                <p className="text-[12px] font-semibold">12</p>
                                <button onClick={(e) => { e.preventDefault(); increaseTranspose(); }} className="font-bold text-[20px] -mt-3">
                                    +
                                </button>

                            </div>
                        </div>
                        <div className="text-black text-[6px] font-semibold font-['Inter'] mx-auto">(Help +12: male to Female/ 0 No Gender Diff,-12: Female to male conv)</div>

                    </div>
                    <div className="range-container">
                        <label htmlFor="indexRatio" className='font-[500] text-[12px] mb-3'>Feature Index Ratio:</label>
                        <div className='flex items-center space-x-3'>

                            <div className="flex flex-col items-center justify-center -mt-1">
                                <p className="text-[12px] font-semibold">0</p>
                                <button onClick={(e) => { e.preventDefault(); decreaseIndexRatio(); }} className="font-bold text-[20px] -mt-3">
                                    -
                                </button>

                            </div>
                            <div className='w-full relative'>
                                <input
                                    type="range"
                                    id='IndexRatio'
                                    min="0"
                                    max="1"
                                    step="0.01"  // Change the step value to 0.01
                                    value={indexRatio}
                                    onChange={handleIndexRatioChange}
                                    style={{ background: calculateBackgroundForIndexRatio(indexRatio) }}
                                />
                                <span className="current-exposure absolute text-[10px] font-[600] top-[-7px]" style={{ left: `calc(${((indexRatio) * 100)}% - 10px)` }}>
                                    {indexRatio.toFixed(2)}  {/* Display indexRatio with two decimal places */}
                                </span>
                            </div>

                            <div className="flex flex-col items-center justify-center -mt-1">
                                <p className="text-[12px] font-semibold">1</p>
                                <button onClick={(e) => { e.preventDefault(); increaseIndexRatio(); }} className="font-bold text-[20px] -mt-3">
                                    +
                                </button>

                            </div>
                        </div>


                    </div>
                    <div className="range-container">
                        <label htmlFor="protection" className='font-[500] text-[12px] mb-2'>Protection Amount :</label>
                        <div className='flex items-center space-x-3'>

                            <div className="flex flex-col items-center justify-center -mt-1">
                                <p className="text-[12px] font-semibold">0</p>

                                <button onClick={(e) => { e.preventDefault(); decreaseProtection(); }} className="font-bold text-[20px] -mt-3">
                                    -
                                </button>

                            </div>
                            <div className='w-full relative'>

                                <input
                                    type="range"
                                    id='IndexRatio'
                                    min="0"
                                    max=".5"
                                    step="0.01"
                                    value={protection}
                                    onChange={handleProtectionChange}
                                    // onInput={updateImageStyles}
                                    style={{ background: calculateBackgroundForProtection(protection) }}
                                />
                                <span className=" absolute text-[10px] font-[600] top-[-8px]" style={{ left: `calc(${((protection / .5) * 100)}% - 10px)` }}>
                                    {protection}
                                </span>


                            </div>

                            <div className="flex flex-col items-center justify-center -mt-1">
                                <p className="text-[12px] font-semibold">.5</p>

                                <button onClick={(e) => { e.preventDefault(); increaseProtection(); }} className="font-bold text-[20px] -mt-3">
                                    +
                                </button>

                            </div>
                        </div>


                    </div>

                </div>) : ""}


            {selectedOption === "text" ? (
                <div className="mt-4">
                    <div className="range-container ">
                        <label htmlFor="transpose" className='font-[500] text-[12px] mb-2'>Transpose</label>
                        <div className='flex items-center space-x-2 -ml-[6px]'>
                            <div className="flex flex-col items-center justify-center -mt-1">
                                <p className="text-[12px] font-semibold">-12</p>
                                <button onClick={(e) => { e.preventDefault(); decreaseTranspose(); }} className="font-bold text-[20px] -mt-3">
                                    -
                                </button>

                            </div>

                            <div className='w-full relative'>

                                <input
                                    type="range"
                                    id='exposure'
                                    min="-12"
                                    max="12"
                                    value={transpose}
                                    onChange={handleTransposeChange}
                                    // onInput={updateImageStyles}
                                    style={{ background: calculateBackground(transpose) }}
                                />
                                <span className="current-exposure absolute text-[10px] font-[600] top-[-8px]" style={{ left: `calc(${((transpose / (12 - (-12))) * 100 + 50)}% - 10px)` }}>
                                    {transpose}
                                </span>
                            </div>

                            <div className="flex flex-col items-center justify-center -mt-1">
                                <p className="text-[12px] font-semibold">12</p>
                                <button onClick={(e) => { e.preventDefault(); increaseTranspose(); }} className="font-bold text-[20px] -mt-3">
                                    +
                                </button>

                            </div>
                        </div>
                        <div className="text-black text-[6px] font-semibold font-['Inter'] mx-auto">(Help +12: male to Female/ 0 No Gender Diff,-12: Female to male conv)</div>

                    </div>
                    <div className="range-container">
                        <label htmlFor="indexRatio" className='font-[500] text-[12px] mb-3'>Feature Index Ratio:</label>
                        <div className='flex items-center space-x-3'>

                            <div className="flex flex-col items-center justify-center -mt-1">
                                <p className="text-[12px] font-semibold">0</p>
                                <button onClick={(e) => { e.preventDefault(); decreaseIndexRatio(); }} className="font-bold text-[20px] -mt-3">
                                    -
                                </button>

                            </div>
                            <div className='w-full relative'>
                                <input
                                    type="range"
                                    id='IndexRatio'
                                    min="0"
                                    max="1"
                                    step="0.01"  // Change the step value to 0.01
                                    value={indexRatio}
                                    onChange={handleIndexRatioChange}
                                    style={{ background: calculateBackgroundForIndexRatio(indexRatio) }}
                                />
                                <span className="current-exposure absolute text-[10px] font-[600] top-[-7px]" style={{ left: `calc(${((indexRatio) * 100)}% - 10px)` }}>
                                    {indexRatio.toFixed(2)}  {/* Display indexRatio with two decimal places */}
                                </span>
                            </div>

                            <div className="flex flex-col items-center justify-center -mt-1">
                                <p className="text-[12px] font-semibold">1</p>
                                <button onClick={(e) => { e.preventDefault(); increaseIndexRatio(); }} className="font-bold text-[20px] -mt-3">
                                    +
                                </button>

                            </div>
                        </div>


                    </div>
                    <div className="range-container">
                        <label htmlFor="protection" className='font-[500] text-[12px] mb-2'>Protection Amount :</label>
                        <div className='flex items-center space-x-3'>

                            <div className="flex flex-col items-center justify-center -mt-1">
                                <p className="text-[12px] font-semibold">0</p>

                                <button onClick={(e) => { e.preventDefault(); decreaseProtection(); }} className="font-bold text-[20px] -mt-3">
                                    -
                                </button>

                            </div>
                            <div className='w-full relative'>

                                <input
                                    type="range"
                                    id='IndexRatio'
                                    min="0"
                                    max=".5"
                                    step="0.01"
                                    value={protection}
                                    onChange={handleProtectionChange}
                                    // onInput={updateImageStyles}
                                    style={{ background: calculateBackgroundForProtection(protection) }}
                                />
                                <span className=" absolute text-[10px] font-[600] top-[-8px]" style={{ left: `calc(${((protection / .5) * 100)}% - 10px)` }}>
                                    {protection}
                                </span>


                            </div>

                            <div className="flex flex-col items-center justify-center -mt-1">
                                <p className="text-[12px] font-semibold">.5</p>

                                <button onClick={(e) => { e.preventDefault(); increaseProtection(); }} className="font-bold text-[20px] -mt-3">
                                    +
                                </button>

                            </div>
                        </div>


                    </div>

                </div>) : ""}



            {selectedOption === "image" ? (
                <div className="mt-4">
                    <div className="range-container">
                        <label htmlFor="duration" className="font-[500] text-[12px] mb-2">
                            Duration:
                        </label>
                        <div className="flex items-center space-x-3">

                            <div className="flex flex-col items-center justify-center -mt-1">
                                <p className="text-[12px] font-semibold">0</p>
                                <button onClick={(e) => { e.preventDefault(); decreaseDuration(); }} className="font-bold text-[20px] -mt-3">
                                    -
                                </button>
                            </div>
                            <div className="w-full relative">
                                <input
                                    type="range"
                                    id="DurationRatio"
                                    min="0"
                                    max="10"
                                    value={duration}
                                    onChange={handleDurationChange}
                                    style={{ background: calculateBackgroundForSeed(duration) }}
                                />
                                <span className=" absolute text-[10px] font-[600] top-[-8px]" style={{ left: `calc(${((duration / 10) * 100)}% - 10px)` }}>
                                    {duration}
                                </span>

                            </div>

                            <div className="flex flex-col items-center justify-center -mt-1">
                                <p className="text-[12px] font-semibold">10</p>
                                <button onClick={(e) => { e.preventDefault(); increaseDuration(); }} className="font-bold text-[20px] -mt-3">
                                    +
                                </button>
                            </div>
                        </div>



                    </div>
                    <div className="range-container">
                        <label htmlFor="guidanceScale" className="font-[500] text-[12px] mb-2 mt-1">
                            Guidance scale:
                        </label>
                        <div className="flex items-center space-x-3">

                            <div className="flex flex-col items-center justify-center -mt-1">
                                <p className="text-[12px] font-semibold">0</p>
                                <button onClick={(e) => { e.preventDefault(); decreaseGuidanceScale(); }} className="font-bold text-[20px] -mt-3">
                                    -
                                </button>
                            </div>
                            <div className="w-full relative">
                                <input
                                    type="range"
                                    id="GuidanceScale"
                                    min="0"
                                    max="5"
                                    step="0.01"
                                    value={guidanceScale}
                                    onChange={handleGuidanceScaleChange}
                                    style={{ background: calculateBackgroundForGuidance(guidanceScale) }}
                                />
                                <span
                                    className="absolute text-[10px] font-[600] top-[-8px]"
                                    style={{ left: `calc(${((Math.round(guidanceScale * 100) / 5))}% - 10px)` }}
                                >
                                    {Math.round(guidanceScale * 100) / 100}  {/* Display guidanceScale with two decimal places */}
                                </span>
                            </div>


                            <div className="flex flex-col items-center justify-center -mt-1">
                                <p className="text-[12px] font-semibold">5</p>
                                <button onClick={(e) => { e.preventDefault(); increaseGuidanceScale(); }} className="font-bold text-[20px] -mt-3">
                                    +
                                </button>
                            </div>
                        </div>


                    </div>
                    <div className="range-container">
                        <label htmlFor="waveform" className="font-[500] text-[12px] mb-2 mt-2">
                            Number of waveforms to generate:
                        </label>
                        <div className="flex items-center space-x-3">

                            <div className="flex flex-col items-center justify-center -mt-1">
                                <p className="text-[12px] font-semibold">0</p>
                                <button onClick={(e) => { e.preventDefault(); decreaseWaveform(); }} className="font-bold text-[20px] -mt-3">
                                    -
                                </button>
                            </div>
                            <div className="w-full relative">
                                <input
                                    type="range"
                                    id="WaveformRatio"
                                    min="0"
                                    max="3"
                                    value={waveform}
                                    onChange={handleWaveformChange}
                                    style={{ background: calculateBackgroundForWaveform(waveform) }}
                                />
                                <span
                                    className="absolute text-[10px] font-[600] top-[-8px]"
                                    style={{ left: `calc(${((waveform / 3) * 100)}% - 10px)` }}
                                >
                                    {waveform}
                                </span>
                            </div>

                            <div className="flex flex-col items-center justify-center -mt-1">
                                <p className="text-[12px] font-semibold">3</p>
                                <button onClick={(e) => { e.preventDefault(); increaseWaveform(); }} className="font-bold text-[20px] -mt-3">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : ""}

            {selectedOption === "music" ? (
                <div className="mt-4">
                    <div className="range-container">
                        <label htmlFor="audioLength" className="font-[500] text-[12px] mb-2">
                            Audio length:
                        </label>
                        <div className="flex items-center space-x-3">

                            <div className="flex flex-col items-center justify-center -mt-1">
                                <p className="text-[12px] font-semibold">0</p>
                                <button onClick={(e) => { e.preventDefault(); decreaseAudioLength(); }} className="font-bold text-[20px] -mt-3">
                                    -
                                </button>
                            </div>
                            <div className="w-full relative">
                                <input
                                    type="range"
                                    id="AudioLengthRatio"
                                    min="0"
                                    max="30"
                                    value={audioLength}
                                    onChange={handleAudioLengthChange}
                                    style={{ background: calculateBackgroundForAudio(audioLength) }}
                                />
                                <span
                                    className="absolute text-[10px] font-[600] top-[-8px]"
                                    style={{ left: `calc(${((audioLength / 30) * 100)}% - 10px)` }}
                                >
                                    {audioLength}
                                </span>
                            </div>

                            <div className="flex flex-col items-center justify-center -mt-1">
                                <p className="text-[12px] font-semibold">30</p>
                                <button onClick={(e) => { e.preventDefault(); increaseAudioLength(); }} className="font-bold text-[20px] -mt-3">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="range-container">
                        <label htmlFor="streamingInterval" className="font-[500] text-[12px] mb-2 mt-1">
                            Streaming interval:
                        </label>
                        <div className="flex items-center space-x-3">

                            <div className="flex flex-col items-center justify-center -mt-1">
                                <p className="text-[12px] font-semibold">0</p>
                                <button onClick={(e) => { e.preventDefault(); decreaseStreamingInterval(); }} className="font-bold text-[20px] -mt-3">
                                    -
                                </button>
                            </div>
                            <div className="w-full relative">
                                <input
                                    type="range"
                                    id="StreamingIntervalRatio"
                                    min="0"
                                    max="2.5"
                                    step="0.1"
                                    value={streamingInterval}
                                    onChange={handleStreamingIntervalChange}
                                    style={{ background: calculateBackgroundForStreaming(streamingInterval) }}
                                />
                                <span
                                    className="absolute text-[10px] font-[600] top-[-8px]"
                                    style={{ left: `calc(${((Math.round(streamingInterval * 10) / 10 / 2.5) * 100)}% - 10px)` }}
                                >
                                    {Math.round(streamingInterval * 10) / 10}  {/* Display streamingInterval with one decimal place */}
                                </span>
                            </div>


                            <div className="flex flex-col items-center justify-center -mt-1">
                                <p className="text-[12px] font-semibold">2.5</p>
                                <button onClick={(e) => { e.preventDefault(); increaseStreamingInterval(); }} className="font-bold text-[20px] -mt-3">
                                    +
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="range-container">
                        <label htmlFor="seed" className="font-[500] text-[12px] mb-2 mt-1">
                            Seed:
                        </label>
                        <div className="flex items-center space-x-3">

                            <div className="flex flex-col items-center justify-center -mt-1">
                                <p className="text-[12px] font-semibold">0</p>
                                <button onClick={(e) => { e.preventDefault(); decreaseSeed(); }} className="font-bold text-[20px]">
                                    -
                                </button>
                            </div>
                            <div className="w-full relative">
                                <input
                                    type="range"
                                    id="SeedRatio"
                                    min="0"
                                    max="10"
                                    value={seed}
                                    onChange={handleSeedChange}
                                    style={{ background: calculateBackgroundForSeed(seed) }}
                                />
                                <span
                                    className="absolute text-[10px] font-[600] top-[-8px]"
                                    style={{ left: `calc(${((seed / 10) * 100)}% - 10px)` }}
                                >
                                    {seed}
                                </span>
                            </div>

                            <div className="flex flex-col items-center justify-center -mt-1">
                                <p className="text-[12px] font-semibold">10</p>
                                <button onClick={(e) => { e.preventDefault(); increaseSeed(); }} className="font-bold text-[20px] -mt-3">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : ""}




            <div className="px-0 pt-0 mt-6 mb-3 z-10">
                <button
                    type="button"
                    className="buttonBg w-full h-[50px] rounded-[8px] text-[14px] text-white font-bold"
                >
                    Generate
                </button>
            </div>
        </form>
    );
};

export default AudioLeft;
