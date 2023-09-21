describe('login spec', () => {

  beforeEach (() => {
    cy.visit('/')
    cy.get('.ico-login').click()
  });

  it('sucessfully login', () => {
    cy.fixture('user.json').then((user) => {
      const datauser = user[1];
      cy.login(datauser.email, datauser.password)
      cy.verifyContain('.account', datauser.email)
    })
  })


  it('wrong email', () => {
    cy.fixture('user.json').then((user) => {
      const datauser = user[2];
      cy.login(datauser.email, datauser.password)
      cy.verifyContain('.field-validation-error', 'Please enter a valid email address.')
    })
  })

  it('wrong password', () => {
    cy.fixture('user.json').then((user) => {
      const datauser = user[3];
      cy.login(datauser.email, datauser.password)
      cy.verifyContain('.message-error', 'Login was unsuccessful. Please correct the errors and try again.')
    })
  })

  it.only('wrong email and password', () => {    
    cy.fixture('user.json').then((user) => {
      const datauser = user[4];
      cy.login(datauser.email, datauser.password)
      cy.verifyContain('.field-validation-error', 'Please enter a valid email address.')
    })
  })
})