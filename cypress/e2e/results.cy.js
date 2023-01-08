describe('results page', () => {
    beforeEach(() => {
        cy.visit('localhost:3000/')
    })
    it('should be able to navigate to the results page', () => {
        cy.get('.quiz-link').click()
        cy.get('.submit-button').click()
        cy.get('h2')
        .contains('Top Breeds For You')
    })
    it('should show a message when there are no results matching your quiz answers', () => {
        cy.get('.quiz-link').click()
        cy.get('.submit-button').click()
        cy.intercept({method: 'GET',
        url: 'http://localhost:3001/api/v1/dogs/3/3/3/3/3'},
        { fixture: 'dogs' })
        cy.get('.results-card-container > p')
        .contains('Hmm, maybe you')
    })
})