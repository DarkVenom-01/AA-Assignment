import LoginPage from '../pages/LoginPage'
import LearningInstancePage from '../pages/LearningInstancePage'
import LogoutPage from '../pages/LogoutPage'

describe('Use Case 2 - Learning Instance with Field', () => {
  const loginPage = new LoginPage()
  const learningPage = new LearningInstancePage()
  const logoutPage = new LogoutPage()

  before(function () {
    cy.fixture('testData').then((data) => {
      this.data = data
    })
  })

  it('should create a learning instance with field', function () {
    loginPage.visit()
    loginPage.login(this.data.username, this.data.password)

    learningPage.goToLearning()
    learningPage.createInstance(this.data.learningInstanceName)
    learningPage.addField(this.data.customField.name)
    learningPage.gotoHome();
    learningPage.verifyField(this.data.customField.name)
  })
  after(() => {
    logoutPage.visit()
    logoutPage.logout()
    cy.log('Bot created successfully and logged out.')
  });
})
