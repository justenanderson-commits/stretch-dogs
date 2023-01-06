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
    it('should be able to navigate to the questionnaire page and back', () => {
        cy.get('.quiz-link').click()
        cy.get('.search-instructions')
        .contains('Move each slider')
        cy.get('.header__link > img').click()
        cy.get('.title')
        .contains('WELCOME TO DOG')
    })
    it('should be able to navigate to the about page and back', () => {
        cy.get('[href="/about"]').click()
        cy.get('.about__text')
        .contains('This will be where we put')
        cy.get('.header__link > img').click()
        cy.get('.title')
        .contains('WELCOME TO DOG')
    })
})