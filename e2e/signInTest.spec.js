const { takeScreenshot } = require('./helpers');

describe('Sign in Flow - Actions', () => {
  afterEach(async () => {
    takeScreenshot();
  });
  
  it('should have landing screen & tap SIGN IN', async () => {
    await device.reloadReactNative(); // start state for app
    await expect(element(by.id('landingPage'))).toBeVisible();
    await element(by.text('SIGN IN')).tap();
  });

  it('should have sign in screen & sign in button', async () => {
    await element(by.id('email-login')).tap();
    await element(by.id('password-login')).typeText('Verge1234');
    await element(by.id('email-login')).typeText('test2@verge.co.za\n');
    await element(by.id('sign_in_button')).tap();
  });

  it('should have welcome page', async () => {
    await waitFor(element(by.id('welcomePage'))).toBeVisible().withTimeout(5000);
    await expect(element(by.id('welcomePage'))).toBeVisible();
  });
});