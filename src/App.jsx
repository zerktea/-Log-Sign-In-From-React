import React from 'react'
import Form from './components/Form'
import './index.css'
import Login from './components/Login'
function App() {
  const [swit,setLogSign]=React.useState(false)
  function switchup(){
    setLogSign(!swit)
  }
  console.log(swit)
  return (
    <div className="App">
      {swit? <Form
        switchUp={switchup}
      /> :
      <Login
        switchUp={switchup}
      />
      }
    </div>
  )
}

export default App
