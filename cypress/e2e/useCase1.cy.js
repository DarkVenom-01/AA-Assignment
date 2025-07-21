import LoginPage from '../pages/LoginPage'
import LogoutPage from '../pages/LogoutPage'
import MessageBoxPage from '../pages/MessageBoxPage'

describe('Use Case 1 - Bot Creation', () => {
  const loginPage = new LoginPage()
  const messageBox = new MessageBoxPage()
  const logoutPage = new LogoutPage()

  before(function () {
    cy.fixture('testData').then((data) => {
      this.data = data
    })
  })

  it('should create a bot and verify', function () {
    loginPage.visit()
    loginPage.login(this.data.username, this.data.password)
    messageBox.createBot(this.data.botName)
  })
  after(() => {
    logoutPage.visit()
    logoutPage.logout()
    cy.log('Bot created successfully and logged out.')
  });
})
