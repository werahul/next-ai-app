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
        <h4 className="px-5 pt-[15px] pb-[11px] text-[16px] font-bold">Generate knowledge</h4>
        <section className="bg-[#fcfcfc] w-[250px] h-[175px] border mx-5 rounded-[10px] z-10 flex justify-center items-center boxShadow">
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
          <div className="w-[100%] h-[139.77px] bg-stone-300 rounded-xl cursor-pointer p-2">
            <img src="/cross.svg" alt="croxx" className="ml-auto w-[18px] hover:bg-gray-20 rounded-full p-1 transition-all" />
          </div>
          <div className="w-[100%] h-[139.77px] bg-stone-300 rounded-xl cursor-pointer p-2">
            <img src="/cross.svg" alt="croxx" className="ml-auto w-[18px] hover:bg-gray-20 rounded-full p-1 transition-all" />
          </div>
          <div className="w-[100%] h-[139.77px] bg-stone-300 rounded-xl cursor-pointer p-2">
            <img src="/cross.svg" alt="croxx" className="ml-auto w-[18px] hover:bg-gray-20 rounded-full p-1 transition-all" />
          </div>
          <div className="w-[100%] h-[139.77px] bg-stone-300 rounded-xl cursor-pointer p-2">
            <img src="/cross.svg" alt="croxx" className="ml-auto w-[18px] hover:bg-gray-20 rounded-full p-1 transition-all" />
          </div>
          <div className="w-[100%] h-[139.77px] bg-stone-300 rounded-xl cursor-pointer p-2">
            <img src="/cross.svg" alt="croxx" className="ml-auto w-[18px] hover:bg-gray-20 rounded-full p-1 transition-all" />
          </div>
          <div className="w-[100%] h-[139.77px] bg-stone-300 rounded-xl cursor-pointer p-2">
            <img src="/cross.svg" alt="croxx" className="ml-auto w-[18px] hover:bg-gray-20 rounded-full p-1 transition-all" />
          </div>

        </div>
      </form>



      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white w-[569px] h-[490px] popup-content">
            <div className="p-5 space-y-3">
              <div className="flex space-x-2">
                <label htmlFor="voiceName" className="whitespace-nowrap">Name:</label>
                <input type="text" id="voiceName" className="w-full mb-3 outline-none px-2 border rounded-[5px]" />
              </div>

              <div className="text-black text-lg font-normal font-['Inter']">Upload Pdf, Doc, Csv, Folder.</div>
              <div className="flex items-center mb-3">

              </div>

              <div className="flex">
                <input
                  type="file"
                  id="uploadFile"
                  accept=".pdf, .doc, .docx, .csv, .xls, .xlsx, .folder/*"
                  className="w-full mb-3 border p-2 rounded-[5px]" />
              </div>

              <div className="flex space-x-3">
                <label htmlFor="youtubeLink" className="whitespace-nowrap">Youtube Link :</label>
                <input
                  type="url"
                  id="urlLink"
                  className="w-full mb-3 outline-none px-2 border rounded-[5px]"
                  placeholder="Upload link"
                  pattern="https?://.+"
                />
              </div>
              <div className="flex space-x-3">
                <label htmlFor="urlLink" className="whitespace-nowrap">URL Link :</label>
                <input
                  type="url"
                  id="urlLink"
                  className="w-full mb-3 outline-none px-2 border rounded-[5px]"
                  placeholder="Upload link"
                  pattern="https?://.+"
                />
              </div>

              <div><span className="text-black text-[10px] font-bold font-['Inter']">Note:</span><span className="text-black text-[10px] font-normal font-['Inter']"> For more than one link, separate with a ;</span></div>

              <div className="flex justify-start items-center">
                <label htmlFor="uploadFile" className="whitespace-nowrap  pb-5 mr-3">Upload Image :</label>
                <input
                  type="file"
                  id="uploadFile"
                  accept=".jpeg, .jpg, .png, .gif, .bmp, .svg, image/jpeg, image/jpg, image/png, image/gif, image/bmp, image/svg+xml"
                  className="w-full mb-3 border p-2 rounded-[5px]" />
              </div>

              <div>


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

export default AddNew;
