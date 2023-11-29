"use client"



import Image from 'next/image'

import React, { useState, useRef } from 'react'
import TimelineBar from './TimelineBar'
// import CustomAudio from './CustomAudio';

function initializeAudioBars(audioElement: HTMLAudioElement) {
  const audioBars = document.getElementById("audio-bars");

  if (!audioBars) {
    return;
  }

  const numberOfBars = 100;

  for (let i = 0; i < numberOfBars; i++) {
    const audioBar = document.createElement("div");
    audioBar.className = "audio-bar";
    audioBars.appendChild(audioBar);
  }

  audioElement.addEventListener("timeupdate", updateAudioBars);
}



function updateAudioBars() {
  const audioElement = document.getElementById("audioID") as HTMLAudioElement;
  const audioBars = document.getElementById("audio-bars");

  if (!audioElement || !audioBars) {
    return;
  }

  const currentTime = audioElement.currentTime;
  const duration = audioElement.duration;
  const percentage = (currentTime / duration) * 100;

  audioBars.style.width = percentage + "%";
}






const Timeline = ({ videoDuration, audio, music }: any) => {
  // console.log('Audio prop:', audio);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0 });
  const [isDoubleClicked, setIsDoubleClicked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (audioRef.current?.paused) {
      audioRef.current.play();
    } else {
      audioRef.current?.pause();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMouseDoubleClick = () => {
    setIsDoubleClicked(true);
  };

  const handleMouseDown = (e: any) => {
    if (isDoubleClicked) {
      setOffset({
        x: e.clientX - e.target.getBoundingClientRect().left,
      });
      setIsDragging(true);
      e.target.style.cursor = 'grabbing';
    }
  };

  const handleMouseMove = (e: any) => {
    if (isDragging) {
      const parentRect = e.target.parentElement.getBoundingClientRect();
      const parentWidth = parentRect.width;
      const timelineWidth = e.target.clientWidth;

      let x = e.clientX - parentRect.left - offset.x;
      x = Math.min(Math.max(x, 0), parentWidth - timelineWidth);

      e.target.style.left = `${x}px`;

      // Use the x value to update the video playback or perform other actions.
    }
  };

  const handleMouseUp = (e: any) => {
    setIsDragging(false);
    e.target.style.cursor = 'grab';
  };



  const generateTimeIntervals = (duration: any) => {
    const intervalInSeconds = 20;
    const intervals = [];
    for (let i = 0; i <= duration; i += intervalInSeconds) {
      const hours = Math.floor(i / 3600);
      const minutes = Math.floor((i % 3600) / 60);
      const seconds = i % 60;
      intervals.push(
        `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
      );
    }
    return intervals;
  };

  const staticTimeIntervals = [
    '00:00:00:00',
    '00:00:20:00',
    '00:00:40:00',
    '00:01:00:00',
    '00:01:20:00',
    '00:01:40:00',
  ];

  const dynamicTimeIntervals = generateTimeIntervals(videoDuration);
  const timeIntervals = staticTimeIntervals.concat(dynamicTimeIntervals);




  return (
    <div className='bg-white max-container w-full h-[263px]  rounded-[10px] dropShadow mb-[15px]'>
      <div className='h-[65px] flex'>
        <div className='flex padding-container3 items-start py-5 2xl:px-5 space-x-[27.5px]'>
          <div className='cursor-pointer'>
            <Image src="/undo.svg" alt='undo' width={18} height={18} />
          </div>
          <div className='cursor-pointer'>
            <Image src="/redo.svg" alt='undo' width={18} height={18} />
          </div>
          <div className='flex flex-col cursor-pointer items-center'>
            <Image src="/split.svg" alt='undo' width={26} height={18} />
            <p className=' text-[12px] mt-2'>Split</p>
          </div>
          <div className='flex flex-col cursor-pointer items-center'>
            <Image src="/trim.svg" alt='undo' width={26} height={18} />
            <p className=' text-[12px] mt-2'>Trim</p>
          </div>
          <div className='flex flex-col  cursor-pointer items-center'>
            <Image src="/Speed.svg" alt='undo' width={23} height={18} />
            <p className=' text-[12px] mt-1'>Speed</p>
          </div>
          <div className='flex flex-col cursor-pointer items-center'>
            <Image src="/effects.svg" alt='undo' width={21} height={18} />
            <p className=' text-[12px] mt-1'>Effect</p>
          </div>
          <div className='flex flex-col cursor-pointer items-center'>
            <Image src="/crop.svg" alt='undo' width={19} height={18} />
            <p className=' text-[12px] mt-2'>Crop</p>
          </div>
          <div className='flex flex-col cursor-pointer items-center'>
            <Image src="/transform.svg" alt='undo' width={18} height={18} />
            <p className=' text-[12px] mt-2'>Transform</p>
          </div>
          <div className='flex flex-col cursor-pointer items-center'>
            <Image src="/rotate.svg" alt='undo' width={20} height={18} />
            <p className=' text-[12px] mt-2'>Rotate</p>
          </div>
          <div className='flex flex-col cursor-pointer items-center'>
            <Image src="/flip.svg" alt='undo' width={28} height={28} />
            <p className=' text-[12px] mt-2'>Flip</p>
          </div>
          <div className='flex flex-col cursor-pointer items-center'>
            <Image src="/Duplicate.svg" alt='undo' width={19} height={18} />
            <p className=' text-[12px] mt-2'>Duplicate</p>
          </div>
        </div>
        <div className='flex py-5 space-x-10  padding-container items-center'>
          <div className='flex  space-x-4'>
            <Image src="/previous.svg" alt='undo' width={20} height={18} className='cursor-pointer' />
            {/* <Image src="/playButton.svg" alt='undo' width={20} height={18} className='cursor-pointer'/> */}
            {/* <Image src="/pause.svg" alt='undo' width={20} height={18} className='cursor-pointer'/> */}
            <Image
              src={isPlaying ? "/pause.svg" : "/playButton.svg"}
              alt={isPlaying ? 'pause' : 'play'}
              width={20}
              height={18}
              className='cursor-pointer'
              onClick={togglePlayPause}
            />
            <Image src="/next.svg" alt='undo' width={20} height={18} className='cursor-pointer' />
          </div>
          <div className='mt-3'>
            <Image src="/line.svg" alt='undo' width={141} height={10} />
            <div className='flex justify-between'>
              <p className='text-[10px]'>00:30</p>
              <p className='text-[10px]'>02:00</p>

            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='h-[44px] flex space-x-4 2xl:px-3 items-end'>
        <div className='flex space-x-3 pl-3 xxl:padding-container3 h-full pb-2 items-end'>
          <Image src="/addNew.svg" alt='undo' width={20} height={10} />
          <Image src="/delete.svg" alt='undo' width={20} height={10} />
          <Image src="/volume.svg" alt='undo' width={20} height={10} />
        </div>
        <div className={`relative ${isDoubleClicked ? 'draggable-active' : ''}`}
          onDoubleClick={handleMouseDoubleClick}
          onClick={() => setIsDoubleClicked(false)}>
          <Image src="/timeLine.svg" alt='undo' width={13} height={1}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            className={`absolute top-[-15px] left-[-10px] cursor-pointer draggable ${isDoubleClicked ? 'draggable' : ''}`}

          />
          <div className='flex text-[11px] pr-2 space-x-32'>
            {timeIntervals.map((interval, index) => (
              <p key={index}>{interval}</p>
            ))}
          </div>
          <TimelineBar numberOfLines={98} />
        </div>
      </div>
      <hr />
      <div className='h-[75px] flex space-x-3 pl-3 xxl:padding-container3 2xl:px-3 pb-2 my-auto'>
        <Image src="/music.svg" alt='undo' width={25} height={10} className='cursor-pointer w-[15px] xxl:w-[25px]' />
        <Image src="/lock.svg" alt='undo' width={12} height={10} className='cursor-pointer w-[12px] ' />
        <Image src="/eye.svg" alt='undo' width={20} height={10} className='cursor-pointer w-[18px] xxl:w-[20px]' />
      </div>
      <hr />
      <div>
        <div className='flex space-x-3  pl-2 xxl:padding-container3 2xl:px-3 pb-2 my-auto h-[80px]'>
          <Image src="/audio.svg" alt='undo' width={23} height={10} className='cursor-pointer w-[18px] xxl:w-[23px]' />
          <Image src="/lock.svg" alt='undo' width={12} height={10} className='cursor-pointer w-[12px]' />
          <Image src="/eye.svg" alt='undo' width={20} height={10} className='cursor-pointer xxl:w-[20px]' />
          {audio && (
            // <CustomAudio src={URL.createObjectURL(audio)} style={{ width: '100%', marginLeft:"30px", marginTop: "10px",  display: 'flex', alignItems: 'center' }} />
            <div className="my-1 w-[360px] xxl:pl-10 2xl:pl-3">
              <audio ref={audioRef} controls hidden>
                <source src={URL.createObjectURL(audio)} type="audio/mp3" />
                Your browser does not support the audio tag.
              </audio>
              <img src="waveAudio3.png" alt="AudioWave" className='w-[360px] border-x-4 border-y cursor-ew-resize rounded-lg border-black mt-1 h-[60px] ' />
            </div>
          )}
          {/* {music && (
            // <CustomAudio src={URL.createObjectURL(audio)} style={{ width: '100%', marginLeft:"30px", marginTop: "10px",  display: 'flex', alignItems: 'center' }} />
            // <div className="border-y border-x-4 rounded-lg border-black m-1 cursor-ew-resize">
            //   <audio ref={audioRef} controls hidden>
            //     <source src={URL.createObjectURL(audio)} type="audio/mp3" />
            //     Your browser does not support the audio tag.
            //   </audio>
            //   <img src="waveAudio3.png" alt="AudioWave" className='w-[300px] h-[60px] ' />
            // </div>
          )} */}


        </div>
      </div>
    </div>
  )
}

export default Timeline