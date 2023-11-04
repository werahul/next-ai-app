"use client"

import React from 'react';

interface Option {
  value: string;
  label: string;
}

const dropdownOptions: Option[][] = [
  [
    { value: 'Audio', label: 'Audio' },
    { value: 'Pre-process', label: 'Pre-process' },
    { value: 'Generate', label: 'Generate' },
  ],
  [
    { value: 'LipSync', label: 'Lipsync' },
  ],
  [
    { value: 'Video', label: 'Video' },
    { value: 'Texttovideogenerateedit', label: 'Text to video generate/Edit' },
  ],
  [
    { value: 'NewsReader', label: 'News Reader' },
    { value: 'AIReader', label: 'AI Reader' },
    { value: 'Marketplace', label: 'Marketplace' },
  ],
  [
    { value: 'Dub', label: 'Dub' },
    { value: 'Videolanguagetranslation', label: 'Video language translation' },
  ],
];

interface DropdownProps {
  options: Option[];
}

const DropdownGroup: React.FC<DropdownProps> = ({ options }) => (
  <select className='border w-[210px] px-[18px] h-[50px] text-[12px] font-[500] outline-none rounded-[10px]'>
    {options.map((option, index) => (
      <option key={index} value={option.value}>{option.label}</option>
    ))}
  </select>
);

const Dropdown: React.FC = () => (
  <div className='flexBetween mt-[28px] pb-[22px] space-x-5 max-container padding-container relative'>
    {dropdownOptions.map((options, index) => (
      <DropdownGroup key={index} options={options} />
    ))}
  </div>
);

export default Dropdown;
