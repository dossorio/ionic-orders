var orderStatus = ['new', 'paid', 'delivered'];

var customers = [
  {id: 1, firstName: 'Daniel', lastName: 'Ossorio', address: 'Plaza del Caño 5 1-7'},
  {id: 2, firstName: 'Alberto', lastName: 'García', address: 'Plaza del Caño 5 1-7'},
  {id: 3, firstName: 'Manuel', lastName: 'Pérez', address: 'Plaza del Caño 5 1-7'},
  {id: 4, firstName: 'Pedro', lastName: 'Picapiedra', address: 'Plaza del Caño 5 1-7'},
  {id: 5, firstName: 'Miguel', lastName: 'Gallardón', address: 'Plaza del Caño 5 1-7'},
  {id: 6, firstName: 'Virginia', lastName: 'Alonso', address: 'Plaza del Caño 5 1-7'}
];

var orders = [
  {id: 1, customer: customers[0], amount: 120, status: orderStatus[0]},
  {id: 2, customer: customers[1], amount: 12, status: orderStatus[1]},
  {id: 3, customer: customers[2], amount: 20, status: orderStatus[1]},
  {id: 4, customer: customers[3], amount: 43, status: orderStatus[2]},
  {id: 5, customer: customers[4], amount: 56, status: orderStatus[2]},
  {id: 6, customer: customers[5], amount: 23, status: orderStatus[0]}
];

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
    $scope.orders = orders;
  })

  .controller('OrderCtrl', function($scope, $stateParams) {
    for (var key in orders) {
      var order = orders[key];
      if (order.id == $stateParams.orderId) {
        $scope.order = order;
        break;
      }
    }
  });
