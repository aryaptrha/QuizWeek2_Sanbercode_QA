describe('register spec', () => {

  //random email
  let email = Math.random().toString(36).substring(2, 15) + "@gmail.com";
  //random password
  let password = Math.random().toString(36).substring(2, 15);
  
  beforeEach (() => {
    cy.visit('/')
    cy.get('.ico-register').click()
  });

  it('successfully registered', () => {

    cy.get('[type="radio"]').check('M')
    cy.ketik('#FirstName', Cypress.env('first_name'))
    cy.ketik('#LastName', Cypress.env('last_name'))
    cy.ketik('#Email', email)
    cy.ketik('#Password', password)
    cy.ketik('#ConfirmPassword', password)

    cy.klik('#register-button')

    cy.verifyContain('.result', 'Your registration completed')
  })

  it('email already exists', () => {

      cy.get('[type="radio"]').check('M')
      cy.ketik('#FirstName', Cypress.env('first_name'))
      cy.ketik('#LastName', Cypress.env('last_name'))
      cy.ketik('#Email', 'john.doe@gmail.com')
      cy.ketik('#Password', password)
      cy.ketik('#ConfirmPassword', password)

      cy.klik('#register-button')

      cy.verifyContain('.message-error', 'The specified email already exists')
  })

  it('passwords do not match', () => {

        cy.get('[type="radio"]').check('M')
        cy.ketik('#FirstName', Cypress.env('first_name'))
        cy.ketik('#Email', email)
        cy.ketik('#Password', password)
        cy.ketik('#ConfirmPassword', '123456')

        cy.klik('#register-button')

        cy.verifyContain('.field-validation-error', 'The password and confirmation password do not match.')
    })
})  