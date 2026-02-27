import { test, expect } from '@playwright/test'
import { LoginTest } from '../../pages/Saucedemo'
test('saucedemo testing', async ({ page }) => {
    const login = new LoginTest(page)
    await login.gotoLoginTest()
    await login.performAction('standard_user', 'secret_sauce')
});
