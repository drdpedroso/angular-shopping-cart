'use strict';

/**
 * @ngdoc function
 * @name documentsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the documentsApp
 */
angular.module('documentsApp')
  .controller('MainCtrl', function (OrderService, $scope) {
    var self = this;

    self.submitTo = function(x){
      OrderService.setOrder(x);
    }

    

  });
