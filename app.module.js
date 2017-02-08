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
 		controller:'EditProfileController',
 		controllerAs:'EditProfilCtrl'
 	}).
 	when('/editProfile',{
 		templateUrl: 'partials/editProfile.html',
 		controller:'EditProfileController',
 		controllerAs:'EditProfilCtrl'
 	}).
 	when('/stage',{
 		templateUrl: 'partials/stage.html',
 		controller:'StageController',
 		controllerAs:'StageCtrl'
 	}).
 	when('/accountsConfig',{
 		templateUrl: 'partials/accountsConfig.html',
 		controller:'AccountConfigController',
 		controllerAs:'AccountConfigCtrl'
 	}).
 	when('/myDocs',{
 		templateUrl: 'partials/myDocs.html',
 		controller:'MyDocsController',
 		controllerAs:'MyDocsConfigCtrl'
 	}).
	otherwise({redirectTo: '/home'});
};
