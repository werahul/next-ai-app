import LetfChatProfile from '@/components/ChatScreen/LetfChatProfile'
import MainChatScreen from '@/components/ChatScreen/MainChatScreen'
import MainProfileInRight from '@/components/ChatScreen/MainProfileInRight'
import React from 'react'

const page = () => {
  return (
    <div className=' flex justify-start items-start gap-x-8 pt-10  md:gap-10 lg:pt-10  '>
        {/* <LetfChatProfile/> */}
        <MainChatScreen/>
        
    </div>
  )
}

export default page