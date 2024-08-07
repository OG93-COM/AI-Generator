import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import GenAI from './components/GenImg/GenAI'
import TextAI from './components/TextAI'



function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<TextAI/>}/>
      <Route path='/GenAI-Img' element={<GenAI/>}/>
    </Routes>
    </>
    
  )
}

export default App
