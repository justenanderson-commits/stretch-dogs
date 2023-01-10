describe('Results user flow', () => {
  beforeEach(() => {
    cy.intercept(
      'https://pawfect-match-api.herokuapp.com/api/v1/dogs/3/3/3/3/3',
      {
        method: 'GET',
        fixture: '../fixtures/single_dog.json',
      }
    )
    cy.visit('localhost:3000/quiz')
  })

  it('Should be able to see results', () => {
    cy.get('.submit-button').click()
    cy.get('.results-card-container').should('have.length', 1)
  })

  it('should have a modal that shows more details of the result', () => {
    cy.get('.submit-button').click()
    cy.get('.name-text').contains('Boykin Spaniel')
    cy.get('.dog-button').click()
    cy.get('.modal').should('contain', 'A medium-sized')
    cy.get('.close-modal-button').click()
    cy.get('.results-container').should('contain', 'Top Breeds For You')
  })

  it('should be able to go back to home page', () => {
    cy.get('.submit-button').click()
    cy.get('.home-button').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})
