import { $, browser } from "@wdio/globals"

class RegisterPage {
  get inputFirstName() {
    return $('[data-test="first-name"]')
  }

  get inputLastName() {
    return $('[data-test="last-name"]')
  }

  get inputDateOfBirth() {
    return $('[data-test="dob"]')
  }

  get selectCountry() {
    return $('[data-test="country"]')
  }

  async selectCountryByValue(value) {
    await this.selectCountry.selectByAttribute("value", value)
  }

  get inputPostalCode() {
    return $('[data-test="postal_code"]')
  }

  get inputHouseNumber() {
    return $('[data-test="house_number"]')
  }

  get inputStreet() {
    return $('[data-test="street"]')
  }

  get inputCity() {
    return $('[data-test="city"]')
  }

  get inputState() {
    return $('[data-test="state"]')
  }

  get inputPhone() {
    return $('[data-test="phone"]')
  }

  get inputEmail() {
    return $('[data-test="email"]')
  }

  get inputPassword() {
    return $('[data-test="password"]')
  }

  get btnRegister() {
    return $('[data-test="register-submit"]')
  }

  async open() {
    await browser.url("/auth/register")
  }

  async register(user) {
    await this.inputFirstName.setValue(user.firstName)
    await this.inputLastName.setValue(user.lastName)
    await this.inputDateOfBirth.setValue(user.dateOfBirth)
    await this.selectCountry.selectByAttribute("value", user.country)
    await this.inputPostalCode.setValue(user.postalCode)
    await this.inputHouseNumber.setValue(user.houseNumber)
    await this.inputStreet.setValue(user.street)
    await this.inputCity.setValue(user.city)
    await this.inputState.setValue(user.state)
    await this.inputPhone.setValue(user.phone)
    await this.inputEmail.setValue(user.email)
    await this.inputPassword.setValue(user.password)

    await this.btnRegister.click()
  }
}

export default new RegisterPage()
