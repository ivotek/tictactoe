//Modulo
var app = angular.module('myTicTacToe', ['ngRoute']);

//Routing
app.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './inizio/inizioTemplate.template.html',
    controller: 'inizioController'
  })
  .when('/gioco', {
    templateUrl: './gioco/giocoTemplate.template.htm'
  })
  .when('/risultato', {
    templateUrl: './risultato/risultatoTemplate.template.htm'
  });
});
