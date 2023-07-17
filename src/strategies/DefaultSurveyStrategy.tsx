import type { SurveyStrategy } from '../types/SurveyStrategy'
import type { SurveyData } from '../types/SurveyData'

export default class DefaultSurveyStrategy implements SurveyStrategy {
  private readonly surveyData: SurveyData
  constructor (surveyData: SurveyData) {
    this.surveyData = surveyData
  }

  loadSurvey (): SurveyData {
    return this.surveyData
  }

  displaySurvey (): void {
  }

  submitSurvey (): void {
    // Aquí puedes implementar la lógica para enviar los datos de la encuesta al servidor
    console.log('Submitting survey data:', this.surveyData)
  }
}
