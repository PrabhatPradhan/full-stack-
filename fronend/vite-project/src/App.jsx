import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/joks')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[jokes])
  return (
    <>
     <h1>this is jokes </h1>
     <p>jokes : {jokes.length} </p>
     {
      jokes.map((jokes,index)=>(
        <div key={jokes.id}>
          <h2>{jokes.title}</h2>
          <h2>{jokes.content}</h2>

        </div>
      ))
     }
    </>
  )
}

export default App
