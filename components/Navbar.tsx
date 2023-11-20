"use client"
import { useState } from 'react';

import Image from 'next/image';
import Button from './Button';
import Dropdown from './Dropdown';
import Link from 'next/link';

const Navbar = () => {
 
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);

  const toggleDropdown1 = () => {
    setDropdown1Open(!dropdown1Open);
  };

  const toggleDropdown2 = () => {
    setDropdown2Open(!dropdown2Open);
  };

  return (
    <nav className="navShadow z-10 rounded-b-[10px] bg-white">
      <div className='flexBetween max-container padding-container relative z-50 pt-5'>
      <div className="flex items-center">
        <Image src="/logo.svg" alt="logo" width={52} height={50} />
      </div>
     <div className='flex items-center space-x-16'>
     <div className="hidden space-x-8 lg:flex h-full">
        {/* Dropdown 1 */}
        <div className="relative group">
          <div className="regular-16 text-[#15181C] flexCenter cursor-pointer  pb-1.5 ">
            Our Products <span >
              <Image src="DropSelector.svg" alt='dropdown icon' width={14} height={14} className='ml-3' />
            </span>
          </div>
          
            <div className="absolute z-50 bg-white border border-gray-200 ml-10 rounded-[20px] mt-2 py-2 w-48 left-0 hidden group-hover:block">
              {/* Dropdown content */}
              <div className='flex flex-col justify-between items-center z-50 '>
              <a href="#" className='border-b text-center w-full pb-2'>Products</a>
              <a href="#" className=' w-full pt-2  text-center'>Generate</a>
              {/* <a href="#" className=' text-center pt-2'>Item 3</a> */}
              </div>
              
            </div>
          
        </div>

        {/* Dropdown 2 */}
        <div className="relative group" >
        <div className="regular-16 text-[#15181C] flexCenter cursor-pointer  pb-1.5 ">
            Pricing Plans <span>
              <Image src="DropSelector.svg" alt='dropdown icon' width={14} height={14} className='ml-3' />
            </span>
          </div>
          <div className="absolute z-50 bg-white border border-gray-200 rounded-[20px] mt-2 py-2 w-48 left-0 hidden group-hover:block">
              {/* Dropdown content */}
              <div className='flex flex-col justify-between items-center z-50 '>
              <a href="#" className=' text-center w-full'>Plans</a>
              {/* <a href="#" className='border-b w-full py-2  text-center'>Item 2</a> */}
              {/* <a href="#" className=' text-center pt-2'>Item 3</a> */}
              </div>
              
            </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center relative">
        <input
          type="text"
          placeholder="Search any tool here..."
          className="py-2 px-[20px] border outline-none w-[432px] border-gray-200 h-[50px] rounded-[50px]"
        />
        <Image src="/search-icon.svg" alt="Search" width={38} height={38} className='bg-[#2b303a] p-[7px]  rounded-[50px] absolute right-[7px]'/>
      </div>

      <div className="">
        <div className='flex' >
          <Image src="/userImage.svg" alt='userIcon' width={50} height={50} className='outline-none border-2 border-[imageBg] rounded-[50px]' />
          <div className='ml-3 justify-center my-auto flex flex-col items-start'>
            <p className='font-[500] text-[12px] text-[#111827]'>James B.</p>
            <Link href="/" className='underline text-[#737477] text-[10px]'>View profile</Link>
          </div>
        </div>
      </div>
      <Image src="/menu.svg" alt="menu" width={32} height={32} className="inline-block cursor-pointer lg:hidden" />
     </div>
      </div>
      <Dropdown />
      
    </nav>
  );
};

export default Navbar;