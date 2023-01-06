describe('landing page', () => {
    beforeEach(() => {
        cy.visit('localhost:3000/')
    })

    it('should show the landing page', () => {
        cy.get('.title')
        .contains('WELCOME TO DOG')
        cy.get('.brief-about')
        .contains('This app was created to help you')
        cy.get('.quiz-link')
        .contains('Take the quiz now!')
    })
    
    it('should show the header', () => {
        cy.get('.header__link > img')
        cy.get('[href="/about"]')
    })
})