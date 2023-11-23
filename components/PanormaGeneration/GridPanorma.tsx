import React from 'react';
import Image from 'next/image';

const GridPanorma = ({ card } : any) => (
  <div className={`w-[110px] h-[146.01px] bg-stone-300  rounded-[10px] flex-col justify-center items-end`}>
    <p className="text-white text-center mt-1 text-[10px] font-semibold font-['Inter']">{card.personName}</p>
  </div>
);

export default GridPanorma;
