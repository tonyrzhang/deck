'use strict';

describe('Controller: gceServerGroupDetailsCtrl', function () {

  //NOTE: This is only testing the controllers dependencies. Please add more tests.

  var controller;
  var scope;

  beforeEach(
    module('deckApp.serverGroup.details.gce.controller')
  );

  beforeEach(
    inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller('gceServerGroupDetailsCtrl', {
        $scope: scope,
        application: {
          serverGroups: [],
          registerAutoRefreshHandler: angular.noop
        },
        serverGroup: {}
      });
    })
  );

  it('should instantiate the controller', function () {
    expect(controller).toBeDefined();
  });
});
