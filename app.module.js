'use strict';

// Declare app level module which depends on views, and components
angular.module('portfolioapp', [
  'ngRoute',
  'ui.bootstrap'
]).
config(appConfig);


appConfig.$inject = ['$routeProvider'];

function appConfig($routeProvider){
	$routeProvider.
	when('/home', {
		templateUrl: 'partials/home.html',
		controller: 'HomeController'
 	}).
 	when('/profile',{
 		templateUrl: 'partials/profile.html',
 		controller:'ProfileController',
 		controllerAs:'ProfilCtrl'
 	}).
 	when('/stage',{
 		templateUrl: 'partials/stage.html',
 		controller:'StageController'
 	}).
	otherwise({redirectTo: '/home'});
};
