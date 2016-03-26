'use strict';

angular.module('documentsApp')
  .controller('SidebarController', function (OrderService) {
    var self = this;

    self.myOrder = OrderService.getOrder();


    console.log(OrderService.getOrder());

  });
