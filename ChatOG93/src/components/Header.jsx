import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div  className='w-full h-14 bg-slate-700 flex justify-center items-center text-slate-100 font-bold gap-10'>
      <Link  to="/">
      <div className='cursor-pointer hover:text-slate-300'>Chat AI</div>
      </Link>
      <Link  to="/GenAI-Img">
      <div className='cursor-pointer hover:text-slate-300'>Generative Image</div>
      </Link>
    </div>
    
  )
}

export default Header