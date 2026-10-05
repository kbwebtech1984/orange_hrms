const {expect} =  require ('@playwright/test');

class dashboard
{

    constructor(page)
    {
          this.page = page;

          this.dashboardmenu = page.getByRole('heading', { name: 'Dashboard' })
          
    }   

    async validdashboardmenu()
    {
        await this.page.waitForTimeout(2000);
        await expect(this.dashboardmenu).toBeVisible();

    }
}
module.exports = dashboard;