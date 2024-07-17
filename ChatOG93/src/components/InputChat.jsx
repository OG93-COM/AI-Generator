import React from 'react'
import axios from 'axios'
import { useRef } from 'react'
import { useState } from 'react'
import Message from './Message'
import iconAi from '../assets/AI-Profile.png'
import iconUser from '../assets/User-Profile.png'

const InputChat = () => {
    const searchRef = useRef()
    const [btnDisable, setBtnDisable] = useState(false)
    const [answer, setAnswer] = useState([])
    const [question, setQuestion] = useState([])

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
        var message = response.data.candidates[0].content.parts[0].text
        setAnswer([...answer,message])
        console.log(answer)
        setQuestion([...question,searchRef.current.value])
        setTimeout(() => {
            setBtnDisable(false);
            searchRef.current.value ="";
          }, "1000");
    }
  return (
    <>
    <div className='relative bg-slate-400 rounded-t mx-auto md:max-w-[800px] min-h-[400px] p-2 '>
        <div className='min-h-[300px]'>
        {/* {question.map((quest,idx) =>
        (<Message key={idx} imgProfile={iconUser} message={quest}/>)
        )} */}

        {answer.map((answ, idx) =>
            (<Message key={idx} imgProfile={iconAi} message={answ}/>)
        )}
        

        </div>
    </div>
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
    </>
        
    
  )
}

export default InputChat