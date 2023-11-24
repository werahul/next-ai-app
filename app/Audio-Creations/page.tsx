"use client"
import React, { useState } from 'react'
import AudioLeft from '@/components/AudioCreationsComponent/AudioLeft'
import Timeline from '@/components/Timeline'
import AudioRight from '@/components/AudioCreationsComponent/AudioRight'
import OutputMusic from '@/components/AudioCreationsComponent/OutputMusic'
import AiNewsReader from '@/components/AudioCreationsComponent/AiNewsReader'
import { text } from 'stream/consumers'



interface SelectedFile {
  selectedFile: any
}

const page = ({ selectedFile, inputValue, onInputChange }: any) => {
  const [imageData, setImageData] = useState(null);
  const [videoData, setVideoData] = useState(null);
  const [musicData, setMusicData] = useState(null);
  const [audioData, setAudioData] = useState(null);
  const [textData, setTextData] = useState("");


 
  const handleImageUpload = (image: any) => {
    setImageData(image);
    setVideoData(null);
    setMusicData(null);
    setAudioData(null);
;
  }
  const handleVideoUpload = (video: any) => {
    setVideoData(video);
    setImageData(null);
    setMusicData(null);
    setAudioData(null);
   
  };
  const handleMusicUpload = (music: any) => {
    setMusicData(music);
    setImageData(null);
    setVideoData(null);
    setAudioData(null);
 
  };
  const handleAudioUpload = (audio: any) => {
    setAudioData(audio);
    setImageData(null);
    setVideoData(null);
    setMusicData(null);
  };
  const handleTextUpload = (text: any) => {
    setTextData(text);
    setImageData(null);
    setVideoData(null);
    setMusicData(null);
    setAudioData(null);

  };

  // Handle input change
  const handleTextChange = (text: any) => {
    setTextData(text);
    setVideoData(null);
    setMusicData(null);
    setAudioData(null);
    setImageData(null);
  };


  return (
    <div className='padding-container2'>
      <section className='max-container flexOne gap-x-10 pt-10  md:gap-10 lg:pt-10  '>
         <AudioLeft
          onImageUpload={handleImageUpload}
          onMusicUpload={handleMusicUpload}
          onAudioUpload={handleAudioUpload}
          onTextChange={handleTextChange}
        /> 

        <div className='w-[530px] xxl:w-[630px] 2xl:w-[700px] dropShadow bg-white rounded-[8px] h-[571px] flex flex-col items-center justify-center overflow-hidden '>
          {videoData ? (
            <OutputMusic video={videoData} />
          ) : imageData ? (
            <OutputMusic image={imageData} />
          ) : musicData ? (
            <OutputMusic music={musicData} />
          ) : audioData ? (
            <OutputMusic audio={audioData} />
          ) : textData ? (
            <OutputMusic text={textData} />
          ) : (
            <div className='w-[530px] xxl:w-[630px] 2xl:w-[700px] font-bold text-[43px] boxBg dropShadow rounded-[8px] h-[571px] flex flex-col items-center justify-center overflow-hidden '>Output</div>
          )}

        </div>
        <AudioRight  audio={audioData} music={musicData}/>
      </section>
      <Timeline audio={audioData} music={musicData}/>
    </div>
  )
}

export default page