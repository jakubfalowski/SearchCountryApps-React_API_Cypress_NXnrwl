var continentCode = ['EU', 'AF', 'SA', 'NA', 'AS', 'OC', 'AN'];

for (let i = 0; i < continentCode.length; i++) {
  describe(continentCode[i], () => {
    beforeEach(() => cy.visit('/' + continentCode[i]));

    it('Na stronie powinno być imie i nazwisko autora', () => {
      cy.contains('Jakub Fałowski');
    });
  });
}
