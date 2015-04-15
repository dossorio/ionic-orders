var moduleServices = angular.module('starter.services', ['starter.config']);

moduleServices.factory('DB', function($q, DB_CONFIG) {
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
        deferred.resolve(result);
      }, function(transaction, err) {
        deferred.reject(err);
      });
    });

    return deferred.promise;
  };

  self.fetchOne = function(result){
    return result.rows.item(0);
  };

  self.fetchAll = function(result) {
    var items = [];

    for (var i = 0; i < result.rows.length; i++) {
      items.push(result.rows.item(i));
    }

    return items;
  };

  return self;
});


(function(){
  var modelName = 'Customer';

  var modelService = function(DB) {
    var self = this;
    console.log(modelName);

    self.create = function(modelObj) {
      var columns = [];
      var values = [];

      for (attr in modelObj) {
        columns.push("'" + attr + "'");
        values.push("'" + modelObj[attr] + "'");
      }

      var query = 'INSERT INTO '+ modelName +' (' + columns.join(',') + ') VALUES (' + values.join(',') + ')';

      return DB.query(query);
    };

    self.getAll = function() {
      return DB.query('SELECT * FROM '+ modelName)
        .then(function(result) {
          return DB.fetchAll(result);
        });
    };

    self.getById = function(id) {
      var query = 'SELECT * FROM '+ modelName +' WHERE id = ' + id;
      return DB.query(query)
        .then(function(result){
          return DB.fetchOne(result);
        });
    };

    return self;
  };

  moduleServices.factory(modelName, modelService);
})();
