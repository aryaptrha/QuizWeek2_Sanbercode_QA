describe('login spec', () => {

  beforeEach (() => {
    cy.visit('/')
    cy.get('.ico-login').click()
  });

  it('sucessfully login', () => {
    cy.login()
    cy.verifyContain('.account', Cypress.env('login_email'))
  })


  it('wrong email', () => {
          
    cy.get('#Email').type('john.doe@gmail')
    cy.get('#Password').type(Cypress.env('login_password'))
    
    cy.klik('.login-button')
  
    cy.verifyContain('.field-validation-error', 'Please enter a valid email address.')

    })

  it('wrong password', () => {
            
    cy.get('#Email').type(Cypress.env('login_email'))
    cy.get('#Password').type('123456')
    
    cy.klik('.login-button')
    
    cy.verifyContain('.message-error', 'Login was unsuccessful. Please correct the errors and try again.')
    })

  it('wrong email and password', () => {
              
    cy.get('#Email').type('john.doe@gmail')
    cy.get('#Password').type('123456')
      
    cy.klik('.login-button')
      
    cy.verifyContain('.field-validation-error', 'Please enter a valid email address.')
    })
})