# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard.spec.js >> TC007 Validate Dashboard heading
- Location: tests\dashboard.spec.js:10:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  getByRole('heading', { name: 'Dashboard' })
Expected: visible
Received: undefined
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" getByRole('heading', { name: 'Dashboard' }) with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Dashboard' })
    - waiting for "https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate" navigation to finish...

```

# Test source

```ts
  1  | const {expect} =  require ('@playwright/test');
  2  | const commonmethod = require('../util/commonmethod');
  3  | 
  4  | class dashboard
  5  | {
  6  | 
  7  |     constructor(page)
  8  |     {
  9  |           this.page = page;
  10 | 
  11 |           this.dashboardmenu = page.getByRole('heading', { name: 'Dashboard' })
  12 |           this.pimname= page.locator('//a[@class="oxd-main-menu-item"]//span[text()="PIM"]');
  13 |          
  14 |     }   
  15 | 
  16 |     async validdashboardmenu()
  17 |     {
  18 |         await this.page.waitForTimeout(2000);
> 19 |         await expect(this.dashboardmenu).toBeVisible();
     |                                          ^ Error: expect(locator).toBeVisible() failed
  20 |         
  21 | 
  22 |     }
  23 | 
  24 |     async pimverify()
  25 |     {
  26 |         await expect(this.pimname).toBeVisible();
  27 |         await commonmethod.click(this.pimname);
  28 |        
  29 |     }
  30 | }
  31 | module.exports = dashboard;
```