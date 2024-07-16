import Response from "./components/Response"

function App() {

  return (
      <div className='bg-slate-900 m-3'>
        <h1>Chat OG93</h1>
       <input
       type='text'
       placeholder='Ask Me anything...'/>
       <Response/>
      </div>
  )
}

export default App
