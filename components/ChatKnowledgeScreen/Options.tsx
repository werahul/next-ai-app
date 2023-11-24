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

 
  return (
    <form className="bg-white w-[290px] h-[790px] rounded-[10px] boxShadow 2xl:max-container relative flex flex-col lg:mt-0 lg:mb-[33px]">
      <h4 className="px-5 pt-[15px] pb-[11px] text-[16px] font-bold">Generate Knownadge</h4>
      <section className="bg-white w-[250px] h-[365px] border mx-5 rounded-[10px] z-10 boxShadow">
       
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
