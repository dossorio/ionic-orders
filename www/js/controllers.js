angular.module('starter.controllers', [])

  .controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller('OrdersCtrl', function($scope) {
    $scope.orders = [
      {id: 1, customer: {firstName: 'Daniel', lastName: 'Ossorio'}, amount: 120},
      {id: 2, customer: {firstName: 'Alberto', lastName: 'García'}, amount: 12},
      {id: 3, customer: {firstName: 'Manuel', lastName: 'Pérez'}, amount: 20},
      {id: 4, customer: {firstName: 'Pedro', lastName: 'Picapiedra'}, amount: 43},
      {id: 5, customer: {firstName: 'Miguel', lastName: 'Gallardón'}, amount: 56},
      {id: 6, customer: {firstName: 'Virginia', lastName: 'Alonso'}, amount: 23}
    ];
  })

  .controller('PlaylistCtrl', function($scope, $stateParams) {
  });
