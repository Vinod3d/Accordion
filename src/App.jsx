import { useState } from 'react'
import './App.css'
import Questions from './Questions'
import data from './data'

function App() {
  const [questions, setQuestions] = useState(data)
  const [activeId, setActiveId] = useState(1)

  const toggleQuestion = (id) =>{
    const newActiveId = id === activeId ? null : id;
      setActiveId(newActiveId);
  }

  return (
    <>
      <Questions 
        questions={questions} 
        activeId={activeId} 
        toggleQuestion={toggleQuestion}
      />
    </>
  )
}

export default App
