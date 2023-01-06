describe('question page', () => {
    beforeEach(() => {
        cy.visit('localhost:3000/quiz')
    })

    it('should contain 5 sliders', () => {
        cy.get('#size')
        cy.get('#family_rating')
        cy.get('#trainability')
        cy.get('#grooming_needed')
        cy.get('#energy_level')
    })
    it('should be able to submit the quiz', () => {
        cy.get('button').click()
        cy.get('h2')
        .contains('Top Breeds For You')
    })
})