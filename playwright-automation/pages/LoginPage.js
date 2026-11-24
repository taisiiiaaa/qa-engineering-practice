class LoginPage {
  constructor(page) {
    this.page = page

    this.inputEmail = page.locator("input[data-test='email']")
    this.inputPassword = page.locator("input[data-test='password']")
    this.loginBtn = page.locator("input[data-test='login-submit']")
    this.errorMsg = page.locator("[data-test='login-error']")
  }

  async open() {
    await this.page.goto("/auth/login", { waitUntil: "domcontentloaded" })
  }

  async fillInputs(email, password) {
    await this.inputEmail.fill(email)
    await this.inputPassword.fill(password)
  }
}

export default LoginPage
