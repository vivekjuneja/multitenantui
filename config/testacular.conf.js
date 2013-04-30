basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/lib/angular/angular.js',
  'app/lib/angular/angular-*.js',
  'test/lib/angular/angular-mocks.js',
  'app/js/**/*.js',
  'test/unit/**/controllersSpec.js'
];

autoWatch = true;

browsers = ["C:\\Program Files\\Mozilla Firefox\\firefox.exe"];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
