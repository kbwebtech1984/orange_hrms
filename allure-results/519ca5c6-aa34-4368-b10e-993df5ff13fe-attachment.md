# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim.spec.js >> TC0010 pim add employee
- Location: tests\pim.spec.js:12:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Add Employee')
Expected: visible
Error: strict mode violation: getByText('Add Employee') resolved to 2 elements:
    1) <a href="#" class="oxd-topbar-body-nav-tab-item">Add Employee</a> aka getByRole('link', { name: 'Add Employee' })
    2) <h6 data-v-7b563373="" data-v-304890b0="" class="oxd-text oxd-text--h6 orangehrm-main-title">Add Employee</h6> aka getByRole('heading', { name: 'Add Employee' })

Call log:
  - Expect "toBeVisible" getByText('Add Employee') with timeout 5000ms
  - waiting for getByText('Add Employee')

```

# Test source

```ts
  1  | const {expect} =  require ('@playwright/test');
  2  | //const logindata = require('../testdata/logindata.json');
  3  | const commonmethod = require('../util/commonmethod');
  4  | 
  5  | class pim
  6  | {
  7  | 
  8  |     constructor(page)
  9  |     {
  10 |         this.page = page;
  11 |         this.addemp= page.getByRole('link',{name:'Add Employee'});
  12 |         this.headingemp=page.getByText('Add Employee');
  13 | 
  14 | 
  15 |     }
  16 |     async clickonaddemp()
  17 |     {
  18 |       
  19 |         await commonmethod.click(this.addemp);
  20 |         
> 21 |         await expect(this.headingemp).toBeVisible();
     |                                       ^ Error: expect(locator).toBeVisible() failed
  22 |        await this.page.waitForTimeout(2000);
  23 |        
  24 |          
  25 |     }}
  26 | 
  27 |     module.exports = pim;
```