class LoginPage {
  
    loginBtn = '.login-button'

    inputUsername(email) {
        cy.get('#Email').type(email)
    }
  
    inputPassword(password) {
        cy.get('#Password').type(password)
    }
  
    clickLoginButton() {
        cy.get(this.loginBtn).click()
    }}
  
  export default new LoginPage()