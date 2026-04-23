//import modules
const { test, expect } = require('@playwright/test');

//initial test case (TC01-Login successfully)
test('TC01-Login successfully', async ({ page }) => {

    //navigate to the target website
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //fill username and password
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');

    //click login button
    await page.click('button[type="submit"]');

    //wait for the dashboard to load and verify that the dashboard element is visible
    await expect(page.locator('h6:has-text("Dashboard")')).toBeVisible();

     // Capture screenshot after successful login
    await page.screenshot({ path: 'login-success.png', fullPage: true });
    await page.screenshot({ path: 'step1-login-page.png' });

}); 