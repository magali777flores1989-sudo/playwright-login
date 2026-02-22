import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests',
  
  use: {
    baseURL: /*process.env.BASE_URL || */'https://demowebshop.tricentis.com/',
    viewport: { width: 1200, height: 800 },
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    ignoreHTTPSErrors: true,
  },
 

 
  projects: [
    {
      name: 'chromium',
      use: {  
        browserName: "chromium",
        launchOptions: {
          slowMo: 700,
        }, 
      },
    },
  ],
   
  reporter: [["html", { open: "never" }], ["list"]],

});
