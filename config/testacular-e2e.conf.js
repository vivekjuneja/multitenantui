basePath = '../';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'test/e2e/**/*.js'
];

autoWatch = false;

//singleRun = true;

proxies = {
  '/': 'http://localhost:8001/'
};

reporters = ['junit'];

browsers = ['PhantomJS'];

junitReporter = {
  outputFile: 'test_out/e2e.xml',
  suite: 'e2e'
};
