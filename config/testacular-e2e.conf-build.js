basePath = '../';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'test/e2e/**/scenarios.js'
];

autoWatch = false;

browsers = ['PhantomJS'];

proxies = {
'/': 'http://10.52.63.74:8080'
};

singleRun = true;
reporters = ['junit'];
junitReporter = {
  outputFile: 'test_out/e2e.xml',
  suite: 'e2e'
};
