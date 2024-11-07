import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


test('loginUserCorrectly', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')

    const loginUserPage = new LoginPage (page)

    await page.waitForTimeout(2000)
    await loginUserPage.fillUsername('standard_user')
    await page.waitForTimeout(2000)
    await loginUserPage.fillPassword('secret_sauce')
    await page.waitForTimeout(2000)
    await loginUserPage.clickLoginButton()

    await expect(page.locator('.app_logo')).toHaveText('Swag Labs')
    //await page.close()

})