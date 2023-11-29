"use client"
import React, { useState } from 'react'
import DropdownDubbings from './DropdownDubbings'
import DropdownTranslate from './DropdownTranslate'
import Image from 'next/image'





const TopInputAndOutput = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const handleVideoFileChange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedVideo(file);
        }
    };
    return (
        <div className="">
            <div className='grid grid-cols-2 gap-x-16 px-14 py-8'>
                <div className="w-[100%] h-[400px] bg-white dropShadow rounded-lg backdrop-blur-[20px] flex items-center justify-center text-zinc-900 text-[43px] font-semibold font-['Inter']" >
                    {selectedVideo ? (
                        <video controls width={215} height={204} className='w-full h-full'>
                            <source src={URL.createObjectURL(selectedVideo)} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <div className="mx-auto flex flex-col rounded-[8px] pt-6 items-center h-[204px] w-[250px] z-10 bg-transparent">
                            <input type="file" accept="video/*" id="file-input2" onChange={handleVideoFileChange} onClick={() => {

                            }} />
                            <label htmlFor="file-input2" className="cursor-pointer">

                                <p className="text-zinc-900 text-[43px] font-semibold font-['Inter'] pt-[30px]">
                                    input
                                </p>
                            </label>
                        </div>)
                    }
                </div>

                <div className="w-[100%] h-[400px] bg-white dropShadow rounded-lg backdrop-blur-[20px] flex items-center justify-center text-zinc-900 text-[43px] font-semibold font-['Inter']" >
                    <div className="w-[100%] h-[400px] bg-white dropShadow rounded-lg backdrop-blur-[20px] flex items-center justify-center text-zinc-900 text-[43px] font-semibold font-['Inter']" >
                        {selectedVideo ? (
                            <video controls width={215} height={204} className='w-full h-full'>
                                <source src={URL.createObjectURL(selectedVideo)} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <div className="mx-auto flex flex-col rounded-[8px] pt-6 items-center h-[204px] w-[250px] z-10 bg-transparent">

                                <p className="text-zinc-900 text-[43px] font-semibold font-['Inter'] pt-[30px]">
                                    Output
                                </p>
                            </div>)
                        }
                    </div>
                </div>
                <DropdownDubbings />
            </div>
            <div className='flex justify-between gap-x-8 px-[200px] py-0 mb-4'>
                <div className="flex flex-col justify-center items-center">
                    <Image src="/DubbDown.svg" alt='Transcribe' width={110} height={110} className='cursor-pointer' />
                    <p className="text-black text-2xl font-semibold font-['Inter'] tracking-[2.52px] mt-8">Transcribe</p>
                </div>
                <div className="flex flex-col justify-center items-center -mt-20">
                    <Image src="/DubbTop.svg" alt='Dub' width={110} height={110} className='cursor-pointer' />
                    <p className="text-black text-2xl font-semibold font-['Inter'] tracking-[2.52px] mt-8">Dub</p>
                </div>
            </div>



            <div className="grid grid-cols-3 gap-x-8 px-14 py-6 justify-items-stretch">
                <textarea

                    name="transcribe"
                    id="transcribe"
                    className="w-full h-[227px] bg-white bg-opacity-80 rounded-lg backdrop-blur-[20px] outline-none dropShadow py-[20px] px-[20px] resize-none"
                    placeholder="Transcribe Text"
                />
                <div className="-mt-[66px] flex flex-col items-center justify-center">
                    <DropdownTranslate />
                    <Image src="/DubbRight.svg" alt='Translate' width={100} height={80} className='cursor-pointer' />
                    <div className="text-black text-2xl font-semibold font-['Inter'] mt-4 tracking-[2.52px]">Translate</div>
                </div>
                <textarea

                    name="translate"
                    id="transcribe"
                    className="w-full h-[227px] bg-white bg-opacity-80 rounded-lg backdrop-blur-[20px] outline-none dropShadow py-[20px] px-[20px] resize-none"
                    placeholder="Translate Text"
                />


            </div>
        </div >
    )
}

export default TopInputAndOutput