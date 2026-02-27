exports.LoginTest = class LoginTest {
    constructor(page) {
        this.page = page
        this.username = page.locator('[data-test="username"]')
        this.password = page.locator('[data-test="password"]')
        this.button = page.locator('[data-test="login-button"]')
        this.menu = page.getByRole('button', { name: 'Open Menu' })
        this.logout = page.locator('[data-test="logout-sidebar-link"]')
    }
    async gotoLoginTest() {
        await this.page.goto('https://www.saucedemo.com/')
    }
    async performAction(username, password) {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.button.click()
        await this.menu.click()
        await this.logout.click()

    }

}