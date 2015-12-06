OctoVote.controller('UserController', function($scope, $location, currentAuth, FirebaseService, AuthenticationService){
  $scope.logIn = function(){
    AuthenticationService.logUserIn($scope.email, $scope.password)
    .then(function(){
      $scope.userLoggedIn = true;
      $location.path('/');
    })
    .catch(function(){
      $scope.message = 'Väärä sähköpostiosoite tai salasana!'
    });
  }

  $scope.register = function(){
    AuthenticationService.createUser($scope.newEmail, $scope.newPassword)
    .then(function(){
      AuthenticationService.logUserIn($scope.newEmail, $scope.newPassword)
      .then(function(){
        $location.path('/lisaa');
      });
    })
    .catch(function(){
      $scope.message = 'Tapahtui virhe! Yritä uudestaan';
    });
  }
});