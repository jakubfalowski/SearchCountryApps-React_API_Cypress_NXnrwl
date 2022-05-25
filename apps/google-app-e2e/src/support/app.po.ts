export const selectDataGoogle = (input) => {
    cy.get('.input0').type(input[0]);
    cy.get('.input1').type(input[1]);
    cy.get('.input2').type(input[2]);
    cy.get('.submitInput').click();
    cy.get('.submitButtons').click();
} 

