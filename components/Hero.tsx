import Image from 'next/image'
import React from 'react'
import Button from './Button'
import Guide from './Guide';
import Camp from './Camp';
import Features from './Features';
import Timeline from './Timeline';


interface SelectedFile {
  selectedFile: any
}

const Hero = ({selectedFile} : SelectedFile) => {
  return (
    <div className='padding-container2'>
      <section className='max-container flexOne gap-x-10 pt-10  md:gap-10 lg:pt-10  '>
      <Camp />
      <Guide selectedFile={selectedFile}  />
      <Features />
    </section>
    <Timeline />
    </div>
  )
}

export default Hero