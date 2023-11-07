"use client"
import React, { useState } from 'react'
import AudioLeft from '@/components/AudioCreationsComponent/AudioLeft'
import Timeline from '@/components/Timeline'
import AudioRight from '@/components/AudioCreationsComponent/AudioRight'
import OutputMusic from '@/components/AudioCreationsComponent/OutputMusic'


interface SelectedFile {
  selectedFile: any
}

const page = ({ selectedFile }: any) => {
  const [imageData, setImageData] = useState(null);
  const [videoData, setVideoData] = useState(null);
  const [musicData, setMusicData] = useState(null);
  const [audioData, setAudioData] = useState(null);
  const [textData, setTextData] = useState(null);


  const handleImageUpload = (image: any) => {
    setImageData(image);
    setVideoData(null);
  }
  const handleVideoUpload = (video: any) => {
    setVideoData(video);
  };
  const handleMusicUpload = (music: any) => {
    setMusicData(music);
  };
  const handleAudioUpload = (audio: any) => {
    setAudioData(audio);
  };
  const handleTextUpload = (text: any) => {
    setTextData(text);
  };
  return (
    <div className='padding-container2'>
      <section className='max-container flexOne gap-x-10 pt-10  md:gap-10 lg:pt-10  '>
        <AudioLeft onVideoUpload={handleVideoUpload} onImageUpload={handleImageUpload} onMusicUpload={handleMusicUpload} onAudioUpload={handleAudioUpload} onTextUpload={handleTextUpload} />
        
        <div className='w-[530px] xxl:w-[630px] 2xl:w-[700px] dropShadow rounded-[8px] h-[571px] flex flex-col items-center justify-center '>
          {videoData ? (<OutputMusic video={videoData} />) : imageData ? (<OutputMusic image={imageData} />) : musicData ? (<OutputMusic music={musicData} />) : audioData ? (<OutputMusic audio={audioData} />)  : textData ? (<OutputMusic text={textData} />)  : (
            <div className='w-[530px] xxl:w-[630px] 2xl:w-[700px] font-bold text-[43px] dropShadow rounded-[8px] h-[571px] flex flex-col items-center justify-center '>Output</div>
          )}
        </div>
        <AudioRight />
      </section>
      <Timeline />
    </div>
  )
}

export default page