import React from 'react'
import InputChat from './InputChat'
import Message from './Message'
import iconAi from '../assets/AI-Profile.png'
import iconUser from '../assets/User-Profile.png'
import { useState } from 'react'

const ChatSection = () => {
    const [textMessage, setTextMessage] = useState("Hi, Im AI, can I help you ?")

  return (
    <>
    <div className='relative bg-slate-400 rounded-t mx-auto max-w-[800px] min-h-[400px] p-2 '>
        <div className='min-h-[300px]'>
        <Message imgProfile={iconAi} message={textMessage}/>
        <Message imgProfile={iconUser} message="Hi, Thank You"/>
        </div>
    </div>
    <InputChat/>
    </>
  )
}

export default ChatSection