angular.module('starter.config', [])
  .constant('DB_CONFIG', {
    name: 'orders.db',
    description: 'Orders App Database',
    tables: [
      {
        name: 'Customer',
        columns: [
          {name: 'id', type: 'integer primary key'},
          {name: 'name', type: 'text'},
          {name: 'address', type: 'text'},
          {name: 'phone', type: 'text'},
          {name: 'email', type: 'text'}
        ]
      },
      {
        name: 'Product',
        columns: [
          {name: 'id', type: 'integer primary key'},
          {name: 'name', type: 'text'},
          {name: 'price', type: 'text'},
          {name: 'image', type: 'text'}
        ]
      },
      {
        name: 'Order',
        columns: [
          {name: 'id', type: 'integer primary key'},
          {name: 'customer', type: 'text'},
          {name: 'amount', type: 'text'},
          {name: 'status', type: 'text'},
          {name: 'products', type: 'text'}
        ]
      }
    ]
  });
