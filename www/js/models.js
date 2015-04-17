var modelsModule = angular.module('starter.models', ['starter.services']);

var DB_CONFIG = angular.injector(['starter.config']).get('DB_CONFIG');

angular.forEach(DB_CONFIG.tables, function(table){

  var modelName = table.name;

  modelsModule.factory(modelName, function(DB) {
    var self = this;

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
  });

});
