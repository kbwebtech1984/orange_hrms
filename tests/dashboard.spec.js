const {test,expect} = require('../fixtures/basefixture.js');
const app_constant = require('../constant/appconstant.js');
const login = require('../pages/login');
const logindata = require('../testdata/logindata.json');
const jsonreader = require('../util/jsonreader.js');
require('../hooks/hooks.js');
const dashboard = require('../pages/dashboard.js');


test('Validate Dashboard heading', async ({loginpage,dashboardpage}) => {
        
        const logindata = jsonreader.loginm();
        await loginpage.validateLoginText();
        await loginpage.userLogin(
        logindata.validUser.username,
        logindata.validUser.password);
        
        await dashboardpage.validdashboardmenu();

});
