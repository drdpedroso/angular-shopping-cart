'use strict';

angular.module('documentsApp')
  .service('OrderService', function () {
    var self = this;
    self.order = 0;

    self.setOrder = function(newOrder) {
      self.order = newOrder;
    }

    self.getOrder = function(){
      return self.order;
    }

    return {
      setOrder : self.setOrder,
      getOrder : self.getOrder
    }
  });
