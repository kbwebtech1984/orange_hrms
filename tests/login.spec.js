const {test,expect} = require('../fixtures/basefixture.js');
const app_constant = require('../constant/appconstant.js');
const login = require('../pages/login');
const logindata = require('../testdata/logindata.json');
const jsonreader = require('../util/jsonreader.js');
require('../hooks/hooks.js');


test('TC001 Login User with valid username and password',async({loginpage})=>{

    const logindata = jsonreader.loginm();

    await loginpage.validateLoginText();

    await loginpage.userLogin(
        logindata.validUser.username,
        logindata.validUser.password
    );
   

});

test('TC002 Login User with invalid username and password',async({loginpage})=>{

    const logindata = jsonreader.loginm();

    await loginpage.validateLoginText();

    await loginpage.userLogin(
        logindata.inValidUser.username,
        logindata.inValidUser.password
    );
   

});

test('TC003 Login User with empty username and password',async({loginpage})=>{

    const logindata = jsonreader.loginm();

    await loginpage.validateLoginText();

    await loginpage.userLogin(
        logindata.empty_user_name_pwd.username,
        logindata.empty_user_name_pwd.password
    );
});

test('TC004 Login User with valid username and invalid password',async({loginpage})=>{

    const logindata = jsonreader.loginm();

    await loginpage.validateLoginText();

    await loginpage.userLogin(
        logindata.valid_username_invalid_pwd.username,
        logindata.valid_username_invalid_pwd.password
    );
});

test('TC005 Login User with invalid username and valid password',async({loginpage})=>{

    const logindata = jsonreader.loginm();

    await loginpage.validateLoginText();

    await loginpage.userLogin(
        logindata.invalid_username_valid_pwd.username,
        logindata.invalid_username_valid_pwd.password
    );
});

test('TC006 username not registered',async({loginpage})=>{

    const logindata = jsonreader.loginm();

    await loginpage.validateLoginText();

    await loginpage.userLogin(
        logindata.USernotRegistered.username,
        logindata.USernotRegistered.password
    );
});

test('TC007 sql injection apply for username',async({loginpage})=>{

    const logindata = jsonreader.loginm();

    await loginpage.validateLoginText();

    await loginpage.userLogin(
        logindata.SqlinjectionUsername.username,
        logindata.SqlinjectionUsername.password
    );
});

test('TC008 sql injection apply for password',async({loginpage})=>{

    const logindata = jsonreader.loginm();

    await loginpage.validateLoginText();

    await loginpage.userLogin(
        logindata.SqlinjectionPassword.username,
        logindata.SqlinjectionPassword.password
    );
});