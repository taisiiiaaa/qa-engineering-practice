class RegisterPage {
  get inputFirstName() {
    return cy.get('[data-test="first-name"]')
  }

  get inputLastName() {
    return cy.get('[data-test="last-name"]')
  }

  get inputDateOfBirth() {
    return cy.get('[data-test="dob"]')
  }

  get selectCountry() {
    return cy.get('[data-test="country"]')
  }

  selectCountryByValue(value) {
    this.selectCountry.select(value)
  }

  get inputPostalCode() {
    return cy.get('[data-test="postal_code"]')
  }

  get inputHouseNumber() {
    return cy.get('[data-test="house_number"]')
  }

  get inputStreet() {
    return cy.get('[data-test="street"]')
  }

  get inputCity() {
    return cy.get('[data-test="city"]')
  }

  get inputState() {
    return cy.get('[data-test="state"]')
  }

  get inputPhone() {
    return cy.get('[data-test="phone"]')
  }

  get inputEmail() {
    return cy.get('[data-test="email"]')
  }

  get inputPassword() {
    return cy.get('[data-test="password"]')
  }

  get btnRegister() {
    return cy.get('[data-test="register-submit"]')
  }

  open() {
    cy.visit("/auth/register")
  }

  register(user) {
    this.inputFirstName.type(user.firstName)
    this.inputLastName.type(user.lastName)
    this.inputDateOfBirth.type(user.dateOfBirth)
    this.selectCountry.select(user.country)
    this.inputPostalCode.type(user.postalCode)
    this.inputHouseNumber.type(user.houseNumber)
    this.inputStreet.type(user.street)
    this.inputCity.type(user.city)
    this.inputState.type(user.state)
    this.inputPhone.type(user.phone)
    this.inputEmail.type(user.email)
    this.inputPassword.type(user.password)

    this.btnRegister.click()
  }
}

export default RegisterPage
