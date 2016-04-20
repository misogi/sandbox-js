

angular.module('app', ['ngNewRouter'])
  .controller('AppController', ['$router', AppController]);

AppController.$routeConfig([
  {path: '/', component: 'home' }
]);

function AppController ($router) {}
