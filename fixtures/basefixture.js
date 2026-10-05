const {test:base} =  require ('@playwright/test');
const login = require('../pages/login');
const dashboard = require('../pages/dashboard.js');

const test = base.extend({

    loginpage: async ({page},use)=>{
          
          const loginp = new login(page);
          await use(loginp);
    },

    dashboardpage: async ({page},use) => {

        const dspage = new dashboard(page);

        await use(dspage);}

    
});

module.exports = { test };