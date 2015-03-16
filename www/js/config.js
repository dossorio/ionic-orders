angular.module('starter.config', [])
  .constant('DB_CONFIG', {
    name: 'orders.db',
    tables: [{
      name: 'customer',
      columns: [
        {name: 'id', type: 'integer primary key'},
        {name: 'name', type: 'text'},
        {name: 'address', type: 'text'},
        {name: 'phone', type: 'text'},
        {name: 'email', type: 'text'}
      ]
    }]
  });