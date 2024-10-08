import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import GenAI from './components/GenImg/GenAI'
import TextAI from './components/TextAI'
import FaceAI from './components/FaceAI/FaceAI'
import Recognition from './components/SpeechRecognition/Recognition'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<TextAI />} />
        <Route path='/GenAI-Img' element={<GenAI />} />
        <Route path='/Face-AI' element={<FaceAI />} />
        <Route path='/Recognition' element={<Recognition />} />
      </Routes>
    </>

  )
}

export default App
