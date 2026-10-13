# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard.spec.js >> TC007 Validate Dashboard heading
- Location: tests\dashboard.spec.js:10:1

# Error details

```
TypeError: dashboardpage.pimverfiy is not a function
```

# Test source

```ts
  1  | const {test,expect} = require('../fixtures/basefixture.js');
  2  | const app_constant = require('../constant/appconstant.js');
  3  | const login = require('../pages/login');
  4  | const logindata = require('../testdata/logindata.json');
  5  | const jsonreader = require('../util/jsonreader.js');
  6  | require('../hooks/hooks.js');
  7  | const dashboard = require('../pages/dashboard.js');
  8  | 
  9  | 
  10 | test('TC007 Validate Dashboard heading', async ({loginpage,dashboardpage}) => {
  11 |         
  12 |         const logindata = jsonreader.loginm();
  13 |         await loginpage.validateLoginText();
  14 |         await loginpage.userLogin(
  15 |         logindata.validUser.username,
  16 |         logindata.validUser.password);
  17 |         
  18 |         await dashboardpage.validdashboardmenu();
> 19 |         await dashboardpage.pimverfiy();
     |                             ^ TypeError: dashboardpage.pimverfiy is not a function
  20 | 
  21 | });
  22 | 
```