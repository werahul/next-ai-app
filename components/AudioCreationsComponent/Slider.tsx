import React from 'react';

interface SliderProps {
    type: string;
    value: number;
    min: number;
    max: number;
    decrease: () => void;
    increase: () => void;
    handleChange: (type: string, value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ type, value, min, max, decrease, increase, handleChange }) => {
    return (
        <div className="range-container">
            <label htmlFor={type} className='font-[500] text-[12px] mb-3'>{type} :</label>
            <div className='flex items-center space-x-3'>
                <button onClick={decrease} className='font-bold text-[20px]'>-</button>
                <div className='w-full relative'>
                    <input
                        type="range"
                        id={type}
                        min={min}
                        max={max}
                        value={value}
                        onChange={(e) => handleChange(type, parseInt(e.target.value, 10))}
                        // style and other attributes as needed
                    />
                    <span className="absolute text-[12px] font-[600] top-[-15px]" style={{ left: `calc(${value}% - 10px)` }}>
                        {value}
                    </span>
                </div>
                <button onClick={increase} className='font-bold text-[20px]'>+</button>
            </div>
        </div>
    );
}

export default Slider;
