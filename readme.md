
####How to integrate Jasmine into the current template

1. In karma.config.js file line #14 should be changed to -- frameworks: ['jasmine'].
2. Install karma-jasmine using npm install karma-jasmine --save-dev
3. In gulp.config.js line#107 remove the existing test libraries and add the path to the installed jasmine.js
        Mine looks like this - 'node_modules/karma-jasmine/lib/jasmine.js', might be different
4. Make sure you start with an empty test suite( removing the chai and sinon dependencies-already written ones);

Or refer to: http://ericnish.io/blog/set-up-jasmine-and-karma-for-angularjs

######HAPPY TESTING




