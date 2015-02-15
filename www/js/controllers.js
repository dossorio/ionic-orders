var orderStatus = ['new', 'paid', 'delivered'];

var categories = ['Coleteros', 'Llaveros', 'Marcos de fotos'];

var products = [
  {id: 1, name: 'Coletero corazon', price: 10, category: categories[0], img: 'coletero-corazon.jpg'},
  {id: 2, name: 'Marco tortuga ninja', price: 20, category: categories[2], img: 'marco-tortuga-ninja.jpg'},
  {id: 3, name: 'Llavero minion 1', price: 5, category: categories[1], img: 'llavero-minion.jpg'},
  {id: 4, name: 'Coletero Seta', price: 6, category: categories[1], img: 'coletero-seta.jpg'},
  {id: 5, name: 'Coletero minion', price: 9, category: categories[0], img: 'coletero-minion.jpg'}
];

var customers = [
  {id: 1, firstName: 'Daniel', lastName: 'Ossorio', address: 'Plaza del Caño 5 1-7'},
  {id: 2, firstName: 'Alberto', lastName: 'García', address: 'Plaza del Caño 5 1-7'},
  {id: 3, firstName: 'Manuel', lastName: 'Pérez', address: 'Plaza del Caño 5 1-7'},
  {id: 4, firstName: 'Pedro', lastName: 'Picapiedra', address: 'Plaza del Caño 5 1-7'},
  {id: 5, firstName: 'Miguel', lastName: 'Gallardón', address: 'Plaza del Caño 5 1-7'},
  {id: 6, firstName: 'Virginia', lastName: 'Alonso', address: 'Plaza del Caño 5 1-7'}
];

var orders = [
  {id: 1, customer: customers[0], amount: 0, status: orderStatus[0], products: [products[1], products[3]]},
  {id: 2, customer: customers[1], amount: 0, status: orderStatus[1], products: [products[0], products[2]]},
  {id: 3, customer: customers[5], amount: 0, status: orderStatus[1], products: [products[2], products[1]]},
  {id: 4, customer: customers[4], amount: 0, status: orderStatus[2], products: [products[1], products[0]]},
  {id: 5, customer: customers[3], amount: 0, status: orderStatus[2], products: [products[0], products[1]]},
  {id: 6, customer: customers[2], amount: 0, status: orderStatus[0], products: [products[4], products[3]]}
];

(function() {
  for (var key1 in orders) {
    var order = orders[key1];
    for (var key2 in order.products) {
      var product = order.products[key2];
      order.amount = order.amount + product.price;
    }
  }
}());

function getElemFromArray(array, id) {
  for (var key in array) {
    var elem = array[key];
    if (elem.id == id) return elem;
  }
}

angular.module('starter.controllers', [])

  .controller('OrdersCtrl', function($scope) {
    $scope.orders = orders;
  })

  .controller('OrderCtrl', function($scope, $stateParams) {
    $scope.order = getElemFromArray(orders, $stateParams.orderId);
  })

  .controller('CustomersCtrl', function($scope) {
    $scope.customers = customers;
  })

  .controller('CustomerCtrl', function($scope, $stateParams) {
    $scope.customer = getElemFromArray(customers, $stateParams.customerId);
  })

  .controller('ProductsCtrl', function($scope) {
    $scope.products = products;
  })

  .controller('ProductCtrl', function($scope, $stateParams) {
    $scope.product = getElemFromArray(products, $stateParams.productId);
  });
