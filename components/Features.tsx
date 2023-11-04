// components/AdjustmentControls.js

"use client";

import React, { useState } from 'react';




const AdjustmentControls = () => {
  const [brightness, setBrightness] = useState(100);
  const [exposure, setExposure] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [highlights, setHighlights] = useState(100);

  const [saturation, setSaturation] = useState(100);
  const [tint, setTint] = useState(100);





  const updateImageStyles = () => {
    const filterStyle = `brightness(${brightness}%) brightness(${exposure}%)  contrast(${contrast}%) contrast(${highlights}%)  saturate(${saturation}%) hue-rotate(${tint}deg) `;

    const image = document.getElementById("imageID");

    if (image) {
      image.style.filter = filterStyle;
    }

  };



  const handleBrightnessChange = (e: any) => {
    const value = e.target.value;
    setBrightness(value);
    const newBrightness = parseInt(e.target.value, 10);
    updateCurrentBrightnessText(newBrightness);
    updateImageStyles();
  };

  const handleExposureChange = (e: any) => {
    const value = e.target.value;
    setExposure(value);
    const newExposure = parseInt(e.target.value, 10);
    updateCurrentExposureText(newExposure);
    updateImageStyles();
  };

  const handleContrastChange = (e: any) => {
    const value = e.target.value;
    setContrast(value);
    const newContrast = parseInt(e.target.value, 10);
    updateCurrentContrastText(newContrast);
    updateImageStyles();
  };

  const handleHighlightsChange = (e: any) => {
    const value = e.target.value;
    setHighlights(value);
    const newHighlights = parseInt(e.target.value, 10);
    updateCurrentHighlightsText(newHighlights);
    updateImageStyles();
  };

  const handleSaturationChange = (e: any) => {
    const value = e.target.value;
    setSaturation(value);
    const newSaturation = parseInt(e.target.value, 10);
    updateCurrentSaturationText(newSaturation);
    updateImageStyles();
  };

  const handleTintChange = (e: any) => {
    const value = e.target.value;
    setTint(value);
    const newTint = parseInt(e.target.value, 10);
    updateCurrentTintText(newTint);
    updateImageStyles();
  };




  const calculateBackground = (value: any) => {

    const percentage = (value / 200) * 100;

    const background = `linear-gradient(to right, #73F89D 0%, #48A0F9 ${percentage}%, #fff ${percentage}%)`;

    return background;
  }



  // --------------------------Brightness---------------------------


  const decreaseBrightness = () => {
    setBrightness((prevBrightness) => Math.max(0, prevBrightness - 1));
  };

  const increaseBrightness = () => {
    setBrightness((prevBrightness) => Math.min(200, prevBrightness + 1));
  };


  const updateCurrentBrightnessText = (newBrightness: any) => {
    const currentBrightnessElement = document.querySelector('.current-brightness');
    if (currentBrightnessElement) {
      currentBrightnessElement.textContent = newBrightness;
    }
  };



  // -------------------------------------Exposure-----------------------------------



  const decreaseExposure = () => {
    setExposure((prevExposure) => Math.max(0, prevExposure - 1));
  };

  const increaseExposure = () => {
    setExposure((prevExposure) => Math.min(200, prevExposure + 1));
  };


  const updateCurrentExposureText = (newExposure: any) => {
    const currentExposureElement = document.querySelector('.current-exposure');
    if (currentExposureElement) {
      currentExposureElement.textContent = newExposure;
    }
  };


  //  ---------------------------------Contrast-----------------------------------

  const decreaseContrast = () => {
    setContrast((prevContrast) => Math.max(0, prevContrast - 1));
  };

  const increaseContrast = () => {
    setContrast((prevContrast) => Math.min(200, prevContrast + 1));
  };


  const updateCurrentContrastText = (newContrast: any) => {
    const currentContrastElement = document.querySelector('.current-contrast');
    if (currentContrastElement) {
      currentContrastElement.textContent = newContrast;
    }
  };
  //  ---------------------------------Highlights-----------------------------------

  const decreaseHighlights = () => {
    setHighlights((prevHighlights) => Math.max(0, prevHighlights - 1));
  };

  const increaseHighlights = () => {
    setHighlights((prevHighlights) => Math.min(200, prevHighlights + 1));
  };


  const updateCurrentHighlightsText = (newHighlights: any) => {
    const currentHighlightsElement = document.querySelector('.current-highlights');
    if (currentHighlightsElement) {
      currentHighlightsElement.textContent = newHighlights;
    }
  };
  //  ---------------------------------Saturation-----------------------------------

  const decreaseSaturation = () => {
    setTint((prevSaturation) => Math.max(0, prevSaturation - 1));
  };

  const increaseSaturation = () => {
    setTint((prevSaturation) => Math.min(200, prevSaturation + 1));
  };


  const updateCurrentSaturationText = (newSaturation: any) => {
    const currentSaturationElement = document.querySelector('.current-saturation');
    if (currentSaturationElement) {
      currentSaturationElement.textContent = newSaturation;
    }
  };
  //  ---------------------------------Tint-----------------------------------

  const decreaseTint = () => {
    setTint((prevTint) => Math.max(0, prevTint - 1));
  };

  const increaseTint = () => {
    setTint((prevTint) => Math.min(200, prevTint + 1));
  };


  const updateCurrentTintText = (newTint: any) => {
    const currentTintElement = document.querySelector('.current-tint');
    if (currentTintElement) {
      currentTintElement.textContent = newTint;
    }
  };




  return (
    <div className="bg-white w-[290px] h-[569px] rounded-[10px] boxShadow 2xl:max-container relative flex flex-col p-5 space-y-4  lg:mt-0 lg:mb-[33px]">
      <div className='flex font-[600] justify-between px-0'>
        <h3>Effect Options </h3>
        <p>(?)</p>
      </div>
      <div className="range-container">
        <label htmlFor="brightness" className='font-[500] text-[12px] mb-3'>Brightness</label>
        <div className='flex items-center space-x-3'>
          <button onClick={decreaseBrightness} className='font-bold  text-[20px]'>-</button>

          <div className='relative w-full'>
            <input
              type="range"
              min="0"
              max="200"
              value={brightness}
              onChange={handleBrightnessChange}
              onInput={updateImageStyles}
              className='w-full'
              style={{ background: calculateBackground(brightness) }}
            />
            <span className="current-brightness absolute text-[12px] font-[600] top-[-20px]" style={{ left: `calc(${brightness / 2}% - 10px )` }}>
              {brightness}
            </span>

          </div>
          <button onClick={increaseBrightness} className='font-bold text-[20px]'>+</button>
        </div>
      </div>

      <div className="range-container">
        <label htmlFor="exposure" className='font-[500] text-[12px] mb-3'>Exposure</label>
        <div className='flex items-center space-x-3'>
          <button onClick={decreaseExposure} className='font-bold text-[20px]'>-</button>

          <div className='w-full relative'>

            <input
              type="range"
              id='exposure'
              min="0"
              max="200"
              value={exposure}
              onChange={handleExposureChange}
              onInput={updateImageStyles}
              style={{ background: calculateBackground(exposure) }}
            />
            <span className="current-exposure absolute text-[12px] font-[600] top-[-15px]" style={{ left: `calc(${exposure / 2}% - 10px )` }}>
              {exposure}
            </span>

          </div>
          <button onClick={increaseExposure} className='font-bold text-[20px]'>+</button>
        </div>
      </div>

      <div className="range-container">
        <label htmlFor="contrast" className='font-[500] text-[12px] mb-3'>Contrast</label>
        <div className='flex items-center space-x-3'>
          <button onClick={decreaseContrast} className='font-bold text-[20px]'>-</button>

          <div className='w-full relative'>
            <input
              type="range"
              id='contrast'
              min="0"
              max="200"
              value={contrast}
              onChange={handleContrastChange}
              onInput={updateImageStyles}
              style={{ background: calculateBackground(contrast) }}
            />
            <span className="current-contrast absolute text-[12px] font-[600] top-[-15px]" style={{ left: `calc(${contrast / 2}% - 10px )` }}>
              {contrast}
            </span>

          </div>
          <button onClick={increaseContrast} className='font-bold text-[20px]'>+</button>
        </div>
      </div>

      <div className="range-container">
        <label htmlFor="highlights" className='font-[500] text-[12px] mb-3'>Highlights</label>
        <div className='flex items-center space-x-3'>
          <button onClick={decreaseHighlights} className='font-bold text-[20px]'>-</button>

          <div className='w-full relative'>
            <input
              type="range"
              id='highlights'
              min="0"
              max="200"
              value={highlights}
              onChange={handleHighlightsChange}
              onInput={updateImageStyles}
              style={{ background: calculateBackground(highlights) }}
            />
            <span className="current-highlights absolute text-[12px] font-[600] top-[-15px]" style={{ left: `calc(${highlights / 2}% - 10px )` }}>
              {highlights}
            </span>

          </div>
          <button onClick={increaseHighlights} className='font-bold text-[20px]'>+</button>
        </div>
      </div>


      <div className="range-container">
        <label htmlFor="saturation" className='font-[500] text-[12px] mb-3'>Saturation</label>
        <div className='flex items-center space-x-3'>
          <button onClick={decreaseSaturation} className='font-bold text-[20px]'>-</button>

          <div className='w-full relative'>
            <input
              type="range"
              id='saturation'
              min="0"
              max="200"
              value={saturation}
              onChange={handleSaturationChange}
              onInput={updateImageStyles}
              style={{ background: calculateBackground(saturation) }}
            />
            <span className="current-highlights absolute text-[12px] font-[600] top-[-15px]" style={{ left: `calc(${saturation / 2}% - 10px )` }}>
              {saturation}
            </span>

          </div>
          <button onClick={increaseSaturation} className='font-bold text-[20px]'>+</button>
        </div>
      </div>

      <div className="range-container">
        <label htmlFor="tint" className='font-[500] text-[12px] mb-3'>Tint</label>
        <div className='flex items-center space-x-3'>
          <button onClick={decreaseTint} className='font-bold text-[20px]'>-</button>

          <div className='w-full relative'>
            <input
              type="range"
              id='tint'
              min="0"
              max="200"
              value={tint}
              onChange={handleTintChange}
              onInput={updateImageStyles}
              style={{ background: calculateBackground(tint) }}
            />
            <span className="current-highlights absolute text-[12px] font-[600] top-[-15px]" style={{ left: `calc(${tint / 2}% - 10px )` }}>
              {tint}
            </span>

          </div>
          <button onClick={increaseTint} className='font-bold text-[20px]'>+</button>
        </div>
      </div>
    </div>
  );
};

export default AdjustmentControls;
