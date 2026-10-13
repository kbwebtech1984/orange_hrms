# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard.spec.js >> TC007 Validate Dashboard heading
- Location: tests\dashboard.spec.js:10:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Test source

```ts
  1  | const {expect} =  require ('@playwright/test');
  2  | 
  3  | class dashboard
  4  | {
  5  | 
  6  |     constructor(page)
  7  |     {
  8  |           this.page = page;
  9  | 
  10 |           this.dashboardmenu = page.getByRole('heading', { name: 'Dashboard' })
  11 |           this.pimname= page.getByText("PIM");
  12 |     }   
  13 | 
  14 |     async validdashboardmenu()
  15 |     {
> 16 |         await this.page.waitForTimeout(2000);
     |                         ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  17 |         await expect(this.dashboardmenu).toBeVisible();
  18 | 
  19 |     }
  20 | 
  21 |     async pimverify()
  22 |     {
  23 |        await expect(this.pimname).toBeVisible();
  24 |         
  25 |     }
  26 | }
  27 | module.exports = dashboard;
```