import loginPage, { login } from '../support/pageObject/loginPage';
const user = require('../fixtures/user.json');

describe('login spec', () => {

  beforeEach (() => {
    cy.visit('/')
    cy.get('.ico-login').click()
  });

  it('sucessfully login with POM and fixtures', () => {
    loginPage.inputUsername(user[1].email)
    loginPage.inputPassword(user[1].password)
    loginPage.clickLoginButton()
  })

  it('wrong email', () => {
    cy.fixture('user.json').then((user) => {
      cy.login(user[2].email, user[2].password)
      cy.verifyContain('.field-validation-error', 'Please enter a valid email address.')
    })
  })

  it('wrong password', () => {
    cy.fixture('user.json').then((user) => {
      cy.login(user[3].email, user[3].password)
      cy.verifyContain('.message-error', 'Login was unsuccessful. Please correct the errors and try again.')
    })
  })

  it('wrong email and password', () => {    
    cy.fixture('user.json').then((user) => {
      cy.login(user[4].email, user[4].password)
      cy.verifyContain('.field-validation-error', 'Please enter a valid email address.')
    })
  })
})