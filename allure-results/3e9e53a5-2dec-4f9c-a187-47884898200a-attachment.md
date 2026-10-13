# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim.spec.js >> TC007 Validate Dashboard heading
- Location: tests\pim.spec.js:12:1

# Error details

```
ReferenceError: clickonaddemp is not defined
```

# Test source

```ts
  1  | const {test,expect} = require('../fixtures/basefixture.js');
  2  | //const app_constant = require('../constant/appconstant.js');
  3  | const login = require('../pages/login');
  4  | //const logindata = require('../testdata/logindata.json');
  5  | const jsonreader = require('../util/jsonreader.js');
  6  | require('../hooks/hooks.js');
  7  | //const dashboard = require('../pages/dashboard.js');
  8  | const pim = require('../pages/pim.js');
  9  | 
  10 | 
  11 | 
  12 | test('TC007 Validate Dashboard heading', async ({loginpage,dashboardpage}) => {
  13 |         
  14 |         const logindata = jsonreader.loginm();
  15 |         await loginpage.validateLoginText();
  16 |         await loginpage.userLogin(
  17 |         logindata.validUser.username,
  18 |         logindata.validUser.password);
  19 |         
  20 |         await dashboardpage.validdashboardmenu();
> 21 |         await clickonaddemp();
     |         ^ ReferenceError: clickonaddemp is not defined
  22 | 
  23 | });
```