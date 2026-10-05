import {test,expect} from '@playwright/test';
const appconstant = require('../constant/appconstant');
const screenshothelper = require('../util/screenshothelper');

test.beforeAll(async()=>
{

    console.log("start to login in orangehrms");

});

test.afterAll(async()=>
{

    console.log("complete all test cases");
    

});

test.beforeEach(async({page})=>
{

    await page.goto(appconstant.base_url);
    
});
test.afterEach(async({page}, testInfo)=>{

       
    if(testInfo.status !== testInfo.expectedStatus)
    {
        await screenshothelper.capture(page, testInfo.title.replace(/\s+/g, "_"));
        console.log(`screen shot captured :${testInfo.title}`);
    }

})