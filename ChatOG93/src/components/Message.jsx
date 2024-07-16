

const Message = ({imgProfile, message}) => {
    console.log(imgProfile)
  return (
    <div className='flex items-center gap-2 my-2'>
        <img src={imgProfile} className='w-14 p-1'/>
        <p className={imgProfile === "/src/assets/User-Profile.png" ? 'bg-blue-600 p-2 rounded-lg' : 'bg-slate-600 p-2 rounded-lg'}>{message}</p>
    </div>
  )
}

export default Message