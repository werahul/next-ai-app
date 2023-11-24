"use client"


import React, { useState, useEffect } from "react";
import Image from "next/image";

const AddNew = () => {
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
      <form className="bg-white w-[290px] h-[790px] rounded-[10px] boxShadow 2xl:max-container relative flex flex-col lg:mt-0 lg:mb-[33px]">
        <h4 className="px-5 pt-[15px] pb-[11px] text-[16px] font-bold">Train your voice</h4>
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
        <div className="text-zinc-900 text-base font-semibold font-['Inter'] pl-5 py-2">Uploaded Files</div>
        <div className="grid grid-cols-2 px-5 gap-x-3 gap-y-3">
          <div className="w-[100%] h-[139.77px] bg-stone-300 rounded-xl cursor-pointer" />
          <div className="w-[100%] h-[139.77px] bg-stone-300 rounded-xl cursor-pointer" />
          <div className="w-[100%] h-[139.77px] bg-stone-300 rounded-xl cursor-pointer" />
          <div className="w-[100%] h-[139.77px] bg-stone-300 rounded-xl cursor-pointer" />
          <div className="w-[100%] h-[139.77px] bg-stone-300 rounded-xl cursor-pointer" />
          <div className="w-[100%] h-[139.77px] bg-stone-300 rounded-xl cursor-pointer" />
        </div>
      </form>



      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white w-[569px] h-[574px] rounded-[10px] popup-content">
            <div className="p-5 space-y-6">
              <div className="flex space-x-3">
                <label htmlFor="voiceName" className="whitespace-nowrap">Voice Name:</label>
                <input type="text" id="voiceName" className="w-full mb-3 outline-none px-2 border rounded-[5px]" />
              </div>
              <div className="flex items-center mb-3">
                <label htmlFor="customCheckboxPopup" className="cursor-pointer">Public Figure:</label>
                <input
                  type="checkbox"
                  id="customCheckboxPopup"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)

                  }
                  className="appearance-none border rounded w-8 h-6 ml-2 cursor-pointer"
                />

              </div>

              <div className="flex">
                <label htmlFor="uploadFile">Upload a Wav file or a zip of wav files:</label>
                <input type="file" id="uploadFile" accept=".wav, .zip" className="w-full mb-3 border p-2 rounded-[5px]" />
              </div>

              <div>
                <h4>Two Settings For Training Which are :</h4>
                <div className="range-container2">
                  <label htmlFor="tint" className='font-[500] text-[12px] mt-3 mb-2'>Total Epoch</label>
                  <div className='flex items-center space-x-3'>
                    <button onClick={decreaseEpoch} className='font-bold flex flex-col items-center text-[20px]'>
                      <span className='text-[10px]'>0</span>
                      <span className='-mt-3'>-</span>
                    </button>

                    <div className='w-full relative'>
                      <input
                        type="range"
                        id='epoch'
                        min="0"
                        max="1000"
                        value={epoch}
                        className="w-full"
                        onChange={handleEpochChange}
                        //   onInput={updateImageStyles}
                        style={{ background: calculateBackground(epoch) }}
                      />
                      <span className="current-epoch absolute text-[10px] font-[600] top-[-10px]" style={{ left: `calc(${(epoch - 10) / 10}% - 1px )` }}>
                        {epoch}
                      </span>


                    </div>
                    <button onClick={increaseEpoch} className='font-bold text-[20px] flex flex-col items-center'><span className='text-[10px]'>1000</span>
                      <span className='-mt-3'>+</span></button>
                  </div>
                </div>
                <div className="range-container2">
                  <label htmlFor="tint" className='font-[500] text-[12px] mt-3 mb-2'>Batch Size</label>
                  <div className='flex items-center space-x-3'>
                    <button onClick={decreaseBatch} className='font-bold flex flex-col items-center text-[20px]'>
                      <span className='text-[10px]'>0</span>
                      <span className='-mt-3'>-</span>
                    </button>

                    <div className='w-full relative'>
                      <input
                        type="range"
                        id='batch'
                        min="0"
                        max="40"
                        value={batch}
                        onChange={handleBatchChange}
                        style={{ background: calculateBackground2(batch) }}
                        className="w-full"
                      />
                      <span className="current-batch absolute text-[10px] font-[600] top-[-10px]" style={{ left: `calc(${(batch * 2.45)}% - 0px )` }}>
                        {batch}
                      </span>


                    </div>
                    <button onClick={increaseBatch} className='font-bold text-[20px] flex flex-col items-center'><span className='text-[10px]'>40</span>
                      <span className='-mt-3'>+</span></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex p-5 items-center space-x-3 ">
              <label htmlFor="uploadFile" className="whitespace-nowrap">Upload Image:</label>
              <input type="file" id="uploadFile" accept="image/*" className="w-full mb-3 border p-2 rounded-[5px]" />
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

export default AddNew;
