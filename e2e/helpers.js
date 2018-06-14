const { execSync } = require('child_process');
const { existsSync, mkdirSync } = require('fs');
const awsCli = require('aws-cli-js');

const Options = awsCli.Options;
const Aws = awsCli.Aws;

const options = new Options(
  process.env.AWSKEY,
  process.env.AWSSECRET,
);

const aws = new Aws(options);

const SCREENSHOT_DIR = '/tmp/screenshots';

const SCREENSHOT_OPTIONS = {
  timeout: 1000,
  killSignal: 'SIGKILL',
};

let screenshotIndex = 0;

const takeScreenshot = () => {
  if (!existsSync(SCREENSHOT_DIR)) mkdirSync(SCREENSHOT_DIR);
  const screenshotFilename = `${SCREENSHOT_DIR}/screenshot-${screenshotIndex++}.png`;
  execSync(`xcrun simctl io booted screenshot ${screenshotFilename}`, SCREENSHOT_OPTIONS);
};

const deleteTestUser = () => {
  aws.command('cognito-idp admin-delete-user --user-pool-id eu-west-1_bSPKE8hHN --username test1@verge.co.za')
    .then(() => { console.log('Test User deleted'); })
    .catch(() => { console.log('ERROR on user Delete'); });
};
const confirmTestUser = () => {
  aws.command('cognito-idp admin-confirm-sign-up --user-pool-id eu-west-1_bSPKE8hHN --username test1@verge.co.za')
    .then(() => { console.log('Test User confirmed'); })
    .catch(() => { console.log('ERROR on user confirm'); });
};
module.exports = { takeScreenshot, deleteTestUser, confirmTestUser };