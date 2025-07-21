class LogoutPage {
  visit() {
    cy.get('button[title="divyanshu2003shukla@gmail.com"]', { timeout: 10000 })
    .should('be.visible')
    .click();
  }

  logout() {
    cy.contains('button', 'Log out', { timeout: 10000 })
    .should('be.visible')
    .click();
  }
}
export default LogoutPage;