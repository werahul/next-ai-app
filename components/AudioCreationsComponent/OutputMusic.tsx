import React from 'react';
import Image from 'next/image';

const OutputMusic = ({ video = null, image = null, music = null, audio = null, text = null }: any) => {
  return (
    <div>
      <div>
        {video ? (
          <div>
            {video.type.startsWith('image/') ? (
              <Image src={URL.createObjectURL(video)} alt="Uploaded Image" width={1000} height={200} />
            ) : (
              <video controls id='videoID' width="1000" height="1000">
                <source src={URL.createObjectURL(video)} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ) : image ? (
          <div className='imageID'>
            <Image src={URL.createObjectURL(image)} alt="Uploaded Image" width={1000} height={200} />
          </div>
        ) : music ? (
          // Conditionally render a music player if music is provided
          <div>
            <audio controls >
              <source src={URL.createObjectURL(music)} type="audio/mp3" />
              Your browser does not support the audio tag.
            </audio>
          </div>
        ) : audio ? (
          // Conditionally render a music player if music is provided
          <div>
            <audio controls >
              <source src={URL.createObjectURL(audio)} type="audio/mp3" />
              Your browser does not support the audio tag.
            </audio>
          </div>
        ) : text ? (
          // Conditionally render a music player if music is provided
          <div>
            <div >
              {text}
            </div>
          </div>
        ) : (
          <div className='w-[530px] xxl:w-[630px] 2xl:w-[700px] dropShadow rounded-[8px] h-[571px] text-center font-bold text-[43px]'>
            <h1>Output</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default OutputMusic;
