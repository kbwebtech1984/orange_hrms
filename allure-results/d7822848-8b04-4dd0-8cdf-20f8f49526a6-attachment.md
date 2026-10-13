# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim.spec.js >> TC0010 verify pim
- Location: tests\pim.spec.js:11:1

# Error details

```
ReferenceError: pimverify is not defined
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
  8  | const pim = require('../pages/pim.js');
  9  | 
  10 | 
  11 | test('TC0010 verify pim', async ({page}) => {
  12 |         
> 13 |         await pimverify();
     |         ^ ReferenceError: pimverify is not defined
  14 | 
  15 | });
  16 | 
```