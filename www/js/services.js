angular.module('starter.services', ['starter.config'])
  .factory('DB', function($q, DB_CONFIG) {
    var self = this;
    self.db = null;

    self.init = function() {

      if (window.cordova) {
        self.db = $cordovaSQLite.openDB(DB_CONFIG.name);
      } else {
        self.db = window.openDatabase(DB_CONFIG.name, '1.0', DB_CONFIG.description, -1);
      }

      angular.forEach(DB_CONFIG.tables, function(table) {
        var columns = [];

        angular.forEach(table.columns, function(column) {
          columns.push(column.name + ' ' + column.type);
        });

        var query = 'CREATE TABLE IF NOT EXISTS ' + table.name + ' (' + columns.join(',') + ')';

        self.query(query);
        console.log('Table ' + table.name + ' initialized');
      });
    };

    self.query = function(query, bindings) {
      bindings = typeof bindings !== 'undefined' ? bindings : [];
      var deferred = $q.defer();

      self.db.transaction(function(transaction) {
        transaction.executeSql(query, bindings, function(transaction, result) {
          console.log(query);
          console.log(result);
          deferred.resolve(result);
        }, function(transaction, err) {
          deferred.reject(err);
        });
      });

      return deferred.promise;
    };

    self.fetchAll = function(result) {
      var items = [];

      for (var i = 0; i < result.rows.length; i++) {
        items.push(result.rows.item(i));
      }

      return items;
    };

    return self;
  })

  .factory('Customer', function(DB) {
    var self = this;

    self.create = function(customer) {
      var columns = [];
      var values = [];

      console.log(customer);
      for (attr in customer) {
        columns.push("'" + attr + "'");
        values.push("'" + customer[attr] + "'");
      }

      var query = 'INSERT INTO Customer (' + columns.join(',') + ') VALUES (' + values.join(',') + ')';

      return DB.query(query);
    };

    self.getAll = function() {
      return DB.query('SELECT * FROM Customer')
        .then(function(result) {
          return DB.fetchAll(result);
        });
    };

    self.getById = function(id) {

    };

    return self;
  });