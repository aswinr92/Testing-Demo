/**
 * Created by ASWIN on 18-02-2015.
 */
'use strict';

// describe is a global jasmine function.
// It is the start of the test suite.
// Typically each component should have its own describe block.
describe('What we are testing', function () {

    // Global namespace where the variables used in more than one
    // test case or those used in beforeEach block are defined.
    var it, variables;

    // This block of code is executed before each individual test is executed.
    // The module definition and the dependency injection typically goes into this.
    // Can have multiple beforeEachs.
    beforeEach(function () {
        // Load the app's main module
        module('load the module of which it is a part of');

        // Inject the necessary components
        inject(function (_SUT_, _theDependencies_) {   // injecting the actual function.
            it = _SUT_;
            variables = _theDependencies_;
        });
    });

    var mock;
    beforeEach(function () {
        mock = {dummy1: function(){},
                dummy2: 'Aswin',
                dummy3: jasmine.createSpy()
        };

        module(function ($provide) {
            $provide.value('mockedObject', mock);
        });

        inject(function ($injector) {
            it  = $injector.get('_SUT_');
            variables = $injector.get('mockedObject');
        });
    });

    var $scope;
    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller('DemoController', {$scope: $scope});
    }));

    // Now the actual tests.
    // Each test is described using an it block.
    it('should be defined', function () {
        expect(it).toBeDefined();
    });

    it('should do something', function () {
        //Arrange
            // Set up the environment for running the tests.
            // Assign local variables.
            // Set up spies.
            // Set up dummy responses.
        var locVar = {key: 'value'};
        spyOn(someObject, 'associatedMethod');
        $http.whenGet('someUrl').repond(200, {dummy: 'data'});

        //Act
            // Call the function.
        demoController.callSomeMethod();
        var result = demoService.getNames();

        //Assert
            // The Actual test/expect statements.
            // Expect some result using matchers.
        expect(result).toBe('Aswin');
        expect(someObject.associatedMethod).toHaveBeenCalled();
    });

    it('should do this as well', function () {

    });

});





