import { range } from '@mantine/hooks';
import {selectDataCountry} from "../support/app.po"
describe('country-app', () => {
  beforeEach(() => cy.visit('/', { failOnStatusCode: false }));

  it('Pagination ', () => {
    selectDataCountry()
    cy.get('.userCountries').then(($userCountries) => {
      cy.get('.numberPage').then(($amountPagButtons) => {
        cy.get('.allCountries').then(($allCountries) => {
          cy.wrap($amountPagButtons.length*parseInt($userCountries.text())).should('be.gte', parseInt($allCountries.text())).should('be.lt', parseInt($allCountries.text())+parseInt($userCountries.text()));
        })
        range(1,$amountPagButtons.length).map((index) => {
          cy.get(`.numberPage:nth-of-type(${index})`).click()
        })
      })
    })
  });

  it('Sorting',() => {
    selectDataCountry()
    cy.get('.header button').click()

    cy.get('th.countryPhone').click()
    cy.get('td.countryPhone').then(($row) => {
      for(let i = 0; i < $row.length-1; i++) {
        cy.wrap(parseInt($row[i].textContent.slice(1))).should('be.lte',parseInt($row[i+1].textContent.slice(1)))
      }
    })
  })

  it('Correctly select amount of rows',() => {
    selectDataCountry()
    cy.get('.header button').click()

    cy.get('th.countryCapital').click()
    cy.get('td.countryCapital').then(($row) => {
      cy.get('.userCountries').then(($userCountries) => {
        expect($row).to.have.length(parseInt($userCountries.text()))
      })
    })
  })
});
