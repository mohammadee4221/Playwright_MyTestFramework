import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  // Parallel execution
  workers: process.env.CI ? 2 : 4,

  retries: process.env.CI ? 2 : 0,

  forbidOnly: !!process.env.CI,

  reporter: [
    ['list'],
    ['html'] 
  ],

  use: {
    baseURL: 'https://parabank.parasoft.com/parabank',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});