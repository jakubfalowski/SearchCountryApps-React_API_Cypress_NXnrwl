describe('app2', () => {
  beforeEach(() => cy.visit('/', { failOnStatusCode: false }));

  it('Działanie wyszukiwania ', () => {
    cy.get('input[type="text"]').type('poland');

    cy.get('button').click();

    cy.contains('Liczba wyszukań').should('be.visible');
  });
});
