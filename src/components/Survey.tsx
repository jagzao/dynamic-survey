import React from 'react'
import type { SurveyStrategy } from '../types/SurveyStrategy'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

interface SurveyProps {
  strategy: SurveyStrategy
}

export default function Survey ({ strategy }: SurveyProps): JSX.Element {
  const surveyData = strategy.loadSurvey()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    // strategy.submitSurvey()
  }

  return (
    <div>
      <h3>Survey</h3>
      <Carousel>
        <div>
          <img src="src/assets/react.svg" alt="Image 1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="src/assets/react.svg" alt="Image 2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="src/assets/react.svg" alt="Image 3" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      <form onSubmit={handleSubmit}>
        {surveyData.questions.map((question) => (
          <div key={question.id}>
            <label htmlFor={question.id}>{question.text}</label>
            <input type="text" id={question.id} name={question.id} />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
