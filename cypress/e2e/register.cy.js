describe('template spec', () => {
  let url = "https://demowebshop.tricentis.com/";
  //random email
  let email = Math.random().toString(36).substring(2, 15) + "@gmail.com";
  //random password
  let password = Math.random().toString(36).substring(2, 15);
  it('passes', () => {
    cy.visit(url)
    cy.get('.ico-register').click()

    //Fill the form
    cy.get('[type="radio"]').check('M')
    cy.get('#FirstName').type('John')
    cy.get('#LastName').type('Doe')
    cy.get('#Email').type(email)
    cy.get('#Password').type(password)
    cy.get('#ConfirmPassword').type(password)

    //Submit the form
    cy.get('#register-button').click()

    //Assert
    cy.get('.result').should('contain', 'Your registration completed')
  })
})