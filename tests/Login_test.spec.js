const {test,expect} = require('@playwright/test');

test('TC01-Login successfully', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button[type="submit"]');
    await expect(page.locator('h6:has-text("Dashboard")')).toBeVisible(ç);
    await page.screenshot({ path: 'login-success.png', fullPage: true });
    await page.screenshot({ path: 'step1-login-page.png' }); 
});

test('TC02-Login with invalid credentials', async ({ page }) => { 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[type="password"]', 'xxxxxxxxxx');
    await page.click('button[type="submit"]');
    //await expect(page.locator('.oxd-alert-content-text')).toHaveText('Invalid credentials'); // Choice1
    //await expect(page.getByRole('alert')).toHaveText('Invalid credentials'); // Choice2
    await expect(page.getByRole('alert')).toContainText('Invalid credentials'); // Choice3
    await page.screenshot({path: 'screenshot/error/login-invalid.png', fullPage: true});
});