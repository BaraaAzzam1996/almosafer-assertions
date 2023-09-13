/// <reference types="Cypress" />
import moment from 'moment';

describe('new assertions',()=>{
  beforeEach(() => {
    cy.visit('https://www.almosafer.com/ar')
    cy.get('.cta__saudi').click()
    cy.get('[data-testid="Header__LanguageSwitch"]').click()
   });
    it('check if the departure date is equal to today +1', () => {
      

      const tomorrowDate = moment().add(1, 'day');
      const formattedDate = `${tomorrowDate.format('MMMMD dddd')}`;
      
      
      
    
    cy.get('[data-testid="FlightSearchBox__FromDateButton"]')
      .invoke('text')
      .should('equal', formattedDate);
  });
  it('check if the return date is equal to today+2',()=>{
    const returnDate=moment().add(2,'day');
    const returnFormated=`${returnDate.format('MMMMDdddd')}`;
    cy.get('[data-testid="FlightSearchBox__ToDateButton"]').invoke('text').should('equal',returnFormated)

  })
  it('check if the class is economy by defult',()=>{
    cy.get('.sc-jWxkHr').invoke('text').should('include','Economy')
  })
  });
 

