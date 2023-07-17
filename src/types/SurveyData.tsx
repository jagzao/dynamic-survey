export interface Question {
  id: string
  text: string
}

export interface SurveyData {
  questions: Question[]
}
