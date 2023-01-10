describe('landing page', () => {
    beforeEach(() => {
        cy.visit('localhost:3000/')
    })

    it('should show the landing page', () => {
        cy.get('.title')
        .contains('Welcome to Pawfect Match!')
        cy.get('.brief-about')
        .contains('This app was created to help you')
        cy.get('.quiz-link')
        .contains('Take the quiz now!')
    })
    
    it('should show the header', () => {
        cy.get('.header-container').within(() => {
            cy.get('a').eq(0).should('have.descendants', 'img')
            cy.get('a').eq(1).should('contain', 'About')
            cy.get('a').eq(2).should('contain', 'Breeds')
            cy.get('a').eq(3).should('contain', 'Resource')
        })
    })

    it('should show the footer', () => {
        cy.get('.footer-container').within(() => {
            cy.get('a').eq(0).should('contain', 'Repo')
            cy.get('a').eq(1).should('contain', 'Justen Anderson')
            cy.get('a').eq(2).should('contain', 'Tricia Holmes')
            cy.get('a').eq(3).should('contain', 'Colin Ciervo')
            cy.get('a').eq(4).should('contain', 'Dana Truong')
        })
    })

    it('should be able to navigate to the questionnaire page and back', () => {
        cy.get('.quiz-link').click()
        .url('eq', 'http://localhost:3000/quiz')
        cy.get('.search-instructions')
        .contains('Move each slider')
        cy.get('.header__link > img').click()
        .url('eq', 'http://localhost:3000/')
    })
    it('should be able to navigate to the about page and back', () => {
        cy.get('[href="/about"]').click()
        .url('eq', 'http://localhost:3000/about')
        cy.get('.about__text')
        .contains('This will be where we put')
        cy.get('.header__link > img').click()
        .url('eq', 'http://localhost:3000/')
    })
})