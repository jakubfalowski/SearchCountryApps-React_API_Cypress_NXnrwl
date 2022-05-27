export const selectDataCountry = () => {
    cy.get('select').select('EU')
    cy.get('input[type="number"]').clear().type('8')
    cy.get('.header button').click()
    cy.contains('Obecnie wyszukujesz fraze dla: Europe').should('be.visible');
} 
