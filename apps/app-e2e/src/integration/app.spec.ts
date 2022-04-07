var continentCode = ['EU','AF','SA','NA','AS','OC','AN'];

for(let i = 0; i < continentCode.length; i++){
  describe(continentCode[i], () => {
    beforeEach(() => cy.visit('/'+continentCode[i]));

    it('Na stronie powinno być imie i nazwisko autora', () => {
      // Custom command example, see `../support/commands.ts` file
      cy.login('my-email@something.com', 'myPassword');

      // Function helper example, see `../support/app.po.ts` file
      cy.contains('Jakub Fałowski');
    });
  });

    // it(`Czy w ${continentCode[i]} znajduje się Warszawa`, () => {
    //   cy.contains('Warsaw');
    // });

  
}
