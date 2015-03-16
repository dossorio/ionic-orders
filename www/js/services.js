angular.module('starter.services', ['starter.config'])
  .factory('DB', function($q, DB_CONFIG) {
    var self = this;
    self.db = null;

    self.init = function() {

      if(window.cordova){
        db = $cordovaSQLite.openDB(DB_CONFIG.name);
      }else{
        db = window.openDatabase(DB_CONFIG.name, '1.0', DB_CONFIG.description, -1);
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
        transaction.executeSQL(query, bindings, function(transaction, result) {
          deferred.resolve(result);
        }, function(transaction, err) {
          deferred.reject(err);
        });
      });

      return deferred.promise;
    };

    return self;
  });