"use client"

import React from 'react';
import Timeline from './Timeline';
import Image from 'next/image';

const Guide = ({ selectedFile }: any) => {
  return (
    <div>
      <div className='w-[530px] xxl:w-[630px] 2xl:w-[700px] dropShadow rounded-[8px] h-[571px] flex flex-col items-center justify-center text-center font-bold text-[43px]'>
        {selectedFile ? (
          <div>
            {selectedFile.type.startsWith('image/') ? (
              <Image src={URL.createObjectURL(selectedFile)} alt="Uploaded Image" width={200} height={200} />
            ) : (
              <video controls width="200" height="200">
                <source src={URL.createObjectURL(selectedFile)} type={selectedFile.type} />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ) : (
          <div>
            <h1>Output</h1>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Guide;
