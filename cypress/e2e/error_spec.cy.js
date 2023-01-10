describe('template spec', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/quiz')
  })

  it('should give an error message if something went wrong submitting the quiz', () => {
    cy.intercept(
      'GET',
      'https://pawfect-match-api.herokuapp.com/api/v1/dogs/3/3/3/3/3',
      {
        statusCode: 404,
      }
    )
    cy.get('.submit-button').click()
    cy.get('.error-msg').should(
      'contain',
      'Oops! Something went wrong, it was probably our fault!'
    )
    cy.get('.reset-btn').click()
    cy.get('.submit-button').should('be.visible')
  })

  it('should redirect to home if url doesn not exist', () => {
    cy.visit('localhost:3000/cats')
    cy.url().should('eq', 'http://localhost:3000/')
  })
})
