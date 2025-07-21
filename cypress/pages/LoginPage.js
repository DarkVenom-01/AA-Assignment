class LoginPage {
  visit() {
    cy.visit('https://community.cloud.automationanywhere.digital/#/home')
  }

  login(username, password) {
    cy.get('input[name="username"]', { timeout: 10000 }).should('be.visible').type(username);   
    cy.get('input[name="password"]').type(password);       
    cy.get('button[name="submitLogin"]').click();  
  }
}
export default LoginPage
