import { $, browser } from "@wdio/globals"

class LoginPage {
  get inputEmail() {
    return $('[data-test="email"]')
  }

  get inputPassword() {
    return $('[data-test="password"]')
  }

  get btnLogin() {
    return $('[data-test="login-submit"]')
  }

  get errorMessage() {
    return $('[data-test="login-error"]')
  }

  async login(email, password) {
    await this.inputEmail.setValue(email)
    await this.inputPassword.setValue(password)
    await this.btnLogin.click()
  }

  async open() {
    await browser.url("/auth/login")
  }

  async isLoginFormDisplayed() {
    return await this.inputEmail.isDisplayed()
  }

  async getErrorMessage() {
    return await this.errorMessage.getText()
  }
}

export default new LoginPage()
