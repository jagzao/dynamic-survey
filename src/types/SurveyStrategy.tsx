import type { SurveyData } from './SurveyData'

export interface SurveyStrategy {
  loadSurvey: () => SurveyData
  displaySurvey: () => void
}
