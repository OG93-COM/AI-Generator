
import ChatSection from './components/ChatSection'
import Header from './components/Header'

function App() {


  return (
    <>
    <Header/>
    <div className='bg-slate-800 min-h-screen min-w-full text-slate-100 p-2'>
      <h1 className="text-3xl font-bold text-center my-5">
        OG93 ! Ask me 
      </h1>
      <ChatSection/>
      
    </div>
    </>
    
  )
}

export default App
