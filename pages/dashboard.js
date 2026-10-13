const {expect} =  require ('@playwright/test');
const commonmethod = require('../util/commonmethod');

class dashboard
{

    constructor(page)
    {
          this.page = page;

          this.dashboardmenu = page.getByRole('heading', { name: 'Dashboard' })
          this.pimname= page.locator('//a[@class="oxd-main-menu-item"]//span[text()="PIM"]');
         
    }   

    async validdashboardmenu()
    {
        await this.page.waitForTimeout(2000);
        await expect(this.dashboardmenu).toBeVisible();
        

    }

    async pimverify()
    {
        await expect(this.pimname).toBeVisible();
        await commonmethod.click(this.pimname);
        await this.page.waitForTimeout(2000);
       
    }
}
module.exports = dashboard;