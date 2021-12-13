describe('BreakingBad', () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000');
    });

    it('Should 16 characters in page', () => {
        cy.get('.flex').find('[data-test]').its('length').should('eq', 16);
    });

    it('should navigate detail screen', () => {
        cy.get('[data-test="1"]').click();
        cy.get('[data-test="name"]').should('contain','Walter White');
    });

    it('should navigate detail screen and back to root', () => {
        cy.get('[data-test="1"]').click();
        cy.contains('Back').click();

        cy.location().should((loc) => {
            expect(loc.host).to.eq('localhost:3000');
        })
    });

    it.only('should change language', () => {
        cy.get('select').select('es');
        cy.get('[data-test="title-page"]').should('contain','Personajes');
    });
  });
  