describe('question page', () => {
    beforeEach(() => {
        cy.visit('localhost:3000/quiz')
    })
    it('should contain 5 sliders', () => {
        cy.visit('localhost:3000/quiz')
        cy.get('#size')
        cy.get('#familyRating')
        cy.get('#trainability')
        cy.get('#groomingNeeded')
        cy.get('#energyLevel')
    })
    it('should be able to change slider values', () => {
        cy.get('#familyRating')
        .should('have.attr', 'value', 3)
        
        // cy.get('#size')
        // .should('have.attr', 'value', 4)
    })
    it('should be able to change all slider values', () => {
        
    })
    it('sbhould be able to submit', () => {
        cy.get('button').click()
        cy.intercept({method: 'GET',
        url: 'http://localhost:3001/api/v1/dogs/3/4/5/5/5'},
        { fixture: 'dogs' })
    })
})