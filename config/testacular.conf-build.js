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
singleRun = true;
autoWatch = true;
reporters = ['junit'];
browsers = ['PhantomJS']; 
junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
