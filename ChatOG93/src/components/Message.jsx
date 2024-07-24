import { useSelector } from "react-redux"
import ReactMarkdown from 'react-markdown'

const Message = ({imgProfile, message}) => {
    const messageText = useSelector(state => state.chatAi)
  return (
    <div className='flex items-start gap-2 my-2  '>
        <img src={imgProfile} className='w-12 px-1 mb-2'/>
        <ReactMarkdown className={imgProfile === "/src/assets/User-Profile.png" ? 'bg-blue-600 p-2 rounded-lg' : 'bg-slate-600 p-2 rounded-lg '}>
       {message}
        </ReactMarkdown>
    </div>
  )
}

export default Message