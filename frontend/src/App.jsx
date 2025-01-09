import { useState } from 'react'
import BackgroundTrailAnimation from './components/backgroundTrail'
import Sidebar from './components/sideBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='relative min-h-screen'>
      <Sidebar/>
      <BackgroundTrailAnimation/>
      <div className="ml-[16rem] lg:ml-[25%] p-6 z-10">
        <h1>Hello World</h1>
      </div>
      
    </div>
  )
}

export default App
