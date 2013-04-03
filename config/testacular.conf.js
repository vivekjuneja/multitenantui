basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/lib/angular/angular.js',
  'app/lib/angular/angular-*.js',
  'test/lib/angular/angular-mocks.js',
  'app/js/**/*.js',
  'test/unit/**/controllersSpec2.js'
];

autoWatch = true;

browsers = ['C:\\Users\\invjuneja\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
