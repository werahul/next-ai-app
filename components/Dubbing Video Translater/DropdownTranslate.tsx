"use client"

import React from 'react';

interface Option {
    value: string;
    label: string;
}
const dropdownOptions: Option[][] = [
    [
        // { value: 'Audio', label: 'Audio' },
        // { value: 'Pre-process', label: 'Pre-process' },
        // { value: 'Generate', label: 'Generate' },
    ],

];
interface DropdownProps {
    options: Option[];
}

const DropdownGroup: React.FC<DropdownProps> = ({ options }) => (
    <select className='dubbingSelect border w-full min-w-[400px] bg-white bg-opacity-5 rounded-lg backdrop-blur-[20px] px-[18px] h-[50px] text-[12px] font-[500] outline-none'>
        {options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
        ))}
    </select>
);

const DropdownTranslate: React.FC = () => (
    <div className="mt-[32px] ">
        <div className="text-black text-base font-semibold font-['Inter']">Select a Output  Language</div>
        <div className='mt-[10px] pb-[22px] space-x-5  relative'>
            {dropdownOptions.map((options, index) => (
                <DropdownGroup key={index} options={options} />
            ))}
        </div>
    </div>
);

export default DropdownTranslate;