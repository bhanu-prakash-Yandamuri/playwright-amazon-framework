import { defineConfig, devices } from '@playwright/test';

// Use environment variable BASE_URL to change base URL (defaults to Amazon India)
const BASE_URL = process.env.BASE_URL ?? 'https://www.amazon.in';

export default defineConfig({
  testDir: 'tests',
  timeout: 30_000,               // max time for each test
  expect: {
    timeout: 5000,               // max time for expect() checks
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,  // fail if `test.only` left in code on CI
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],

  use: {
    baseURL: BASE_URL,
    actionTimeout: 10_000,       // max time for actions like click, fill
    navigationTimeout: 30_000,
    headless: true,              // default headless; override via env or CLI
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',  // record video only when test fails
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',  // Playwright trace for failed tests
    launchOptions: {
      slowMo: 0
    }
  },

  // Configure projects for major browsers
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

    // you can add a headed Chromium project for local debugging
    {
      name: 'chromium-headed',
      use: {
        ...devices['Desktop Chrome'],
        headless: false,
      }
    }
  ],

  // Output folder for test artifacts
  outputDir: 'test-results/',

  // Optionally run a web server before tests (uncomment & configure if required)
  /*
  webServer: {
    command: 'npm run start',
    port: 3000,
    timeout: 120_000,
    reuseExistingServer: !process.env.CI,
  },
  */
});
