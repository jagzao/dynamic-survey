// survey.tsx
// import React from 'react'
// import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import DefaultSurveyStrategy from '../strategies/DefaultSurveyStrategy'
import type { SurveyData } from '../types/SurveyData'
import Survey from '../components/Survey'

export default function SurveyPage (): JSX.Element {
  // Supongamos que tienes los datos de la encuesta en algún lugar y los pasas como prop al componente SurveyPage
  const surveyData: SurveyData = {
    questions: [
      { id: '1', text: 'Pregunta 1' },
      { id: '2', text: 'Pregunta 2' },
      { id: '3', text: 'Pregunta 3' }
    ]
  }
  // Crea una instancia de la estrategia de encuesta por defecto
  const strategy = new DefaultSurveyStrategy(surveyData)

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
  //   event.preventDefault()
  //   strategy.submitSurvey()
  // }

  return (
    <Survey strategy={strategy} />
  )
}
