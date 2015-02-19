/* jshint -W024, -W030, -W098, -W117 */

describe('AccountService', function () {
    'use strict';

    var accountService,
        $http,
        $location,
        exception;
    beforeEach(module('app.core'));

    beforeEach(function () {
        inject(function (_$httpBackend_, _accountService_, _$location_) {
            accountService = _accountService_;
            $http = _$httpBackend_;
            $location = _$location_;
        });

    });

    it('should be defined', function () {
        expect(accountService).toBeDefined();
    });

    it('should make the HTTP request -this is success call', function () {
        var result;
        $http.expectGET('http://localhost:3000/api/account').respond(200, {asd: 'asd'});
        accountService.getAccount()
            .then(function (data) {
                result = data;
            });
        $http.flush();
        expect(result).toEqual({asd: 'asd'});
    });

    it('should execute the catch block and no response is returned', function () {
        var result;
        spyOn($location, 'url');
        $http.expectGET('http://localhost:3000/api/account').respond(404, {asd: 'asd'});
        accountService.getAccount()
            .then(function (data) {
                result = data;
            });
        $http.flush();
        expect(result).not.toBeDefined();
        expect($location.url).toHaveBeenCalledWith('/');
    });

});