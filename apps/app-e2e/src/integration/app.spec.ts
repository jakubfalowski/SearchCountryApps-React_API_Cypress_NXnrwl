var continentCode = ['EU','AF','SA','NA','AS','OC','AN'];
// var captitalCity = 'Warsaw';

for(let i = 0; i < continentCode.length; i++){
  describe(continentCode[i], () => {
    beforeEach(() => cy.visit('/'+continentCode[i]));

    it('Na stronie powinno być imie i nazwisko autora', () => {
      cy.contains('Jakub Fałowski');
    });

    // it(`${captitalCity} znajduje się w ${continentCode[i]}?`, () => {
    //   cy.contains(captitalCity);
    // });
    
    
  });
}
