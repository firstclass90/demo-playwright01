// นำเข้า Playwright testing module
const { test, expect } = require('@playwright/test');

// สร้าง test case
test('Login to OrangeHRM', async ({ page }) => {

    // เปิดหน้าเว็บเป้าหมาย
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // เลือก input ช่อง username แล้วพิมพ์ 'Admin'
    await page.fill('input[name="username"]', 'Admin');

    // เลือก input ช่อง password แล้วพิมพ์ 'admin123'
    await page.fill('input[name="password"]', 'admin123');

    // คลิกปุ่ม Login
    await page.click('button[type="submit"]');

    // รอให้หน้า Dashboard โหลด และตรวจสอบว่ามี element ของ Dashboard ปรากฏ
    await expect(page.locator('h6')).toHaveText('Dashboard');

     // Capture screenshot หลัง login สำเร็จ
    await page.screenshot({ path: 'login-success.png', fullPage: true });

    await page.screenshot({ path: 'step1-login-page.png' });


});
