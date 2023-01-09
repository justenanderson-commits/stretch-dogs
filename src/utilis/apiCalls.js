import { API_ROUTES } from './constants'

export const fetchResults = async (quizInputs) => {
  const {size, familyRating, trainability, groomingNeeded, energyLevel } =
    quizInputs

  const response = await fetch(
    `${API_ROUTES.GET_RESULTS}/${size}/${familyRating}/${trainability}/${groomingNeeded}/${energyLevel}`
  )

  if (!response.ok) {
    const message = await response.json()
    throw new Error(`The following error occured: ${message}`)
  }

  const data = await response.json()

  return data
}
