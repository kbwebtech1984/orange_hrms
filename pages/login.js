const {expect} =  require ('@playwright/test');
const logindata = require('../testdata/logindata.json');
const commonmethod = require('../util/commonmethod');

class login{

    constructor(page)
    {
          this.page = page;

          this.txtusername = page.getByPlaceholder('Username');
          this.txtpassword = page.getByPlaceholder('Password');
          this.btnsubmit= page.getByRole('button', { name: 'Login' });
          this.txtlogin= page.getByRole('heading', { name: 'Login' });
    }   

    async validateLoginText()
    {
        await expect(this.txtlogin).toBeVisible();
    }

    async userLogin(username,password)
    {
        await commonmethod.inputTextbox(this.txtusername,username);
        await commonmethod.inputTextbox(this.txtpassword,password);
        await commonmethod.click(this.btnsubmit);
    }

}
module.exports = login;