"use client"
import React from 'react';

const OutputMusic = ({ video, image, music, audio, text }: any) => {
  console.log('Received text:', text);
  if (video) {
    if (video.type.startsWith('image/')) {
      return (
        <img src={URL.createObjectURL(video)} alt="Uploaded Image" width={1000} height={200} />
      );
    } else {
      return (
        <video controls width="1000" height="1000">
          <source src={URL.createObjectURL(video)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
  } else if (image) {
    return (
      // <img src={URL.createObjectURL(image)} alt="Uploaded Image" width={1000} height={200} className='overflow-hidden object-contain' />
      <div className=" w-[120%] overflow-hidden">
        <img src="waveAudio2.png" alt="AudioWave" className='w-full' />
      </div>
    );
  } else if (music || audio) {
    return (
      <div className=" w-[120%] overflow-hidden">
        {/* <audio controls>
          <source src={URL.createObjectURL(music || audio)} type="audio/mp3" />
          Your browser does not support the audio tag.
        </audio> */}
        <img src="waveAudio2.png" alt="AudioWave" className='w-full' />
      </div>
    );
    // } else if (text) {
    //   return <div className='text-[43px] font-bold'>Output</div>
  } else {
    return (
      <div className='w-[530px] xxl:w-[630px] 2xl:w-[700px] dropShadow rounded-[8px] h-[571px] text-center font-bold text-[43px]'>
        <h1>Output</h1>
      </div>
    );
  }
};

export default OutputMusic;
