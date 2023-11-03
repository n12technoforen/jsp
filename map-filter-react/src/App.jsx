import { useState } from 'react'

function App() {

  const [number,setNumber] = useState(0);


  const increaseAsync =  ()=> {
    setTimeout(()=> {
      setNumber(number+1)
    },3000)
  }

  return (
    <>
      <div>
          
          <button onClick={increaseAsync}>IncreaseAsyn</button>
      </div>

        {number}
    </>
  )
}

export default App
