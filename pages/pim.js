const {expect} =  require ('@playwright/test');
//const logindata = require('../testdata/logindata.json');
const commonmethod = require('../util/commonmethod');

class pim
{

    constructor(page)
    {
        this.page = page;
        this.addemp= page.getByRole('link',{name:'Add Employee'});
        this.headingemp=page.getByRole("heading", { name: "Add Employee", exact: true });


    }
    async clickonaddemp()
    {
      
        await commonmethod.click(this.addemp);
        
        await expect(this.headingemp).toBeVisible();
       await this.page.waitForTimeout(2000);
       
         
    }}

    module.exports = pim;