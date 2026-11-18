class LoginPage {
  get inputEmail() {
    return cy.get('[data-test="email"]')
  }

  get inputPassword() {
    return cy.get('[data-test="password"]')
  }

  get btnLogin() {
    return cy.get('[data-test="login-submit"]')
  }

  get errorMessage() {
    return cy.get('[data-test="login-error"]')
  }

  login(email, password) {
    this.inputEmail.type(email)
    this.inputPassword.type(password)
    this.btnLogin.click()
  }

  open() {
    cy.visit("/auth/login")
  }

  isLoginFormDisplayed() {
    return this.inputEmail.should("be.visible")
  }

  getErrorMessage() {
    return this.errorMessage.invoke("text")
  }
}

export default LoginPage
