describe('Dashboard', function () {
    'use strict';

    var DashboardController,
        dashboardControllerScope,
        $q,
        $http,
        accountService,
        logger;

    beforeEach(module('app.dashboard'));

    beforeEach(function () {
        accountService = {
            getAccount: jasmine.createSpy()
        };

        module(function ($provide) {
            $provide.value('accountService', accountService);
        });
    });

    beforeEach(function () {
        inject(function (_$rootScope_, $controller, _$q_, _$httpBackend_, _accountService_) {
            $http = _$httpBackend_;
            $q = _$q_;
            accountService = _accountService_;
            dashboardControllerScope = _$rootScope_.$new();
            logger = {
                info: jasmine.createSpy()
            };
            var deferred = $q.defer();
            deferred.resolve({
                data: 'aswin'
            });
            accountService.getAccount.andReturn(deferred.promise);
            // $http.expectGET('http://localhost:3000/api/account').respond(200, {});
            DashboardController = $controller('DashboardController', {
                $scope: dashboardControllerScope,
                accountService: accountService,
                logger: logger
            });
            dashboardControllerScope.$digest();
        });
    });

    it('should be defined', function () {
        expect(dashboardControllerScope).toBeDefined();
    });

    it('should do its funcionality', function () {
        expect(accountService.getAccount).toHaveBeenCalled();
        expect(logger.info).toHaveBeenCalledWith('Activated Dashboard View');
        expect(DashboardController.account).toEqual({ data : 'aswin' });
    });
});