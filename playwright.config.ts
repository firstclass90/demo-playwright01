import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    // 📸 Screenshot ทุก test
    screenshot: 'on',

    // 🎥 อัด video ทุก test
    video: 'on',

    // 🔍 trace ทุก test (ละเอียดมาก)
    trace: 'on',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});