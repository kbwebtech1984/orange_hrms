# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim.spec.js >> TC0010 pim add employee
- Location: tests\pim.spec.js:12:1

# Error details

```
ReferenceError: pimpage is not defined
```

# Test source

```ts
  1  | const {test:base} =  require ('@playwright/test');
  2  | const login = require('../pages/login');
  3  | const dashboard = require('../pages/dashboard.js');
  4  | 
  5  | const test = base.extend({
  6  | 
  7  |     loginpage: async ({page},use)=>{
  8  |           
  9  |           const loginp = new login(page);
  10 |           await use(loginp);
  11 |     },
  12 | 
  13 |     dashboardpage: async ({page},use) => {
  14 | 
  15 |         const dspage = new dashboard(page);
  16 | 
  17 |         await use(dspage);
  18 |     },
  19 | 
  20 |     pimpage: async ({page},use) => {
  21 | 
> 22 |         const pim_page = new pimpage(page);
     |                          ^ ReferenceError: pimpage is not defined
  23 | 
  24 |         await use(pim_page);
  25 |     },
  26 |     
  27 | });
  28 | 
  29 | 
  30 | module.exports = { test };
```