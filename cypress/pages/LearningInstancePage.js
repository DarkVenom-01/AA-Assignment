import 'cypress-iframe';

class LearningInstancePage {
  goToLearning() {
    cy.contains('button', 'AI', { timeout: 20000 }).should('be.visible').click({ force: true });
    cy.contains('a', 'Document Automation').should('be.visible').click({ force: true });
  }

  createInstance(learningInstanceName) {
    cy.log('Waiting for Create Learning Instance button to be enabled...');
    cy.frameLoaded('iframe.modulepage-frame');

    cy.iframe('iframe.modulepage-frame').find('#create-learning-instance-button button', { timeout: 20000 }).should('be.visible')
      .should(($btn) => {
      expect($btn).to.not.have.class('command-button__button--is_disabled');
    }).click({ force: true });
    cy.log('Clicked Create Learning Instance button');
  }

  addField(fieldName) {
    cy.iframe('iframe.modulepage-frame').find('input[name="name"]').should('be.visible').clear().type(fieldName);
    cy.iframe('iframe.modulepage-frame').find('div[data-name="domainId"] button[data-path="RioSelectInputQuery.toggle-button"]').first().should('be.visible').click({ force: true });
    cy.wait(1000);

  cy.iframe('iframe.modulepage-frame')
    .contains('.rio-select-input-dropdown-option-label-line__text-label-line', 'User-defined')
    .should('be.visible')
    .click({ force: true });

  cy.iframe('iframe.modulepage-frame')
    .contains('button', 'Next')
    .should('be.visible')
    .click();

  cy.iframe('iframe.modulepage-frame')
  .contains('button', 'Add a field')
  .should('be.visible')
  .click({ force: true });

  cy.iframe('iframe.modulepage-frame')
  .find('input[placeholder="Field name"]')
  .should('not.be.disabled')
  .should('be.visible')
  .type('TestField');

  cy.iframe('iframe.modulepage-frame')
  .find('input[placeholder="Field label"]')
  .should('be.visible')
  .type('TestField');

  cy.iframe('iframe.modulepage-frame')
  .find('input[placeholder="Field name"]')
  .click({ force: true });

  cy.iframe('iframe.modulepage-frame')
  .find('button[aria-label="Create"]')
  .scrollIntoView()
  .should('be.visible') 
  .click({ force: true });

  cy.wait(5000);
  }
  gotoHome() {
    cy.get('a[aria-label="Home"]')
    .should('be.visible')
    .click({ force: true });
    
    cy.wait(5000);
  }

  verifyField(fieldName) {
    cy.contains(fieldName).should('exist')
  }
}
export default LearningInstancePage
