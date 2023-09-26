import React from 'react'
import SingleQuestion from './SingleQuestion'

const Questions = ({questions, activeId, toggleQuestion }) => {
  return (
    <section className='container'>
      <h1>Qustions</h1>
      {questions.map((question)=>{
       return <SingleQuestion
                key={question._id}
                {...question}
                activeId={activeId} 
                toggleQuestion={toggleQuestion}
              />
      })}
    </section>
  )
}

export default Questions
