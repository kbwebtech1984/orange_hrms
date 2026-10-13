# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pim.spec.js >> TC0010 pim add employee
- Location: tests\pim.spec.js:12:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Add Employee')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('Add Employee') with timeout 5000ms
  - waiting for getByText('Add Employee')
  - Test timeout of 30000ms exceeded.

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "Dashboard" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: Ranjith Sharma
      - text: 
  - navigation "Topbar Menu":
    - list:
      - button ""
- text: 
- paragraph: Time at Work
- separator
- text: 
- paragraph: My Actions
- separator
- button
- paragraph: (1) Candidate to Interview
- text: 
- paragraph: Quick Launch
- separator
- text: 
- paragraph: Buzz Latest Posts
- separator
- img "profile picture"
- paragraph: Ranjith Singh Sharma
- paragraph: 2026-13-10 04:49 PM
- separator
- paragraph: Excited for testing!
- img "profile picture"
- paragraph: Ranjith Singh Sharma
- paragraph: 2026-13-10 04:48 PM
- separator
- paragraph: Excited for testing!
- img "profile picture"
- paragraph: Ranjith Singh Sharma
- paragraph: 2026-13-10 04:47 PM
- separator
- paragraph: welcome to our project
- img "profile picture"
- paragraph: Ranjith Singh Sharma
- paragraph: 2026-13-10 04:47 PM
- separator
- paragraph: welcome to our project
- img "profile picture"
- paragraph: Ranjith Singh Sharma
- paragraph: 2026-13-10 04:46 PM
- separator
- paragraph: Excited for testing!
- paragraph: Employees on Leave Today
- text: 
- separator
- text: 
- paragraph: Employee Distribution by Sub Unit
- separator
- list:
  - listitem: Engineering
  - listitem: Human Resources
  - listitem: Administration
  - listitem: Client Services
  - listitem: Unassigned
- text: 
- paragraph: Employee Distribution by Location
- separator
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
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
  18 |          await commonmethod.click(this.addemp);
> 19 |          await expect(this.headingemp).toBeVisible();
     |                                        ^ Error: expect(locator).toBeVisible() failed
  20 |          
  21 |     }}
  22 | 
  23 |     module.exports = pim;
```