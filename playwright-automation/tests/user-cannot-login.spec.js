import { test, expect } from "@playwright/test"
import LoginPage from "../pages/LoginPage"

test("should prevent an unregistered user from being logged in", async ({
  page,
}) => {
  const loginPage = new LoginPage(page)

  await loginPage.open()
  await loginPage.fillInputs("smith@gmail.com", "SmithPass123!")
  await loginPage.loginBtn.click()

  await expect(loginPage.errorMsg).toBeVisible()
  await expect(loginPage.errorMsg).toHaveText("Invalid email or password")
})
