import React from 'react';
import Image from 'next/image';

const GridCard = ({ card } : any) => (
  <div className={`w-[98px] h-[146.01px] bg-blue-400 rounded-[10px] flex-col justify-center items-end`}>
    <div className={`w-[98px] h-[124.73px] bg-emerald-300 rounded-[10px] shadow flex-col justify-center items-end`}>
      <div className="w-[98px] h-[102.95px] bg-white rounded-[10px] flex-col py-1 justify-between items-stretch relative">
        <div className="flex justify-between px-1">
          <Image src={card.imageSrc} alt="Image" width={10} height={10} className="cursor-pointer" />
          <Image src="/threeDots.svg" alt="Three Dots" width={6} height={6} className="cursor-pointer" />
        </div>
        <div className="absolute bottom-1 left-[25%]">
          <Image src={card.ratingSrc} alt="Rating Stars" width={50} height={50} />
        </div>
      </div>
      <p className="text-white text-center mt-1 text-[10px] font-semibold font-['Inter']">{card.label}</p>
    </div>
    <p className="text-white text-center mt-1 text-[10px] font-semibold font-['Inter']">{card.personName}</p>
  </div>
);

export default GridCard;
