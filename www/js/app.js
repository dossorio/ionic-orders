// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'pascalprecht.translate'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider, $translateProvider) {
    $stateProvider

      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html"
      })

      .state('app.customers', {
        url: "/customers",
        views: {
          'menuContent': {
            templateUrl: "templates/customers.html",
            controller: 'CustomersCtrl'
          }
        }
      })

      .state('app.customer', {
        url: '/customers/:customerId',
        views: {
          menuContent: {
            templateUrl: 'templates/customer.html',
            controller: 'CustomerCtrl'
          }
        }
      })

      .state('app.products', {
        url: "/products",
        views: {
          'menuContent': {
            templateUrl: "templates/products.html",
            controller: 'ProductsCtrl'
          }
        }
      })

      .state('app.product', {
        url: '/products/:productId',
        views: {
          'menuContent': {
            templateUrl: "templates/product.html",
            controller: 'ProductCtrl'
          }
        }
      })

      .state('app.orders', {
        url: "/orders",
        views: {
          'menuContent': {
            templateUrl: "templates/orders.html",
            controller: 'OrdersCtrl'
          }
        }
      })

      .state('app.order', {
        url: "/orders/:orderId",
        views: {
          'menuContent': {
            templateUrl: "templates/order.html",
            controller: 'OrderCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/orders');

    /*!
     * Translations
     */
    $translateProvider.preferredLanguage('es');

    $translateProvider.translations('en', {
      'menu-title': 'Menu',
      'customers': 'customers',
      'customer': 'customer',
      'products': 'products',
      'product': 'product',
      'orders': 'orders',
      'order': 'order',
      'currency-symbol': '$',
      'status': 'status',
      'new': 'new',
      'paid': 'paid',
      'delivered': 'delivered'
    });
    $translateProvider.translations('es', {
      'menu-title': 'Menú',
      'customers': 'clientes',
      'customer': 'cliente',
      'products': 'productos',
      'product': 'producto',
      'orders': 'pedidos',
      'order': 'pedido',
      'currency-symbol': '€',
      'status': 'estado',
      'new': 'nuevo',
      'paid': 'pagado',
      'delivered': 'entregado'
    });
  })

  .filter('capitalize', function() {
    return function(input, all) {
      return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }) : '';
    }
  });
