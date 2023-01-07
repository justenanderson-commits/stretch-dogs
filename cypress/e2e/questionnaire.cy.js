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
        cy.get('#size')
        .should('have.attr', 'value', 3)
        .type('{rightArrow}')

        cy.get('#size')
        .should('have.attr', 'value', 4)
    })
})