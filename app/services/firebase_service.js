OctoVote.service('FirebaseService', function($firebaseArray, $firebaseObject){
    var ref = new Firebase('https://luminous-inferno-4114.firebaseio.com/octovote/movies');
    var movies = $firebaseArray(ref);
    var usr = new Firebase('https://luminous-inferno-4114.firebaseio.com/octovote/users');
    
    this.getAllMovies = function(){
        return movies;
    }
    
    this.getUser = function(uid){
        var user = $firebaseObject(usr.child(uid));
        return user;
    }
    
    this.addUser = function(useruid, user){
        usr.child(useruid).set(user);
    }
    
    this.saveUser = function(user){
        user.$save();
    }

    this.addMovie = function(movie){
        movies.$add(movie);
    }

    this.removeAll = function(){
        movies.$remove();
    }
    
    this.removeMovie = function(movie){
        movies.$remove(movie);
    }

    this.save = function(movie){
        movies.$save(movie);
    }
});
