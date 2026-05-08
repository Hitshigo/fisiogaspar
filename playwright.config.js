export default {
  testDir: './tests',
  timeout: 15000,
  retries: 0,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:3000',
    channel: 'chrome',
    headless: true,
  },
  webServer: {
    command: 'node serve.mjs',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
    timeout: 10000,
  },
  projects: [
    {
      name: 'desktop',
      use: { viewport: { width: 1440, height: 900 } },
    },
    {
      name: 'mobile',
      use: { viewport: { width: 390, height: 844 }, userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1' },
    },
  ],
};
