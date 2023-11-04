"use client"
import React from 'react'
import AudioLeft from '@/components/AudioCreationsComponent/AudioLeft'
import Guide from '@/components/Guide'
import Timeline from '@/components/Timeline'
import Camp from '@/components/Camp';
import Features from '@/components/Features';
import AudioRight from '@/components/AudioCreationsComponent/AudioRight'


interface SelectedFile {
    selectedFile: any
  }

const page = ({selectedFile} : any) => {
    return (
            <div className='padding-container2'>
              <section className='max-container flexOne gap-x-10 pt-10  md:gap-10 lg:pt-10  '>
              <AudioLeft />
              <Guide selectedFile={selectedFile}  />
              <AudioRight />
            </section>
            <Timeline />
            </div>
    )
}

export default page