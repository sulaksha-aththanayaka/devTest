import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <div className='flex justify-center items-center h-[90vh] bg-blue-400 m-10'>
        <h1 className='bg-red-400 text-4xl p-5 text-white'>Hello Jenkins!</h1>
      </div>
    </div>
      
    </>
  )
}

export default App
