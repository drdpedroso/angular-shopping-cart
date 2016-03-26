angular.module('documentsApp')
.directive('sidebarOrder', function() {
  return {
    'templateUrl': '../views/sidebar.html',
    'controller' : 'SidebarController'
  };
});
