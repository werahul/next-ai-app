"use client"

import Image from "next/image";
import { useState } from "react";
import Guide from './Guide'; // Import the Guide component

const Camp = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showVideoUpload, setShowVideoUpload] = useState(true);
  const [showImageUpload, setShowImageUpload] = useState(false);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Handle the upload action for the selected file
    // You can implement the logic to handle the file here
    console.log(selectedFile);
  };

  return (
    <section className="bg-white w-[290px] h-[569px] rounded-[10px] boxShadow 2xl:max-container relative flex flex-col lg:mt-0 lg:mb-[33px]">
      <form>
        <div className="px-5">
          <div className="flex items-center space-x-4">
            <h2
              className={`font-medium text-[12px] mt-[12px] cursor-pointer mb-[12px] ${showVideoUpload ? 'active' : ''}`}
              onClick={() => {
                setShowVideoUpload(true);
                setShowImageUpload(false);
              }}
            >
              Video
            </h2>
            <h2
              className={`font-medium text-[12px] mt-[12px] mb-[12px] cursor-pointer ${showImageUpload ? 'active' : ''}`}
              onClick={() => {
                setShowImageUpload(true);
                setShowVideoUpload(false);
              }}
            >
              Image
            </h2>
          </div>
          {showVideoUpload && (
            <div className="mx-auto border flex flex-col rounded-[8px] justify-center items-center h-[149px] w-[250px] boxBg boxShadow">
              <input type="file" accept="video/*" id="file-input" />
              <label htmlFor="file-input" className="cursor-pointer" onChange={handleFileChange}>
                <Image src="/upload.svg" alt="Upload Icon" width={20} height={20} className="mx-auto" />
                <p className="text-[#737477] text-[14px] pt-[5px]">Upload Video</p>
              </label>
            </div>
          )}
        </div>

        {showImageUpload && (
          <div className="px-5">
            <div className="mx-auto border flex flex-col rounded-[8px] justify-center items-center h-[149px] w-[250px] boxBg boxShadow">
              <input type="file" accept="image/*" id="file-input2" />
              <label htmlFor="file-input2" className="cursor-pointer" onChange={handleFileChange}>
                <Image src="/upload.svg" alt="Upload Icon" width={20} height={20} className="mx-auto" />
                <p className="text-[#737477] text-[14px] pt-[5px]">Upload Image</p>
              </label>
            </div>
          </div>
        )}

<div className="px-5 pt-[45px]">
            <div className="mx-auto border flex flex-col rounded-[8px] justify-center items-center h-[149px] w-[250px] boxBg boxShadow">
              <input type="file" accept="audio/*" id="file-input" />
              <label htmlFor="file-input3" className="cursor-pointer" onChange={handleFileChange}>
                <Image src="/upload.svg" alt="Upload Icon" width={20} height={20} className="mx-auto" />
                <p className="text-[#737477] text-[14px] pt-[5px]">Upload Audio</p>
              </label>
            </div>
          </div>

        <div className="px-5 pt-[45px]">
          <button type="button" className="buttonBg w-full py-5 rounded-[8px] text-[14px] text-white font-bold" onClick={handleUpload}>
            Generate
          </button>
        </div>
      </form>
      
      <style jsx>{`
        .active {
          color: white;
          font-weight: bold;
          font-size: 12px;
          padding: 5px 10px;
          border-radius: 4px;
          background-color: rgba(30, 30, 30, 1);
        }
      `}</style>
    </section>
  );
};

export default Camp;
