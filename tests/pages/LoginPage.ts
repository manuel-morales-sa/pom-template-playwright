import { Locator, Page } from "@playwright/test";


export class LoginPage {

    //----------------------------------------- Find Selectors --------------------------------------------//

    private readonly usernameTextbox: Locator
    private readonly passwordTextbox: Locator
    private readonly loginButton: Locator

    //------------------------------------------- Constructor ---------------------------------------------//

    constructor(page: Page) {
        this.usernameTextbox = page.getByRole('textbox', { name: 'Username' })
        this.passwordTextbox = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('button', { name: 'Login' })
    }

    //------------------------------------------- Action Methods ---------------------------------------------//

    async fillUsername( username: string ){
        await this.usernameTextbox.fill(username)
    }

    async fillPassword( password: string ){
        await this.passwordTextbox.fill(password)
    }

    async clickLoginButton (){
        await this.loginButton.click()
    }

}