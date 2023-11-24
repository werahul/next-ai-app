"use client"

import React from 'react';

interface Option {
    value: string;
    label: string;
}
const dropdownOptions: Option[][] = [
    [
        { value: 'Ocra', label: 'Ocra' },
        { value: 'Liama2', label: 'Liama2' },
        { value: 'Nous Heumes', label: 'Nous Heumes' },
        { value: 'Stable Beluga', label: 'Stable Beluga' },
        { value: 'xwinlm', label: 'xwinlm' },
        { value: 'Wizardlm', label: 'Wizardlm' },
        { value: 'Mistral', label: 'Mistral' }

    ],
];
interface DropdownProps {
    options: Option[];
}

const DropdownGroup: React.FC<DropdownProps> = ({ options }) => (
    <select className='popUpSelect border w-[343px] bg-transparent shadow-none noShodow rounded-[5px] px-[18px] h-[30px] text-[12px] font-[500] outline-none -mt-2' >
        {options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
        ))}
    </select>
);

const PopUpDropdown: React.FC = () => (
    <div className="">
        <div className='w-full relative'>
            {dropdownOptions.map((options, index) => (
                <DropdownGroup key={index} options={options} />
            ))}
        </div>
    </div>
);

export default PopUpDropdown;