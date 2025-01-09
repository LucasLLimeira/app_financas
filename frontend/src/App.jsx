import { useState } from 'react'
import BackgroundTrailAnimation from './components/backgroundTrail'
import Sidebar from './components/sideBar'
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='relative min-h-screen'>
      <Sidebar/>
      <BackgroundTrailAnimation/>
      <div className="ml-[16rem] lg:ml-[25%] p-6 flex justify-center items-center z-10">
        <h1 className='text-3xl font-semibold text-black '>
          Gerenciador de Finanças
        </h1>
      </div>
      
    </div>
  )
}

export default App
