"use client"


import React, { useState } from "react";
import Image from "next/image";

const Options = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedOption, setSelectedOption] = useState("text"); // Initialize with "text"

  const handleFileChange = (event :any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
  };

  const renderInputBasedOnOption = () => {
    if (selectedOption === "text") {
      return (
        <input
          type="text"
          className="font-normal text-[14px] py-2 outline-none text-[#737477] mt-[10px] mb-[12px]"
          placeholder="Type your text..... "
        />
      );
    } else if (selectedOption === "image" || selectedOption === "video") {
      return (
        <div className="mx-auto border flex flex-col rounded-[8px] justify-center items-center h-[149px] w-[200px] boxBg boxShadow">
          <input type="file" accept={selectedOption === "image" ? "image/*" : "video/*"} id="file-input2" onChange={handleFileChange} />
          <label htmlFor="file-input2" className="cursor-pointer">
            <Image src="/upload.svg" alt="Upload Icon" width={20} height={20} className="mx-auto" />
            <p className="text-[#737477] text-[14px] pt-[5px]">
              {selectedOption === "image" ? "Upload Image" : "Upload Video"}
            </p>
          </label>
        </div>
      );
    }
  };

  return (
    <form className="bg-white w-[290px] h-[790px] rounded-[10px] boxShadow 2xl:max-container relative flex flex-col lg:mt-0 lg:mb-[33px]">
      <h4 className="px-5 pt-[15px] pb-[11px] text-[16px] font-bold">Options</h4>
      <section className="bg-white w-[250px] h-[365px] border mx-5 rounded-[10px] z-10 boxShadow">
        <div>
          <div className="px-[11px] pt-[5px]">
            <div className="mx-auto border flex space-x-6 rounded-[8px] justify-center items-center bg-white boxShadow">
              <p
                className={`my-[8px] text-[12px] py-1 cursor-pointer rounded-[6px]  px-3 ${
                  selectedOption === "text" ? "bg-[#2B303A] text-white" : "text-black"
                }`}
                onClick={() => handleOptionClick("text")}
              >
                Text
              </p>
              <p
                className={`my-[8px] text-[12px] cursor-pointer rounded-[6px] px-2 py-1 ${
                  selectedOption === "image" ? "bg-[#2B303A] text-white" : "text-black"
                }`}
                onClick={() => handleOptionClick("image")}
              >
                Image
              </p>
              <p
                className={`text-[12px] my-[8px] cursor-pointer rounded-[6px] px-2 py-1 ${
                  selectedOption === "video" ? "bg-[#2B303A] text-white" : ""
                }`}
                onClick={() => handleOptionClick("video")}
              >
                Video
              </p>
            </div>
          </div>
          <div className="px-5 pt-[34px]">{renderInputBasedOnOption()}</div>
        </div>
      </section>
      <div className="px-5 pt-[45px]">
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

export default Options;
