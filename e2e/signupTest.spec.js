const { takeScreenshot, deleteTestUser, confirmTestUser } = require('./helpers');


describe('Sign up Flow - Actions ', () => {
  afterEach(async () => {
    takeScreenshot();
  });

  it('should have landing screen & tap SIGN UP', async () => {
    await device.reloadReactNative(); // start state for app 
    await expect(element(by.id('landingPage'))).toBeVisible();
    await element(by.text('SIGN UP')).tap();
  });

  it('should have sign up screen & able to fill in required details', async () => {
    await deleteTestUser(); // this deletes your test user
    await waitFor(element(by.id('signUpPage'))).toBeVisible().withTimeout(5000);
    await expect(element(by.id('signUpPage'))).toBeVisible();
    await element(by.id('name')).tap(); // to open software keyboard
    await element(by.id('name')).typeText('TestName');
    await element(by.id('surname')).typeText('TestSurname');
    await element(by.id('email')).typeText('test1@verge.co.za');
    await element(by.id('password')).typeText('eAq$jE>wZ-aK(izk7gg!s*s8');
    await element(by.id('surname')).typeText('\n');
    await element(by.text('CONTINUE')).tap();
  });

  it('should have email verification screen and tap on required buttons and proceed to homepage', async () => {
    await element(by.id('openEmail')).tap();
    await confirmTestUser(); // this synthetically confirms your user **Does not trigger post-event lambdas as normal confirmation**
    await waitFor(element(by.id('emailPage'))).toNotExist().withTimeout(2000);
    await element(by.id('checkverifyEmail')).tap();
  });

  it('should have welcome page', async () => {
    await waitFor(element(by.id('welcomePage'))).toBeVisible().withTimeout(5000);
    await expect(element(by.id('welcomePage'))).toBeVisible();
  });

});
