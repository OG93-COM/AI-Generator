import React from 'react'
import axios from 'axios'
import { useRef } from 'react'
import { useState } from 'react'

const InputChat = () => {
    const searchRef = useRef()
    const [btnDisable, setBtnDisable] = useState(false)

    const  generateAnswer = async (e)=> {
        e.preventDefault()
        setBtnDisable(true)
        const response = await axios({
            url:'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDrc_1Q_vKXkLWtx0nRcuk04rsajuwb7Iw',
            method:"post",
            data:{
                contents:[
                    { parts:[{text: searchRef.current.value}]}
            ]}
        })
        console.log(response.data.candidates[0].content.parts[0].text)
        setTimeout(() => {
            setBtnDisable(false);
            searchRef.current.value ="";
          }, "1000");
    }
  return (
        <form className='flex justify-center items-center max-w-[800px] mx-auto' onSubmit={generateAnswer}>
        <input
        ref={searchRef}
        type='text'
        placeholder='Ask me something...'
        className='relative w-full rounded-bl h-14 text-slate-700 p-3'/>
        <button
        type='submit'
        className='bg-slate-500 rounded-br h-14 px-6 hover:bg-slate-600 duration-300'
        disabled={btnDisable}>
        Search</button>
        </form>
    
  )
}

export default InputChat