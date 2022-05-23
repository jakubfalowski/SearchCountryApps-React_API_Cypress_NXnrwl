describe('app2', () => {
  beforeEach(() => cy.visit('/', { failOnStatusCode: false }));

  it('Chart visible ', () => {
    const input = ['rzeszow', 'lublin', 'kielce']
    cy.get('.input0').type(input[0]);
    cy.get('.input1').type(input[1]);
    cy.get('.input2').type(input[2]);
    cy.get('.submitInput').click();
    cy.get('.submitButtons').click();
    let allPercent;

    for(let i = 0; i < input.length; i++){
      cy.get(`path[name^=${input[i]}]`).click({force: true});
      cy.get('ul.recharts-tooltip-item-list').then(($txt) =>{
        allPercent  += parseInt($txt.text().substring(input[i].length+1,$txt.text().indexOf('%')))
        console.log(allPercent, $txt.text());
      })
    }
    
    if(allPercent !== undefined) {
      expect(allPercent).to.equal(100);
      
    }
    
  });
  
  it('Info about queries visible ', () => {
    cy.get('.input0').type('poland');
    cy.get('.input1').type('france');
    cy.get('.input2').type('italy');
    cy.get('.submitInput').click();
    cy.get('.submitButtons').click();

    cy.get('tspan').then(($amount) => {
      let amountResults = 0;
      let result = 0;
      for(let i = 0; i < $amount.length; i++){
        if(parseInt($amount[i].textContent) > 10) result = 10
        else result = parseInt($amount[i].textContent)
        amountResults += result
      }
      cy.get('.infoContainer .mantine-Paper-root').should(($paper) => {
        expect($paper).to.have.length(amountResults)
      })
    })
    
  });
});
