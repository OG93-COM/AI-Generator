import InputChat from "./InputChat"


const TextAI = () => {
  return (
    <div className='bg-slate-800 min-h-screen min-w-full text-slate-100 p-2'>
      <h1 className="text-2xl text-slate-300 font-bold text-center my-5">
        Chat AI System! Ask Me Here 👇
      </h1>
      <InputChat/>
      
    </div>
  )
}

export default TextAI