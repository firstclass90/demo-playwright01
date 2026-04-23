const {test,expect} = require('@playwright/test');

test('TC01 @smoke Login successfully', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); //edit locator
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button[type="submit"]');
    //await expect(page.locator('h6:has-text("Dashboard")')).toBeVisible();
        await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible(); // best case to locate element
    await page.screenshot({ path: 'login-success.png', fullPage: true });
    await page.screenshot({ path: 'step1-login-page.png' }); 
});

test('TC02 @smoke Login with invalid credentials', async ({ page }) => { 
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[type="password"]', 'xxxxxxxxxx');
    await page.click('button[type="submit"]');
    //await expect(page.locator('.oxd-alert-content-text')).toHaveText('Invalid credentials'); // Choice1
    //await expect(page.getByRole('alert')).toHaveText('Invalid credentials'); // Choice2
    await expect(page.getByRole('alert')).toContainText('Invalid credentials'); // Choice3
    await page.screenshot({path: 'screenshot/error/login-invalid.png', fullPage: true});
});

test('TC03 Login with wrong username', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.fill('input[name="username"]', 'Admin123');
    await page.fill('input[type="password"]', 'adminadmin123');
    await page.click('button[type="submit"]');
    await expect(page.getByRole('alert')).toContainText('Invalid credentials');
    await page.screenshot({path: 'screenshot/error/login-invalid-username.png', fullPage: true});
});

test('TC04 Login with empty username', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // Leave username empty
    await page.fill('input[type="password"]', 'admin123');
    await page.click('button[type="submit"]');
    
    // Verify the "Required" error message below the username field
    await expect(page.locator('.oxd-input-field-error-message').first()).toHaveText('Required');
    
    await page.screenshot({path: 'screenshot/error/login-empty-username.png', fullPage: true});
});