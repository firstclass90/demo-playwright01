import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {
    // 🌐 env
    baseURL: process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com',

    // 📸 FULL evidence mode
    screenshot: 'on',
    video: 'on',
    launchOptions: {
      slowMo: 1000, // Slow down by 100ms to see the test execution more clearly
    }
    trace: 'on',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});