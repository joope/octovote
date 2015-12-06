var OctoVote = angular.module('OctoVote', ['firebase', 'ngRoute']);

OctoVote.config(function($routeProvider){
  $routeProvider.when('/login', {
    controller: 'UserController',
    templateUrl: 'app/views/login.html',
    resolve: {
      currentAuth: function(AuthenticationService) {
        return AuthenticationService.checkLoggedIn();
      }
    }
  })
  .when('/', {
    controller: 'MovieController',
    templateUrl: 'app/views/lista.html',
    resolve: {
      currentAuth: function(AuthenticationService) {
        return AuthenticationService.checkLoggedIn();
      }
    }
  })
  .when('/lisaa', {
    controller: 'MovieController',
    templateUrl: 'app/views/lisaa.html',
    resolve: {
      currentAuth: function(AuthenticationService) {
        return AuthenticationService.checkLoggedIn();
      }
    }
  })
});

OctoVote.run(function(AuthenticationService, $location, FirebaseService, $rootScope){
  $rootScope.logOut = function(){
    AuthenticationService.logUserOut();
    $location.path('/');
  };
  $rootScope.userLoggedIn = AuthenticationService.getUserLoggedIn();
});