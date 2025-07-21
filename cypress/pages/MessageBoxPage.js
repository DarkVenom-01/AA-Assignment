class MessageBoxPage {
  goToMessageBox() {
    cy.contains('Message Box').click()
  }

  createBot(botName) {
    cy.contains('button', 'Create a bot…', { timeout: 20000 }).should('be.visible').click();
    cy.get('input[name="name"]').type(botName);
    cy.contains('Create & edit').click();

    cy.get('input.editor-palette-search__input[placeholder="Search actions"]', { timeout: 15000 })
      .should('be.visible')
      .type('Message Box');

    cy.wait(1000); 

    for (let i = 0; i < 1; i++) {
        cy.get('button:contains("Message box")').eq(1).click({ force: true });
        cy.wait(300);
    }
    cy.get('div.textinput-cell-input-content--empty[contenteditable="true"][placeholder="Required"]').should('have.length', 1).first().type('Test Message', { force: true });
    cy.contains('span.clipped-text__string', 'Save').should('be.visible').click({ force: true });
    cy.contains('span.clipped-text__string', 'Close', { timeout: 20000 }).should('be.visible').click({ force: true });
  }


}
export default MessageBoxPage
